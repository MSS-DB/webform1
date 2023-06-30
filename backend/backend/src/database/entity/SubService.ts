import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  ManyToMany,
  JoinTable
} from "typeorm"
import {Branch} from "./Branch"

@Entity({name: "ezq_mcs_ezq_branch_appointment_services"})
export class SubService {
  @PrimaryGeneratedColumn({name: "MCS_ID"})
  mcsId: number

  @Column({name: "ACTIVITY"})
  subService: string

  @ManyToMany(() => Branch)
  @JoinTable({name: "BRANCH_CODE"})
  branches: Branch[]

  @Column({name: "MAIN_SERVICE"})
  service: string

  @CreateDateColumn({name: "MCS_CREATED_DATETIME"})
  createdAt: Date

  @UpdateDateColumn({name: "MCS_UPDATED_DATETIME"})
  updatedAt: Date

  @Column({name: "NO_OF_BOOKING_PER_TIMESLOT"})
  noBooking: number

  @Column({name: "SERVICE_INTERVAL_TIME"})
  state: number
}
