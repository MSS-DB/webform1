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
exports.Branch = void 0;
const typeorm_1 = require("typeorm");
let Branch = class Branch {
    id;
    branchCode;
    branchAddress;
    branchEmail;
    branchName;
    branchRegion;
    districtName;
    hourEnd;
    hourStart;
    lunchEnd;
    lunchStart;
    noCounter;
    stateName;
    subService;
    createdAt;
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)({ name: "MCS_ID" }),
    __metadata("design:type", Number)
], Branch.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: "BRANCH_CODE" }),
    __metadata("design:type", String)
], Branch.prototype, "branchCode", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: "BRANCH_ADDRESS" }),
    __metadata("design:type", String)
], Branch.prototype, "branchAddress", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: "BRANCH_EMAIL" }),
    __metadata("design:type", String)
], Branch.prototype, "branchEmail", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: "BRANCH_NAME" }),
    __metadata("design:type", String)
], Branch.prototype, "branchName", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: "BRANCH_REGION" }),
    __metadata("design:type", String)
], Branch.prototype, "branchRegion", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: "DISTRICT_NAME" }),
    __metadata("design:type", String)
], Branch.prototype, "districtName", void 0);
__decorate([
    (0, typeorm_1.Column)('time', { name: "HOUR_END" }),
    __metadata("design:type", Date)
], Branch.prototype, "hourEnd", void 0);
__decorate([
    (0, typeorm_1.Column)('time', { name: "HOUR_START" }),
    __metadata("design:type", Date)
], Branch.prototype, "hourStart", void 0);
__decorate([
    (0, typeorm_1.Column)('time', { name: "LUNCH_END" }),
    __metadata("design:type", Date)
], Branch.prototype, "lunchEnd", void 0);
__decorate([
    (0, typeorm_1.Column)('time', { name: "LUNCH_START" }),
    __metadata("design:type", Date)
], Branch.prototype, "lunchStart", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: "NO_OF_COUNTER" }),
    __metadata("design:type", Number)
], Branch.prototype, "noCounter", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: "STATE_NAME" }),
    __metadata("design:type", String)
], Branch.prototype, "stateName", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: "SUB_SERVICE", nullable: true }),
    __metadata("design:type", String)
], Branch.prototype, "subService", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)({ name: "MCS_CREATED_DATETIME" }),
    __metadata("design:type", Date)
], Branch.prototype, "createdAt", void 0);
Branch = __decorate([
    (0, typeorm_1.Entity)({ name: "ezq_mcs_ezq_branch_appointment_branch_details" })
], Branch);
exports.Branch = Branch;
//# sourceMappingURL=Branch.js.map