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
import moment from 'moment';

interface PostProps {
  post: Post;
}

const PostItemPreview: React.FC<PostProps> = ({ post: { id, title, content, createdAt, readingTime = null } }) => {
  const [formattedCreatedAtDate] = useState(() => {
    const createdAtDate = new Date(createdAt);
    return createdAtDate.toLocaleDateString('pt-BR', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  });

  const [formattedReadTime] = useState<string | null>(() => {
    if (readingTime) {
      const readingTimeDuration = moment.duration(readingTime);
      return `${readingTimeDuration.minutes()} min de leitura`;
    }
    return null;
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
          {formattedReadTime && <PostReadTime>{formattedReadTime}</PostReadTime>}
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
    [title, formattedCreatedAtDate, formattedReadTime, postTags, content, id],
  );
};

export default PostItemPreview;
