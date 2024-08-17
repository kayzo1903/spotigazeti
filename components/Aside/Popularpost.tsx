import { getData } from "@/utils/Fetchs";
import React from "react";
import Asidecard from "../Cards/Asidecard";

const Popularpost = async () => {
  const InfoData: PostInterfaces[] = await getData();

  return (
    <div className="container w-full flex flex-col gap-4 h-fit">
      {InfoData.slice(0, 4).map((item, Index) => {
        const { author, categories, publishedAt, title, slug } = item;
        const catTitle = categories?.[0]?.title || "spotigazeti";
        return (
          <Asidecard
            author={author.name}
            catTitle={catTitle}
            date={publishedAt}
            title={title}
            slug={slug.current}
            key={Index}
          />
        );
      })}
    </div>
  );
};

export default Popularpost;
