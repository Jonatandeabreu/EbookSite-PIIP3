const express = require('express');

const {getTodos, getByID, agregar, editar, borrar} = require('../controllers/librosFake')

const router = express.Router();

router.get('/', getTodos);
router.get('/:id', getByID);
router.post('/', agregar);
router.put('/:id', editar);
router.delete('/:id', borrar);

module.exports = router;