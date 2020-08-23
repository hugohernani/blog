import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'
import { AuthorEntity, PostEntity, CommentEntity } from './entities'
import { AuthorDTO, CommentDTO } from './dto';
import { NestjsQueryGraphQLModule } from '@nestjs-query/query-graphql'
import { NestjsQueryTypeOrmModule } from '@nestjs-query/query-typeorm'
import { PostsService } from './services/';
import { PostsResolver } from './resolvers';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      AuthorEntity, PostEntity, CommentEntity
    ]),
    // NestjsQueryGraphQLModule.forFeature({
    //   imports: [
    //     NestjsQueryTypeOrmModule.forFeature([AuthorEntity, PostEntity, CommentEntity])
    //   ],
    //   resolvers: [
    //     {
    //       DTOClass: AuthorDTO,
    //       EntityClass: AuthorEntity
    //     },
    //     {
    //       DTOClass: CommentDTO,
    //       EntityClass: CommentEntity
    //     }
    //   ],
    // })
  ],
  providers: [
    PostsService,
    PostsResolver
  ]
})
export class ArticlesManagementModule {}
