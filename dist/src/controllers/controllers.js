"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.addAdmin = exports.removeAnyPokemon = exports.removeAllData = exports.createPokemon = exports.createAllPokemon = exports.showPokemon = exports.pokemonList = exports.index = void 0;
const index_controller_1 = __importDefault(require("../controllers/index.controller"));
exports.index = index_controller_1.default;
const pokemonList_controller_1 = __importDefault(require("../controllers/READ/pokemonList.controller"));
exports.pokemonList = pokemonList_controller_1.default;
const showPokemon_controller_1 = __importDefault(require("../controllers/READ/showPokemon.controller"));
exports.showPokemon = showPokemon_controller_1.default;
const createPokemon_controller_1 = __importDefault(require("../controllers/CREATE/createPokemon.controller"));
exports.createPokemon = createPokemon_controller_1.default;
//admin controllers
const createAllPokemons_controller_1 = __importDefault(require("../controllers/CREATE/createAllPokemons.controller"));
exports.createAllPokemon = createAllPokemons_controller_1.default;
const removeAllData_controller_1 = __importDefault(require("../controllers/DELETE/removeAllData.controller"));
exports.removeAllData = removeAllData_controller_1.default;
const removeAnyPokemon_controller_1 = __importDefault(require("../controllers/DELETE/removeAnyPokemon.controller"));
exports.removeAnyPokemon = removeAnyPokemon_controller_1.default;
const addAdmin_controller_1 = __importDefault(require("../controllers/ADMINS/addAdmin.controller"));
exports.addAdmin = addAdmin_controller_1.default;
