import { InputType, Field, registerEnumType } from '@nestjs/graphql';
import { IsString, IsEnum } from 'class-validator';
import { PostStatus } from '../entities';

registerEnumType(PostStatus, { name: 'PostStatus' })

@InputType()
export class PostCreateInput {
  @IsString()
  title: string;

  @IsString()
  description: string;

  @Field(() => PostStatus)
  @IsEnum(PostStatus)
  status: PostStatus;
}
