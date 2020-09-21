import { ArticlesManagementModule } from './articles-management/articles-management.module';
import { GraphQLModule } from '@nestjs/graphql';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { join } from 'path';

@Module({
  imports: [
    GraphQLModule.forRoot({
      autoSchemaFile: join(process.cwd(), '..', '..', '..', 'common', 'schema.gql'),
      sortSchema: true,
      debug: true,
      playground: true,
      installSubscriptionHandlers: true,
    }),
    TypeOrmModule.forRoot(),
    ArticlesManagementModule,
  ],
  providers: [],
})
export class AppModule {}
