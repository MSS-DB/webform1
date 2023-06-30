"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const dotenv_1 = require("dotenv");
const auth_1 = require("../../helper/auth");
const config_1 = require("../../config");
(0, dotenv_1.config)();
const router = (0, express_1.Router)();
// Register
router.post('/signup', async (req, res) => {
    const { username, email, password } = req.body;
    //@TODO: Validate email
    // Create email
    const { user, error } = await (0, auth_1.signup)(username, email, password);
    if (error) {
        res.status(config_1.CODE.CLIENT_ERROR.UNAUTHORIZED).json({
            success: false,
            error: error.message,
        });
    }
    else {
        res.json({
            success: true,
            user,
        });
    }
});
// Login
router.post('/login', async (req, res) => {
    const { email, password } = req.body;
    const { user, error } = await (0, auth_1.login)(email, password);
    if (error) {
        res.status(config_1.CODE.CLIENT_ERROR.UNAUTHORIZED).json({
            success: false,
            error: error.message,
        });
    }
    else {
        res.json({
            success: true,
            user,
        });
    }
});
router.post('/logout', async (req, res) => {
    const token = req.headers.authorization;
    const { error } = await (0, auth_1.logout)(token);
    if (error) {
        res.status(config_1.CODE.CLIENT_ERROR.UNAUTHORIZED).json({
            success: false,
            error: error.message,
        });
    }
    else {
        res.json({ success: true, });
    }
});
exports.default = router;
//# sourceMappingURL=index.js.map