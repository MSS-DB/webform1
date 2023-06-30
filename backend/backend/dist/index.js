"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = require("dotenv");
require("reflect-metadata");
const cookie_parser_1 = __importDefault(require("cookie-parser"));
const morgan_1 = __importDefault(require("morgan"));
const express_session_1 = __importDefault(require("express-session"));
require("body-parser");
// Node Environment
(0, dotenv_1.config)();
// Database init
require("./src/database");
// Routes
// import router from "./src/routes";
const { TOKEN_SECRET = '', PORT = '8000' } = process.env;
const app = (0, express_1.default)();
const port = parseInt(PORT);
app.use((0, morgan_1.default)('dev'));
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: false }));
app.use((0, cookie_parser_1.default)());
// Connect session
app.use((0, express_session_1.default)({
    secret: TOKEN_SECRET,
    resave: true,
    saveUninitialized: true,
    rolling: true,
    cookie: {
        httpOnly: false,
        maxAge: 31536000,
    },
}));
// Listen on port
app.listen(port, () => {
    console.log(`[server]: Server is running at http://localhost:${port}`);
});
// Routes
const routes_1 = __importDefault(require("./src/routes"));
app.use('/', routes_1.default);
//# sourceMappingURL=index.js.map