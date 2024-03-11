import React from "react";
import InfoCircleIcon from "../../icons/InfoCircleIcon";
import Avatar from "../../atoms/avatar/Avatar";
import NextSelect from "../../molecules/next-select/NextSelect";

const PersonalInfoForm = () => {
  return (
    <form className="">
      <div className="flex items-center gap-2">
        <h2 className="text-title">Personal Information</h2>
        <InfoCircleIcon />
      </div>
      <div className="mt-6 h-[1px] rounded-full bg-silver" />
      <div className="pt-8">
        <div className="space-y-8">
          <div>
            <p className=" pb-medium text-small text-gray">Photo Profile</p>
            <div className="flex items-center gap-3">
              <Avatar className="h-[62px]  w-[62px] lg:h-20 lg:w-20" />
              <label
                htmlFor="upload"
                className="inline-block  rounded-xl border bg-primary px-2 py-3 text-white lg:px-3 lg:py-6"
                style={{ display: "inline-block" }}
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
                className=" rounded-xl border  px-6 py-3 text-base text-gray"
                type="button"
              >
                Delete
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

          <div className="mt-6 h-[1px] rounded-full bg-silver" />
          <div className="flex items-center gap-6">
            <button
              className="h-12 w-36 rounded-xl border border-silver "
              type="submit"
            >
              <span className="text-base text-dark">Cancel</span>
            </button>
            <button className="h-12 w-36 rounded-xl bg-primary  " type="submit">
              <span className="text-base text-white">Yes</span>
            </button>
          </div>
        </div>
      </div>
    </form>
  );
};

export default PersonalInfoForm;
