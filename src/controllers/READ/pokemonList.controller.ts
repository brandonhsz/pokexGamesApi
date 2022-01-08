import Pokemon from '../../models/pokemon';

const pokemonList = async (req: any, res: any) => {
  const pokemonList = await Pokemon.find();
  res.json(pokemonList);
}

export default pokemonList;