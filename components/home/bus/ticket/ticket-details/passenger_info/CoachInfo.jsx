import { FaUser } from "react-icons/fa";
import React from "react";

const info = [
  { id: 1, for: "firstName", label: "نام" },
  { id: 1, for: "lastName", label: "نام خانوادگی" },
];
const CoachInfo = ({ register, errors }) => {
  return (
    <div className="bg-white p-5 flex-1 rounded-lg shadow-lg border border-r-teal-900 border-r-[6px]">
      <div className="flex gap-3 mb-5">
        <FaUser className="text-teal-900 text-lg" />
        <h2 className="bold text-lg text-slate-800">مشخصات سرپرست</h2>
      </div>
      <div className="flex flex-col lg:flex-row gap-5">
        {info.map((item) => (
          <label key={item.id} className="relative" htmlFor={item.for}>
            <input
              required
              type="text"
              id={item.for}
              {...register(`${item.for}`)}
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
          top-3
          right-3
          px-2
          text-slate-400
          peer-focus:text-slate-500
          peer-focus:-translate-y-[1.25rem] bg-white duration-200  
        "
            >
              {item.label}
            </span>
          </label>
        ))}
      </div>
      {errors.firstName?.message && (
        <p className="mt-2 text-sm text-red-600 bold">
          {errors.firstName.message}
        </p>
      )}
      {errors.lastName?.message && (
        <p className="mt-2 text-sm text-red-600 bold">
          {errors.lastName.message}
        </p>
      )}
    </div>
  );
};

export default CoachInfo;
