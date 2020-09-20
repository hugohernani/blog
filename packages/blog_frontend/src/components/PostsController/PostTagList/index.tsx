import {
  Container,
  ContentContainer,
  ContentSection,
  Header,
  ImageContainer,
  MainContent,
  PostContainer,
  PostDate,
  PostInfoContainer,
  PostReadTime,
  PostTag,
  PostTagsContainer,
  ReadButtonContainer,
  SectionContainer,
} from './styles';
import React, { useCallback, useEffect, useMemo, useState } from 'react';

import { Post } from '../../../entities';
import ReadMoreButton from '../../ReadMoreButton';
import moment from 'moment';
import pixabay from 'src/lib/pixabay';

interface PostProps {
  post: Post;
}

interface PixaBayImage {
  url: string;
  tags: string;
}

const PostItemPreview: React.FC<PostProps> = ({
  post: { id, title, content, createdAt, mainImageUrl = '', readingTime = null },
}) => {
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

  const [technologyTags] = useState<string[]>(['upfront technology', 'nestjs', 'graphql', 'react']);
  // const [teologyTags] = useState<string[]>(['teologia', 'igreja', 'bíblia']);

  const [pixaBayImage, setPixaBayImage] = useState<PixaBayImage>({ url: mainImageUrl, tags: technologyTags.join(',') });

  useEffect(() => {
    if (mainImageUrl === undefined) {
      const fetchPostImage = async (): Promise<void> => {
        const pixabayAvailableImages = await pixabay('/', technologyTags);
        if (pixabayAvailableImages.total !== 0) {
          const { webformatURL: url, tags } = pixabayAvailableImages.hits[0];
          setPixaBayImage({ url, tags });
        }
      };
      fetchPostImage();
    }
  });

  const postTags = useCallback(() => {
    return technologyTags.map((tag, index) => <PostTag key={`${tag}-${index}`}>{tag}</PostTag>);
  }, [technologyTags]);

  return useMemo(
    () => (
      <Container>
        <PostContainer>
          <Header>{title}</Header>
          <SectionContainer>
            <ContentContainer>
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
            </ContentContainer>
            {pixaBayImage.url && (
              <ImageContainer>
                <img src={pixaBayImage.url} alt={pixaBayImage.tags} width="350px" height="300px" />
              </ImageContainer>
            )}
          </SectionContainer>
        </PostContainer>
        <hr />
      </Container>
    ),
    [title, formattedCreatedAtDate, formattedReadTime, postTags, pixaBayImage, content, id],
  );
};

export default PostItemPreview;
