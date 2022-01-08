"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const Mixed = mongoose_1.default.Schema.Types.Mixed;
const pokemonSchema = new mongoose_1.default.Schema({
    name: String,
    number: Number,
    level: Mixed,
    ball1: String,
    ball2: String,
    clan1: String,
    clan2: String,
    type1: String,
    type2: String,
    region: String,
    generation: String,
    difficulty: String,
    xpCaught: String,
    priceNpc: String,
    shiny: String,
    fast: String,
    heavy: String,
    preEvo2: String,
    preEvo1: String,
    evo1: String,
    evo2: String,
    npreEvo2: String,
    npreEvo1: String,
    nevo1: String,
    nevo2: String,
    maps: String,
    vip: String,
    moves: String,
    loots: String,
    evoStone: String,
    boost: String,
    booStone: String,
    skills: String,
});
exports.default = mongoose_1.default.model('Pokemons', pokemonSchema);
