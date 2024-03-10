import React from "react";
import InfoCircleIcon from "../../icons/InfoCircleIcon";
import Avatar from "../../atoms/avatar/Avatar";
import NextSelect from "../../molecules/next-select/NextSelect";

const PersonalInfoForm = () => {
  return (
    <form className="h-[850px]">
      <div className="flex items-center gap-2">
        <h2 className="text-title">Personal Information</h2>
        <InfoCircleIcon />
      </div>
      <div className="mt-6 h-[1px] rounded-full bg-silver" />
      <div className="pt-8">
        <div className="space-y-6">
          <div>
            <span className="pb-3 text-small text-gray">Photo Profile</span>
            <div className="flex items-center gap-3">
              <Avatar className="h-20 w-20" />
              <label
                htmlFor="upload"
                className=" block rounded-xl bg-primary  px-6 py-3 text-base text-white"
              >
                <span>Upload image</span>
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
              <p className="pb-[2px] text-medium text-gray">Display Name</p>
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
              <p className="pb-[2px] text-medium text-gray">Email</p>
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
              <p className="pb-[2px] text-medium text-gray">Date of Birth</p>
              <input
                type="date"
                className="pointer-events-none w-full rounded-xl border border-silver px-6 py-5 focus:outline-none "
                placeholder="date of birth"
                id="date"
              />
            </label>
          </div>
          <div className="border">
            <div className=" flex items-center justify-between gap-6">
              <div>
                <label htmlFor="province" className=" block   ">
                  <p className="pb-[2px] text-medium text-gray">Country</p>
                  <NextSelect />
                </label>
              </div>
              <div>
                <label htmlFor="province" className=" block   ">
                  <p className="pb-[2px] text-medium text-gray">Province</p>
                  <NextSelect />
                </label>
              </div>
              <div>
                <label htmlFor="city" className=" block   ">
                  <p className="pb-[2px] text-medium text-gray">City</p>
                  <NextSelect />
                </label>
              </div>
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
