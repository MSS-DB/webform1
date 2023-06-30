import {
  Entity,
  OneToOne,
  Column,
  PrimaryColumn,
  JoinColumn
} from "typeorm"
import {User} from "./User"

@Entity()
export class Token {
  @PrimaryColumn()
  email: string

  @OneToOne(() => User)
  @JoinColumn()
  user: User

  @Column()
  token: string

  @Column()
  active: boolean
}
