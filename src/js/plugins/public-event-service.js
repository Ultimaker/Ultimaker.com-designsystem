import Vue from 'vue';

const EventScope = new Vue(),
    EventLog = [],
    excludedLogEvents = ['size'];

class PublicEventService {
    static emit(event, args) {
        if (!excludedLogEvents.includes(event)) {
            EventLog.push({'at': Date.now(), 'event': event, 'args': args});
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
        return EventLog.filter((e) => e.event === event && e.at > after);
    }

    static install(Vue) {
        Object.defineProperty(Vue.prototype, '$emitPublic', {
            get() {
                return PublicEventService.emit;
            }
        });

        Object.defineProperty(Vue.prototype, '$onPublic', {
            get() {
                return PublicEventService.on;
            }
        });

        Object.defineProperty(Vue.prototype, '$offPublic', {
            get() {
                return PublicEventService.off;
            }
        });
    }
}

export default PublicEventService;
