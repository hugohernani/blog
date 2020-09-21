import { Container } from './styles';
import React, { useEffect, useState } from 'react';

import pixabay from 'src/lib/pixabay';

interface PostPreviewImageProps {
  imageUrl?: string;
  postTags: string[];
}

interface PixaBayImage {
  url: string | undefined;
  tags: string | undefined;
}

const PostImagePreview: React.FC<PostPreviewImageProps> = ({ imageUrl, postTags }) => {
  const [pixaBayImage, setPixaBayImage] = useState<PixaBayImage>({ url: imageUrl, tags: postTags.join(',') });

  useEffect(() => {
    console.log('Image Url: ', imageUrl);
    if (imageUrl === undefined || imageUrl === null) {
      const fetchPostImage = async (): Promise<void> => {
        const pixabayAvailableImages = await pixabay('/', postTags);
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
  }, [imageUrl, postTags]);

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
