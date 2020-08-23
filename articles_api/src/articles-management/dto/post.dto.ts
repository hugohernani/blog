import { FilterableField, FilterableRelation, FilterableConnection } from "@nestjs-query/query-graphql";
import { ObjectType, GraphQLISODateTime, Field } from '@nestjs/graphql'
import { AuthorDTO } from './author.dto'
import { CommentDTO } from './comment.dto'

@ObjectType('Post')
@FilterableRelation('author', () => AuthorDTO, { disableRemove: true, enableTotalCount: true, disableUpdate: true })
@FilterableConnection('comments', () => CommentDTO, { disableRemove: true, enableTotalCount: true, disableUpdate: true })
export class PostDTO{
  @FilterableField()
  id!: string;

  @FilterableField({nullable: true})
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
  authorId!: string;
}
