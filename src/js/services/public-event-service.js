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
}

export default PublicEventService;
