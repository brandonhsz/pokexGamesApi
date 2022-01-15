import { Router } from "express";
import { index, createPokemon, pokemonList, createAllPokemon, showPokemon, removeAllData, removeAnyPokemon, AuthController } from "../controllers/controllers";
import newPokemonValidator from "../validations/newPokemon.validate";
import newAdminValidator from "../validations/newAdmin.validate";
import isAuthorized from "../middlewares/auth.middlewares";

const router = Router();

router.get("/", index);
router.get("/api/pokemon", pokemonList);
router.get("/api/pokemon/:param1", showPokemon);

//ADMIN ROUTES

router.post("/api/newPokemon",
  newPokemonValidator,
  createPokemon);


router.post("/api/fill",
  isAuthorized,
  createAllPokemon);

router.delete("/api/deleteall",
  isAuthorized,
  removeAllData);

router.delete("/api/delete/:param1",
  isAuthorized,
  removeAnyPokemon);

// auth routes

router.post("/api/signup",
  newAdminValidator,
  AuthController.signup);

router.post("/api/signin",
  AuthController.signin);

module.exports = router;
