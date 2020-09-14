import { Field, GraphQLISODateTime, ObjectType } from '@nestjs/graphql'
import {
  FilterableConnection,
  FilterableField,
  FilterableRelation,
} from '@nestjs-query/query-graphql'

import { AuthorDTO } from './author.dto'
import { CommentDTO } from './comment.dto'

@ObjectType('Post')
@FilterableRelation('author', () => AuthorDTO, {
  disableRemove: true,
  enableTotalCount: true,
  disableUpdate: true,
})
@FilterableConnection('comments', () => CommentDTO, {
  disableRemove: true,
  enableTotalCount: true,
  disableUpdate: true,
})
export class PostDTO {
  @FilterableField()
  id!: string

  @FilterableField()
  title: string

  @FilterableField()
  content: string

  @FilterableField()
  status: string

  @FilterableField()
  @Field(() => GraphQLISODateTime)
  createdAt: Date

  @Field(() => GraphQLISODateTime)
  updatedAt: Date

  @FilterableField()
  authorId!: string
}
