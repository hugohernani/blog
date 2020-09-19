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
import { FaSquare } from 'react-icons/fa';

interface PostProps {
  post: Post;
}

const PostItemPreview: React.FC<PostProps> = ({
  post: { id, title, content, createdAt, postUrl, readingTime = null },
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

  const [technologyTags] = useState<string[]>([
    'technology',
    'nestjs',
    'graphql',
    'react',
    'technology',
    'nestjs',
    'graphql',
    'react',
  ]);
  // const [teologyTags] = useState<string[]>(['teologia', 'igreja', 'bíblia']);

  // const [pixaBayImageUrl, setPixaBayImageUrl] = useState<string>('');

  // useEffect(() => {
  //   if (postUrl === undefined) {
  //     const fetchPostImage = async (): Promise<void> => {
  //       const pixabayAvailableImages = await pixabay('/', technologyTags);
  //       const imageUrl =
  //         pixabayAvailableImages.total !== 0
  //           ? pixabayAvailableImages.hits[0].webformatURL
  //           : 'https://cdn.pixabay.com/photo/2017/05/19/06/22/desktop-2325627_960_720.jpg';
  //       setPixaBayImageUrl(imageUrl);
  //     };
  //
  //     fetchPostImage();
  //   }
  // }, [postUrl, technologyTags]);

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
            <ImageContainer>
              <img
                src="https://cdn.pixabay.com/photo/2020/09/09/18/39/mountains-5558476_960_720.jpg"
                width="350px"
                height="300px"
              />
            </ImageContainer>
          </SectionContainer>
        </PostContainer>
        <hr />
      </Container>
    ),
    [title, formattedCreatedAtDate, formattedReadTime, postTags, content, id],
  );
};

export default PostItemPreview;
