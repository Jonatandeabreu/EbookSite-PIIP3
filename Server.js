const express = require('express');

class Server {

    constructor() {
        this.app = express();
        this.port =3000;
        this.cargarMiddlewares();
        this.cargarRutas();
    }

    cargarMiddlewares() {
        this.app.use( express.urlencoded() );
    }

    cargarRutas() {
        this.app.use("/api/libros", require('./routes/libros'));
        this.app.use("/api/auth", require('./routes/auth'));
        this.app.use("/api/authors", require('./routes/authors'));
        this.app.use("/api/reviews", require('./routes/reviews'));
    }

    listen() {
        this.app.listen(this.port, () => {
            console.log(`Server corriendo en el puerto ${this.port}`);
        })        
    }
}

module.exports = Server;