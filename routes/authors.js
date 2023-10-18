const express = require('express');

const {getTodos, getByname} = require('../controllers/autoresFake')

const router = express.Router();

router.get('/', getTodos);
router.post('/',getByname);

module.exports = router;