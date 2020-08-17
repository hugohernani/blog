import React, { useState, useEffect } from "react";
import { PostsProps } from "../interfaces";
import Post from './Post';
import { createFragmentContainer, graphql } from 'react-relay';

const PostList: React.FC<PostsProps> = ({viewer: {allPosts: {edges: posts}}}) => {
  // const [posts, setPosts] = useState<PostType[] | null>([])
  //
  // useEffect(() => {
  //   const _posts: PostType[] = [{
  //     id: 'uuid',
  //     title: 'Example 2',
  //     content: 'Content fora Post'
  //   }]
  //
  //   setPosts(_posts);
  // }, [])

  return(
    <div>
    {posts && posts.map((post) => (
      <Post key={post.id} post={post} />
    ))}
    </div>
  )
};

export default createFragmentContainer(PostList, graphql`
  fragment PostList_viewer on PostList {
    allPosts(last: 100, orderBy: createdAt_DESC) @connection(key: "PostList_allPosts", filters = []){
      edges {
        node{
          ...Post_post
        }
      }
    }
` as any)
