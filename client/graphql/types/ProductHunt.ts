export interface Data {
  products: {
    posts: Post[];
  };
}

export interface Post {
  id: number;
  discussion_url: string;
  name: string;
  tagline: string;
  thumbnail?: {
    image_url: string;
  };
  topics: {
    name: string;
  }[];
  votes_count: number;
}
