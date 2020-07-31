import { Resolver, Mutation, Args, Query, ResolveField, Parent, Subscription, Int } from '@nestjs/graphql';
import { Post, Author } from '../entities';
import { AuthorsService, PostsService, CommentsService } from '../services';
import { PostChangeStatusInput } from './post-change-status-input';
import { PostCommentInput } from './post-comment-input';
import { PubSub } from 'graphql-subscriptions';

// simple pubsub. For prod use external librery:
// - https://github.com/apollographql/graphql-subscriptions#getting-started-with-your-first-subscription
// - https://github.com/apollographql/graphql-subscriptions#pubsub-implementations
const pubSub = new PubSub();

@Resolver(() => Post)
export class PostsResolver {
  constructor(
    private authorsService: AuthorsService,
    private postsService: PostsService,
    private commentsService: CommentsService
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

  @Mutation(() => Post)
  async changeStatus(@Args() changeStatusData: PostChangeStatusInput){
    return this.postsService.changeStatus(changeStatusData);
  }

  @Mutation(() => Post)
  async addComment(
    @Args('postId', { type: () => Int }) postId: number,
    @Args('comment', { type: () => Comment }) {content}: PostCommentInput,
  ) {
    const newComment = this.commentsService.addComment({ post_id: id, content });
    pubSub.publish('commentAdded', { commentAdded: newComment });
    return newComment;
  }

  @Subscription(() => Comment)
  commentAdded(){
    return pubSub.asyncIterator('commentAdded');
  }
}
