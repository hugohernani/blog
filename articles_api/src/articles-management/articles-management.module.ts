import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'
import { PubSub } from 'graphql-subscriptions'
import { customProviderConfig } from '../constants'
import { AuthorEntity, PostEntity, CommentEntity } from './entities'
import { AuthorDTO, PostDTO, CommentDTO } from './dto';
import { AuthorsResolver, PostsResolver, CommentsResolver } from './resolvers/'
import { AuthorsService, CommentsService, PostsService } from './services'
import { NestjsQueryGraphQLModule } from '@nestjs-query/query-graphql'
import { NestjsQueryTypeOrmModule } from '@nestjs-query/query-typeorm'

@Module({
  imports: [
    TypeOrmModule.forFeature([
      AuthorEntity, PostEntity, CommentEntity
    ]),
    NestjsQueryGraphQLModule.forFeature({
      imports: [
        NestjsQueryTypeOrmModule.forFeature([AuthorEntity, PostEntity, CommentEntity])
      ],
      resolvers: [
        {
          DTOClass: AuthorDTO,
          EntityClass: AuthorEntity
        },
        {
          DTOClass: PostDTO,
          EntityClass: PostEntity
        },
        {
          DTOClass: CommentDTO,
          EntityClass: CommentEntity
        }
      ]
    })
  ],
  providers: [
    // AuthorsService,
    // PostsService,
    // CommentsService,
    // {
    //   provide: customProviderConfig.pubSubToken,
    //   useValue: new PubSub(),
    // },
    // PostsResolver, CommentsResolver
  ],
})
export class ArticlesManagementModule {}
