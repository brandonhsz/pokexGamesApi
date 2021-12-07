const { Router } = require("express");
const { index, createPokemon, pokemonList, createAllPokemon } = require("../controllers/controllers");

const router = Router();

router.get("/", index);
router.get("/api/pokemon", pokemonList);
// router.get("/rellenarBD", createAllPokemon);
router.post("/api/newPokemon", createPokemon);

module.exports = router;
