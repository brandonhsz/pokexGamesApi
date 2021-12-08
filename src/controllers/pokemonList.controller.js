const Pokemon = require('../models/pokemon');

const pokemonList = async (req, res) => {
  const pokemonList = await Pokemon.find();
  res.json(pokemonList);
}

module.exports = pokemonList;