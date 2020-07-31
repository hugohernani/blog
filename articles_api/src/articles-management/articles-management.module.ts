import { Module } from '@nestjs/common';
import { AuthorsService, PostsService } from './services';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Author, Post } from './entities'
import { CommentsService } from './services/comments.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([Author, Post])
  ],
  providers: [AuthorsService, PostsService, CommentsService]
})
export class ArticlesManagementModule {}
