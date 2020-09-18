import { Field, GraphQLISODateTime, Int, ObjectType } from '@nestjs/graphql';
import {
  BeforeCreateOne,
  CreateOneInputType,
  FilterableConnection,
  FilterableField,
  FilterableRelation,
} from '@nestjs-query/query-graphql';

import { AuthorDTO } from './author.dto';
import { CommentDTO } from './comment.dto';
import readingTime = require('reading-time');

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
// eslint-disable-next-line @typescript-eslint/no-use-before-define
@BeforeCreateOne((createInput: CreateOneInputType<PostDTO>) => {
  const {
    input: { content, readingTime: readTime },
  } = createInput;
  if (readTime === undefined) {
    createInput.input.readingTime = readingTime(content).time;
  }
  return createInput;
})
export class PostDTO {
  @FilterableField()
  id!: string;

  @FilterableField()
  title: string;

  @FilterableField()
  content: string;

  @FilterableField()
  status: string;

  @Field(() => Int, { nullable: true })
  readingTime: number;

  @FilterableField()
  @Field(() => GraphQLISODateTime)
  createdAt: Date;

  @Field(() => GraphQLISODateTime)
  updatedAt: Date;

  // @FilterableField()
  // authorId!: string
}
