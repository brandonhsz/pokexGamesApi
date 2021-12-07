const Pokemon = require('../models/pokemon');
// const pokeData = require('../models/pokemonData')
const index = (req, res) => {
  res.json('Hello World!');
}

const pokemonList = async (req, res) => {
  const pokemonList = await Pokemon.find();
  res.json(pokemonList);
}

// const createAllPokemon = async (req, res) => {
//   // pokeData.map((poke) => {
//   //   const pokemon = new Pokemon(poke);
//   //   pokemon.save();
//   // })
//   for (let i = 0; i < pokeData.length; i++) {
//     const pokemon = new Pokemon(pokeData[i]);
//     await pokemon.save();
//     console.log(`poke ${i + 1} ${pokeData[i].name} saved`);
//   }

//   res.status(201).json('pokemons saved');
// }

const createPokemon = async (req, res) => {
  const pokemon = new Pokemon(req.body);
  await pokemon.save();
  res.status(201).json('pokemon saved');
  console.log('saved');
}

module.exports = {
  index,
  pokemonList,
  createPokemon,
  // createAllPokemon
}