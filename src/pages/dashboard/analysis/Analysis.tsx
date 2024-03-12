import React from "react";
import Vr from "../../../components/atoms/Vr/Vr";

import Decrease from "./decrease/Decrease";
import Increase from "./increase/Increase";

const Analysis = () => {
  return (
    <>
      <Increase />
      <Vr className="my-6" />
      <Decrease />
    </>
  );
};

export default Analysis;
