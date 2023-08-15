import { HTMLProps, forwardRef } from "react";
import tw from "tailwind-styled-components";

const Input = forwardRef<HTMLInputElement, HTMLProps<HTMLInputElement>>(
  ({ id, label, ...restProps}, ref) => {
    return (
      <div>
        {label && (
          <label
            htmlFor={id}
            className="text-gray-400 font-medium text-[14px]"
          >
            {label}
          </label>
        )}
        <StyledInput ref={ref} {...restProps} />
      </div>
    );
  }
);

const StyledInput = tw.input`px-2 py-1.5 h-9  mt-1 w-full rounded-md text-sm shadow-sm cursor-pointer border border-gray-400 placeholder-slate-400
 hover:border-blue-800 outline-none focus:border-blue-800 invalid:border-red-600`;

Input.displayName = "Input";

export default Input;
