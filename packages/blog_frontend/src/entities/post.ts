import { CursorConnection } from 'src/graphql-types';

export interface Post {
  id: string;
  title: string;
  content: string;
  readingTime?: number;
  mainImageUrl?: string;
  tags: string[];
  createdAt: string;
}

export interface PostData {
  posts: CursorConnection<Post>;
}

export interface TruncatedPostData {
  truncatedPosts: CursorConnection<Post>;
}
