import { Field, ObjectType, Int } from '@nestjs/graphql';
import { Type } from '@nestjs/common';
import { PageInfo } from './page-info';

export function Paginated<T, E>(classRef: Type<T>, edgeRef: Type<E>): any {

  @ObjectType({ isAbstract: true })
  abstract class PaginatedType {
    @Field(() => [edgeRef], { nullable: true })
    edges: E[];

    @Field(() => [classRef], { nullable: true })
    nodes: T[];

    @Field(() => Int)
    totalCount: number;

    @Field(() => PageInfo, {nullable: true})
    pageInfo: PageInfo
  }
  return PaginatedType;
}
