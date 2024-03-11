import React from "react";
import InfoCircleIcon from "../../icons/InfoCircleIcon";
import Avatar from "../../atoms/avatar/Avatar";
import NextSelect from "../../molecules/next-select/NextSelect";
import NextSwitch from "../../molecules/next-switch/NextSwitch";

const PreferencesForm = () => {
  return (
    <form className="">
      <div className="flex items-center gap-2">
        <h2 className="text-title">Preferences</h2>
        <InfoCircleIcon />
      </div>
      <div className="mt-6 h-[1px] rounded-full bg-silver" />
      <div className="pt-8">
        <div className="space-y-8">
          <div>
            <label htmlFor="language" className=" block   ">
              <p className="pb-[3px] text-medium text-gray">Language</p>
              <NextSelect />
            </label>
          </div>
          <div>
            <label htmlFor="themes" className=" block   ">
              <p className="pb-[3px] text-medium text-gray">Color themes</p>
              <NextSelect />
            </label>
          </div>

          <div>
            <p className="pb-[3px] text-medium text-gray">Notification</p>
            <div className="flex items-center justify-between">
              <div className="pt-medium">
                <p className="text-title text-gray">Update Systems</p>
                <p className="pt-[9px] text-small text-gray">
                  let me know if there is a new product update
                </p>
              </div>
              <NextSwitch />
            </div>
          </div>
          <div className="flex items-center justify-between">
            <div>
              <p className="text-title text-gray">Transactions</p>
              <p className="pt-[9px] text-small text-gray">
                tell me about the information after making the transaction{" "}
              </p>
            </div>
            <NextSwitch />
          </div>
          <div className="flex items-center justify-between">
            <div>
              <p className="text-title text-gray">Email Notification</p>
              <p className="pt-[9px] text-small text-gray">
                notify me of all notifications via email
              </p>
            </div>
            <NextSwitch />
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

export default PreferencesForm;
