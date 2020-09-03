import { FilterableField, FilterableRelation } from "@nestjs-query/query-graphql";
import { ObjectType, GraphQLISODateTime, Field } from '@nestjs/graphql'
import { PostDTO } from './post.dto'

@ObjectType('Comment')
@FilterableRelation('post', () => PostDTO, { disableRemove: true, enableTotalCount: true, disableUpdate: true })
export class CommentDTO{
  @FilterableField()
  id!: string;

  @FilterableField()
  title: string;

  @FilterableField()
  content: string;

  @Field(() => GraphQLISODateTime)
  createdAt: string

  @Field(() => GraphQLISODateTime)
  updatedAt: string

  @FilterableField()
  postId!: string;
}
