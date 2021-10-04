import React from "react";

export default ({ title, location, position, year }) => (
  <>
    <div className="flex items-end">
      <div className="text-black text-2xl mr-2">{title}</div>
      <div className="text-gray-500 text-lg">({location})</div>
    </div>
    <div className="flex items-end pb-2 border-b border-grey-light">
      <div className="text-gray-500 text-md mr-2">{position}</div>
      <div className="text-gray-500 text-md">({year})</div>
    </div>
  </>
);
