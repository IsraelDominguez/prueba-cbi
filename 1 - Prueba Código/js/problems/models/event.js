const inicial = 11111;

class Event {
    constructor(event_id) {
        this.event_id = event_id;
        this.numero_entrada = 1;
        this.tickets = [];
    }

    static get inicial() {
        return inicial;
    }
}

module.exports = Event;
