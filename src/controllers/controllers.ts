import index from '../controllers/index.controller';
import pokemonList from '../controllers/READ/pokemonList.controller';
import showPokemon from '../controllers/READ/showPokemon.controller';
import createPokemon from '../controllers/CREATE/createPokemon.controller';

//admin controllers
import createAllPokemon from '../controllers/CREATE/createAllPokemons.controller';
import removeAllData from '../controllers/DELETE/removeAllData.controller';
import removeAnyPokemon from '../controllers/DELETE/removeAnyPokemon.controller';
import addAdmin from '../controllers/ADMINS/addAdmin.controller';

export {
  index,
  pokemonList,
  showPokemon,
  createAllPokemon,
  createPokemon,
  removeAllData,
  removeAnyPokemon,
  addAdmin
}