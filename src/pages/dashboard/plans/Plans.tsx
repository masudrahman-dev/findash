import React from "react";
import InfoCircleIcon from "../../../components/icons/InfoCircleIcon";
import ArrowRightIcon from "../../../components/icons/ArrowRightIcon";

const Plans = () => {
  return (
    <div>
      <div className="flex items-center justify-between">
        <p className="flex items-center gap-1 text-nowrap text-subtitle ">
          <span>My Pocked Plans</span>
          <InfoCircleIcon iconWrapperStyle="h-5 w-5" />
        </p>
        <div className="flex items-center gap-1  ">
          <span className="text-nowrap text-medium text-gray">See more</span>
          <ArrowRightIcon />
        </div>
      </div>
      <div className="flex gap-4  pt-base">
        <div className="w-[151px] rounded-xl border border-silver p-5">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="h-6 w-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 6v12m-3-2.818.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
            />
          </svg>
          <div className="pt-5">
            <p className="text-base font-semibold">New Car</p>
            <p className="text-medium text-gray">$5.000,00</p>
          </div>
        </div>
        <div className="w-[151px] rounded-xl border border-silver p-5">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="h-6 w-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 6v12m-3-2.818.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
            />
          </svg>
          <div className="pt-5">
            <p className="text-base font-semibold">New Car</p>
            <p className="text-medium text-gray">$5.000,00</p>
          </div>
        </div>
        <div className="w-[151px] rounded-xl border border-silver p-5">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="h-6 w-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 6v12m-3-2.818.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
            />
          </svg>
          <div className="pt-5">
            <p className="text-base font-semibold">New Car</p>
            <p className="text-medium text-gray">$5.000,00</p>
          </div>
        </div>
        <div className="w-[151px] rounded-xl border border-silver p-5">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="h-6 w-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 6v12m-3-2.818.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
            />
          </svg>
          <div className="pt-5">
            <p className="text-base font-semibold">New Car</p>
            <p className="text-medium text-gray">$5.000,00</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Plans;
