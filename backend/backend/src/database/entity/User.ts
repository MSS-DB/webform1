import {
  Entity,
  Column,
  PrimaryColumn,
  CreateDateColumn,
  UpdateDateColumn, BeforeInsert, BeforeUpdate
} from "typeorm"

import { hashSync } from "bcrypt"
import {salt} from "../../config"

const hashPassword = (password: string): string => hashSync(password, salt)

@Entity()
export class User {
  @PrimaryColumn()
  email: string

  @Column({name: "name"})
  displayName: string

  @Column({name: "pf_no", nullable: true})
  pfNo: string

  @Column()
  password: string

  @Column({nullable: true})
  picture: string

  @CreateDateColumn({name: "created_at"})
  createdAt: Date

  @UpdateDateColumn({name: "updated_at"})
  updatedAt: Date

  @BeforeInsert()
  async insert() {
    this.email = this.email.toLowerCase()
    this.password = hashPassword(this.password)
  }

  @BeforeUpdate()
  async update() {
    this.email = this.email.toLowerCase()
    this.password = hashPassword(this.password)
  }
}
