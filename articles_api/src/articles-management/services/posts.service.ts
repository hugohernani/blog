import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Post } from '../entities';

@Injectable()
export class PostsService {
  constructor(
    @InjectRepository(Post)
    private postsRepository: Repository<Post>
  ){}

  async findAll(condition: Object): Promise<Post[]>{
    return await this.postsRepository.find({
      where: condition,
      relations: ['author']}
    )
  }
  async create(postAttrs: Post): Promise<Post>{
    return await this.postsRepository.save(postAttrs);
  }

  async update(postAttrs: Post): Promise<Post>{
    return await this.postsRepository.save(postAttrs);
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
