const { validationResult } = require('express-validator');
const Pokemon = require('../models/pokemon');

const createPokemon = async (req, res) => {

  const errors = validationResult(req);
  console.log(errors);
  if (!errors.isEmpty()) {
    return res.status(422).json({ errors: errors.array() });
  }

  const pokemon = new Pokemon(req.body);
  await pokemon.save();
  res.status(201).json('pokemon saved');
}

module.exports = createPokemon;