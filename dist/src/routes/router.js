"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const controllers_1 = require("../controllers/controllers");
const newPokemon_validate_1 = __importDefault(require("../validations/newPokemon.validate"));
const newAdmin_validate_1 = __importDefault(require("../validations/newAdmin.validate"));
const autenticate_validate_1 = __importDefault(require("../validations/autenticate.validate"));
const router = (0, express_1.Router)();
router.get("/", controllers_1.index);
router.get("/api/pokemon", controllers_1.pokemonList);
router.get("/api/pokemon/:param1", controllers_1.showPokemon);
//ADMIN ROUTES
router.post("/api/newPokemon", newPokemon_validate_1.default, controllers_1.createPokemon);
router.post("/api/newadmin", newAdmin_validate_1.default, controllers_1.addAdmin);
router.post("/api/fill", autenticate_validate_1.default, controllers_1.createAllPokemon);
router.delete("/api/deleteall", autenticate_validate_1.default, controllers_1.removeAllData);
router.delete("/api/delete/:param1", autenticate_validate_1.default, controllers_1.removeAnyPokemon);
module.exports = router;
