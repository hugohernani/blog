import { useQuery } from '@apollo/client'
import React from 'react'
import { Post, PostData } from '../../entities'
import { PostsPage } from '../../fragments'
import { connectionGenerateGql, CursorBased } from '../../pagination-types'
import PostItemPreview from '../PostItemPreview'
import { Container } from './styles'

const GET_POSTS = connectionGenerateGql('Post', PostsPage.fragments.postFields)

interface PostProps {
  post: Post
}

interface PostsProps {
  PostItemComponent?: React.FC<PostProps>
}

const PostsController: React.FC<PostsProps> = ({ PostItemComponent = PostItemPreview }) => {
  const { loading, error, data } = useQuery<PostData, CursorBased<Post>>(GET_POSTS)
  if (loading) return <span>'Loading...'</span>
  if (error) return <span>Error ${error.message}</span>

  const postEdges = data?.posts?.edges

  return (
    <Container>
      {postEdges && postEdges.map((postEdge) => postEdge?.node && <PostItemComponent post={postEdge.node} />)}
    </Container>
  )
}

export default PostsController
