import { AuthorDTO, CommentDTO, PostDTO } from './dto'
import { AuthorEntity, CommentEntity, PostEntity } from './entities'
import {
  NestjsQueryGraphQLModule,
  ReadResolverOpts,
} from '@nestjs-query/query-graphql'
import { SortDirection, SortField } from '@nestjs-query/core'

import { Module } from '@nestjs/common'
import { NestjsQueryTypeOrmModule } from '@nestjs-query/query-typeorm'
import { TypeOrmModule } from '@nestjs/typeorm'

const createdDefaultSort: SortField<PostEntity> = {
  field: 'createdAt',
  direction: SortDirection.DESC,
}

const defaultReadSort = { defaultSort: [createdDefaultSort] }

@Module({
  imports: [
    TypeOrmModule.forFeature([AuthorEntity, PostEntity, CommentEntity]),
    NestjsQueryGraphQLModule.forFeature({
      imports: [
        NestjsQueryTypeOrmModule.forFeature([
          AuthorEntity,
          PostEntity,
          CommentEntity,
        ]),
      ],
      resolvers: [
        {
          DTOClass: AuthorDTO,
          EntityClass: AuthorEntity,
        },
        {
          DTOClass: PostDTO,
          EntityClass: PostEntity,
          read: {
            ...defaultReadSort,
          } as ReadResolverOpts<unknown>,
        },
        {
          DTOClass: CommentDTO,
          EntityClass: CommentEntity,
        },
      ],
    }),
  ],
})
export class ArticlesManagementModule {}
