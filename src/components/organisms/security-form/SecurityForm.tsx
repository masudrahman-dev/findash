import React, { useState } from "react";

import FormHeader from "../../molecules/form-header/FormHeader";
import FormFooter from "../../molecules/form-footer/FormFooter";
import EyeStashIcon from "../../icons/EyeStashIcon";
import EyeOpenIcon from "../../icons/EyeOpenIcon";
import Input from "../../atoms/input/Input";

const SecurityForm = () => {
  return (
    <form className="">
      <FormHeader />
      <div className="mt-6 h-[1px] rounded-full bg-silver" />
      <div className="pt-8">
        <div className="space-y-8">
          <div>
            <label htmlFor="oldPassword" className=" block   ">
              <p className="pb-[3px] text-medium text-gray">Old Password</p>
              <Input isHaveIcon={true} placeholder="Old Password" />
            </label>
          </div>
          <div>
            <label htmlFor="newPassword" className=" block   ">
              <p className="pb-[3px] text-medium text-gray">New Password</p>
              <Input isHaveIcon={true} placeholder="New Password" />
            </label>
          </div>
          <div>
            <label htmlFor="repeatNewPassword" className=" block   ">
              <p className="pb-[3px] text-medium text-gray">
                Repeat New Password
              </p>
              <Input isHaveIcon={true} placeholder="Repeat New Password" />
            </label>
          </div>

          <FormFooter />
        </div>
      </div>
    </form>
  );
};

export default SecurityForm;
