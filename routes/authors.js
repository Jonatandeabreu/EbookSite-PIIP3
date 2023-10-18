const express = require('express');

const {getTodos, getByname} = require('../controllers/autoresFake')
const { validateauth } = require('../middleware/validar_entrada');

const router = express.Router();

router.get('/', getTodos);
router.post('/',validateauth,getByname);

module.exports = router;