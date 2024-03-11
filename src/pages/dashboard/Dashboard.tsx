import React from "react";

import { Outlet } from "react-router-dom";
import SidebarMenu from "../../components/molecules/sidebar-menu/SidebarMenu";
import InfoCircleIcon from "../../components/icons/InfoCircleIcon";
import ChevronDownIcon from "../../components/icons/ChevronDownIcon";
import ExpenseChart from "../../components/molecules/expense-chart/ExpenseChart";
import ArrowRightIcon from "../../components/icons/ArrowRightIcon";
import clx from "../../utils/clx";

const Dashboard = () => {
  return (
    <div className="grid grid-cols-1 gap-base rounded-xl lg:relative lg:grid-cols-12 lg:gap-base  lg:bg-transparent   ">
      <div className=" rounded-xl bg-white p-medium lg:col-span-3 ">
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <p className="flex items-center gap-1 text-nowrap text-subtitle ">
              <span>Total Balance</span>
              <InfoCircleIcon iconWrapperStyle="h-5 w-5" />
            </p>

            <div className="flex items-center gap-1  ">
              <svg
                width="27"
                className="h-5 w-5"
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

              <span className="text-nowrap text-medium text-gray">
                **** 7189
              </span>
              <ChevronDownIcon iconWrapperStyle="h-5 w-5 " />
            </div>
          </div>
          <p className="text-4xl font-bold">$12,456,315</p>
          <div className="flex items-center justify-between">
            <button className="btn bg-primary text-white">Transfer</button>
            <button className="btn bg-primary text-white">Receive</button>
          </div>
        </div>
      </div>
      <div className=" rounded-xl bg-white p-medium lg:col-span-6 ">
        <div>
          <div className="flex items-center justify-between">
            <p className="flex items-center gap-1 text-nowrap text-subtitle ">
              <span>Expense Catergory</span>
              <InfoCircleIcon iconWrapperStyle="h-5 w-5" />
            </p>
            <div className="flex items-center gap-1  ">
              <span className="text-nowrap text-medium text-gray">Monthly</span>
              <ChevronDownIcon iconWrapperStyle="h-5 w-5 " />
            </div>
          </div>
        </div>
      </div>
      <div className=" rounded-xl bg-white p-medium lg:col-span-3 ">
        <div>
          <div className="flex items-center justify-between">
            <p className="flex items-center gap-1 text-nowrap text-subtitle ">
              <span>Recent Activiy</span>
              <InfoCircleIcon iconWrapperStyle="h-5 w-5" />
            </p>
            <div className="flex items-center gap-1  ">
              <span className="text-nowrap text-medium text-gray">
                See more
              </span>
              <ArrowRightIcon />
            </div>
          </div>

          <div className="flex items-center justify-between gap-3">
            <div className="flex items-center gap-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className={clx("h-12 w-12")}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m11.25 11.25.041-.02a.75.75 0 0 1 1.063.852l-.708 2.836a.75.75 0 0 0 1.063.853l.041-.021M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9-3.75h.008v.008H12V8.25Z"
                />
              </svg>
              <div>
                <p>Figma Pro</p>
                <p>Subscriptions</p>
              </div>
            </div>

            <div className="">
              <p>-$23.21</p>
              <p>10/02/22 - 15.34</p>
            </div>
          </div>
        </div>
      </div>
      <div className=" rounded-xl bg-white p-medium lg:col-span-3 ">
        <div className="h-full">
          <div className="flex items-center justify-between">
            <p className="flex items-center gap-1 text-nowrap text-subtitle ">
              <span>Expense Catergory</span>
              <InfoCircleIcon iconWrapperStyle="h-5 w-5" />
            </p>
            <div className="flex items-center gap-1  ">
              <span className="text-nowrap text-medium text-gray">Monthly</span>
              <ChevronDownIcon iconWrapperStyle="h-5 w-5 " />
            </div>
          </div>
          <div className="  ">
            <ExpenseChart />
          </div>
        </div>
      </div>
      <div className=" rounded-xl bg-white p-medium lg:col-span-6 ">
        <div>
          <div className="flex items-center justify-between">
            <p className="flex items-center gap-1 text-nowrap text-subtitle ">
              <span>My Pocked Plans</span>
              <InfoCircleIcon iconWrapperStyle="h-5 w-5" />
            </p>
            <div className="flex items-center gap-1  ">
              <span className="text-nowrap text-medium text-gray">
                See more
              </span>
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
      </div>
      <div className=" rounded-xl bg-white p-medium lg:col-span-3 ">
        <div>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur
          assumenda unde ab. Excepturi nobis esse est dolorem quam unde libero
          repellendus quo, ad quidem mollitia repellat cupiditate recusandae?
          Odit, eos.
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
