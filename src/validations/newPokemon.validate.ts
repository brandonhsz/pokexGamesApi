import { body } from 'express-validator';
const newPokemonValidator = [
  body('name', 'Name is required and need to be a string').trim().isString().not().isEmpty(),
  body('number', 'Number is required and need to be a number').isNumeric().not().isEmpty(),
  body('level', 'Level is required and need to be a number').isNumeric().not().isEmpty(),
  body('ball1', 'Ball1 is required and need to be a string').trim().isString().not().isEmpty(),
  body('ball2', 'Ball2 is required and need to be a string').trim().isString().not().isEmpty(),
  body('clan1', 'Clan1 is required and need to be a string').trim().isString().not().isEmpty(),
  body('clan2', 'Clan2 is required and need to be a string').trim().isString().not().isEmpty(),
  body('type1', 'Type1 is required and need to be a string').trim().isString().not().isEmpty(),
  body('type2', 'Type2 is required and need to be a string').trim().isString().not().isEmpty(),
  body('region', 'Region is required and need to be a string').trim().isString().not().isEmpty(),
  body('generation', 'Generation is required and need to be a string').trim().isString().not().isEmpty(),
  body('difficulty', 'Difficulty is required and need to be a string').trim().isString().not().isEmpty(),
  body('xpCaught', 'XpCaught is required and need to be a string').trim().isString().not().isEmpty(),
  body('priceNpc', 'PriceNpc is required and need to be a string').trim().isString().not().isEmpty(),
  body('shiny', 'Shiny is required and need to be a string').trim().isString().not().isEmpty(),
  body('fast', 'Fast is required and need to be a string').trim().isString().not().isEmpty(),
  body('heavy', 'Heavy is required and need to be a string').trim().isString().not().isEmpty(),
  body('preEvo2', 'PreEvo2 is required and need to be a string').trim().isString().not().isEmpty(),
  body('preEvo1', 'PreEvo1 is required and need to be a string').trim().isString().not().isEmpty(),
  body('evo1', 'Evo1 is required and need to be a string').trim().isString().not().isEmpty(),
  body('evo2', 'Evo2 is required and need to be a string').trim().isString().not().isEmpty(),
  body('npreEvo2', 'NPreEvo2 is required and need to be a string').trim().isString().not().isEmpty(),
  body('npreEvo1', 'NPreEvo1 is required and need to be a string').trim().isString().not().isEmpty(),
  body('nevo1', 'NEvo1 is required and need to be a string').trim().isString().not().isEmpty(),
];

export default newPokemonValidator;