import { PartialType, InputType } from '@nestjs/graphql';
import { IsString, IsUUID } from 'class-validator';
import { PostCreateInput } from './post-create-input';

@InputType()
export class PostUpdateInput extends PartialType(PostCreateInput) {
  @IsString()
  @IsUUID()
  id: string;
}
