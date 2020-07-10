const estados = ['v','u']

class Ticket {

    constructor(id_ticket, id_evento, numero_entrada, estado) {
        this.id_ticket = id_ticket;
        this.id_evento = id_evento;
        this.numero_entrada = numero_entrada;
        this.estado = estado;
    }

    static get estados() {
        return estados;
    }
}

module.exports = Ticket;
