import {
  Container,
  ContentSection,
  Header,
  MainContent,
  PostDate,
  PostInfoContainer,
  PostReadTime,
  PostTag,
  PostTagsContainer,
  ReadButtonContainer,
} from './styles';
import React, { useCallback, useMemo, useState } from 'react';

import { Post } from '../../../entities';
import ReadMoreButton from '../../ReadMoreButton';

interface PostProps {
  post: Post;
}

const PostItemPreview: React.FC<PostProps> = ({ post: { id, title, content, createdAt } }) => {
  const [formattedCreatedAtDate] = useState(() => {
    const createdAtDate = new Date(createdAt);
    return createdAtDate.toLocaleDateString('pt-BR', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  });

  // TODO use axios + https://palett.es/api to get random pallete

  const [technologyTags] = useState<string[]>(['tecnologia', 'nestjs', 'graphql', 'react']);
  // const [teologyTags] = useState<string[]>(['teologia', 'igreja', 'bíblia']);

  const postTags = useCallback(() => {
    return technologyTags.map((tag, index) => <PostTag key={`${tag}-${index}`}>{tag}</PostTag>);
  }, [technologyTags]);

  return useMemo(
    () => (
      <Container>
        <Header>{title}</Header>
        <PostInfoContainer>
          <PostDate>{formattedCreatedAtDate}</PostDate>
          <PostReadTime>9 min de leitura</PostReadTime>
        </PostInfoContainer>
        <PostTagsContainer>{postTags()}</PostTagsContainer>
        <ContentSection>
          <MainContent>{content}</MainContent>
        </ContentSection>
        <ReadButtonContainer>
          <ReadMoreButton content="Leia mais" href={'/posts/' + id} />
        </ReadButtonContainer>

        <hr />
      </Container>
    ),
    [id, title, content, formattedCreatedAtDate, postTags],
  );
};

export default PostItemPreview;
