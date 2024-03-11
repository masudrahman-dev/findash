import React, { ReactNode, forwardRef, useState } from "react";
import EyeOpenIcon from "../../icons/EyeOpenIcon";
import EyeStashIcon from "../../icons/EyeStashIcon";
interface InputProps {
  className?: string;
  children?: ReactNode;
  isHaveIcon?: boolean;
  placeholder?: string;
}
const Input: React.FC<InputProps> = forwardRef(
  ({ children, className, isHaveIcon, placeholder }, ref) => {
    const [isOpen, setIsOpen] = useState(false);
    return (
      <div className="relative">
        <input
          ref={ref}
          type={isOpen ? "text" : "password"}
          className=" w-full rounded-xl border border-silver px-6 py-5 placeholder:text-small focus:outline-none "
          placeholder={placeholder}
          id="oldPassword"
        />
        <button
          className="absolute right-0 top-1/2 -translate-x-1/2 -translate-y-1/2"
          onClick={() => setIsOpen(!isOpen)}
          type="button"
        >
          {isHaveIcon && isOpen ? <EyeOpenIcon /> : <EyeStashIcon />}
        </button>
      </div>
    );
  },
);

export default Input;
