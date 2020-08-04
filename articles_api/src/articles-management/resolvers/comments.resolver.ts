import { Inject } from '@nestjs/common'
import {
  Args,
  Mutation,
  Parent, ResolveField, Resolver,
  Subscription
} from '@nestjs/graphql'
import { PubSub } from 'graphql-subscriptions'
import { customProviderConfig } from '../../constants'
import { Comment, Post } from '../entities'
import { CommentsService, PostsService } from '../services'
import { PostCommentInput } from './post-comment-input'

@Resolver(Comment)
export class CommentsResolver {
  // simple pubsub. For prod use external library:
  // - https://github.com/apollographql/graphql-subscriptions#getting-started-with-your-first-subscription
  // - https://github.com/apollographql/graphql-subscriptions#pubsub-implementations

  constructor(
    private postsService: PostsService,
    private commentsService: CommentsService,
    @Inject(customProviderConfig.pubSubToken) private pubSub: PubSub
  ) {}

  @ResolveField('post', () => Post)
  async getPost(@Parent() comment: Comment) {
    const { postId } = comment;
    return this.postsService.find(postId);
  }

  @Mutation(() => Comment)
  async addComment(
    @Args('inputComment') commentInput: PostCommentInput
  ) {
    const { content, postId } = commentInput;
    const newComment = this.commentsService.addComment({ postId, content })
    await this.pubSub.publish('commentAdded', { commentAdded: newComment })
    return newComment;
  }

  @Mutation(() => Comment)
  async delete(@Args('id') id: string) {
    return this.commentsService.destroy(id)
  }

  // The keyword this will resolve to an instance of PostsResolver
  // it allows to use attached service
  @Subscription(_ => Comment, {
    resolve(this: CommentsResolver, comment) {
      return comment
    },
    filter(this: CommentsResolver, _payload, __variables) {
      // return payload.commentAdded.title === variables.title;
      return true
    },
  })
  commentAdded() {
    return this.pubSub.asyncIterator('commentAdded')
  }
}
