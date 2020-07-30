import { InputType, Field } from '@nestjs/graphql';
import { IsUUID, IsEnum } from 'class-validator';
import { PostStatus } from '../entities';

@InputType()
export class PostChangeStatusInput {
  @Field()
  @IsUUID()
  id: string;

  @IsEnum(PostStatus)
  status: string;
}
