import { CursorConnection } from '../page-types';

export interface Post{
  id: string;
  title: string;
  content: string;
}

export interface PostData{
  posts: CursorConnection<Post>;
}
