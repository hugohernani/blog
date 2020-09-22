import { Assembler, ClassTransformerAssembler } from '@nestjs-query/core';

import { PostDTO } from '../dto';
import { PostEntity, PostFileEntity, UploadFileEntity } from '../entities';
import { PostTagEntity } from '../entities/post-tag.entity';
import { TagEntity } from '../entities/tag.entity';

@Assembler(PostDTO, PostEntity)
export class PostAssembler extends ClassTransformerAssembler<PostDTO, PostEntity> {
  convertToDTO(entity: PostEntity): PostDTO {
    const dto = Object.create({
      id: entity.id,
      title: entity.title,
      content: entity.content,
      status: entity.status,
      readingTime: entity.readingTime,
      createdAt: entity.createdAt,
      updatedAt: entity.updatedAt,
    } as PostDTO);
    this.loadFileUrlIntoDTO(dto, entity);
    this.loadTagsIntoDTO(dto, entity);
    return dto;
  }

  convertToEntity(dto: PostDTO): PostEntity {
    const entity = Object.create({
      id: dto.id,
      title: dto.title,
      content: dto.content,
      status: dto.status,
      readingTime: dto.readingTime,
      createdAt: dto.createdAt,
      updatedAt: dto.updatedAt,
    } as PostEntity);
    this.loadFileIntoEntity(entity, dto);
    this.loadTagsIntoEntity(entity, dto);
    return entity;
  }

  private async loadFileUrlIntoDTO(dto: PostDTO, entity: PostEntity): Promise<void> {
    const postFiles = entity.postFiles;
    if (dto.mainImageUrl === undefined && postFiles !== undefined) {
      const postFile = postFiles.find((file) => file.main === true);
      dto.mainImageUrl = postFile ? postFile.uploadFile.url : null;
    }
  }

  private async loadTagsIntoDTO(dto: PostDTO, entity: PostEntity): Promise<void> {
    if (entity.mappedTags !== undefined) {
      dto.tags = entity.mappedTags.map(({ name }) => name);
    } else if (entity.postTags) {
      // for create
      dto.tags = entity.postTags.map(({ tag: { name } }) => name);
    }
  }

  private loadFileIntoEntity(entity: PostEntity, dto: PostDTO): void {
    if (dto.mainImageUrl !== undefined) {
      const uploadFile = new UploadFileEntity();
      uploadFile.url = dto.mainImageUrl;

      const postFile = new PostFileEntity();
      postFile.main = true;
      postFile.uploadFile = uploadFile;

      entity.postFiles = [postFile];
    }
  }

  private loadTagsIntoEntity(entity: PostEntity, dto: PostDTO): void {
    if (dto.tags !== undefined) {
      const tagEntities = dto.tags.map((tag) => {
        const tagEntity = new TagEntity();
        tagEntity.name = tag;
        return tagEntity;
      });
      const postTagEntities = tagEntities.map((tagEntity) => {
        const postTag = new PostTagEntity();
        postTag.tag = tagEntity;
        return postTag;
      });

      entity.postTags = postTagEntities;
    }
  }
}
