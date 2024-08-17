import { urlForImage } from "@/utils/imagebuilder";
import Image from "next/image";
import React from "react";

interface HerocardInterface {
  slug: string;
  mainImage: string;
  categories: string;
  author: string;
  title: string;
}

const Herocard: React.FC<HerocardInterface> = ({
  slug,
  mainImage,
  categories,
  author,
  title,
}) => {
  return (
    <div className="w-full rounded-lg h-96 relative shadow-lg">
      <Image
        src={urlForImage(mainImage)}
        alt={slug}
        loading="lazy"
        fill={true}
        style={{ objectFit: "cover" }}
      />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 to-transparent md:via-transparent"></div>

      <div className="absolute bottom-4 left-4 w-full text-white">
        <div className="w-full px-1">
          <p className="font-light">{categories}</p>
          <h3 className="w-full text-xl md:text-2xl">{title}</h3>
          <span className="font-bold">By</span>{" "}
          <span className="text-base capitalize text-text">{author}</span>
        </div>
      </div>
    </div>
  );
};

export default Herocard;
