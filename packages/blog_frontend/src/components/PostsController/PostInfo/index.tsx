import { Container, PostDate, PostReadTime } from './styles';
import React, { useState } from 'react';

import moment from 'moment';

interface PostInfoProps {
  createdAt: string;
  readingTime?: number;
}

const PostInfo: React.FC<PostInfoProps> = ({ createdAt, readingTime = null }) => {
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

  return (
    <Container>
      <PostDate>{formattedCreatedAtDate}</PostDate>
      {formattedReadTime && <PostReadTime>{formattedReadTime}</PostReadTime>}
    </Container>
  );
};

export default PostInfo;
