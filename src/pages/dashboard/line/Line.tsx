import React from "react";
import clx from "../../../utils/clx";
import IconWrapper from "../../../components/icons/IconWrapper";
import figmaIcon from "../../../assets/icons/adobe.svg";
const Line = () => {
  return (
    <div className="flex items-center justify-between gap-3">
      <div className="flex items-center gap-3">
        <IconWrapper iconWrapperStyle="bg-gray opacity-100">
          <img src={figmaIcon} alt="" />
        </IconWrapper>
        <div>
          <p className="text-base">Adobe</p>
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
