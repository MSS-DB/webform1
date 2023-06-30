import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  ManyToOne, JoinColumn
} from "typeorm"
import {District} from "./District"
import { Service } from "./Service"
import {State} from "./State"


@Entity({name: "ezq_mcs_ezq_branch_appointment_details"})
export class Appointment {
  @PrimaryGeneratedColumn({name: "MCS_ID"})
  id: string

  @Column({name: "APPOINTMENT_DATE"})
  appointmentDate: Date

  @Column({name: "BRANCH_CODE"})
  branchCode: string

  @Column({name: "BRANCH_NAME"})
  branchName: string

  @Column({name: "CONTACT_NUMBER"})
  contactNumber: string

  @Column({name: "CUSTOMER_NAME"})
  customerName: string

  @Column({name: "DISTRICT"})
  districtName: string

  @ManyToOne(() => District)
  @JoinColumn({name: "DISTRICT_ID"})
  district: District

  @Column({name: "EMAIL_ADDRESS"})
  email: string

  @Column({nullable: true, name: "ID_TYPE"})
  idType: string

  @CreateDateColumn({name: "MCS_CREATED_DATETIME"})
  createdAt: Date

  @UpdateDateColumn({name: "MCS_UPDATED_DATETIME"})
  updatedAt: Date

  @Column({name: "REFERENCE_NUMBER"})
  refNum: string

  @Column({name: "SERVICE"})
  serviceName: string

  @Column({name: "STATE"})
  stateName: string

  @ManyToOne(() => State)
  @JoinColumn({name: "STATE_ID"})
  state: State

  @Column({name: "SUB_SERVICE", nullable:true})
  subService: string

  @Column({name: "TIME_SLOT"})
  timeSlot: string

  @ManyToOne(() => Service)
  @JoinColumn({name: "service_id"})
  service: Service

  @Column({name: "ID_NUMBER", nullable: true})
  idNumber: string
}
