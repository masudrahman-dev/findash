import React, { ReactNode } from "react";

const IconWrapper = ({ children }: { children: ReactNode }) => {
  return (
    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white  bg-opacity-40  ">
      {children}
    </div>
  );
};

export default IconWrapper;
