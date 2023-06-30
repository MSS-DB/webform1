import {Entity, Column, PrimaryColumn} from "typeorm"

@Entity({name: "ezq_mcs_ezq_branch_holidays"})
export class Parameters {
  @PrimaryColumn({unique: true})
  param: string


  @Column()
  value: string
}
