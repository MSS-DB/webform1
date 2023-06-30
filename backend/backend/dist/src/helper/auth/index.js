"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.authorizeMiddleware = exports.logout = exports.login = exports.signup = void 0;
const database_1 = __importStar(require("../../database"));
const bcrypt_1 = require("bcrypt");
const config_1 = require("../../config");
const token_1 = require("./token");
const Token_1 = require("../../database/entity/Token");
const signup = async (username, email, password) => {
    try {
        const user = await database_1.default.manager.findOneBy(database_1.User, { email });
        // Respond error if account found
        if (user) {
            return { error: new ReferenceError("User exists"), user };
        }
        // Create user with email and password
        const newUser = new database_1.User();
        newUser.displayName = username;
        newUser.email = email;
        newUser.password = password;
        await database_1.default.getRepository(database_1.User).save(newUser);
        return { error: undefined, user: { username, email, createdAt: newUser.createdAt } };
    }
    catch (e) {
        console.log(e);
        return { error: new ReferenceError("User creation problem"), user: undefined };
    }
};
exports.signup = signup;
const login = async (email, password) => {
    try {
        // Check username and password inside DB
        const userRepo = database_1.default.getRepository(database_1.User);
        const user = await userRepo.findOneBy({ email });
        // No email found
        if (!user) {
            return { error: new ReferenceError("No user found"), user: {} };
        }
        // Password not correct
        const correctPassword = (0, bcrypt_1.compareSync)(password, user.password);
        if (!correctPassword) {
            return { error: new ReferenceError("Wrong password"), user: {} };
        }
        // Successful login
        const { pfNo, displayName, picture } = user;
        // Generate token
        const token = (0, token_1.generateToken)({ email });
        // Store token in DB
        let tokenEntity = await database_1.default.manager.findOneBy(Token_1.Token, { email });
        if (!tokenEntity) {
            tokenEntity = database_1.default.manager.create(Token_1.Token, { email, token });
        }
        tokenEntity.token = token;
        tokenEntity.active = true;
        await database_1.default.manager.save(tokenEntity);
        return {
            error: undefined,
            user: { pfNo, displayName, email, picture, token }
        };
    }
    catch (error) {
        return { error: error, user: {} };
    }
};
exports.login = login;
const logout = async (token) => {
    if (!token) {
        return {
            error: new Error("No login session")
        };
    }
    // Check if user login session is stored
    const tokenEntity = await database_1.default.manager.findOneBy(Token_1.Token, { token });
    if (!tokenEntity) {
        return {
            error: new Error("Invalid user credential")
        };
    }
    // Deactivate token
    tokenEntity.active = false;
    await database_1.default.manager.save(tokenEntity);
    return { error: undefined };
};
exports.logout = logout;
const authorizeMiddleware = (req, res, next) => {
    const token = req.headers.authorization;
    // Reject all requests without a token
    if (!token) {
        return res.status(config_1.CODE.CLIENT_ERROR.UNAUTHORIZED).json({ message: "Unauthorized" });
    }
    // Check token validity
    const { email } = (0, token_1.verifyToken)(token);
    if (!email) {
        return res.status(config_1.CODE.CLIENT_ERROR.UNAUTHORIZED).json({ message: "Token expired" });
    }
    Object.assign(req, { email });
    next();
};
exports.authorizeMiddleware = authorizeMiddleware;
//# sourceMappingURL=index.js.map