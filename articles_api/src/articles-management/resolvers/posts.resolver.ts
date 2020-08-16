import {
  Args,
  Mutation,
  Parent,
  Query,
  ResolveField,
  Resolver
} from '@nestjs/graphql'
import { Comment, Post } from '../entities'
import { CommentsService, PostsService } from '../services'
import { PostChangeStatusInput, PostCreateInput, PostUpdateInput } from '../inputs'
import { ConnectionPost, PaginatedPost } from '../object-type'
import { PaginationArgs } from '../args';

@Resolver(Post)
export class PostsResolver {
  constructor(
    private postsService: PostsService,
    private commentsService: CommentsService
  ) {}

  @Query(() => PaginatedPost, { name: 'allPosts'})
  async getPosts(@Args() paginationArgs: PaginationArgs){
    const result = await this.postsService.findAll({});
    console.log(result)
    return result;
  }

  @Query(() => Post, { name: 'post' })
  async getPost(@Args('id') id: string) {
    return this.postsService.find(id)
  }

  @ResolveField('comments', () => [Comment])
  async comments(@Parent() post: Post) {
    const { id } = post;
    return this.commentsService.findAll({ post: { id: id } })
  }

  @Mutation(() => Post)
  async create(@Args('inputPost') postData: PostCreateInput) {
    return this.postsService.create(postData)
  }

  @Mutation(() => Post)
  async update(@Args('inputPost') postData: PostUpdateInput) {
    return this.postsService.update(postData)
  }

  @Mutation(() => Post)
  async delete(@Args('id') id: string) {
    return this.postsService.destroy(id)
  }

  @Mutation(() => Post)
  async changeStatus(@Args('changeStatusInput') changeStatusData: PostChangeStatusInput) {
    return this.postsService.changeStatus(changeStatusData)
  }
}
