const index = require('../controllers/index.controller');
const pokemonList = require('../controllers/pokemonList.controller')
const showPokemon = require('../controllers/showPokemon.controller')
const createPokemon = require('../controllers/createPokemon.controller')

//admin controllers
const createAllPokemon = require('../controllers/createAllPokemons.controller')
const removeAllData = require('../controllers/removeAllData.controller')
const removeAnyPokemon = require('../controllers/removeAnyPokemon.controller')
const addAdmin = require('../controllers/addAdmin.controller')
module.exports = {
  index,
  pokemonList,
  showPokemon,
  createAllPokemon,
  createPokemon,
  removeAllData,
  removeAnyPokemon,
  addAdmin
}