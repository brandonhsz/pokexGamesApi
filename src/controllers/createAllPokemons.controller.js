const Pokemon = require('../models/pokemon');
const pokeData = require('../models/pokemonData');
const createAllPokemon = async (req, res) => {

  if (req.body.user !== process.env.ADMIN_USER || req.body.password !== process.env.ADMIN_PASS) {
    res.status(401).json({ message: 'Unauthorized' });

  } else {

    for (let i = 0; i < pokeData.length; i++) {
      const pokemon = new Pokemon(pokeData[i]);
      await pokemon.save();
      console.log(`poke ${i + 1} ${pokeData[i].name} saved`);
    }

    res.status(201).json('pokemons saved');
  }
}

module.exports = createAllPokemon;