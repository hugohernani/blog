import { PostEntity } from './entities';
import { NestjsQueryGraphQLModule } from '@nestjs-query/query-graphql';

import { Module } from '@nestjs/common';
import { NestjsQueryTypeOrmModule } from '@nestjs-query/query-typeorm';
import { PostAssembler } from './assemblers';
import { PostResolver } from './resolvers/post.resolver';
import { PostAssemblerService } from './services';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PostDatabaseService } from './services/post-database.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([PostEntity]),
    NestjsQueryGraphQLModule.forFeature({
      imports: [NestjsQueryTypeOrmModule.forFeature([PostEntity])],
      assemblers: [PostAssembler],
      resolvers: [],
    }),
  ],
  providers: [PostDatabaseService, PostAssemblerService, PostResolver],
})
export class ArticlesManagementModule {}
