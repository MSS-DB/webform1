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
exports.Service = void 0;
const typeorm_1 = require("typeorm");
//
let Service = class Service {
    id;
    service;
    image;
    isPopup;
    subService;
    redirectUrl;
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)({ name: "MCS_ID" }),
    __metadata("design:type", Number)
], Service.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: "MAIN_SERVICE" }),
    __metadata("design:type", String)
], Service.prototype, "service", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: "IMAGE_URL", nullable: true }),
    __metadata("design:type", String)
], Service.prototype, "image", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: "IS_POPUP" }),
    __metadata("design:type", Boolean)
], Service.prototype, "isPopup", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: "SUB_SERVICE", nullable: true }),
    __metadata("design:type", String)
], Service.prototype, "subService", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: "REDIRECT_URL", nullable: true }),
    __metadata("design:type", String)
], Service.prototype, "redirectUrl", void 0);
Service = __decorate([
    (0, typeorm_1.Entity)({ name: "ezq_mcs_ezq_branch_appointment_services_lookups" })
], Service);
exports.Service = Service;
//# sourceMappingURL=Service.js.map