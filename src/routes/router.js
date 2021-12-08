const { Router } = require("express");
const { index, createPokemon, pokemonList, createAllPokemon, showPokemon, removeAllData } = require("../controllers/controllers");
const newPokemonValidator = require("../validations/newPokemon.validate");

const router = Router();

router.get("/", index);
router.get("/api/pokemon", pokemonList);
router.get("/api/pokemon/:param1", showPokemon);

router.post("/api/newPokemon",
  newPokemonValidator,
  createPokemon);

//ADMIN ROUTES
router.delete("/api/deleteall", removeAllData);
router.post("/api/fill", createAllPokemon);

module.exports = router;
