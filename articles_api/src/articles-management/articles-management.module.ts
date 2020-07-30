import { Module } from '@nestjs/common';
import { AuthorsService, PostsService } from './services';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Author, Post } from './entities'

@Module({
  imports: [
    TypeOrmModule.forFeature([Author, Post])
  ],
  providers: [AuthorsService, PostsService]
})
export class ArticlesManagementModule {}
