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
const adminUsers_1 = __importDefault(require("../../models/adminUsers"));
const express_validator_1 = require("express-validator");
const removeAllData = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
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
        pokemon_1.default.remove({}, (err) => {
            if (err) {
                res.send(err);
            }
            res.json({ message: 'All data removed' });
        });
    }
});
exports.default = removeAllData;
