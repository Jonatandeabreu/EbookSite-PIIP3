const userfake = require('../models/Users');
const jwt = require('jsonwebtoken')

//login
const login = async (req, res) => {
  const { nombre, pass } = req.body;
  const token = await generarJWT(nombre)

  await userfake.find({ nombre: nombre, pass: pass }).then((ok) => {
    if (ok.length > 0) {
      res.json({
        msg: 'inicio exitoso',
        nombre,
        token
      })
    } else {
      res.json({ msg: 'Error, verifique los datos ingresados' })
    }
  });
}

//generar token 
const generarJWT = (nombreuser) => {
  return new Promise((resolve, reject) => {
    const payload = { nombreuser }
    jwt.sign(payload, process.env.clave, { expiresIn: "4h" }, (err, token) => {
      if (err) reject(err)
      else resolve(token)
    })
  }
  )
}

module.exports = {
  login,
  generarJWT
}