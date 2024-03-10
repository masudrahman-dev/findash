import React, { ReactNode } from "react";
import clx from "../../utils/clx";

const IconWrapper = ({
  children,
  iconWrapperStyle,
}: {
  children: ReactNode;
  iconWrapperStyle?: string;
}) => {
  return (
    <div
      className={clx(
        "flex h-12 w-12 items-center justify-center rounded-full bg-white  bg-opacity-10",
        iconWrapperStyle,
      )}
    >
      {children}
    </div>
  );
};

export default IconWrapper;
