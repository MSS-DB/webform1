"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.salt = exports.SUCCESS = exports.CODE = exports.API = exports.version = void 0;
const dotenv_1 = require("dotenv");
(0, dotenv_1.config)();
const version = process.env.VERSION || "1.0";
exports.version = version;
const salt = 10;
exports.salt = salt;
const API = {
    ITEMS_PER_PAGE: 20,
};
exports.API = API;
const CODE = {
    CLIENT_ERROR: {
        UNAUTHORIZED: 401,
        BAD_REQUEST: 404,
    },
};
exports.CODE = CODE;
const SUCCESS = {
    MODEL_GET_SUCCESS: (model) => `Successfully get model ${model}`,
};
exports.SUCCESS = SUCCESS;
//# sourceMappingURL=index.js.map