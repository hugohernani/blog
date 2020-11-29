import { Post, ConnectionPostData } from '../../entities';

import ApolloError from '../ApolloError';
import Loader from '../Loader';
import PostItemPreview from './PostItemPreview';
import PostList from './PostList';
import { PostsPage } from '../../fragments';
import React, { useCallback } from 'react';
import { useQuery } from '@apollo/client';
import { connectionGenerateGql } from 'src/utils';
import { CursorBased, CursorConnection } from 'src/graphql-types';

const GET_POSTS = connectionGenerateGql('truncatedPosts', 'Post', PostsPage.fragments.postFields);

interface PostProps {
  post: Post;
}

interface PostsProps {
  postItemComponent?: React.FC<PostProps>;
}

const PostsController: React.FC<PostsProps> = ({ postItemComponent = PostItemPreview }) => {
  const { loading, error, data, fetchMore } = useQuery<ConnectionPostData, CursorBased<Post>>(GET_POSTS, {
    variables: {
      paging: {
        first: 1,
      },
    },
  });

  const onLoadMore = useCallback(() => {
    const {
      pageInfo: { endCursor },
    } = data?.truncatedPosts as CursorConnection<Post>;
    fetchMore({
      variables: {
        paging: {
          first: 10,
          after: endCursor,
        },
      },
    });
  }, [data, fetchMore]);

  if (loading) {
    return <Loader />;
  } else if (error) {
    return <ApolloError error={error} />;
  } else {
    return (
      <PostList
        posts={data?.truncatedPosts as CursorConnection<Post>}
        PostItemComponent={postItemComponent}
        onLoadMore={onLoadMore}
      />
    );
  }
};

export default PostsController;
