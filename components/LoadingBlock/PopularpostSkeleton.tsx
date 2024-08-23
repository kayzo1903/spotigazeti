import Skeleton from "react-loading-skeleton";
import React from "react";

const AsidecardSkeleton: React.FC = () => {
  return (
    <div className="transition-all duration-500 gap-2 bg-text py-2 px-1 rounded-lg flex flex-nowrap items-end">
      <div className="w-1/5 h-20 relative overflow-hidden rounded-lg">
        <Skeleton height="100%" />
      </div>
      <div className="w-4/5 h-20">
        <p className="text-skin2 line-clamp-2">
          <Skeleton width="60%" />
        </p>
        <h6 className="text-sm text-gray-600 font-semibold">
          <Skeleton width="80%" />
        </h6>
        <p className="text-xs text-gray-600">
          <Skeleton width="40%" /> <Skeleton width="30%" inline={true} />
          <span>
            <Skeleton width="15%" inline={true} />
            <Skeleton width="15%" inline={true} />
            <Skeleton width="20%" inline={true} />
          </span>
        </p>
      </div>
    </div>
  );
};

export default AsidecardSkeleton;
