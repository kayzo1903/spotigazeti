"use client";
import { getData } from "@/utils/Fetchs";
import React, { useEffect, useState } from "react";
import Postscards from "../Cards/Postscards";

interface catInterface {
  category: string;
}

const Contents: React.FC<catInterface> = ({ category }) => {
  const [filteredPost, setFilteredPost] = useState<PostInterfaces[]>([]);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const allPosts: PostInterfaces[] = await getData();
        // Optionally filter the posts by category here if needed
        const filtered = allPosts.filter((post) =>
          post.categories.some((cat) => cat.title === category)
        );
        setFilteredPost(filtered);
      } catch (error) {
        console.error("Failed to fetch posts:", error);
      }
    };

    fetchPosts();
  }, [category]); // Empty dependency array means it runs once on mount

  return (
    <div className="flex w-full flex-wrap justify-center items-start gap-4 h-fit">
      {filteredPost.length === 0 ? (
        <h1>Loading...</h1>
      ) : (
        filteredPost.map((item, index) => (
          <Postscards
            key={index}
            category={item.categories[0]?.title  || 'spotigazeti'}
            date={item.publishedAt}
            image={item.mainImage.asset.url}
            slug={item.slug.current}
            title={item.title}
          />
        ))
      )}
    </div>
  );
};

export default Contents;
