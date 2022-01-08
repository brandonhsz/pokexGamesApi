import { Router } from "express";
import { index, createPokemon, pokemonList, createAllPokemon, showPokemon, removeAllData, removeAnyPokemon, addAdmin } from "../controllers/controllers";
import newPokemonValidator from "../validations/newPokemon.validate";
import newAdminValidator from "../validations/newAdmin.validate";
import autenticateValidator from "../validations/autenticate.validate";
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
