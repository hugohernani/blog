import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ArticlesManagementModule } from './articles-management/articles-management.module';
import { GraphQLModule } from '@nestjs/graphql';
import { Module } from '@nestjs/common';
// import { TruncateDirective } from './directives';
import { TypeOrmModule } from '@nestjs/typeorm';
import { join } from 'path';
import { Upload } from './scalars/upload.scalar';

@Module({
  imports: [
    GraphQLModule.forRoot({
      autoSchemaFile: join(process.cwd(), '..', '..', '..', 'common', 'schema.gql'),
      sortSchema: true,
      debug: true,
      playground: true,
      installSubscriptionHandlers: true,
      uploads: {
        maxFileSize: 20000000, // 20 MB
        maxFiles: 5,
      },
      // schemaDirectives: {
      //   truncate: TruncateDirective
      // }
    }),
    TypeOrmModule.forRoot(),
    ArticlesManagementModule,
  ],
  controllers: [AppController],
  providers: [AppService, Upload],
})
export class AppModule {}
