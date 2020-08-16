import { FilterableField } from "@nestjs-query/query-graphql";
import { ObjectType } from '@nestjs/graphql'

@ObjectType('Author')
export class AuthorDTO{
  @FilterableField()
  id!: string;

  @FilterableField()
  firstName?: string;

  @FilterableField()
  lastName?: string
}
