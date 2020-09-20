import { CursorConnection } from '../pagination-types';

export interface Post {
  id: string;
  title: string;
  content: string;
  readingTime?: number;
  mainImageUrl?: string;
  createdAt: string;
}

export interface PostData {
  posts: CursorConnection<Post>;
}

export interface TruncatedPostData {
  truncatedPosts: CursorConnection<Post>;
}
