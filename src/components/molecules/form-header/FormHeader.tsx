import React from "react";
import InfoCircleIcon from "../../icons/InfoCircleIcon";

const FormHeader = () => {
  return (
    <div className="flex items-center gap-2">
      <h2 className="text-title">Preferences</h2>
      <InfoCircleIcon />
    </div>
  );
};

export default FormHeader;
