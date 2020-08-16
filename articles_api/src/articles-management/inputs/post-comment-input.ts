import { InputType, Field } from '@nestjs/graphql';
import { IsString, IsUUID } from 'class-validator';

@InputType()
export class PostCommentInput {
  @Field()
  @IsString()
  content: string;

  @Field()
  @IsUUID()
  postId: string;
}
