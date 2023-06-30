"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.verifyToken = exports.generateToken = void 0;
const jsonwebtoken_1 = require("jsonwebtoken");
const dotenv_1 = require("dotenv");
(0, dotenv_1.config)();
const TOKEN_SECRET = process.env.TOKEN_SECRET || "";
const generateToken = (data) => (0, jsonwebtoken_1.sign)(data, TOKEN_SECRET, { expiresIn: "7d" });
exports.generateToken = generateToken;
const verifyToken = (token) => {
    const data = (0, jsonwebtoken_1.verify)(token, TOKEN_SECRET);
    return data;
};
exports.verifyToken = verifyToken;
//# sourceMappingURL=token.js.map