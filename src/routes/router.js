const { Router } = require("express");
const { index, createPokemon, pokemonList, createAllPokemon, showPokemon, removeAllData, removeAnyPokemon, addAdmin } = require("../controllers/controllers");
const newPokemonValidator = require("../validations/newPokemon.validate");
const newAdminValidator = require("../validations/newAdmin.validate");
const autenticateValidator = require("../validations/autenticate.validate");
const router = Router();

router.get("/", index);
router.get("/api/pokemon", pokemonList);
router.get("/api/pokemon/:param1", showPokemon);

//ADMIN ROUTES

router.post("/api/newPokemon",
  newPokemonValidator,
  createPokemon);

router.post("/api/newadmin",
  newAdminValidator,
  addAdmin);

router.post("/api/fill",
  autenticateValidator,
  createAllPokemon);

router.delete("/api/deleteall",
  autenticateValidator,
  removeAllData);

router.delete("/api/delete/:param1",
  autenticateValidator,
  removeAnyPokemon);



module.exports = router;
