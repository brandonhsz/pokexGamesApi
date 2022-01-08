"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_validator_1 = require("express-validator");
const autenticateValidator = [
    (0, express_validator_1.body)('username', 'Username is required').not().isEmpty(),
    (0, express_validator_1.body)('password', 'Password is required').not().isEmpty()
];
exports.default = autenticateValidator;
