const express = require('express');

const {getTodos, getByuser, agregar} = require('../controllers/reviewsFake')
const { validaterev,validaterevbyuser } = require('../middleware/validar_entrada');
const {validarJWT} = require('../middleware/validar-rol')
const {validateCali} = require('../middleware/validar_id')
const router = express.Router();

router.get('/', getTodos);
router.post('/',validaterevbyuser,getByuser);
router.post('/add',validaterev,validateCali,validarJWT,agregar);

module.exports = router;