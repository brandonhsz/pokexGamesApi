import Pokemon from '../../models/pokemon';

const createPokemon = async (req: any, res: any) => {

  const { name, number } = req.body;
  const nameCapitalized = name.charAt(0).toUpperCase() + name.slice(1);

  const findNumberPokemon = await Pokemon.findOne({ number: number });
  const findNamePokemon = await Pokemon.findOne({ name: nameCapitalized });

  if (findNumberPokemon || findNamePokemon) return res.status(400).json({ message: 'Pokemon already exists' });

  const pokemon = new Pokemon(req.body);
  await pokemon.save();
  res.status(201).json('pokemon saved');

}

export default createPokemon;