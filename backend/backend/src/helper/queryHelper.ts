import {ObjectLiteral, SelectQueryBuilder} from "typeorm"

export function apiQueryBuilder(Query: SelectQueryBuilder<ObjectLiteral>, properties: object): SelectQueryBuilder<ObjectLiteral> {
  console.log(properties)
  return Query
}
