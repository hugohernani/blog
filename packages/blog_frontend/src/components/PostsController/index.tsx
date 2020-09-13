import { CursorBased, connectionGenerateGql } from '../../pagination-types';
import { Post, PostData } from '../../entities';

import ApolloError from '../ApolloError';
import { CursorConnection } from '../../pagination-types';
import Loader from '../Loader';
import PostItemPreview from '../PostItemPreview';
import PostList from './PostList';
import { PostsPage } from '../../fragments';
import React from 'react';
import { useQuery } from '@apollo/client';

const GET_POSTS = connectionGenerateGql('Post', PostsPage.fragments.postFields);

interface PostProps {
  post: Post;
}

interface PostsProps {
  postItemComponent?: React.FC<PostProps>;
}

const PostsController: React.FC<PostsProps> = ({ postItemComponent = PostItemPreview }) => {
  const { loading, error, data } = useQuery<PostData, CursorBased<Post>>(GET_POSTS);

  if (loading) {
    return <Loader />;
  } else if (error) {
    return <ApolloError error={error} />;
  } else {
    return <PostList posts={data?.posts as CursorConnection<Post>} PostItemComponent={postItemComponent} />;
  }
};

export default PostsController;
