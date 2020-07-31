import { Module, } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { GraphQLModule } from "@nestjs/graphql";
import { join } from "path";
import { TypeOrmModule } from '@nestjs/typeorm';
import { ArticlesManagementModule } from './articles-management/articles-management.module';

@Module({
  imports: [
    GraphQLModule.forRoot({
      autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
      debug: true,
      playground: true,
      installSubscriptionHandlers: true
    }),
    TypeOrmModule.forRoot(),
    ArticlesManagementModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
