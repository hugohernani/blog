import { Container, PostTag } from './styles';
import React from 'react';

interface TagsProps {
  tags: string[];
}

const PostTagList: React.FC<TagsProps> = ({ tags }) => {
  return <Container>{tags && tags.map((tag, index) => <PostTag key={`${tag}-${index}`}>{tag}</PostTag>)}</Container>;
};

export default PostTagList;
