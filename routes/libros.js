const express = require('express');

const { getTodos, agregar, editar, borrar, getByIDBook } = require('../controllers/libros')
const { validarJWT, esAdmin } = require('../middleware/validar-rol')
const { validateaddbook,validateID } = require('../middleware/validar_entrada');

const router = express.Router();

router.get('/', getTodos);
router.get('/test', (req, res) => res.json("Test ok"));
router.get('/:id',validateID, getByIDBook);
router.post('/', validarJWT, esAdmin, validateaddbook, agregar);
router.put('/:id', validateID,validarJWT, esAdmin, editar);
router.delete('/:id', validateID,validarJWT, esAdmin, borrar);

module.exports = router;