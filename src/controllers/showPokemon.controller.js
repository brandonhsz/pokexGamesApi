const Pokemon = require('../models/pokemon');

const showPokemon = async (req, res) => {
  const pokemon = await Pokemon.find()
  const params = req.params.param1.toLowerCase();
  const filter = pokemon.filter(p =>
  (
    p.number.toString() === req.params.param1 ||
    p.name.toLowerCase() === params ||
    p.clan1.toLowerCase() === params ||
    p.clan2.toLowerCase() === params ||
    p.type1.toLowerCase() === params ||
    p.type2.toLowerCase() === params
  ))

  res.status(200).json(filter);
}

module.exports = showPokemon;