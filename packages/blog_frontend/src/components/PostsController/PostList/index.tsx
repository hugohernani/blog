import { Container, PostsContainer, Header } from './styles';

import { Post } from '../../../entities';
import React from 'react';
import { CursorConnection } from 'src/graphql-types';

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
      {postEdges && (
        <PostsContainer>
          {postEdges.map(
            (postEdge) => postEdge?.node && <PostItemComponent key={postEdge.node.id} post={postEdge.node} />,
          )}
        </PostsContainer>
      )}
    </Container>
  );
};

export default PostList;
