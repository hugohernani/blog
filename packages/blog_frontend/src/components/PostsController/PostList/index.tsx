import { Container } from './styles';
import { CursorConnection } from '../../../pagination-types';
import { Post } from '../../../entities';
import React from 'react';

interface PostProps {
  post: Post;
}

interface PostListProps {
  posts: CursorConnection<Post>;
  PostItemComponent: React.FC<PostProps>;
}

const PostList: React.FC<PostListProps> = ({ posts, PostItemComponent }) => {
  const { edges: postEdges } = posts;

  return (
    <Container>
      {postEdges &&
        postEdges.map(
          (postEdge) => postEdge?.node && <PostItemComponent key={postEdge.node.id} post={postEdge.node} />,
        )}
    </Container>
  );
};

export default PostList;
