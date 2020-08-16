import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'
import { PubSub } from 'graphql-subscriptions'
import { customProviderConfig } from '../constants'
import { AuthorEntity, PostEntity, Comment } from './entities'
import { AuthorDTO, PostDTO } from './dto';
import { AuthorsResolver, PostsResolver, CommentsResolver } from './resolvers/'
import { AuthorsService, CommentsService, PostsService } from './services'
import { NestjsQueryGraphQLModule } from '@nestjs-query/query-graphql'
import { NestjsQueryTypeOrmModule } from '@nestjs-query/query-typeorm'

@Module({
  imports: [
    TypeOrmModule.forFeature([
      AuthorEntity, PostEntity, Comment
    ]),
    NestjsQueryGraphQLModule.forFeature({
      imports: [
        NestjsQueryTypeOrmModule.forFeature([AuthorEntity, PostEntity])
      ],
      resolvers: [
        {
          DTOClass: AuthorDTO,
          EntityClass: AuthorEntity
        },
        {
          DTOClass: PostDTO,
          EntityClass: PostEntity
        }
      ]
    })
  ],
  providers: [
    AuthorsService,
    PostsService,
    CommentsService,
    {
      provide: customProviderConfig.pubSubToken,
      useValue: new PubSub(),
    },
    // PostsResolver, CommentsResolver
  ],
})
export class ArticlesManagementModule {}
