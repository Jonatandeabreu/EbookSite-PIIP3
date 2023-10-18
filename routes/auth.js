const express = require('express');

const {login} = require('../controllers/login_control')
const { validateLogin } = require('../middleware/validar_entrada');
const {validarJWT,esAdmin} = require('../middleware/validar-rol')

const router = express.Router();

//router.post('/token', validarJWT,esAdmin);
router.post('/login',validateLogin,login);

module.exports = router;