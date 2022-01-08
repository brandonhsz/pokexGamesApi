"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_validator_1 = require("express-validator");
const newAdminValidator = [
    (0, express_validator_1.body)('username', 'Username is required and need to be a string').trim().isString().not().isEmpty().isLength({ min: 6, max: 16 }),
    (0, express_validator_1.body)('username', 'Username needs to be in a range of 6-16 characters').isLength({ min: 6, max: 16 }),
    (0, express_validator_1.body)('password', 'Password is required and need to be a string').trim().isString().not().isEmpty().isLength({ min: 6, max: 16 }),
    (0, express_validator_1.body)('password', 'Password needs to be in a range of 6-16 characters').isLength({ min: 6, max: 16 }),
    (0, express_validator_1.body)('newusername', 'Newusername is required and need to be a string').trim().isString().not().isEmpty(),
    (0, express_validator_1.body)('newusername', 'Newusername needs to be in a range of 6-16 characters').isLength({ min: 6, max: 16 }),
    (0, express_validator_1.body)('newpassword', 'Newpassword is required and need to be a string').trim().isString().not().isEmpty(),
    (0, express_validator_1.body)('newusername', 'Newusername needs to be in a range of 6-16 characters').isLength({ min: 6, max: 16 }),
];
exports.default = newAdminValidator;
