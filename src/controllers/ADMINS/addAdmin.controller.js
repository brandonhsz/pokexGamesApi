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
const adminUsers_1 = __importDefault(require("../../models/adminUsers"));
const express_validator_1 = require("express-validator");
const addAdmin = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const admin = yield adminUsers_1.default.findOne({ username: req.body.username });
    if (req.body.username !== admin.username || req.body.password !== admin.password) {
        res.status(401).json({ message: 'Unauthorized' });
    }
    else {
        const errors = (0, express_validator_1.validationResult)(req);
        console.log(errors);
        if (!errors.isEmpty()) {
            return res.status(422).json({ errors: errors.array() });
        }
        const { newusername, newpassword } = req.body;
        const newAdmin = { username: newusername, password: newpassword };
        const admin = new adminUsers_1.default(newAdmin);
        yield admin.save();
        res.json({ message: 'Admin added' });
    }
});
exports.default = addAdmin;
