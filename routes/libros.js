const express = require('express');

const {getTodos, getByID, agregar, editar, borrar} = require('../controllers/librosFake')
const { validateId } = require('../middleware/validar_id');
const {validarJWT,esAdmin} = require('../middleware/validar-rol')

const router = express.Router();

router.get('/', getTodos);
router.get('/:id',validateId, getByID);
router.post('/', validarJWT,esAdmin,agregar);
router.put('/:id', validarJWT,esAdmin,editar);
router.delete('/:id', validarJWT,esAdmin,borrar);

module.exports = router;