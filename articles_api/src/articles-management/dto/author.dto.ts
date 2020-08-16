import { FilterableField, Relation, FilterableConnection } from "@nestjs-query/query-graphql";
import { ObjectType } from '@nestjs/graphql'
import { PostDTO } from './post.dto'

@ObjectType('Author')
@FilterableConnection('posts', () => PostDTO, { disableRemove: true, enableTotalCount: true, disableUpdate: true })
export class AuthorDTO{
  @FilterableField()
  id!: string;

  @FilterableField()
  firstName?: string;

  @FilterableField()
  lastName?: string
}
