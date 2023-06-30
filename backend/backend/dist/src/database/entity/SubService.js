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
exports.SubService = void 0;
const typeorm_1 = require("typeorm");
const Branch_1 = require("./Branch");
let SubService = class SubService {
    mcsId;
    subService;
    branches;
    service;
    createdAt;
    updatedAt;
    noBooking;
    state;
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)({ name: "MCS_ID" }),
    __metadata("design:type", Number)
], SubService.prototype, "mcsId", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: "ACTIVITY" }),
    __metadata("design:type", String)
], SubService.prototype, "subService", void 0);
__decorate([
    (0, typeorm_1.ManyToMany)(() => Branch_1.Branch),
    (0, typeorm_1.JoinTable)({ name: "BRANCH_CODE" }),
    __metadata("design:type", Array)
], SubService.prototype, "branches", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: "MAIN_SERVICE" }),
    __metadata("design:type", String)
], SubService.prototype, "service", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)({ name: "MCS_CREATED_DATETIME" }),
    __metadata("design:type", Date)
], SubService.prototype, "createdAt", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)({ name: "MCS_UPDATED_DATETIME" }),
    __metadata("design:type", Date)
], SubService.prototype, "updatedAt", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: "NO_OF_BOOKING_PER_TIMESLOT" }),
    __metadata("design:type", Number)
], SubService.prototype, "noBooking", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: "SERVICE_INTERVAL_TIME" }),
    __metadata("design:type", Number)
], SubService.prototype, "state", void 0);
SubService = __decorate([
    (0, typeorm_1.Entity)({ name: "ezq_mcs_ezq_branch_appointment_services" })
], SubService);
exports.SubService = SubService;
//# sourceMappingURL=SubService.js.map