import { Field, ObjectType } from '@nestjs/graphql';
import { Type } from '@nestjs/common';
import * as Relay from 'graphql-relay';
import { PageInfo } from "nestjs-graphql-relay";

export function ConnectionResolver<T extends Type<unknown>>(classRef: T): any {
  @ObjectType({isAbstract: true})
  abstract class EdgeType implements Relay.Edge<T> {
    @Field()
    cursor: Relay.ConnectionCursor;

    @Field(() => classRef)
    node: T;
  }

  @ObjectType({isAbstract: true})
  abstract class ConnectionResolverHost {
    @Field()
    readonly pageInfo: PageInfo

    @Field(() => [EdgeType])
    readonly edges: Array<Relay.Edge<T>>;
  }
  return ConnectionResolverHost;
}
