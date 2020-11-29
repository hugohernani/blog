import { Container, PostsContainer, Header, LoadMoreContainer, LoadMoreButton } from './styles';

import { Post } from '../../../entities';
import React from 'react';
import { CursorConnection } from 'src/graphql-types';

interface PostProps {
  post: Post;
}

interface PostListProps {
  onLoadMore(): void;
  posts: CursorConnection<Post>;
  listPageTitle?: string;
  PostItemComponent: React.FC<PostProps>;
}

const PostList: React.FC<PostListProps> = ({
  listPageTitle = 'Artigos mais recentes',
  posts,
  onLoadMore,
  PostItemComponent,
}) => {
  const {
    edges: postEdges,
    pageInfo: { hasNextPage },
  } = posts;

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
      {hasNextPage && (
        <LoadMoreContainer>
          <LoadMoreButton onClick={onLoadMore}>Carregar mais</LoadMoreButton>
        </LoadMoreContainer>
      )}
    </Container>
  );
};

export default PostList;
