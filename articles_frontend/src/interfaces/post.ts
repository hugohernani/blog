export interface Post{
  id: string,
  title: string,
  content: string
}

interface PostRoot{
  edges: Post[]
}

interface PostsViewer{
  allPosts: PostRoot
}

export interface PostsProps{
  viewer: PostsViewer
}
