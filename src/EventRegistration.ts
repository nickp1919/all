// Утилита для консолидации множественных обработчиков по глобальным событиям window
// и выполнения их только после того как событие завершилось.

class EventRegistration {
  constructor(delay?: number) {
    this.eventList = {};
    this.idTimeout = undefined;
    this.delay = delay || 1000;
  }

  eventList: {
    [key: string]: Map<symbol, Function>;
  };

  idTimeout?: NodeJS.Timeout;

  delay: number;

  execute = (event: Event) => {
    this.idTimeout && clearTimeout(this.idTimeout);

    this.idTimeout = setTimeout(() => {
      this.eventList[event.type].forEach((fn) => Promise.resolve(fn()));
    }, this.delay);
  };

  createCategory = (eventName: string) => {
    this.eventList[eventName] = new Map();
  };

  add = (eventName: string, fn: Function) => {
    const id = Symbol('functionName');

    if (!this.eventList[eventName]) {
      this.createCategory(eventName);
    }

    this.eventList[eventName].set(id, fn);
    this.updateEventListener(eventName);

    return id;
  };

  updateEventListener = (eventName: string) => {
    window.removeEventListener(eventName, this.execute);
    window.addEventListener(eventName, this.execute);
  };

  remove = (eventName: string, id: symbol) => {
    this.eventList[eventName].delete(id);
  };
}

export default EventRegistration;
