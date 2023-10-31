const express = require("express");
const mongoose = require("mongoose");

class Server {
  constructor() {
    this.app = express();
    //this.port = 3000;
    this.port = process.env.PORT || 3000;
    this.cargarMiddlewares();
    this.cargarRutas();
    this.conectarABD();
  }

  cargarMiddlewares() {
    this.app.use(express.urlencoded());
  }

  cargarRutas() {
    this.app.use("/api/libros", require("./routes/libros"));
    this.app.use("/api/auth", require("./routes/auth"));
    this.app.use("/api/authors", require("./routes/authors"));
    this.app.use("/api/reviews", require("./routes/reviews"));
  }

  async conectarABD() {
    try {
        await mongoose.connect(process.env.MONGODB_URL);
    console.log("Base de datos conectada")
    } catch (ex) {
        console.error(ex);
        throw new Error("error al conectar a BD");
    }
  }

  listen() {
    this.app.listen(this.port, () => {
      console.log(`Server corriendo en el puerto ${this.port}`);
    });
  }
}

module.exports = Server;
