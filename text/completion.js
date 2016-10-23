import { Color, pt, Rectangle } from "lively.graphics"
import { morph, List, show, Text } from "lively.morphic"
import { connect, disconnect, signal } from "lively.bindings"
import { FilterableList } from "lively.morphic/list.js";
import { arr, string, obj } from "lively.lang";


export class Completer {
  compute() { return []; }
}

export class WordCompleter {

  compute(textMorph, prefix) {
    var words = [],
        completions = [],
        lines = textMorph.document.lines,
        row = textMorph.cursorPosition.row,
        basePriority = 1000;

    for (var i = row; i >= 0; i--)
      for (var word of lines[i].split(/[^0-9a-z@_]+/i)) {
        if (!word || words.includes(word) || word === prefix) continue;
        words.push(word);
        completions.push({priority: basePriority-(row-i), completion: word})
      }
    
    for (var i = row+1; i < lines.length; i++)
      for (var word of lines[i].split(/[^0-9a-z_@]+/i)) {
        if (!word || words.includes(word) || word === prefix) continue;
        words.push(word);
        completions.push({priority: basePriority - (i-row), completion: word})
      }

    return completions;
  }

}

export var defaultCompleters = [
  new WordCompleter()
]

// -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-

export class CompletionController {

  constructor(textMorph, completers = []) {
    this.textMorph = textMorph;
    completers = textMorph.pluginCollect("getCompleters", completers);
    this.completers = completers;
  }

  async computeCompletions(prefix) {
    var completions = [];
    for (var c of this.completers)
      try {
        completions = completions.concat(await c.compute(this.textMorph, prefix));
      } catch (e) {}

    var infoCol = completions.reduce((maxCol, ea) => Math.max(ea.completion.length, maxCol), 0) + 1,
        maxCol = infoCol;

    // if multiple options with same completion exist, uniq by the highest priority
    // note: there is a lively.lang bug that breaks groupBy if key === constructor...!
    var groups = new Map();
    completions.forEach(ea => {
      var group = groups.get(ea.completion);
      if (!group) { group = []; groups.set(ea.completion, group); }
      group.push(ea);
    });
    var withHighestPriority = [];
    for (let val of groups.values())
      withHighestPriority.push(arr.last(arr.sortByKey(val, "priority")))

    var items = arr.sortByKey(withHighestPriority, "priority")
      .reverse()
      .map(ea => {
        var info = (ea.info || "");
        maxCol = Math.max(maxCol, infoCol+info.length);
        return {
          isListItem: true,
          string: string.pad(ea.completion, infoCol-ea.completion.length, false) + info,
          value: ea
        };
      });
    return {items, maxCol}
  }

  prefix() {    
    let m = this.textMorph,
        sel = m.selection,
        roughPrefix = sel.isEmpty() ? m.getLine(sel.lead.row).slice(0, sel.lead.column) : sel.text;
    return roughPrefix.match(/[a-z0-9@_]*$/i)[0];
  }

  positionForMenu() {
    var m = this.textMorph,
        cursorBounds = m.charBoundsFromTextPosition(m.cursorPosition).translatedBy(m.scroll.negated()),
        globalCursorBounds = m.getGlobalTransform().transformRectToRect(cursorBounds);
    return globalCursorBounds.topLeft().addXY(m.padding.left()-1, m.padding.top()-1);
  }

  async completionListSpec() {
    var m = this.textMorph,
        {fontSize, fontFamily} = m,
        position = this.positionForMenu(),
        prefix = this.prefix(),
        {items, maxCol} = await this.computeCompletions(prefix),
        charBounds = m.env.fontMetric.sizeFor(fontFamily, fontSize, "M"),
        minWidth = 300,
        maxWidth = m.width,
        width = Math.max(minWidth, Math.min(maxWidth, charBounds.width*maxCol)),
        minHeight = 70, maxHeight = 700,
        fullHeight = charBounds.height*items.length+charBounds.height+10,
        height = Math.max(minHeight, Math.min(maxHeight, fullHeight)),
        bounds = position.extent(pt(width, height));

    // ensure menu is visible
    var world = m.world();
    if (world) {
      var visibleBounds = world.visibleBounds().insetBy(5);
      if (bounds.bottom() > visibleBounds.bottom()) {
        var delta = bounds.bottom() - visibleBounds.bottom();
        if (delta > bounds.height-50) delta = bounds.height-50;
        bounds.height -= delta;
      }
      if (!visibleBounds.containsRect(bounds))
        bounds = bounds.withTopLeft(visibleBounds.translateForInclusion(bounds).topLeft());
    }

    return {
      fontFamily, fontSize,
      position: bounds.topLeft(),
      extent: bounds.extent(),
      items, input: prefix,
      name: "text completion menu",
      borderColor: Color.gray, borderWidth: 1,
      historyId: "lively.morphic-text completion"
    }
  }

  async openCompletionList() {
    var spec = await this.completionListSpec(),
        menu = new FilterableList(spec),
        prefix = spec.input;
    connect(menu, "accepted", this, "insertCompletion", {
      updater: function($upd) {
        var textToInsert, completion = this.sourceObj.selection;
        if (completion) {
          if (completion.prefix) prefix = completion.prefix;
          textToInsert = completion.completion;
        } else {
          textToInsert = this.sourceObj.get("input").textString;
        }
        $upd(textToInsert, prefix);
      }, varMapping: {prefix}});
    connect(menu, "accepted", menu, "remove");
    connect(menu, "canceled", menu, "remove");
    connect(menu, "remove", this.textMorph, "focus");

    var world = this.textMorph.world();
    world.addMorph(menu);

    menu.selectedIndex = 0;
    prefix.length && menu.get("input").gotoDocumentEnd();
    menu.get("input").focus();
  }

  insertCompletion(completion, prefix) {
    var m = this.textMorph, doc = m.document,
        selections = m.selection.isMultiSelection ?
          m.selection.selections : [m.selection];
    m.undoManager.group();
    selections.forEach(sel => {
      sel.collapseToEnd();
      var end = sel.lead,
          start = prefix ?
            doc.indexToPosition(doc.positionToIndex(end) - prefix.length) : end;
      m.replace({start, end}, completion);
    });
    m.undoManager.group();
  }

}


export var completionCommands = [{
  name: "text completion",
  handlesCount: true, // to ignore and not open multiple lists
  multiSelectAction: "single",
  async exec(morph, opts, count) {
    var completer = new CompletionController(morph, defaultCompleters);
    await completer.openCompletionList();
    return true;
  }
}];
