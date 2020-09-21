import { Field, GraphQLISODateTime, Float, ObjectType } from '@nestjs/graphql';
import { BeforeCreateOne, FilterableField } from '@nestjs-query/query-graphql';

import { beforeCreatePost } from '../dto-hooks';

@ObjectType('Post')
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
