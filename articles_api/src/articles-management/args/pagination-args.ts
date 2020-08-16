import { ArgsType, Field, Int } from '@nestjs/graphql';
import { IsString, IsNumber } from 'class-validator';

@ArgsType()
export class PaginationArgs {
  @Field(() => Int, {nullable: true})
  @IsNumber()
  first: number = 100;

  @Field({nullable: true})
  @IsString()
  before: string;

  @Field({nullable: true})
  @IsString()
  after: string;
}
