const { validationResult } = require('express-validator');

import Pokemon from '../../models/pokemon';
import pokeData from '../../models/pokemonData';
const createAllPokemon = async (req: any, res: any) => {

  for (let i = 0; i < pokeData.length; i++) {
    const pokemon = new Pokemon(pokeData[i]);
    await pokemon.save();
    console.log(`poke ${i + 1} ${pokeData[i].name} saved`);
  }

  res.status(201).json('pokemons saved');

}


export default createAllPokemon;