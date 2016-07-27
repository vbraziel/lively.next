/*global System*/

import { events, obj } from 'lively.lang';

// type EventType = string
// type EventTime = number
// type Notification = {type: EventType, time: EventTime, ...};
// type Handler = Notification -> ()
// type Notifications = { [number]: Notification, limit: number }
// type Emitter = {isRecording: boolean, isLogging: boolean, ... }
// type Env = {emitter: Emitter, notifications: Notifications}

let env;

function getEnv(system) { // System? -> Env
  if (system === undefined) {
    if (typeof System === 'undefined') {
      // fallback if not System is available
      if (env !== undefined) {
        return env;
      }
      return env = {emitter: events.makeEmitter({}), notifications: []};
    } else {
      system = System;
    }
  }
  const livelyEnv = system.get("@lively-env");
  let options;
  if (livelyEnv === undefined) {
    options = {};
    system.set("@lively-env", system.newModule({options}));
  } else {
    options = livelyEnv.options;
  }
  if (!options) {
    throw new Error("@lively-env registered read-only");
  }
  if (!options.emitter) {
    Object.assign(options, {
      emitter: system["__lively.notifications_emitter"] ||
              (system["__lively.notifications_emitter"] = events.makeEmitter({})),
      notifications: system["__lively.notifications_notifications"] ||
             (system["__lively.notifications_notifications"] = []),
    });
  }
  const {emitter, notifications} = options;
  return {emitter, notifications};
}

export function subscribe(type, handler, system) {
  // EventType, Handler, System? -> Handler
  getEnv(system).emitter.on(type, handler);
  return handler;
}

let notifications;
export function getNotifications() { // -> Array<Notification>
  if (notifications !== undefined) {
    return notifications;
  }
  return notifications = getEnv()[1];
}

export function unsubscribe(type, handler, system) {
  // EventType, Handler, System? -> Handler
  getEnv(system).emitter.removeListener(type, handler);
  return handler;
}

export function unsubscribeAll(type, system) {
  // EventType, System? -> ()
  getEnv(system).emitter.removeAllListeners(type);
}

function record(notifications, notification) {
  // Array<Notification>, Notification -> ()
  notifications.push(notification);
  if (notifications.limit) {
    notifications.splice(0, notifications.length - notifications.limit);
  }
}

export function startRecording(system) { // System? -> ()
  getEnv(system).emitter.isRecording = true;
}

export function stopRecording(system) { // System? -> ()
  getEnv(system).emitter.isRecording = false;
}

export function clearRecord(system) { // System? -> ()
  const {notifications} = getEnv(system);
  notifications.splice(0, notifications.length);
}

export function getRecord(system) { // System? -> Notifications
  return getEnv(system).notifications;
}

export function clearRecord() {
  const notifications = getNotifications();
  notifications.splice(0, notifications.length);
}
