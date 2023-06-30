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
exports.Holiday = void 0;
const typeorm_1 = require("typeorm");
// MCS_ID,MCS_UPDATED_DATETIME
let Holiday = class Holiday {
    id;
    branchCode;
    name;
    createdAt;
    updatedAt;
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)({ name: "MCS_ID" }),
    __metadata("design:type", Number)
], Holiday.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: "BRANCH_CODE" }),
    __metadata("design:type", String)
], Holiday.prototype, "branchCode", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: "HOLIDAY_DATES" }),
    __metadata("design:type", String)
], Holiday.prototype, "name", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)({ name: "MCS_CREATED_DATETIME" }),
    __metadata("design:type", Date)
], Holiday.prototype, "createdAt", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)({ name: "MCS_UPDATED_DATETIME" }),
    __metadata("design:type", Date)
], Holiday.prototype, "updatedAt", void 0);
Holiday = __decorate([
    (0, typeorm_1.Entity)({ name: "ezq_mcs_ezq_branch_holidays" })
], Holiday);
exports.Holiday = Holiday;
//# sourceMappingURL=Holiday.js.map