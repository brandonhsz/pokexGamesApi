"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const { validationResult } = require('express-validator');
const Pokemon = require('../../models/pokemon');
const Admin = require('../../models/adminUsers');
const pokeData = require('../../models/pokemonData');
const createAllPokemon = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const admin = yield Admin.findOne({ username: req.body.username });
    const errors = validationResult(req);
    console.log(errors);
    if (!errors.isEmpty()) {
        return res.status(422).json({ errors: errors.array() });
    }
    if (req.body.username !== admin.username || req.body.password !== admin.password) {
        res.status(401).json({ message: 'Unauthorized' });
    }
    else {
        for (let i = 0; i < pokeData.length; i++) {
            const pokemon = new Pokemon(pokeData[i]);
            yield pokemon.save();
            console.log(`poke ${i + 1} ${pokeData[i].name} saved`);
        }
        res.status(201).json('pokemons saved');
    }
});
exports.default = createAllPokemon;
