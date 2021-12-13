
class Sockets {

    constructor(io) {
        this.io = io;
        this.socketEvents();
    }

    socketEvents() {
        this.io.on('connection', (socket) => {

            //Escuchar el evento: mensaje-to-server
            socket.on('mensaje-to-server', (msg) => {
                console.log(msg);
                this.io.emit('mensaje-from-server', msg);
            });
        });
    }
}

module.exports = Sockets;