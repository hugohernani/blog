import { Field, ObjectType } from '@nestjs/graphql';
import { Type } from '@nestjs/common';

export function EdgeNodeCursor<T>(classRef: Type<T>): any {
  @ObjectType(`${classRef.name}Edge`)
  abstract class EdgeType {
    @Field()
    cursor: string;

    @Field(() => classRef)
    node: T;
  }

  return EdgeType;
}
