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
import React from 'react';

import { Post } from '../../../entities';
import ReadMoreButton from '../../ReadMoreButton';
import PostTagList from '../PostTagList';
import PostInfo from '../PostInfo';
import PostImagePreview from '../PostImagePreview';

interface PostProps {
  post: Post;
}

const PostItemPreview: React.FC<PostProps> = ({
  post: { id, title, content, tags, createdAt, mainImageUrl, readingTime = undefined },
}) => {
  return (
    <Container>
      <PostContainer>
        <SectionContainer>
          <ContentContainer>
            <Header>{title}</Header>
            <PostInfo createdAt={createdAt} readingTime={readingTime} />
            <PostTagList tags={tags} />
            <ContentSection>
              <MainContent>{content}</MainContent>
              <ReadButtonContainer>
                <ReadMoreButton content="Leia mais" href={'/posts/' + id} />
              </ReadButtonContainer>
            </ContentSection>
          </ContentContainer>
          <PostImagePreview postId={id} imageUrl={mainImageUrl} postTags={tags} />
        </SectionContainer>
      </PostContainer>
      <hr />
    </Container>
  );
};

export default PostItemPreview;
