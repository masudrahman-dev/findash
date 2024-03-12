import React from "react";
import Vr from "../../atoms/Vr/Vr";

const FormFooter = () => {
  return (
    <>
      <Vr />
      <div className="flex items-center gap-6">
        <button
          className="hover inline-flex h-12 w-[131px] items-center justify-center  rounded-xl border text-gray  transition-colors duration-200  hover:border hover:bg-primary hover:text-white lg:px-3 lg:py-6"
          type="submit"
        >
          <span className="text-base text-gray">Cancel</span>
        </button>
        <button
          className="hover inline-flex h-12 w-[131px] items-center justify-center  rounded-xl border text-gray  transition-colors duration-200  hover:border hover:bg-primary hover:text-white lg:px-3 lg:py-6"
          type="submit"
        >
          <span className="text-base text-gray">Yes</span>
        </button>
      </div>
    </>
  );
};

export default FormFooter;
