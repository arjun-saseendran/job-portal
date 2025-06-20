import React from "react";

export const Analytics = () => {
  return (
    <div className="border flex flex-col gap-2 justify-center rounded-lg w-56 h-20 p-3 text-xs">
      <div className="flex justify-between items-center">
        <p className="font-bold">Profile viewers</p>
        <p className="text-blue-700 font-bold">76</p>
      </div>
      <div className="flex justify-between items-center">
        <p className="font-bold">Post impressions</p>
        <p className="text-blue-700 font-bold">12</p>
      </div>
    </div>
  );
};
