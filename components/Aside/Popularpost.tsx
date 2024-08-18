"use client";

import React, { useEffect, useState } from "react";
import { getData } from "@/utils/Fetchs";
import Asidecard from "../Cards/Asidecard";
import AsidecardSkeleton from "../LoadingBlock/PopularpostSkeleton";

const Popularpost: React.FC = () => {
  const [infoData, setInfoData] = useState<PostInterfaces[]>([]);
  const [loading, setLoading] = useState<boolean>(true); // State to manage loading

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const data: PostInterfaces[] = await getData();
        setInfoData(data);
        setLoading(false); // Set loading to false once data is fetched
      } catch (error) {
        console.error("Failed to fetch data:", error);
        setLoading(false); // Ensure loading is false even if there's an error
      }
    };

    fetchPosts();
  }, []); // Empty dependency array ensures this effect runs only once

  return (
    <div className="container w-full flex flex-col gap-4 h-fit">
      {loading ? (
        // Show skeletons while loading
        Array(4).fill(0).map((_, index) => <AsidecardSkeleton key={index} />)
      ) : (
        // Show actual posts once loaded
        infoData.slice(0, 4).map((item, index) => {
          const { author, categories, publishedAt, title, slug, mainImage } = item;
          const catTitle = categories?.[0]?.title || "spotigazeti";
          return (
            <Asidecard
              author={author.name}
              catTitle={catTitle}
              date={publishedAt}
              title={title}
              slug={slug.current}
              key={index}
              mainImage={mainImage.asset.url}
            />
          );
        })
      )}
    </div>
  );
};

export default Popularpost;
