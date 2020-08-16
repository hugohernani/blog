import { Field, ObjectType, Int } from '@nestjs/graphql';
import { Type } from '@nestjs/common';
import { PageInfo } from './page-info';

export function Connection<E>(edgeRef: Type<E>): any {
  @ObjectType({ isAbstract: true })
  abstract class ConnectionType {
    @Field(() => Int)
    totalCount: number;

    @Field(() => [edgeRef], { nullable: true })
    edges: E[];

    @Field(() => PageInfo, {nullable: true})
    pageInfo: PageInfo
  }
  return ConnectionType;
}
