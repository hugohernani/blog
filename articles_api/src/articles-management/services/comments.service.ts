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

  async addComment({postId, content}: {postId: string, content: string}): Promise<Comment>{
    return await this.commentsRepository.save({postId, content})
  }
}
