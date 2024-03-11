import React from "react";

const FormFooter = () => {
  return (
    <>
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
    </>
  );
};

export default FormFooter;
