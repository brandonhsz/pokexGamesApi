const Pokemon = require('../models/pokemon');

const removePokemon = async (req, res) => {
  if (req.body.user !== process.env.ADMIN_USER || req.body.password !== process.env.ADMIN_PASS) {
    res.status(401).json({ message: 'Unauthorized' });

  } else {
    const pokemon = await Pokemon.find()
    const params = req.params.param1.toLowerCase();
    const filter = pokemon.filter(p =>
    (
      p.number.toString() === req.params.param1 ||
      p.name.toLowerCase() === params
    ))
    if (filter && filter.length === 1) {
      await Pokemon.deleteOne(filter[0]);

      res.status(200).json({ message: 'Pokemon removed', pokemonRemoved: filter });
    } else {
      res.status(404).json({ message: 'Pokemon not found', pokemonSend: req.params.param1 });
    }
  }
}

module.exports = removePokemon;