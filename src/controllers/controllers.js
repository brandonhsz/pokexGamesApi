const index = require('../controllers/index.controller');
const pokemonList = require('../controllers/pokemonList.controller')
const showPokemon = require('../controllers/showPokemon.controller')
const createAllPokemon = require('../controllers/createAllPokemons.controller')
const createPokemon = require('../controllers/createPokemon.controller')


module.exports = {
  index,
  pokemonList,
  showPokemon,
  createAllPokemon,
  createPokemon
}