import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  ManyToOne, JoinColumn
} from "typeorm"
import {State} from "./State"

@Entity({name: "ezq_mcs_ezq_branch_districts"})
export class District {
  @PrimaryGeneratedColumn({name: "DISTRICT_ID"})
  id: number

  @Column({name: "DISTRICT_NAME"})
  name: string

  @CreateDateColumn({name: "MCS_CREATED_DATETIME"})
  createdAt: Date

  @ManyToOne(() => State)
  @JoinColumn({name: "STATE_ID"})
  state: State
}
