const express = require('express');

const {getTodos, getByID, agregar, editar, borrar, login} = require('../controllers/librosFake')
const { validateId } = require('../middleware/validar_id');
const { validateLogin } = require('../middleware/validar_entrada_login');
const {validarJWT,esAdmin} = require('../middleware/validar-rol')

const router = express.Router();

//router.get('/token', validarJWT,esAdmin);
router.get('/', getTodos);
router.get('/:id',validateId, getByID);
router.post('/', agregar);
router.put('/:id', editar);
router.delete('/:id', borrar);
//router.post('/login',validateLogin, login);

module.exports = router;