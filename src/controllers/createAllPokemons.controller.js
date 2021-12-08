const Pokemon = require('../models/pokemon');

const createAllPokemon = async (req, res) => {

  for (let i = 0; i < pokeData.length; i++) {
    const pokemon = new Pokemon(pokeData[i]);
    await pokemon.save();
    console.log(`poke ${i + 1} ${pokeData[i].name} saved`);
  }

  res.status(201).json('pokemons saved');
}

module.exports = createAllPokemon;