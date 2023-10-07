const { body, validationResult } = require('express-validator');

// Middleware de validación para el formulario de inicio de sesión
const validateLogin = [
  body('usuario').notEmpty().withMessage('El campo de usuario no puede estar vacío'),
  body('pass').notEmpty().withMessage('El campo de contraseña no puede estar vacío'),
  (req, res, next) => {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    next();
  },
];

module.exports = {
  validateLogin,
};