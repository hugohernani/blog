import { CreateOneInputType } from '@nestjs-query/query-graphql';
import { HookFunc } from '@nestjs-query/query-graphql/dist/src/decorators';
import readingTime = require('reading-time');
import { PostDTO } from '../dto';

export const beforeCreatePost: HookFunc<CreateOneInputType<PostDTO>> = (
  createInput: CreateOneInputType<PostDTO>,
): CreateOneInputType<PostDTO> => {
  const {
    input: { content, readingTime: readTime },
  } = createInput;
  if (readTime === undefined) {
    createInput.input.readingTime = readingTime(content).time;
  }
  return createInput;
};
