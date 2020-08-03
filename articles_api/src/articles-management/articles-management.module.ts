import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'
import { PubSub } from 'graphql-subscriptions'
import { customProviderConfig } from '../constants'
import { Author, Comment, Post } from './entities'
import { PostsResolver } from './resolvers/posts.resolver'
import { AuthorsService, CommentsService, PostsService } from './services'

@Module({
  imports: [TypeOrmModule.forFeature([Author, Post, Comment])],
  providers: [
    AuthorsService,
    PostsService,
    CommentsService,
    {
      provide: customProviderConfig.pubSubToken,
      useValue: new PubSub(),
    },
    PostsResolver,
  ],
})
export class ArticlesManagementModule {}
