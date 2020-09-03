import { CursorConnection } from '../pagination-types'

export interface Post {
  id: string
  title: string
  content: string
}

export interface PostData {
  posts: CursorConnection<Post>
}
