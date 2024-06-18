import { FaBarcode } from "react-icons/fa6";
import Input from "@/components/Input";
import React from "react";

const PassengerCode = ({ register, errors }) => {
  return (
    <div className="bg-white p-5 flex-1 rounded-lg shadow-lg border border-r-teal-900 border-r-[6px]">
      <div className="flex gap-3 mb-5">
        <FaBarcode className="text-teal-900 text-lg" />
        <h2 className="bold text-lg text-slate-800">
          کد ملی مسافر را وارد نمایید
        </h2>
      </div>
      <label className="relative" htmlFor="code">
        <input
          required
          type="text"
          id="code"
          {...register("code")}
          className="w-full
          peer
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
        "
        />
        <span
          className="
          absolute 
          tracking-wide
          pointer-events-none
          peer-focus:text-[0.8rem]
          peer-valid:text-[0.6rem] peer-valid:-translate-y-6
          top-0
          right-14
          px-2
          text-slate-400
          peer-focus:text-slate-500
          peer-focus:-translate-y-[1.25rem] bg-white duration-200  
        "
        >
          کد ملی
        </span>
      </label>
      {errors.code?.message && (
        <p className="mt-2 text-sm text-red-600 bold">{errors.code.message}</p>
      )}
    </div>
  );
};

export default PassengerCode;
