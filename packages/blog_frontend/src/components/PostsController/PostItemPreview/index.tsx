import {
  Container,
  ContentContainer,
  ContentSection,
  Header,
  MainContent,
  PostContainer,
  ReadButtonContainer,
  SectionContainer,
} from './styles';
import React, { useState } from 'react';

import { Post } from '../../../entities';
import ReadMoreButton from '../../ReadMoreButton';
import PostTagList from '../PostTagList';
import PostInfo from '../PostInfo';
import PostImagePreview from '../PostImagePreview';

interface PostProps {
  post: Post;
}

const PostItemPreview: React.FC<PostProps> = ({
  post: { id, title, content, createdAt, mainImageUrl, readingTime = undefined },
}) => {
  const [technologyTags] = useState<string[]>(['upfront technology', 'nestjs', 'graphql', 'react']);

  return (
    <Container>
      <PostContainer>
        <Header>{title}</Header>
        <SectionContainer>
          <ContentContainer>
            <PostInfo createdAt={createdAt} readingTime={readingTime} />
            <PostTagList tags={technologyTags} />
            <ContentSection>
              <MainContent>{content}</MainContent>
            </ContentSection>
            <ReadButtonContainer>
              <ReadMoreButton content="Leia mais" href={'/posts/' + id} />
            </ReadButtonContainer>
          </ContentContainer>
          <PostImagePreview imageUrl={mainImageUrl} postTags={technologyTags} />
        </SectionContainer>
      </PostContainer>
      <hr />
    </Container>
  );
};

export default PostItemPreview;
