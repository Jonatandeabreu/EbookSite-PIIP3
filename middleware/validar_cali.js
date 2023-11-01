//Funcion para validar que la entrada sea un entero valido y no un decimal usando express-validator
const { validationResult, param, check } = require('express-validator');

const validateCali = [
  check('Calificación').isNumeric().isFloat({ min: 0, max: 5 }).withMessage("La calificación debe ser entre 0 y 5"),
  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    next();
  },
];

module.exports = {
  validateCali
};