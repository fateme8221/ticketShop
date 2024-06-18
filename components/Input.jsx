import React from "react";

const Input = ({
  readOnly,
  onChange,
  value,
  disabled,
  name,
  label,
  label2,
  type,
  className,
}) => {
  return (
    <label className="w-full relative">
      <input
        readOnly={readOnly}
        disabled={disabled}
        placeholder=""
        required
        type={type}
        className={`
          ${className}
          peer
          w-full
          p-3
          medium
          bg-white 
          bg-inherit
          border
          border-gray-300
          focus:border-blue-500
          text-slate-500
          rounded-md
          focus:ring-0
          outline-none
          transition
          duration-200
        `}
      />
      <span
        className={`
          absolute 
          tracking-wide
          pointer-events-none
          peer-focus:text-[0.6rem]
          peer-valid:text-[0.6rem] peer-valid:-translate-y-6
          top-3
          right-3
          px-2
          text-slate-400
          peer-focus:text-slate-500
          peer-focus:-translate-y-[1.15rem] bg-white duration-200  
        `}
      >
        {label}
      </span>
      <span className=" absolute text-base tracking-wide text-slate-500 pointer-events-none right-3 px-2 top-3">{label2}</span>
    </label>
  );
};

export default Input;
