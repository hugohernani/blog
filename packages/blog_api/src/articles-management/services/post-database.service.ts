import { DeepPartial, QueryService } from '@nestjs-query/core';
import { TypeOrmQueryService } from '@nestjs-query/query-typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, SelectQueryBuilder } from 'typeorm';
import { PostEntity, UploadFileEntity } from '../entities';
import { TagEntity } from '../entities/tag.entity';
import { PostQuery } from '../resolvers/types.post';

@QueryService(PostEntity)
export class PostDatabaseService extends TypeOrmQueryService<PostEntity> {
  constructor(@InjectRepository(PostEntity) repo: Repository<PostEntity>) {
    super(repo);
  }

  async query(query: PostQuery): Promise<PostEntity[]> {
    const baseSelectBuilder = this.filterQueryBuilder.select(query);
    return this.loadWithMappedTags(baseSelectBuilder).getMany();
  }

  async findById(id: string | number): Promise<PostEntity | undefined> {
    const baseSelectBuilder = this.repo.createQueryBuilder().where('PostEntity.id = :id', { id: id });
    return this.loadWithMappedTags(baseSelectBuilder).getOne();
  }

  async updateOne(id: string | number, update: DeepPartial<PostEntity>): Promise<PostEntity> {
    this._ensureIdIsNotPresent(update as PostEntity);
    const postEntity = await this.findById(id);
    if (!postEntity) {
      throw new Error('Post cannot be found with specified id');
    }
    return this.repo.save(this.repo.merge(postEntity, update));
  }

  private loadWithMappedTags(selectQueryBuilder: SelectQueryBuilder<PostEntity>): SelectQueryBuilder<PostEntity> {
    return selectQueryBuilder
      .leftJoinAndSelect('PostEntity.postFiles', '_postFiles')
      .leftJoinAndSelect('_postFiles.uploadFile', '_files')
      .innerJoinAndSelect('PostEntity.postTags', '_postTags')
      .innerJoinAndMapMany('PostEntity.mappedTags', TagEntity, '_tags', '"_postTags"."tagName" = "_tags"."name"');
  }

  private _ensureIdIsNotPresent(entity: PostEntity): void {
    if (this.repo.hasId(entity)) {
      throw new Error('Id cannot be specified when updating');
    }
  }
}
