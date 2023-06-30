import {Entity, Column, PrimaryGeneratedColumn} from "typeorm"

//
@Entity({name: "ezq_mcs_ezq_branch_appointment_services_lookups"})
export class Service {
  @PrimaryGeneratedColumn({name: "MCS_ID"})
  id: number

  @Column({name: "MAIN_SERVICE"})
  service: string
  @Column({name: "IMAGE_URL", nullable: true})  image: string

  @Column({name: "IS_POPUP"})
  isPopup: boolean

  @Column({name: "SUB_SERVICE", nullable: true})
  subService: string

  @Column({name: "REDIRECT_URL", nullable: true})
  redirectUrl: string
}
