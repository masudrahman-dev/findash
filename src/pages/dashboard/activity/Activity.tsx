import React from "react";
import CardHeader from "../card-header/CardHeader";
import Line from "../line/Line";

const Activity = () => {
  return (
    <div className="">
      <CardHeader />
      <div className="space-y-8 pt-6">
        {[...Array(4)].map(() => {
          return <Line />;
        })}
      </div>
    </div>
  );
};

export default Activity;
