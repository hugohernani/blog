import { Container, Header } from './styles';

import { CursorConnection } from '../../../pagination-types';
import { Post } from '../../../entities';
import React from 'react';

interface PostProps {
  post: Post;
}

interface PostListProps {
  posts: CursorConnection<Post>;
  listPageTitle?: string;
  PostItemComponent: React.FC<PostProps>;
}

const PostList: React.FC<PostListProps> = ({ listPageTitle = 'Artigos mais recentes', posts, PostItemComponent }) => {
  const { edges: postEdges } = posts;
  return (
    <Container>
      <Header>{listPageTitle}</Header>
      {postEdges &&
        postEdges.map(
          (postEdge) => postEdge?.node && <PostItemComponent key={postEdge.node.id} post={postEdge.node} />,
        )}
    </Container>
  );
};

export default PostList;
