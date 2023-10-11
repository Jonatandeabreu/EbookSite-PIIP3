const userfake = require("../data/user");
const jwt = require('jsonwebtoken')

//valida token
const validarJWT = (req, res, next) => {
  const token = req.header('x-token');

  try {
    //validar que exista el token
    const { nombreuser } = jwt.verify(token, process.env.clave)

    const user = userfake.usuarios.find(u => u.nombre === nombreuser);
    if (user) {
      req.usuario = user;
      next();
    } else {
      res.status(401).json({
        msg: `no existe usario ${req.body.nombre}`,
      });
    }
  } catch (error) {
    res.status(400).json({
      msg: "error"
    })
  }

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