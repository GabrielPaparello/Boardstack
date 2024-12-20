export interface BlogType {
  featured: {
    id: string;
    title: string;
    subtitle: string;
    body: string;
    image: string;
    createdAt: string;
    updatedAt: string;
  };
  posts: Array<{
    id: string;
    title: string;
    subtitle: string;
    body: string;
    image: string;
    createdAt: string;
    updatedAt: string;
  }>;
}
export type OptionalBlogType = Partial<BlogType>;
