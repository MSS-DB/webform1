import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn
} from "typeorm"

// MCS_ID,MCS_UPDATED_DATETIME
@Entity({name: "ezq_mcs_ezq_branch_holidays"})
export class Holiday {
  @PrimaryGeneratedColumn({name: "MCS_ID"})
  id: number

  @Column({name: "BRANCH_CODE"})
  branchCode: string


  @Column({name: "HOLIDAY_DATES"})
  name: string

  @CreateDateColumn({name: "MCS_CREATED_DATETIME"})
  createdAt: Date

  @UpdateDateColumn({name: "MCS_UPDATED_DATETIME"})
  updatedAt: Date
}
