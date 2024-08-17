interface PostInterfaces {
  title: string;
  slug: {
    current: string;
  };
  mainImage: {
    alt: string | null;
    asset: {
      _id: string;
      url: string;
    };
  };
  author: {
    name: string;
    image: {
      asset: {
        _id: string;
        url: string;
      };
    };
  };
  categories: {
    title: string;
  }[];
  body: any;
  publishedAt: string | null;
}
