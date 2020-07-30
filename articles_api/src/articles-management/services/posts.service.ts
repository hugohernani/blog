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
}
