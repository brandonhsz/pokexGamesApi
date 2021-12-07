const mongoose = require('mongoose');
const Mixed = mongoose.Schema.Types.Mixed;
const pokemonSchema = new mongoose.Schema({
  name: String,
  number: Number,
  level: Mixed,
  ball1: String,
  ball2: String,
  clan1: String,
  clan2: String,
  type1: String,
  type2: String,
  region: String,
  generation: String,
  difficulty: String,
  xpCaught: String,
  priceNpc: String,
  shiny: String,
  fast: String,
  heavy: String,
  preEvo2: String,
  preEvo1: String,
  evo1: String,
  evo2: String,
  npreEvo2: String,
  npreEvo1: String,
  nevo1: String,
  nevo2: String,
  maps: String,
  vip: String,
  moves: String,
  loots: String,
  evoStone: String,
  boost: String,
  booStone: String,
  skills: String,
});



module.exports = mongoose.model('Pokemons', pokemonSchema);