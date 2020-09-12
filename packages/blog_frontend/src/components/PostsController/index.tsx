import { CursorBased, connectionGenerateGql } from '../../pagination-types';
import { Post, PostData } from '../../entities';

import { Container } from './styles';
import PostItemPreview from '../PostItemPreview';
import { PostsPage } from '../../fragments';
import React from 'react';
import { useQuery } from '@apollo/client';

const GET_POSTS = connectionGenerateGql('Post', PostsPage.fragments.postFields);

interface PostProps {
  post: Post;
}

interface PostsProps {
  PostItemComponent?: React.FC<PostProps>;
}

const PostsController: React.FC<PostsProps> = ({ PostItemComponent = PostItemPreview }) => {
  const { loading, error, data } = useQuery<PostData, CursorBased<Post>>(GET_POSTS);

  const postEdges = data?.posts?.edges;

  if (loading) return <span>Loading...</span>;
  if (error) return <span>Error ${error.message}</span>;
  return (
    <Container>
      {postEdges &&
        postEdges.map(
          (postEdge) => postEdge?.node && <PostItemComponent key={postEdge.node.id} post={postEdge.node} />,
        )}
    </Container>
  );
};

export default PostsController;
