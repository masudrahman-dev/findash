import React from "react";
import clx from "../../../utils/clx";

const Vr = ({ className }: { className?: string }) => {
  return (
    <div className={clx("mt-6 h-[1px] rounded-full bg-silver", className)} />
  );
};

export default Vr;
