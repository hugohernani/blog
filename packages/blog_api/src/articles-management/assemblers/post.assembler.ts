import { Assembler, ClassTransformerAssembler } from '@nestjs-query/core';

import { PostDTO } from '../dto';
import { PostEntity } from '../entities';
import PostFileEntity from '../entities/postFile.entity';
import UploadFileEntity from '../entities/uploadFile.entity';

@Assembler(PostDTO, PostEntity)
export class PostAssembler extends ClassTransformerAssembler<PostDTO, PostEntity> {
  convertToDTO(entity: PostEntity): PostDTO {
    const dto = Object.create({
      id: entity.id,
      title: entity.title,
      content: entity.content,
      readingTime: entity.readingTime,
      createdAt: entity.createdAt,
      updatedAt: entity.updatedAt,
    } as PostDTO);
    this.loadFileUrlIntoDTO(dto, entity);
    return dto;
  }

  convertToEntity(dto: PostDTO): PostEntity {
    const entity = Object.create({
      id: dto.id,
      title: dto.title,
      status: dto.status,
      readingTime: dto.readingTime,
      createdAt: dto.createdAt,
      updatedAt: dto.updatedAt,
    } as PostEntity);
    this.loadFileIntoEntity(entity, dto);
    return entity;
  }

  private async loadFileUrlIntoDTO(dto: PostDTO, entity: PostEntity): Promise<void> {
    const postFiles = await entity.postFiles;
    if (dto.mainImageUrl === undefined && postFiles !== undefined) {
      const postFile = postFiles.find((file) => file.main === true);
      dto.mainImageUrl = postFile ? postFile.uploadFile.url : '';
    }
  }

  private loadFileIntoEntity(entity: PostEntity, dto: PostDTO): void {
    if (dto.mainImageUrl !== undefined) {
      const uploadFile = Object.create({ url: dto.mainImageUrl } as UploadFileEntity);
      const postFile = Object.create({ main: true, uploadFile: uploadFile } as PostFileEntity);

      entity.postFiles = Promise.resolve([postFile]);
    }
  }
}
