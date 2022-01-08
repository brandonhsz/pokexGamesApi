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
const pokemon_1 = __importDefault(require("../../models/pokemon"));
const showPokemon = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const pokemon = yield pokemon_1.default.find();
    const params = req.params.param1.toLowerCase();
    const filter = pokemon.filter(p => (p.number.toString() === req.params.param1 ||
        p.name.toLowerCase() === params ||
        p.clan1.toLowerCase() === params ||
        p.clan2.toLowerCase() === params ||
        p.type1.toLowerCase() === params ||
        p.type2.toLowerCase() === params));
    filter.length > 0 ? res.status(200).json(filter) : res.status(404).json({ message: 'Pokemon not found' });
});
exports.default = showPokemon;
