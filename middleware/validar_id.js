//Funcion para validar que la entrada sea un entero valido y no un decimal usando express-validator
const { validationResult, param, check } = require('express-validator');

const validateId = [
  param('id').isInt().withMessage('El ID debe ser un número entero válido'),
  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    next();
  },
];

const validateCali = [
  check('Calificación').isNumeric().isFloat({min:0,max:5}),
  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    next();
  },
];

module.exports = { validateId,
  validateCali };