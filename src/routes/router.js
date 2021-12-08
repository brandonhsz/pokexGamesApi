const { Router } = require("express");
const { index, createPokemon, pokemonList, createAllPokemon, showPokemon } = require("../controllers/controllers");
const newPokemonValidator = require("../validations/newPokemon.validate");

const router = Router();

router.get("/", index);
router.get("/api/pokemon", pokemonList);
router.get("/api/pokemon/:param1", showPokemon);
router.get("/api/fill", createAllPokemon);

router.post("/api/newPokemon",
  newPokemonValidator,
  createPokemon);

module.exports = router;
