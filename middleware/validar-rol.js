const users = require("../models/Users");
const jwt = require('jsonwebtoken');

//valida token
const validarJWT = async (req, res, next) => {
  const token = req.header('x-token');
  //validar que exista el token
  const { nombreuser } = jwt.verify(token, process.env.clave)

  await users.find({ nombre: nombreuser }).then((usuario) => {
    if (usuario.length > 0) {
      req.usuario = usuario[0];
      next();
    } else {
      res.status(401).json({
        msg: `no existe usario ${req.body.nombre}`,
      });
    }
  });

};

//valida si es admin
const esAdmin = (req, res, next) => {
  if (!req.usuario) {
    res.status(500).json({
      msg: "No se valido el token antes",
    });
  } else {
    const { nombre, rol } = req.usuario;
    if (rol !== "ADMIN") {
      res.status(401).json({
        msg: `${nombre} no es ADMIN`,
      });
    } else {

      next();

    }
  }
};

//exportan funciones
module.exports = {
  validarJWT,
  esAdmin
};