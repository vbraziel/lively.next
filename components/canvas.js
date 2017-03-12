import { pt, Color } from "lively.graphics";
import { Morph } from "lively.morphic";

/*

This module provides a canvas widget to display pixel-based data.

*/

export class Canvas extends Morph {
  static get properties() {
    return {
      extent:       {defaultValue: pt(200,200)},
      fill:         {defaultValue: Color.transparent},

      preserveContents: {defaultValue: true},

      canvasExtent: {
        get() { return this._canvas && pt(this._canvas.width, this._canvas.height); },
        // set(ext) { this.pixelRatio = ... }
      },
      canvasBounds: {
        readOnly: true,
        get() { return this._canvas && this.canvasExtent.extentAsRectangle(); }
       },

      _serializedContents: {
        get() { return this.preserveContents && this.toDataURI(); },
        set(s) { this.withCanvasDo(() => this.fromDataURI(s)); },
      },
     }
  }

  //get canvasBounds() { return this._canvas && this.canvasExtent.extentAsRectangle(); }
  get context() { return this._canvas && this._canvas.getContext("2d"); }
  set _canvas(c) { 
    this.__canvas__ = c;
    if (this.__canvas_init__) {
      this.__canvas_init__(c);
      delete this.__canvas_init__;
    }
  }
  get _canvas() { return this.__canvas__; }

  clear(color) {
    const ctx = this.context;
    if (ctx) {
        const {x, y} = this.canvasExtent;
        ctx.save();
        ctx.setTransform(1, 0, 0, 1, 0, 0);
        if (color) {
          if (color.toCSSString) color = color.toCSSString();
          ctx.fillStyle = color;
          ctx.fillRect(0, 0, x, y);
        } else {
          ctx.clearRect(0, 0, x, y);
        }
        ctx.restore();
    }
  }

  render(renderer) { return renderer.renderCanvas(this); }

  withCanvasDo(func) {
    if (this._canvas) func(this._canvas);
    else this.__canvas_init__ = func;
  }

  toDataURI() { return this._canvas && this._canvas.toDataURL(); }
  
  fromDataURI(uri) {
    const img = new Image();
    img.onload = () => {
        this._canvas.width = img.width;
        this._canvas.height = img.height;
        this.context.drawImage(img, 0, 0);
    }
    img.src = uri;
  }
}
