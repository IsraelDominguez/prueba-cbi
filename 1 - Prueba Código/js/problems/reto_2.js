import TicketFactory from "../problems/models/ticketFactory";
import Event from "../problems/models/event";

export default function reto_1(number_of_tickets) {
    var tickets = [];
    var event_id = Event.inicial;

    while (tickets.length < number_of_tickets) {
        console.log( Math.floor(Math.random() * 75 + 1));

        var event = new Event(event_id);

        var ticket_factory = new TicketFactory(event);
        var ticketsForEvents = Math.floor(Math.random() * (9)+2);

        var generate = (tickets.length + ticketsForEvents > number_of_tickets) ? number_of_tickets - tickets.length : ticketsForEvents;

        for (var i = 0; i < generate; i++) {
            var ticket = ticket_factory.create();
            tickets.push(ticket);
        }
    }

    /**
     * Shuffles array in place. ES6 version
     * @param {Array} a items An array containing the items.
     */
    function shuffle(a) {
        for (let i = a.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [a[i], a[j]] = [a[j], a[i]];
        }
        return a;
    }

    //var node_A = shuffle(tickets);



    return {'tickets' : tickets};
}

module.exports = reto_1;
