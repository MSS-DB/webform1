import {DataSource} from "typeorm"

import {Appointment} from "./entity/Appointment"
import {Branch} from "./entity/Branch"
import {District} from "./entity/District"
import {Holiday} from "./entity/Holiday"
import {Lob} from "./entity/Lob"
import {Service} from "./entity/Service"
import {SubService} from "./entity/SubService"
import {State} from "./entity/State"
import {User} from "./entity/User"
import {Token} from "./entity/Token"

const {DB_HOST, DB_NAME, DB_USER, MSSQL_SA_PASSWORD} = process.env

const DbApp: DataSource = new DataSource({
  type: "mssql",
  host: DB_HOST,
  username: DB_USER,
  password: MSSQL_SA_PASSWORD,
  database: DB_NAME,
  synchronize: true,
  extra: {
    trustServerCertificate: true,
  },
  entities: [Appointment, Branch, District, Holiday, Lob, Service, SubService, State, User, Token],
  migrations: [],
  subscribers: [],
})

DbApp.initialize().then(() => {
  console.log("Data source has been initialized!")
}).catch((err) => {
  console.error("Error during data source creation", err)
})

export {
  Appointment,
  Branch,
  District,
  Holiday,
  Lob,
  Service,
  SubService,
  State,
  User
}
export default DbApp
