const express = require('express');

const {getTodos, getByID, agregar, editar, borrar} = require('../controllers/librosFake')
const { validateId } = require('../middleware/validar_id');

const router = express.Router();

router.get('/', getTodos);
router.get('/:id',validateId, getByID);
router.post('/', agregar);
router.put('/:id', editar);
router.delete('/:id', borrar);

module.exports = router;