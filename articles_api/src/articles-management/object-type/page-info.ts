import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType('PageInfo')
export class PageInfo{
  @Field()
  endCursor: string;

  @Field()
  hasNextPage: boolean;
}
