const express = require('express');

const { getTodos, getByname, getByID } = require('../controllers/autores')
const { validateauth } = require('../middleware/validar_entrada');

const router = express.Router();

router.get('/', getTodos);
router.get('/:id', getByID);
router.post('/', validateauth, getByname);

module.exports = router;