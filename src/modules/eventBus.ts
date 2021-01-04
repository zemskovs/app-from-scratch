export class EventBus {
  listeners = {};

  on(event, callback) {
    if (!this.listeners[event]) {
      this.listeners[event] = [];
    }
    this.listeners[event].push(callback);
  }

  off(event, callback) {
    if (!this.listeners[event]) {
      throw new Error(`Нет события: ${event}`);
    }
    const idx = this.listeners[event].indexOf(callback);

    if (idx > -1) {
      this.listeners[event].splice(idx, 1);
    }
  }

  emit(event, ...args) {
    if (!this.listeners[event]) {
      throw new Error(`Нет события: ${event}`);
    }
    this.listeners[event].forEach(function (listener) {
      listener.apply(null, args);
    });
  }
}
