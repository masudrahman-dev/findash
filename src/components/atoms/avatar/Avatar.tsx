import React from "react";
import image from "../../../assets/6056fb585be5cf80c84cadb4db412f15.jpeg";
import clx from "../../../utils/clx";
const Avatar = ({ className }: { className?: string }) => {
  return (
    <img src={image} className={clx("h-12 w-12 rounded-full", className)} />
  );
};

export default Avatar;
