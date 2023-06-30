"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.District = void 0;
const typeorm_1 = require("typeorm");
const State_1 = require("./State");
let District = class District {
    id;
    name;
    createdAt;
    state;
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)({ name: "DISTRICT_ID" }),
    __metadata("design:type", Number)
], District.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: "DISTRICT_NAME" }),
    __metadata("design:type", String)
], District.prototype, "name", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)({ name: "MCS_CREATED_DATETIME" }),
    __metadata("design:type", Date)
], District.prototype, "createdAt", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => State_1.State),
    (0, typeorm_1.JoinColumn)({ name: "STATE_ID" }),
    __metadata("design:type", State_1.State)
], District.prototype, "state", void 0);
District = __decorate([
    (0, typeorm_1.Entity)({ name: "ezq_mcs_ezq_branch_districts" })
], District);
exports.District = District;
//# sourceMappingURL=District.js.map