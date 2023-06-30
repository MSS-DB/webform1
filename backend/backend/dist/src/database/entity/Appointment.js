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
exports.Appointment = void 0;
const typeorm_1 = require("typeorm");
const District_1 = require("./District");
const Service_1 = require("./Service");
const State_1 = require("./State");
let Appointment = class Appointment {
    id;
    appointmentDate;
    branchCode;
    branchName;
    contactNumber;
    customerName;
    districtName;
    district;
    email;
    idType;
    createdAt;
    updatedAt;
    refNum;
    serviceName;
    stateName;
    state;
    subService;
    timeSlot;
    service;
    idNumber;
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)({ name: "MCS_ID" }),
    __metadata("design:type", String)
], Appointment.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: "APPOINTMENT_DATE" }),
    __metadata("design:type", Date)
], Appointment.prototype, "appointmentDate", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: "BRANCH_CODE" }),
    __metadata("design:type", String)
], Appointment.prototype, "branchCode", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: "BRANCH_NAME" }),
    __metadata("design:type", String)
], Appointment.prototype, "branchName", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: "CONTACT_NUMBER" }),
    __metadata("design:type", String)
], Appointment.prototype, "contactNumber", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: "CUSTOMER_NAME" }),
    __metadata("design:type", String)
], Appointment.prototype, "customerName", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: "DISTRICT" }),
    __metadata("design:type", String)
], Appointment.prototype, "districtName", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => District_1.District),
    (0, typeorm_1.JoinColumn)({ name: "DISTRICT_ID" }),
    __metadata("design:type", District_1.District)
], Appointment.prototype, "district", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: "EMAIL_ADDRESS" }),
    __metadata("design:type", String)
], Appointment.prototype, "email", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true, name: "ID_TYPE" }),
    __metadata("design:type", String)
], Appointment.prototype, "idType", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)({ name: "MCS_CREATED_DATETIME" }),
    __metadata("design:type", Date)
], Appointment.prototype, "createdAt", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)({ name: "MCS_UPDATED_DATETIME" }),
    __metadata("design:type", Date)
], Appointment.prototype, "updatedAt", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: "REFERENCE_NUMBER" }),
    __metadata("design:type", String)
], Appointment.prototype, "refNum", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: "SERVICE" }),
    __metadata("design:type", String)
], Appointment.prototype, "serviceName", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: "STATE" }),
    __metadata("design:type", String)
], Appointment.prototype, "stateName", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => State_1.State),
    (0, typeorm_1.JoinColumn)({ name: "STATE_ID" }),
    __metadata("design:type", State_1.State)
], Appointment.prototype, "state", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: "SUB_SERVICE", nullable: true }),
    __metadata("design:type", String)
], Appointment.prototype, "subService", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: "TIME_SLOT" }),
    __metadata("design:type", String)
], Appointment.prototype, "timeSlot", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => Service_1.Service),
    (0, typeorm_1.JoinColumn)({ name: "service_id" }),
    __metadata("design:type", Service_1.Service)
], Appointment.prototype, "service", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: "ID_NUMBER", nullable: true }),
    __metadata("design:type", String)
], Appointment.prototype, "idNumber", void 0);
Appointment = __decorate([
    (0, typeorm_1.Entity)({ name: "ezq_mcs_ezq_branch_appointment_details" })
], Appointment);
exports.Appointment = Appointment;
//# sourceMappingURL=Appointment.js.map