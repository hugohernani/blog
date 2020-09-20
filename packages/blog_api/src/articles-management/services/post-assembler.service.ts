import { QueryService, Query, InjectQueryService, AssemblerQueryService } from '@nestjs-query/core';
import { PostEntity } from '../entities';
import { PostDTO } from '../dto';
import * as _ from 'lodash';
import { PostAssembler } from '../assemblers';

@QueryService(PostDTO)
export class PostAssemblerService extends AssemblerQueryService<PostDTO, PostEntity> {
  constructor(
    readonly assembler: PostAssembler,
    @InjectQueryService(PostEntity) readonly service: QueryService<PostEntity>,
  ) {
    super(assembler, service);
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
