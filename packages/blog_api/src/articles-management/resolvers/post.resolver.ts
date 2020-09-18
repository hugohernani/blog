import { ConnectionType, CRUDResolver } from '@nestjs-query/query-graphql';
import { Args, Query, Resolver } from '@nestjs/graphql';
import { Inject } from '@nestjs/common';
import { PostDTO } from '../dto';
import { PostConnection, PostQuery } from './types.post';
import { PostService } from '../services';

// const createdDefaultSort: SortField<PostDTO> = {
//   field: 'createdAt',
//   direction: SortDirection.DESC,
// };
//
@Resolver(() => PostDTO)
export class PostResolver extends CRUDResolver(PostDTO, {}) {
  constructor(
    @Inject(PostService)
    readonly service: PostService,
  ) {
    super(service);
  }

  // TODO Debug to understand why getTruncatedPosts is not being called on PostConnection.createFromPromise
  @Query(() => PostConnection)
  truncatedPosts(@Args() query: PostQuery): Promise<ConnectionType<PostDTO>> {
    return PostConnection.createFromPromise((q) => {
      return this.service.getTruncatedPosts(q, 'content');
    }, query);
  }
}
