const { validationResult } = require('express-validator');
const Pokemon = require('../models/pokemon');

const createPokemon = async (req, res, next) => {

  const errors = validationResult(req);
  console.log(errors);
  if (!errors.isEmpty()) {
    return res.status(422).json({ errors: errors.array() });
  }

  const { name, number } = req.body;
  const nameCapitalized = name.charAt(0).toUpperCase() + name.slice(1);

  const findNumberPokemon = await Pokemon.findOne({ number: number });
  const findNamePokemon = await Pokemon.findOne({ name: nameCapitalized });

  if (findNumberPokemon || findNamePokemon) {
    res.status(400).json({ message: 'Pokemon already exists' });

  } else {
    const pokemon = new Pokemon(req.body);
    await pokemon.save();
    res.status(201).json('pokemon saved');
  }

}

module.exports = createPokemon;