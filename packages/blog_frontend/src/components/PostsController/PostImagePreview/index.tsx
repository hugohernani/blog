import { Container } from './styles';
import React, { useEffect, useState } from 'react';

import pixabay from 'src/lib/pixabay';
import { updateEntityGql } from 'src/utils';
import { PostsPage } from 'src/fragments';
import { useMutation } from '@apollo/client';
import { Post } from 'src/entities';
import { UpdateInput } from 'src/graphql-types/update';

const UPDATE_POST = updateEntityGql('Post', PostsPage.fragments.postFields);

interface PostPreviewImageProps {
  postId: string;
  imageUrl?: string;
  postTags: string[];
}

interface PixaBayImage {
  url: string | undefined;
  tags: string | undefined;
}

const PostImagePreview: React.FC<PostPreviewImageProps> = ({ postId, imageUrl, postTags }) => {
  const [updatePost] = useMutation<Post, UpdateInput<Post>>(UPDATE_POST, {
    ignoreResults: true,
  });

  const [pixaBayImage, setPixaBayImage] = useState<PixaBayImage>({ url: imageUrl, tags: postTags.join(',') });

  useEffect(() => {
    if (imageUrl === undefined || imageUrl === null) {
      const fetchPostImage = async (): Promise<void> => {
        const pixabayAvailableImages = await pixabay('/', postTags);
        if (pixabayAvailableImages.total !== 0) {
          const { webformatURL: url, tags } = pixabayAvailableImages.hits[0];
          setPixaBayImage(() => ({ url, tags }));
        }
      };
      fetchPostImage();
    }
  }, [imageUrl, pixaBayImage.url, postTags]);

  useEffect(() => {
    if (!imageUrl && pixaBayImage.url) {
      updatePost({
        variables: {
          input: {
            id: postId,
            update: {
              mainImageUrl: pixaBayImage.url,
            },
          },
        },
      });
    }
  }, [pixaBayImage.url, postId, imageUrl, updatePost]);

  return (
    <React.Fragment>
      {pixaBayImage.url && (
        <Container>
          <img src={pixaBayImage.url} alt={pixaBayImage.tags} width="350px" height="300px" />
        </Container>
      )}
    </React.Fragment>
  );
};

export default PostImagePreview;
