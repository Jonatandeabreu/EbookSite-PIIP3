const userfake = require('../data/user');
const jwt = require('jsonwebtoken')

//login
const login = async (req, res) => {
    const { nombre, pass } = req.body;
    const token = await generarJWT(nombre)
    const uservalido = userfake.usuarios.find(u => u.nombre === nombre && u.pass === pass);
    if (uservalido) {
        res.json({
            msg: 'inicio exitoso',
            nombre,
            token
        })
    } else {
        res.json({
            msg: 'error'
        })
    }
}

//generar token 
const generarJWT = (nombreuser) =>{
 return new Promise((resolve,reject) => {
   const payload = {nombreuser}
   jwt.sign(payload,process.env.clave,{expiresIn:"4h"},(err,token) =>{
    if(err) reject(err)
    else resolve(token)
   })
 }
 )
} 

module.exports = {
    login,
    generarJWT
}