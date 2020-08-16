import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'
import { AuthorEntity, PostEntity, CommentEntity } from './entities'
import { AuthorDTO, PostDTO, CommentDTO } from './dto';
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
  ]
})
export class ArticlesManagementModule {}
