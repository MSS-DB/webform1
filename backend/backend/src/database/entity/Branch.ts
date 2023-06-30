import {Entity, Column, PrimaryGeneratedColumn, CreateDateColumn,} from "typeorm"

@Entity({name: "ezq_mcs_ezq_branch_appointment_branch_details"})
export class Branch {
  @PrimaryGeneratedColumn({name: "MCS_ID"})
  id: number

  @Column({name: "BRANCH_CODE"})
  branchCode: string

  @Column({name: "BRANCH_ADDRESS"})
  branchAddress: string

  @Column({name: "BRANCH_EMAIL"})
  branchEmail: string

  @Column({name: "BRANCH_NAME"})
  branchName: string

  @Column({name: "BRANCH_REGION"})
  branchRegion: string


  @Column({name: "DISTRICT_NAME"})
  districtName: string

  @Column('time', {name: "HOUR_END"})
  hourEnd: Date

  @Column('time', {name: "HOUR_START"})
  hourStart: Date

  @Column('time', {name: "LUNCH_END"})
  lunchEnd: Date

  @Column('time', {name: "LUNCH_START"})
  lunchStart: Date

  @Column({name: "NO_OF_COUNTER"})
  noCounter: number

  @Column({name: "STATE_NAME"})
  stateName: string

  @Column({name: "SUB_SERVICE", nullable: true})
  subService: string

  @CreateDateColumn({name: "MCS_CREATED_DATETIME"})
  createdAt: Date
}
