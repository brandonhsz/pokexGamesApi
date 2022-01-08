"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_validator_1 = require("express-validator");
const newPokemonValidator = [
    (0, express_validator_1.body)('name', 'Name is required and need to be a string').trim().isString().not().isEmpty(),
    (0, express_validator_1.body)('number', 'Number is required and need to be a number').isNumeric().not().isEmpty(),
    (0, express_validator_1.body)('level', 'Level is required and need to be a number').isNumeric().not().isEmpty(),
    (0, express_validator_1.body)('ball1', 'Ball1 is required and need to be a string').trim().isString().not().isEmpty(),
    (0, express_validator_1.body)('ball2', 'Ball2 is required and need to be a string').trim().isString().not().isEmpty(),
    (0, express_validator_1.body)('clan1', 'Clan1 is required and need to be a string').trim().isString().not().isEmpty(),
    (0, express_validator_1.body)('clan2', 'Clan2 is required and need to be a string').trim().isString().not().isEmpty(),
    (0, express_validator_1.body)('type1', 'Type1 is required and need to be a string').trim().isString().not().isEmpty(),
    (0, express_validator_1.body)('type2', 'Type2 is required and need to be a string').trim().isString().not().isEmpty(),
    (0, express_validator_1.body)('region', 'Region is required and need to be a string').trim().isString().not().isEmpty(),
    (0, express_validator_1.body)('generation', 'Generation is required and need to be a string').trim().isString().not().isEmpty(),
    (0, express_validator_1.body)('difficulty', 'Difficulty is required and need to be a string').trim().isString().not().isEmpty(),
    (0, express_validator_1.body)('xpCaught', 'XpCaught is required and need to be a string').trim().isString().not().isEmpty(),
    (0, express_validator_1.body)('priceNpc', 'PriceNpc is required and need to be a string').trim().isString().not().isEmpty(),
    (0, express_validator_1.body)('shiny', 'Shiny is required and need to be a string').trim().isString().not().isEmpty(),
    (0, express_validator_1.body)('fast', 'Fast is required and need to be a string').trim().isString().not().isEmpty(),
    (0, express_validator_1.body)('heavy', 'Heavy is required and need to be a string').trim().isString().not().isEmpty(),
    (0, express_validator_1.body)('preEvo2', 'PreEvo2 is required and need to be a string').trim().isString().not().isEmpty(),
    (0, express_validator_1.body)('preEvo1', 'PreEvo1 is required and need to be a string').trim().isString().not().isEmpty(),
    (0, express_validator_1.body)('evo1', 'Evo1 is required and need to be a string').trim().isString().not().isEmpty(),
    (0, express_validator_1.body)('evo2', 'Evo2 is required and need to be a string').trim().isString().not().isEmpty(),
    (0, express_validator_1.body)('npreEvo2', 'NPreEvo2 is required and need to be a string').trim().isString().not().isEmpty(),
    (0, express_validator_1.body)('npreEvo1', 'NPreEvo1 is required and need to be a string').trim().isString().not().isEmpty(),
    (0, express_validator_1.body)('nevo1', 'NEvo1 is required and need to be a string').trim().isString().not().isEmpty(),
];
exports.default = newPokemonValidator;
