import {
  Args,
  Parent,
  Query,
  ResolveField,
  Resolver,
} from '@nestjs/graphql'
import { Author, Post } from '../entities'
import { AuthorsService, PostsService } from '../services'

@Resolver(Author)
export class AuthorsResolver {
  constructor(
    private authorsService: AuthorsService,
    private postsService: PostsService
  ) {}

  @Query(() => Author, { name: 'author' })
  async getAuthor(@Args('id') id: string) {
    return this.authorsService.find(id)
  }

  @ResolveField('posts', () => [Post])
  async posts(@Parent() author: Author) {
    const { id } = author
    return this.postsService.findAll({ author: { id: id } })
  }
}
