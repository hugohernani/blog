import { InputType, Field, registerEnumType } from '@nestjs/graphql';
import { IsUUID, IsEnum } from 'class-validator';
import { PostStatus } from '../entities';

registerEnumType(PostStatus, { name: 'PostStatus' })

@InputType()
export class PostChangeStatusInput {
  @Field()
  @IsUUID()
  id: string;

  @Field(() => PostStatus)
  @IsEnum(PostStatus)
  status: PostStatus;
}
