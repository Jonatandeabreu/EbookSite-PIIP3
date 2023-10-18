const express = require('express');

const {getTodos, getByuser, agregar} = require('../controllers/reviewsFake')
const router = express.Router();

router.get('/', getTodos);
router.post('/',getByuser);
router.post('/add',agregar);

module.exports = router;