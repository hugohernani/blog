import { InputType, Field } from '@nestjs/graphql';
import { IsString } from 'class-validator';

@InputType()
export class PostCommentInput {
  @Field()
  @IsString()
  content: string;
}
