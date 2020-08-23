import { Query, Resolver, Args } from '@nestjs/graphql';
import { PostEntity } from '../entities';
import { ConnectionResolver } from '../types';
import { PostsService } from '../services';
import { PostEntityConnectionArgs } from '../dto';

const PostConnection = ConnectionResolver(PostEntity);

@Resolver(() => PostEntity)
export class PostsResolver {
  constructor(private readonly postsService: PostsService) {}

  @Query(() => PostConnection)
  allPosts(
    @Args() { where, orderBy, ...args }: PostEntityConnectionArgs
  ): Promise<typeof PostConnection> {
    return this.postsService.find(where, undefined, args);
  }
}

export default PostsResolver
