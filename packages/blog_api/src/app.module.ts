import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ArticlesManagementModule } from './articles-management/articles-management.module';
import { GraphQLModule } from '@nestjs/graphql';
import { Module } from '@nestjs/common';
// import { TruncateDirective } from './directives';
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
      // schemaDirectives: {
      //   truncate: TruncateDirective
      // }
    }),
    TypeOrmModule.forRoot(),
    ArticlesManagementModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
