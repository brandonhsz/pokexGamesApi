const index = require('../controllers/index.controller');
const pokemonList = require('../controllers/READ/pokemonList.controller')
const showPokemon = require('../controllers/READ/showPokemon.controller')
const createPokemon = require('../controllers/CREATE/createPokemon.controller')

//admin controllers
const createAllPokemon = require('../controllers/CREATE/createAllPokemons.controller')
const removeAllData = require('../controllers/DELETE/removeAllData.controller')
const removeAnyPokemon = require('../controllers/DELETE/removeAnyPokemon.controller')
const addAdmin = require('../controllers/ADMINS/addAdmin.controller')
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