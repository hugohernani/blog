import React from 'react';
import {
  QueryRenderer,
  graphql,
} from 'react-relay';
import environment from '../Environment';
import PostList from './PostList';
import { PostsProps } from '../interfaces';

const PostListPageQuery = graphql`
  query PostListPageQuery {
    viewer {
      ...PostList_viewer
    }
  }
`

const PostListPage: React.FC = () => {
  return(
    <QueryRenderer
      variables={[]}
      environment={environment}
      query={PostListPageQuery}
      render={({error, props}) => {
        if(error){
          return <div>{error.message}</div>
        }else if (props){
          return <PostList viewer={(props as PostsProps).viewer} />
        }
        return <div>Loading</div>
      }}
    />
  )
}

export default PostListPage;
