export interface StoreProps {
  feed: FeedProps;
}

export interface FeedProps {
  feed?: PostProps[];
  favFeed?: PostProps[];
}

export interface PostProps {
  id: string;
  image: {height: number; id: string; url: string; width: number};
  name: string;
}

export interface StoreProps {
  feed: FeedProps;
}
