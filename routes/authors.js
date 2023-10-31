const express = require('express');

const { getTodos, getByname, getByID } = require('../controllers/autores')
const { validateauth,validateID } = require('../middleware/validar_entrada');

const router = express.Router();

router.get('/', getTodos);
router.get('/:id', validateID,getByID);
router.post('/', validateauth, getByname);

module.exports = router;