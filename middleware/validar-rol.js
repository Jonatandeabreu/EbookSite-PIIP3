const userfake = require("../data/user");

const validarJWT = (req, res, next) => {
  const nom = req.body.nombre;
  const user = userfake.usuarios.find(u => u.nombre === nom);
  if (user) {
    req.usuario = user;
    next();
  } else {
    res.status(401).json({
      msg: `no existe usario ${req.body.nombre}`,
    });
  }
};

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
      res.json({
        msg:`${nombre} es ${rol}`
      })
      //next();
    }
  }
};

module.exports = {
    validarJWT,
    esAdmin
  };