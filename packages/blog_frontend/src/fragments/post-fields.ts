import { gql } from '@apollo/client';

export class PostsPage {
  static fragments = {
    postFields: gql`
      fragment PostFields on Post {
        id
        title
        content
        readingTime
        createdAt
      }
    `,
  };
}
