import { AuthorDTO, CommentDTO, PostDTO } from './dto'
import { AuthorEntity, CommentEntity, PostEntity } from './entities'
import {
  NestjsQueryGraphQLModule,
  ReadResolverOpts,
} from '@nestjs-query/query-graphql'
import { SortDirection, SortField } from '@nestjs-query/core'

import { GraphQLModule }  from "@nestjs/graphql";
import { Module } from '@nestjs/common'
import { NestjsQueryTypeOrmModule } from '@nestjs-query/query-typeorm'
import { PostAssembler } from './assemblers'
import { PostResolver } from './resolvers/post.resolver'
import { PostService } from './services'
import { TruncateDirective } from '../directives';
import { TypeOrmModule } from '@nestjs/typeorm'
import { join } from "path";

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
        ])
      ],
      assemblers: [PostAssembler],
      // services: [PostService],
      resolvers: [
        {
          DTOClass: AuthorDTO,
          EntityClass: AuthorEntity,
        },
        // {
        //   DTOClass: PostDTO,
        //   EntityClass: PostEntity,
        //   AssemblerClass: PostAssembler,
        //   ServiceClass: PostService,
        // },
        {
          DTOClass: CommentDTO,
          EntityClass: CommentEntity,
        },
      ],
    }),
  ],
  providers: [PostService, PostResolver],
})
export class ArticlesManagementModule {}
