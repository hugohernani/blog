import React from 'react'
import { useQuery } from '@apollo/client'
import { CursorBased, connectionGenerateGql } from '../pagination-types'
import { PostData, Post } from '../entities'
import { PostsPage } from '../fragments'

const GET_POSTS = connectionGenerateGql('Post', PostsPage.fragments.postFields)

const PostItems = () => {
  const { loading, error, data } = useQuery<PostData, CursorBased<Post>>(GET_POSTS)
  if (loading) return <span>'Loading...'</span>
  if (error) return <span>Error ${error.message}</span>

  const postEdges = data?.posts?.edges

  return (
    <div className="test">
      <ul>
        {postEdges &&
          postEdges.map((postEdge) => (
            <li key={postEdge?.node?.id}>
              <span>{postEdge?.node?.id}</span>
              <br />
              <span>{postEdge?.node?.title}</span>
              <br />
              <span>{postEdge?.node?.content}</span>
            </li>
          ))}
      </ul>
    </div>
  )
}

export default PostItems
