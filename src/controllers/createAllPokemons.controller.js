const Pokemon = require('../models/pokemon');
const Admin = require('../models/adminUsers');
const pokeData = require('../models/pokemonData');
const createAllPokemon = async (req, res) => {
  const admin = await Admin.findOne({ username: req.body.username })

  if (req.body.username !== admin.username || req.body.password !== admin.password) {
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