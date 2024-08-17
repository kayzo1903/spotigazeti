import { getLatestPost } from "@/utils/Fetchs";
import React from "react";
import Herocard from "../Cards/herocard";
import Link from "next/link";


const Hero = async () => {
  const datas = await getLatestPost();

  const { title, slug, author, categories, mainImage }: PostInterfaces = datas;
  const { title: catTitle } = categories[0];
  const { asset }: any = mainImage;

  try {
    return (
      <Link href={`/Blog/Article/${slug.current}`} className="w-full h-fit">
        <Herocard
          author={author.name}
          categories={catTitle}
          mainImage={asset.url}
          slug={slug.current}
          title={title}
        />
        
      </Link>
    );
  } catch (error) {
    console.error("Error fetching data from Sanity:", error);
    return <div>Error loading data</div>;
  }
};

export default Hero;
