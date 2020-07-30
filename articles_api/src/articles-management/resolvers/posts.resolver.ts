import { Resolver, Args, Query, ResolveField, Parent } from '@nestjs/graphql';
import { Post, Author } from '../entities';
import { AuthorsService, PostsService } from '../services';

@Resolver(() => Post)
export class PostsResolver {
  constructor(
    private authorsService: AuthorsService,
    private postsService: PostsService
  ){}

  @Query(() => Author, {name: 'author'})
  async getAuthor(@Args('id') id: string){
    return this.authorsService.find(id);
  }

  @ResolveField('posts', () => [Post])
  async posts(@Parent() author: Author){
    const { id } = author;
    return this.postsService.findAll({author: {id: id}})
  }
}
