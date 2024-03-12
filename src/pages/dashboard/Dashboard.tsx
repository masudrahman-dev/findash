import React from "react";

import { Outlet } from "react-router-dom";
import SidebarMenu from "../../components/molecules/sidebar-menu/SidebarMenu";
import InfoCircleIcon from "../../components/icons/InfoCircleIcon";
import ChevronDownIcon from "../../components/icons/ChevronDownIcon";
import ExpenseChart from "../../components/molecules/expense-chart/ExpenseChart";
import ArrowRightIcon from "../../components/icons/ArrowRightIcon";
import clx from "../../utils/clx";
import Line from "./line/Line";
import CardHeader from "./card-header/CardHeader";
import NextSelect from "../../components/molecules/next-select/NextSelect";

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
        <div className="">
          <CardHeader />
          <div className="space-y-8 pt-6">
            {[...Array(4)].map(() => {
              return <Line />;
            })}
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
          <div className="">
            <div className="flex items-center justify-between">
              <p className="flex items-center gap-1 text-nowrap text-subtitle ">
                <span>{"Currency"}</span>
                <InfoCircleIcon iconWrapperStyle="h-5 w-5" />
              </p>
              <form>
                <NextSelect />
              </form>
            </div>

            <div className="pt-8 space-y-6">
              <div className="flex items-center justify-between gap-3">
                <div className="flex items-center gap-3">
                  <svg
                    width="34"
                    height="34"
                    viewBox="0 0 34 34"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M16.8936 32.9375C25.7123 32.9375 32.8311 25.8188 32.8311 17H0.956055C0.956055 25.8188 8.0748 32.9375 16.8936 32.9375Z"
                      fill="#F9F9F9"
                    />
                    <path
                      d="M16.8936 1.0625C8.0748 1.0625 0.956055 8.18125 0.956055 17H32.8311C32.8311 8.18125 25.7123 1.0625 16.8936 1.0625Z"
                      fill="#ED4C5C"
                    />
                  </svg>

                  <div>
                    <p className="text-base">Rupiah</p>
                  </div>
                </div>
                <div className="flex gap-3 text-end">
                  <p className="text-base">-$23.21</p>
                  <p className="text-label text-gray">IDR</p>
                </div>
              </div>
              <div className="flex items-center justify-between gap-3">
                <div className="flex items-center gap-3">
                  <svg
                    width="34"
                    height="34"
                    viewBox="0 0 34 34"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M17 32.9375C25.802 32.9375 32.9375 25.802 32.9375 17C32.9375 8.19796 25.802 1.0625 17 1.0625C8.19796 1.0625 1.0625 8.19796 1.0625 17C1.0625 25.802 8.19796 32.9375 17 32.9375Z"
                      fill="#2A5F9E"
                    />
                    <path
                      d="M17 6.26855L17.3719 7.4373H18.5938L17.6375 8.18105L18.0094 9.3498L17 8.60606L15.9906 9.3498L16.3625 8.18105L15.4062 7.4373H16.6281L17 6.26855ZM17 24.3311L17.3719 25.4998H18.5938L17.6375 26.1904L18.0094 27.4123L17 26.6686L15.9906 27.4123L16.3625 26.1904L15.4062 25.4998H16.6281L17 24.3311ZM21.4625 22.8436L21.8344 24.0123H23.1094L22.1 24.7561L22.4719 25.9248L21.4625 25.1811L20.4531 25.9248L20.8781 24.7561L19.8688 24.0123H21.0906L21.4625 22.8436ZM24.5438 19.7623L24.9156 20.9311H26.1906L25.1813 21.6748L25.5531 22.8436L24.5438 22.0998L23.5344 22.8436L23.9594 21.6748L22.95 20.9311H24.1719L24.5438 19.7623ZM26.0312 15.2998L26.4031 16.4686H27.625L26.6156 17.2123L26.9875 18.3811L26.0312 17.6373L25.0219 18.3811L25.3937 17.2123L24.3844 16.4686H25.6063L26.0312 15.2998ZM24.5438 10.7842L24.9156 12.0061H26.1906L25.1813 12.6967L25.5531 13.8654L24.5438 13.1748L23.5344 13.8654L23.9594 12.6967L22.95 12.0061H24.1719L24.5438 10.7842ZM21.4625 7.70293L21.8344 8.9248H23.1094L22.1 9.61543L22.4719 10.7842L21.4625 10.0936L20.4531 10.7842L20.8781 9.61543L19.8688 8.9248H21.0906L21.4625 7.70293ZM12.5375 22.8436L12.1656 24.0123H10.8906L11.9 24.7561L11.5281 25.9248L12.5375 25.1811L13.5469 25.9248L13.1219 24.7561L14.1313 24.0123H12.9094L12.5375 22.8436ZM9.45625 19.7623L9.08438 20.9311H7.80937L8.81875 21.6748L8.44687 22.8436L9.45625 22.0998L10.4656 22.8436L10.0406 21.6748L11.05 20.9311H9.82812L9.45625 19.7623ZM7.96875 15.2998L7.59688 16.4686H6.375L7.38437 17.2123L7.0125 18.3811L7.96875 17.6373L8.97812 18.3811L8.60625 17.2123L9.61563 16.4686H8.39375L7.96875 15.2998ZM9.45625 10.7842L9.08438 12.0061H7.80937L8.81875 12.6967L8.44687 13.8654L9.45625 13.1748L10.4656 13.8654L10.0406 12.6967L11.05 12.0061H9.82812L9.45625 10.7842ZM12.5375 7.70293L12.1656 8.9248H10.8906L11.9 9.61543L11.5281 10.7842L12.5375 10.0936L13.5469 10.7842L13.1219 9.61543L14.1313 8.9248H12.9094L12.5375 7.70293Z"
                      fill="#FFCE31"
                    />
                  </svg>

                  <div>
                    <p className="text-base">Rupiah</p>
                  </div>
                </div>
                <div className="flex gap-3 text-end">
                  <p className="text-base">-$23.21</p>
                  <p className="text-label text-gray">IDR</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
