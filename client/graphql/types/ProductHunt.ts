export interface Data {
  product: {
    discussion_url: string;
    name: string;
    tagline: string;
    thumbnail?: {
      image_url: string;
    };
    topics: {
      name: string;
    };
    vote_count: number;
  };
}

export interface Variables {}
