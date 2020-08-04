import { InputType, Field, registerEnumType } from '@nestjs/graphql';
import { IsString, IsEnum } from 'class-validator';
import { PostStatus } from '../entities';

registerEnumType(PostStatus, { name: 'PostStatus' })

@InputType()
export class PostCreateInput {
  @IsString()
  @Field()
  title: string;

  @IsString()
  @Field()
  description: string;

  @Field(() => PostStatus, {nullable: true})
  @IsEnum(PostStatus)
  status?: PostStatus;

  @IsString()
  @Field()
  authorId: string;
}
