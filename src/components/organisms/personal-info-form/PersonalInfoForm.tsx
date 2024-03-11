import React from "react";
import InfoCircleIcon from "../../icons/InfoCircleIcon";
import Avatar from "../../atoms/avatar/Avatar";
import NextSelect from "../../molecules/next-select/NextSelect";
import FormFooter from "../../molecules/form-footer/FormFooter";
import FormHeader from "../../molecules/form-header/FormHeader";
import TrashIcon from "../../icons/TrashIcon";

const PersonalInfoForm = () => {
  return (
    <form className="">
      <FormHeader />
      <div className="mt-6 h-[1px] rounded-full bg-silver" />
      <div className="pt-8">
        <div className="space-y-8">
          <div>
            <p className=" pb-medium text-small text-gray">Photo Profile</p>
            <div className="flex items-center justify-between gap-3 lg:justify-start">
              <Avatar className="h-[62px]  w-[62px] lg:h-20 lg:w-20" />
              <label
                htmlFor="upload"
                className="hover inline-flex h-12 w-[131px] items-center justify-center  rounded-xl border text-gray  transition-colors duration-200  hover:border hover:bg-primary hover:text-white lg:px-3 lg:py-6"
              >
                <span className="text-base">Upload image</span>
                <input
                  type="file"
                  className="hidden"
                  name="upload"
                  id="upload"
                />
              </label>

              <button
                className=" rounded-xl border  px-6 py-3 text-base text-gray transition-colors duration-200 hover:bg-primary hover:text-white"
                type="button"
              >
                <span className="hidden lg:block"> Delete</span>
                <TrashIcon className="block text-gray lg:hidden" />
              </button>
            </div>
          </div>
          <div>
            <label htmlFor="displayName" className=" block   ">
              <p className="pb-[3px] text-medium text-gray">Display Name</p>
              <input
                type="text"
                className="pointer-events-none w-full rounded-xl border border-silver px-6 py-5 focus:outline-none "
                placeholder="name"
                id="displayName"
              />
            </label>
          </div>
          <div>
            <label htmlFor="email" className=" block   ">
              <p className="pb-[3px] text-medium text-gray">Email</p>
              <input
                type="email"
                className="pointer-events-none w-full rounded-xl border border-silver px-6 py-5 focus:outline-none "
                placeholder="email"
                id="email"
              />
            </label>
          </div>
          <div>
            <label htmlFor="date" className=" block   ">
              <p className="pb-[3px] text-medium text-gray">Date of Birth</p>
              <input
                type="date"
                className="pointer-events-none w-full rounded-xl border border-silver px-6 py-5 focus:outline-none "
                placeholder="date of birth"
                id="date"
              />
            </label>
          </div>
          <div className=" flex w-full flex-col items-center justify-between gap-6 lg:flex-row">
            <div className="w-full">
              <label htmlFor="province" className=" block   ">
                <p className="pb-[3px] text-medium text-gray">Country</p>
                <NextSelect />
              </label>
            </div>
            <div className="w-full">
              <label htmlFor="province" className=" block   ">
                <p className="pb-[3px] text-medium text-gray">Province</p>
                <NextSelect />
              </label>
            </div>
            <div className="w-full">
              <label htmlFor="city" className=" block   ">
                <p className="pb-[3px] text-medium text-gray">City</p>
                <NextSelect />
              </label>
            </div>
          </div>

          <FormFooter />
        </div>
      </div>
    </form>
  );
};

export default PersonalInfoForm;
