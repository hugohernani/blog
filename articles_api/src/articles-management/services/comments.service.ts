import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Comment } from '../entities';

@Injectable()
export class CommentsService {
  constructor(
    @InjectRepository(Comment)
    private commentsRepository: Repository<Comment>
  ){}

  async addComment(commentAttrs: Object): Promise<Comment>{
    const newComment = this.commentsRepository.create(commentAttrs)
    await this.commentsRepository.save(newComment);
    return newComment;
  }

  // TODO: Replace Object type with DTO objects
  async findAll(condition: Object): Promise<Comment[]>{
    return await this.commentsRepository.find({where: condition})
  }

  async destroy(id: string): Promise<Comment>{
    const post = await this.commentsRepository.findOne(id);
    await this.commentsRepository.remove(post);
    return post;
  }
}
