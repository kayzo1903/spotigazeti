'use client'
import React, { useEffect, useState } from "react";
import { getData } from "@/utils/Fetchs";
import Asidecard from "../Cards/Asidecard";

const Popularpost: React.FC = () => {
  const [infoData, setInfoData] = useState<PostInterfaces[]>([]);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const data: PostInterfaces[] = await getData();
        setInfoData(data);
      } catch (error) {
        console.error("Failed to fetch data:", error);
      }
    };

    fetchPosts();
  }, []); // Empty dependency array ensures this effect runs only once

  return (
    <div className="container w-full flex flex-col gap-4 h-fit">
      {infoData.slice(0, 4).map((item, index) => {
        const { author, categories, publishedAt, title, slug } = item;
        const catTitle = categories?.[0]?.title || "spotigazeti";
        return (
          <Asidecard
            author={author.name}
            catTitle={catTitle}
            date={publishedAt}
            title={title}
            slug={slug.current}
            key={index}
          />
        );
      })}
    </div>
  );
};

export default Popularpost;
