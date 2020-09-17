import {
  AbstractAssembler,
  AggregateQuery,
  AggregateResponse,
  Assembler,
  Query,
  transformAggregateQuery,
  transformAggregateResponse,
  transformQuery,
} from '@nestjs-query/core';

import { PostDTO } from '../dto';
import { PostEntity } from '../entities';

@Assembler(PostDTO, PostEntity)
export class PostAssembler extends AbstractAssembler<PostDTO, PostEntity> {
  convertQuery(query: Query<PostDTO>): Query<PostEntity> {
    return transformQuery(query, {});
  }

  convertToDTO(entity: PostEntity): PostDTO {
    const dto = new PostDTO();
    dto.id = entity.id;
    dto.title = entity.title;
    dto.content = entity.content;
    dto.status = entity.status;
    dto.createdAt = entity.createdAt;
    dto.updatedAt = entity.updatedAt;
    return dto;
  }

  convertToEntity(dto: PostDTO): PostEntity {
    const entity = new PostEntity();
    entity.id = dto.id;
    entity.title = dto.title;
    entity.content = dto.content;
    entity.status = dto.status;
    entity.createdAt = dto.createdAt;
    entity.updatedAt = dto.updatedAt;
    return entity;
  }

  convertAggregateQuery(aggregate: AggregateQuery<PostDTO>): AggregateQuery<PostEntity> {
    return transformAggregateQuery(aggregate, {});
  }

  convertAggregateResponse(aggregate: AggregateResponse<PostEntity>): AggregateResponse<PostDTO> {
    return transformAggregateResponse(aggregate, {});
  }
}
