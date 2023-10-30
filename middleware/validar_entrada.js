const { body, validationResult } = require('express-validator');

// Middleware de validación para el formulario de inicio de sesión
const validateLogin = [
  body('nombre').notEmpty().withMessage('El campo de usuario no puede estar vacío'),
  body('pass').notEmpty().withMessage('El campo de contraseña no puede estar vacío'),
  (req, res, next) => {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    next();
  },
];

// Middleware de validación para el formulario de reviews
const validaterev = [
  body('nombre_libro').notEmpty().withMessage('El campo de nombre_libro no puede estar vacío'),
  body('texto_reseña').notEmpty().withMessage('El campo de texto_reseña no puede estar vacío'),
  body('Calificación').notEmpty().withMessage('El campo de Calificación no puede estar vacío'),

  (req, res, next) => {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    next();
  },
];

// Middleware de validación para el formulario de autores
const validateauth = [
  body('nombre').notEmpty().withMessage('El campo de nombre no puede estar vacío'),

  (req, res, next) => {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    next();
  },
];

// Middleware de validación para el formulario de reviews por usuarios
const validaterevbyuser = [
  body('nombre').notEmpty().withMessage('El campo de nombre no puede estar vacío'),

  (req, res, next) => {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    next();
  },
];

// Middleware de validación para el formulario de agregar libro
const validateaddbook = [
  body('nombre').notEmpty().withMessage('El campo de nombre no puede estar vacío'),
  body('id_autor').notEmpty().withMessage('El campo de autor no puede estar vacío'),
  body('editorial').notEmpty().withMessage('El campo de editorial no puede estar vacío'),
  body('descripcion').notEmpty().withMessage('El campo de descripcion no puede estar vacío'),
  body('numero_pag').notEmpty().withMessage('El campo de numero_pag no puede estar vacío'),
  body('img').notEmpty().withMessage('El campo de img no puede estar vacío'),
  body('link_descarga').notEmpty().withMessage('El campo de link_descarga no puede estar vacío'),

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
  validaterev,
  validateauth,
  validaterevbyuser,
  validateaddbook
};