"use client"
import { useParams } from "next/navigation";
import React from "react";

const HeaderCategory = () => {
  const category = useParams();
  
  return (
    <div className="mb-4 md:mb-8 pt-8 px-2 w-full">
      <h2 className="mb-4 text-center text-2xl font-bold text-gray-800 dark:text-white md:mb-6 lg:text-3xl">
        {category.categories}
      </h2>
      <p className="mx-auto max-w-screen-md text-center text-gray-500 dark:text-gray-400 md:text-lg">
        Katika kipengelee hiki utaweza kupata machapisho yote yenye habari za
        <span className="px-2">{category.categories}</span>
        yaliyo wahi chapishwa na spotigazeti
      </p>
    </div>
  );
};

export default HeaderCategory;
