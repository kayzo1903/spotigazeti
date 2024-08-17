import React from "react";
import PostBanner from "../Banners/PostBanner";
import Popularpost from "./Popularpost";
import Categories from "./Categories";

const Aside = () => {
  return (
    <aside className="px-4 w-full space-y-4">
      <PostBanner postcategories="Popolar Post" />
      <Popularpost />
      <PostBanner postcategories="Categories" />
      <Categories />
    </aside>
  );
};

export default Aside;
