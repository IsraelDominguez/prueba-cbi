import reto_1 from "../problems/reto_1";
import reto_2 from "../problems/reto_2";
import Event from "../problems/models/event";
import Ticket from "../problems/models/ticket";

xdescribe('Test Reto 1', function() {
    var result = reto_1(100);

    xit('test framework setup correct', function () {
        expect(true).toBe(true);
    });

    it('Generate 100 Tickets', () => {
        expect(result.tickets.length).toBe(100);
        result.tickets.map(t => expect(t instanceof Ticket).toBeTruthy());
    });

    it('Generate Events', () => {
        result.events.map(e => expect(e instanceof Event).toBeTruthy());
    });

    it('Generate 2-10 tickets for events', () => {
        console.log(result.events.map(e => e.tickets.length));
        result.events.map(e => expect(e.tickets.length >= 2 && e.tickets.length <= 10).toBeTruthy());
    });
});

describe('Test Reto 2', function() {
    var result = reto_2(100);

    xit('test framework setup correct', function () {
        expect(true).toBe(true);
    });

    it('Generate 1.000.000 Tickets', () => {
        //expect(result.tickets.length).toBe(1000000);



    });


});