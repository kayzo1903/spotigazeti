import Image from "next/image";
import Link from "next/link";
import React from "react";

interface Asidecard {
  catTitle: string;
  title: string;
  author: string;
  date: any;
  slug: string;
  mainImage: string;
}

const Asidecard: React.FC<Asidecard> = ({
  catTitle,
  title,
  author,
  date,
  slug,
  mainImage,
}) => {
  return (
    <Link
      className="transition-all duration-500 gap-2 bg-text py-2 px-1 rounded-lg hover:scale-105 flex flex-nowrap items-end"
      href={`/Blog/Article/${slug}`}
    >
      <div className="w-1/5 h-20 relative overflow-hidden rounded-lg">
      <Image
        src={mainImage} // urlForImage() takes the image reference and converts it to a URL
        alt={slug}
        fill={true}
        style={{ objectFit: "cover" }}
        loading="lazy"
      />
      </div>
      <div className="w-4/5 h-20">
        <p className="text-skin2 line-clamp-2">{catTitle}</p>
        <h6 className="text-sm text-gray-600 font-semibold line-clamp-2">{title}</h6>
        <p className="text-xs text-gray-600">
          by <span className="font-thin">{author}</span>{" "}
          <span>
            {date ? new Date(date).getDate() : "N/A"}/
            {date ? new Date(date).getMonth() + 1 : "N/A"}/
            {date ? new Date(date).getFullYear() : "N/A"}
          </span>
        </p>
      </div>
    </Link>
  );
};

export default Asidecard;
