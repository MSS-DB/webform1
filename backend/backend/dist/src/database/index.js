"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = exports.State = exports.SubService = exports.Service = exports.Lob = exports.Holiday = exports.District = exports.Branch = exports.Appointment = void 0;
const typeorm_1 = require("typeorm");
const Appointment_1 = require("./entity/Appointment");
Object.defineProperty(exports, "Appointment", { enumerable: true, get: function () { return Appointment_1.Appointment; } });
const Branch_1 = require("./entity/Branch");
Object.defineProperty(exports, "Branch", { enumerable: true, get: function () { return Branch_1.Branch; } });
const District_1 = require("./entity/District");
Object.defineProperty(exports, "District", { enumerable: true, get: function () { return District_1.District; } });
const Holiday_1 = require("./entity/Holiday");
Object.defineProperty(exports, "Holiday", { enumerable: true, get: function () { return Holiday_1.Holiday; } });
const Lob_1 = require("./entity/Lob");
Object.defineProperty(exports, "Lob", { enumerable: true, get: function () { return Lob_1.Lob; } });
const Service_1 = require("./entity/Service");
Object.defineProperty(exports, "Service", { enumerable: true, get: function () { return Service_1.Service; } });
const SubService_1 = require("./entity/SubService");
Object.defineProperty(exports, "SubService", { enumerable: true, get: function () { return SubService_1.SubService; } });
const State_1 = require("./entity/State");
Object.defineProperty(exports, "State", { enumerable: true, get: function () { return State_1.State; } });
const User_1 = require("./entity/User");
Object.defineProperty(exports, "User", { enumerable: true, get: function () { return User_1.User; } });
const Token_1 = require("./entity/Token");
const { DB_NAME, DB_USER, MSSQL_SA_PASSWORD } = process.env;
const DbApp = new typeorm_1.DataSource({
    type: "mssql",
    host: 'localhost',
    username: DB_USER,
    password: MSSQL_SA_PASSWORD,
    database: DB_NAME,
    synchronize: true,
    extra: {
        trustServerCertificate: true,
    },
    entities: [Appointment_1.Appointment, Branch_1.Branch, District_1.District, Holiday_1.Holiday, Lob_1.Lob, Service_1.Service, SubService_1.SubService, State_1.State, User_1.User, Token_1.Token],
    migrations: [],
    subscribers: [],
});
DbApp.initialize().then(() => {
    console.log("Data source has been initialized!");
}).catch((err) => {
    console.error("Error during data source creation", err);
});
exports.default = DbApp;
//# sourceMappingURL=index.js.map