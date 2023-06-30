import {Entity, Column, PrimaryColumn} from "typeorm"

@Entity({name: "ezq_lobs"})
export class Lob {
  @PrimaryColumn({name: "_id"})
  id: string

  @Column()
  name: string
}
