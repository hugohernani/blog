import { Field, GraphQLISODateTime, Int, ObjectType } from '@nestjs/graphql';
import {
  BeforeCreateOne,
  FilterableConnection,
  FilterableField,
  FilterableRelation,
} from '@nestjs-query/query-graphql';

import { AuthorDTO } from './author.dto';
import { CommentDTO } from './comment.dto';
import { Upload } from 'src/scalars/upload.scalar';
import { Exclude } from 'class-transformer/decorators';
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

  @Field(() => Int, { nullable: true })
  readingTime: number;

  @FilterableField()
  @Field(() => GraphQLISODateTime)
  createdAt: Date;

  @Field(() => GraphQLISODateTime)
  updatedAt: Date;

  @Field({ nullable: true })
  @Exclude()
  file: Upload;

  @Field({ nullable: true })
  fileUrl: string;

  // @FilterableField()
  // authorId!: string
}
