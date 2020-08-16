import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Post } from '../entities';

type PaginationArgs = {
  limit: number,
  offset: number
};

@Injectable()
export class PostsService {
  constructor(
    @InjectRepository(Post)
    private postsRepository: Repository<Post>
  ){}

  async find(id: string): Promise<Post>{
    return await this.postsRepository.findOne(id);
  }

  // TODO: Replace Object type with DTO objects
  async findAll(condition: Object, paginationArgs?: PaginationArgs): Promise<Post[]>{
    return await this.postsRepository.find({
      where: condition,
      relations: ['author']
    })
  }

  // TODO: Replace Object type with DTO objects
  async create(postAttrs: Object): Promise<Post>{
    const newPost = this.postsRepository.create(postAttrs);
    await this.postsRepository.save(newPost);
    return newPost;
  }

  // TODO: Replace Object type with DTO objects
  async update(postAttrs: Object): Promise<Post>{
    const updatedPost = this.postsRepository.create(postAttrs);
    await this.postsRepository.save(updatedPost);
    return updatedPost;
  }

  async destroy(id: string): Promise<Post>{
    const post = await this.postsRepository.findOne(id);
    await this.postsRepository.remove(post);
    return post;
  }

  async changeStatus({id, status}: {id: string, status: string}): Promise<Post>{
    return await this.postsRepository.save({id,status})
  }
}
