import TicketFactory from "../problems/models/ticketFactory";
import Event from "../problems/models/event";

export default function reto_1(number_of_tickets) {
    var events = [];
    var tickets = [];
    var event_id = Event.inicial;

    while (tickets.length < number_of_tickets) {
        var event = new Event(event_id);

        var ticket_factory = new TicketFactory(event);
        var ticketsForEvents = Math.floor(Math.random() * (9)+2);

        var generate = (tickets.length + ticketsForEvents > number_of_tickets) ? number_of_tickets - tickets.length : ticketsForEvents;

        for (var i = 0; i < generate; i++) {
            var ticket = ticket_factory.create();
            tickets.push(ticket);
            event.tickets.push(ticket);
        }

        events.push(event);
        event_id++;
    }

    return {'events': events, 'tickets' : tickets};
}

module.exports = reto_1;
