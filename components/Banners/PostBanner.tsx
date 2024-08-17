import React from "react";

interface PostBannerprops {
  postcategories : string
}

const PostBanner = ({postcategories } : PostBannerprops) => {
  return (
    <div className="w-full h-16 bg-skin1 rounded-md flex items-center px-4">
      <h6 className="text-white capitalize">{postcategories}</h6>
    </div>
  );
};

export default PostBanner;
