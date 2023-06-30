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
exports.State = void 0;
const typeorm_1 = require("typeorm");
let State = class State {
    stateId;
    name;
    weekend;
    createdAt;
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)({ name: "STATE_ID" }),
    __metadata("design:type", Number)
], State.prototype, "stateId", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: "STATE_NAME" }),
    __metadata("design:type", String)
], State.prototype, "name", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: "WEEK_END_DAYS" }),
    __metadata("design:type", String)
], State.prototype, "weekend", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)({ name: "MCS_CREATED_DATETIME" }),
    __metadata("design:type", Date)
], State.prototype, "createdAt", void 0);
State = __decorate([
    (0, typeorm_1.Entity)({ name: "ezq_mcs_ezq_branch_states" })
], State);
exports.State = State;
//# sourceMappingURL=State.js.map