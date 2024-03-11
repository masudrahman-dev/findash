import React from "react";
import InfoCircleIcon from "../../icons/InfoCircleIcon";
import { ChevronDownIcon } from "@heroicons/react/20/solid";

const TotalBalance = () => {
  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <p className="flex items-center gap-1 text-nowrap text-subtitle ">
          <span>Total Balance</span>
          <InfoCircleIcon iconWrapperStyle="h-5 w-5" />
        </p>

        <div className="flex items-center gap-1  ">
          <svg
            width="27"
            height="17"
            viewBox="0 0 27 17"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g opacity="0.73">
              <path
                d="M9.84863 1.94189H17.1486V15.0587H9.84863V1.94189Z"
                fill="#FF5F00"
              />
              <path
                d="M10.3118 8.50008C10.3118 5.83504 11.5632 3.47119 13.4866 1.94163C12.073 0.829266 10.2886 0.157227 8.34199 0.157227C3.73008 0.157227 -0.000976562 3.88828 -0.000976562 8.50008C-0.000976562 13.1118 3.73008 16.8429 8.34188 16.8429C10.2885 16.8429 12.0729 16.1709 13.4866 15.0584C11.5632 13.5521 10.3118 11.1651 10.3118 8.50008Z"
                fill="#EB001B"
              />
              <path
                d="M26.9993 8.50008C26.9993 13.1118 23.2682 16.8429 18.6564 16.8429C16.7098 16.8429 14.9254 16.1709 13.5117 15.0584C15.4584 13.529 16.6866 11.1651 16.6866 8.50008C16.6866 5.83504 15.4352 3.47119 13.5117 1.94163C14.9253 0.829266 16.7098 0.157227 18.6564 0.157227C23.2682 0.157227 26.9994 3.91151 26.9994 8.50008H26.9993Z"
                fill="#F79E1B"
              />
            </g>
          </svg>

          <span className="text-nowrap text-medium text-gray">**** 7189</span>
          <ChevronDownIcon />
        </div>
      </div>
      <p className="text-4xl font-bold">$12,456,315</p>
      <div className="flex items-center justify-between">
        <button className="btn">Transfer</button>
        <button className="btn">Receive</button>
      </div>
    </div>
  );
};

export default TotalBalance;
