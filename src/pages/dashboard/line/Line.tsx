import React from "react";
import clx from "../../../utils/clx";

const Line = () => {
  return (
    <div className="flex items-center justify-between gap-3">
      <div className="flex items-center gap-3">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className={clx("h-12 w-12")}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="m11.25 11.25.041-.02a.75.75 0 0 1 1.063.852l-.708 2.836a.75.75 0 0 0 1.063.853l.041-.021M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9-3.75h.008v.008H12V8.25Z"
          />
        </svg>
        <div>
          <p className="text-base">Figma Pro</p>
          <p className="text-label text-gray">Subscriptions</p>
        </div>
      </div>
      <div className="text-end">
        <p className="text-base">-$23.21</p>
        <p className="text-label text-gray">10/02/22 - 15.34</p>
      </div>
    </div>
  );
};

export default Line;
