const express = require('express');

const { getTodos, getByuser, agregar } = require('../controllers/reviews')
const { validaterev, validaterevbyuser } = require('../middleware/validar_entrada');
const { validarJWT } = require('../middleware/validar-rol')
const { validateCali } = require('../middleware/validar_cali')
const router = express.Router();

router.get('/', getTodos);
router.post('/', validaterevbyuser, getByuser);
router.post('/add', validaterev, validateCali, validarJWT, agregar);

module.exports = router;