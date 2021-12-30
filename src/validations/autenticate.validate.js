const { body } = require('express-validator');

const autenticateValidator = [
  body('username', 'Username is required').not().isEmpty(),
  body('password', 'Password is required').not().isEmpty()
]

module.exports = autenticateValidator;