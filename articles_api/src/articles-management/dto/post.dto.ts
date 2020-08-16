import { FilterableField, FilterableRelation } from "@nestjs-query/query-graphql";
import { ObjectType, GraphQLISODateTime, Field } from '@nestjs/graphql'
import { AuthorDTO } from './author.dto'

@ObjectType('Post')
@FilterableRelation('author', () => AuthorDTO, { disableRemove: true, enableTotalCount: true, disableUpdate: true })
export class PostDTO{
  @FilterableField()
  id!: string;

  @FilterableField()
  title: string;

  @FilterableField()
  content: string;

  @FilterableField()
  status: string

  @Field(() => GraphQLISODateTime)
  createdAt: string

  @Field(() => GraphQLISODateTime)
  updatedAt: string

  @FilterableField()
  todoItemId!: string;
}
