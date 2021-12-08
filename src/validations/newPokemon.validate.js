const { check } = require('express-validator');
const newPokemonValidator = [
  check('name', 'Name is required and need to be a string').trim().isString().not().isEmpty(),
  check('number', 'Number is required and need to be a number').isNumeric().isEmpty(),
];

module.exports = newPokemonValidator;