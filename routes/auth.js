const express = require('express');

const {getTodos, getByID, agregar, editar, borrar, login} = require('../controllers/librosFake')
const { validateId } = require('../middleware/validar_id');
const { validateLogin } = require('../middleware/validar_entrada_login');
const {validarJWT,esAdmin} = require('../middleware/validar-rol')

const router = express.Router();

router.post('/token', validarJWT,esAdmin);
router.post('/login',validateLogin,login);

module.exports = router;