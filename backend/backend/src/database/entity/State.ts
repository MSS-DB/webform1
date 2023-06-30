import {Entity, Column, PrimaryGeneratedColumn, CreateDateColumn} from "typeorm"

@Entity({name: "ezq_mcs_ezq_branch_states"})
export class State {
  @PrimaryGeneratedColumn({name: "STATE_ID"})
  stateId: number

  @Column({name: "STATE_NAME"})
  name: string

  @Column({name: "WEEK_END_DAYS"})
  weekend: string

  @CreateDateColumn({name: "MCS_CREATED_DATETIME"})
  createdAt: Date
}
