import Vue from 'vue';

const EventScope = new Vue();
const EventLog = [];
const excludedLogEvents = ['size'];

class PublicEventService {
    static emit(event, args) {
        if (!excludedLogEvents.includes(event)) {
            EventLog.push({ at: Date.now(), event, args });
        }
        EventScope.$emit(event, args);
    }

    static on(event, func) {
        EventScope.$on(event, func);
    }

    static off(event, func) {
        EventScope.$off(event, func);
    }

    static log(event, after = 0) {
        return EventLog.filter(e => e.event === event && e.at > after);
    }

    // eslint-disable-next-line no-shadow
    static install(Vue) {
        Object.defineProperty(Vue.prototype, '$emitPublic', {
            configurable: true,
            get() {
                return PublicEventService.emit;
            },
        });

        Object.defineProperty(Vue.prototype, '$onPublic', {
            configurable: true,
            get() {
                return PublicEventService.on;
            },
        });

        Object.defineProperty(Vue.prototype, '$offPublic', {
            configurable: true,
            get() {
                return PublicEventService.off;
            },
        });
    }
}

export default PublicEventService;
