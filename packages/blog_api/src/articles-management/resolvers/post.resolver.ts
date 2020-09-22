import { ConnectionType, CRUDResolver, ResolverOpts } from '@nestjs-query/query-graphql';
import { Args, Query, Resolver } from '@nestjs/graphql';
import { Inject } from '@nestjs/common';
import { PostDTO } from '../dto';
import { PostConnection, PostQuery } from './types.post';
import { PostAssemblerService } from '../services';
import { SortDirection, SortField } from '@nestjs-query/core';

const createdDefaultSort: SortField<PostDTO> = {
  field: 'createdAt',
  direction: SortDirection.ASC,
};

const disableManyOptions: ResolverOpts = {
  many: {
    disabled: true,
  },
};

@Resolver(() => PostDTO)
export class PostResolver extends CRUDResolver(PostDTO, {
  read: {
    defaultSort: [createdDefaultSort],
  },
  create: { ...disableManyOptions },
  update: { ...disableManyOptions },
  delete: { ...disableManyOptions },
}) {
  constructor(
    @Inject(PostAssemblerService)
    readonly service: PostAssemblerService,
  ) {
    super(service);
  }

  @Query(() => PostConnection)
  async truncatedPosts(@Args() query: PostQuery): Promise<ConnectionType<PostDTO>> {
    return PostConnection.createFromPromise((q) => {
      return this.service.getTruncatedPosts(q, 'content');
    }, query);
  }
}
