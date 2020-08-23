import { QueryArgsType, PagingStrategies } from '@nestjs-query/query-graphql';
import { ArgsType, Field } from '@nestjs/graphql';
import { PostDTO } from '../dto';

import { CursorPagingType } from '@nestjs-query/query-graphql';

export const CursorPaging = CursorPagingType()

@ArgsType()
export class PostPagingQuery extends QueryArgsType(PostDTO, {pagingStrategy: PagingStrategies.NONE}) {
  @Field(() => CursorPaging, {nullable: true})
  paging?: never;
}
