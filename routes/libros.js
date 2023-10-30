const express = require('express');

const { getTodos, agregar, editar, borrar, getByIDBook } = require('../controllers/libros')
const { validarJWT, esAdmin } = require('../middleware/validar-rol')
const { validateaddbook } = require('../middleware/validar_entrada');

const router = express.Router();

router.get('/', getTodos);
router.get('/:id', getByIDBook);
router.post('/', validarJWT, esAdmin, validateaddbook, agregar);
router.put('/:id', validarJWT, esAdmin, editar);
router.delete('/:id', validarJWT, esAdmin, borrar);

module.exports = router;