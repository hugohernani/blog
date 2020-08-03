import { Inject } from '@nestjs/common'
import {
  Args,
  Mutation,
  Parent,
  Query,
  ResolveField,
  Resolver,
  Subscription,
} from '@nestjs/graphql'
import { PubSub } from 'graphql-subscriptions'
import { customProviderConfig } from '../../constants'
import { Author, Post, Comment } from '../entities'
import { AuthorsService, CommentsService, PostsService } from '../services'
import { PostChangeStatusInput } from './post-change-status-input'
import { PostCommentInput } from './post-comment-input'
import { PostCreateInput } from './post-create-input'
import { PostUpdateInput } from './post-update-input'

@Resolver(Post)
export class PostsResolver {
  // simple pubsub. For prod use external librery:
  // - https://github.com/apollographql/graphql-subscriptions#getting-started-with-your-first-subscription
  // - https://github.com/apollographql/graphql-subscriptions#pubsub-implementations

  constructor(
    private authorsService: AuthorsService,
    private postsService: PostsService,
    private commentsService: CommentsService,
    @Inject(customProviderConfig.pubSubToken) private pubSub: PubSub
  ) {}

  @Query(() => Author, { name: 'author' })
  async getAuthor(@Args('id') id: string) {
    return this.authorsService.find(id)
  }

  @Query(() => [Post], { name: 'posts'})
  async getAllPosts(){
    return this.postsService.findAll({});
  }

  @ResolveField('posts', () => [Post])
  async posts(@Parent() author: Author) {
    const { id } = author
    return this.postsService.findAll({ author: { id: id } })
  }

  @Mutation(() => Post)
  async create(@Args('inputPost') postData: PostCreateInput) {
    return this.postsService.create(postData as Post)
  }

  @Mutation(() => Post)
  async update(@Args('inputPost') postData: PostUpdateInput) {
    return this.postsService.update(postData as Post)
  }

  @Mutation(() => Post)
  async delete(@Args('id') id: string) {
    return this.postsService.destroy(id)
  }

  @Mutation(() => Post)
  async changeStatus(@Args('changeStatusInput') changeStatusData: PostChangeStatusInput) {
    return this.postsService.changeStatus(changeStatusData)
  }

  @Mutation(() => Post)
  async addComment(
    @Args('postId', { type: () => String }) postId: string,
    @Args('comment') commentInput: PostCommentInput
  ) {
    const { content } = commentInput;
    const newComment  = this.commentsService.addComment({ postId, content })
    await this.pubSub.publish('commentAdded', { commentAdded: newComment })
    return newComment
  }

  // The keyword this will resolve to an instance of PostsResolver
  // it allows to use attached service
  @Subscription(_ => Comment, {
    resolve(this: PostsResolver, comment) {
      return comment
    },
    filter(this: PostsResolver, _payload, __variables) {
      // return payload.commentAdded.title === variables.title;
      return true
    },
  })
  commentAdded() {
    return this.pubSub.asyncIterator('commentAdded')
  }
}
