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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_validator_1 = require("express-validator");
const pokemon_1 = __importDefault(require("../../models/pokemon"));
const adminUsers_1 = __importDefault(require("../../models/adminUsers"));
const createPokemon = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const admin = yield adminUsers_1.default.findOne({ username: req.body.username });
    const errors = (0, express_validator_1.validationResult)(req);
    console.log(errors);
    if (!errors.isEmpty()) {
        return res.status(422).json({ errors: errors.array() });
    }
    if (req.body.username !== admin.username || req.body.password !== admin.password) {
        res.status(401).json({ message: 'Unauthorized' });
    }
    else {
        const { name, number } = req.body;
        const nameCapitalized = name.charAt(0).toUpperCase() + name.slice(1);
        const findNumberPokemon = yield pokemon_1.default.findOne({ number: number });
        const findNamePokemon = yield pokemon_1.default.findOne({ name: nameCapitalized });
        if (findNumberPokemon || findNamePokemon) {
            res.status(400).json({ message: 'Pokemon already exists' });
        }
        else {
            const pokemon = new pokemon_1.default(req.body);
            yield pokemon.save();
            res.status(201).json('pokemon saved');
        }
    }
});
exports.default = createPokemon;
