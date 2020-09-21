import { QueryService, Query, AssemblerQueryService } from '@nestjs-query/core';
import { PostEntity } from '../entities';
import { PostDTO } from '../dto';
import * as _ from 'lodash';
import { PostAssembler } from '../assemblers';
import { PostDatabaseService } from './post-database.service';
import { Inject } from '@nestjs/common';

@QueryService(PostDTO)
export class PostAssemblerService extends AssemblerQueryService<PostDTO, PostEntity> {
  constructor(
    readonly assembler: PostAssembler,
    @Inject(PostDatabaseService) readonly postDatabaseService: PostDatabaseService,
  ) {
    super(assembler, postDatabaseService);
  }

  async getTruncatedPosts(incomingQuery: Query<PostDTO>, attr: string, size = 400): Promise<PostDTO[]> {
    const postDTOs = await this.query(incomingQuery);

    return postDTOs.map((postDTO) => {
      postDTO[attr] = _.truncate(postDTO[attr], {
        length: size,
        separator: /,? +/,
      });
      return postDTO;
    });
  }
}
