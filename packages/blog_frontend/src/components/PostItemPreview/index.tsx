import React from 'react'
import { Post } from '../../entities'
import ReadMoreButton from '../ReadMoreButton'
import { Container, ContentSection, Header, PostInfoContainer } from './styles'

interface PostProps {
  post: Post
}

const PostItemPreview: React.FC<PostProps> = ({ post: { title, content, id } }) => {
  return (
    <Container>
      <Header>{title}</Header>
      <PostInfoContainer>TODO ON API CATCH INFO</PostInfoContainer>
      <ContentSection>{content}</ContentSection>
      <ReadMoreButton content="Leia mais" href={'/posts/' + id} />
    </Container>
  )
}

export default PostItemPreview
