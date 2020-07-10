var bs58 = require('bs58');
var crypto = require('crypto');

import Ticket from "../models/ticket";

class TicketFactory {
    constructor(evento) {
        this.evento = evento;
    }

    create() {
         return new Ticket(
             bs58.encode(new Buffer.from(crypto.randomBytes(10))),
             bs58.encode(new Buffer.from(this.evento.event_id.toString())),
             this.evento.numero_entrada++,
             Ticket.estados[Math.floor(Math.random()*Ticket.estados.length)]
         );
    }
}

module.exports = TicketFactory;
