import { Field, GraphQLISODateTime, Float, ObjectType } from '@nestjs/graphql';
import {
  BeforeCreateOne,
  FilterableConnection,
  FilterableField,
  FilterableRelation,
} from '@nestjs-query/query-graphql';

import { AuthorDTO } from './author.dto';
import { CommentDTO } from './comment.dto';
import { beforeCreatePost } from '../dto-hooks';

const commonFilterableRelationOpts = {
  disableRemove: true,
  enableTotalCount: true,
  disableUpdate: true,
};

@ObjectType('Post')
@FilterableRelation('author', () => AuthorDTO, commonFilterableRelationOpts)
@FilterableConnection('comments', () => CommentDTO, commonFilterableRelationOpts)
@BeforeCreateOne(beforeCreatePost)
export class PostDTO {
  @FilterableField()
  id!: string;

  @FilterableField()
  title: string;

  @FilterableField()
  content: string;

  @FilterableField()
  status: string;

  @Field(() => Float, { nullable: true })
  readingTime?: number;

  @FilterableField()
  @Field(() => GraphQLISODateTime)
  createdAt: Date;

  @Field(() => GraphQLISODateTime)
  updatedAt: Date;

  // @Field({ nullable: true })
  // @Exclude()
  // file: Upload;

  @Field({ nullable: true })
  mainImageUrl?: string;

  @Field(() => [String], { nullable: 'itemsAndList' })
  tags?: string[];

  // @FilterableField()
  // authorId!: string
}
