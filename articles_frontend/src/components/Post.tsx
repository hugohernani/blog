import React from "react";
import {Post as PostType} from '../interfaces';
import { createFragmentContainer, graphql, GraphQLTaggedNode } from 'react-relay';

type PostProps = {
  post: PostType
}

const Post: React.FC<PostProps> = ({post}) => {
  return(
    <div>
      {post && post.title}
    </div>
  )
};

const fragment = graphql`
  fragment Post_post on Post{
    id
    title
    description
  }
`


export default createFragmentContainer(Post, fragment as any)
