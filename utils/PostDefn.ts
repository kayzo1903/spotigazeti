interface PostInterfaces {
    title: string;
    slug: {
      current : string
    }
    mainImage: {
      alt: string | null;
      asset: string;
    };
    author: {
      name: string;
      image: string;
    };
    categories: {
      title: string;
    }[];
    body : any ;
    publishedAt: string | null;
  } 