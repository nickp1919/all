// Утилита для консолидации множественных обработчиков по глобальным событиям window
// и выполнения их только после того как событие завершилось.
class EventRegistration {
    constructor(delay) {
        this.execute = (event) => {
            this.idTimeout && clearTimeout(this.idTimeout);
            this.idTimeout = setTimeout(() => {
                this.eventList[event.type].forEach((fn) => Promise.resolve(fn()));
            }, this.delay);
        };
        this.createCategory = (eventName) => {
            this.eventList[eventName] = new Map();
        };
        this.add = (eventName, fn) => {
            const id = Symbol('functionName');
            if (!this.eventList[eventName]) {
                this.createCategory(eventName);
            }
            this.eventList[eventName].set(id, fn);
            this.updateEventListener(eventName);
            return id;
        };
        this.updateEventListener = (eventName) => {
            window.removeEventListener(eventName, this.execute);
            window.addEventListener(eventName, this.execute);
        };
        this.remove = (eventName, id) => {
            this.eventList[eventName].delete(id);
        };
        this.eventList = {};
        this.idTimeout = null;
        this.delay = delay || 1000;
    }
}
export default EventRegistration;
