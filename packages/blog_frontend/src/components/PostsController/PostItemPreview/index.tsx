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
  ReadButtonContainer,
  SectionContainer,
} from './styles';
import React, { useEffect, useState } from 'react';

import { Post } from '../../../entities';
import ReadMoreButton from '../../ReadMoreButton';
import moment from 'moment';
import pixabay from 'src/lib/pixabay';
import PostTagList from '../PostTagList';

interface PostProps {
  post: Post;
}

interface PixaBayImage {
  url: string | undefined;
  tags: string | undefined;
}

const PostItemPreview: React.FC<PostProps> = ({
  post: { id, title, content, createdAt, mainImageUrl, readingTime = null },
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
    return (): void => {
      console.log('TODO: Save this image into post instance database through graphql api call');
    };
  }, [mainImageUrl, technologyTags]);

  return (
    <Container>
      <PostContainer>
        <Header>{title}</Header>
        <SectionContainer>
          <ContentContainer>
            <PostInfoContainer>
              <PostDate>{formattedCreatedAtDate}</PostDate>
              {formattedReadTime && <PostReadTime>{formattedReadTime}</PostReadTime>}
            </PostInfoContainer>
            <PostTagList tags={technologyTags} />
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
  );
};

export default PostItemPreview;
