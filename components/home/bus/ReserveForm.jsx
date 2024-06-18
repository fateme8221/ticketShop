"use client";

import React, { useState } from "react";

import Button from "../../Button";
import Counter from "../../Counter";
import Input from "../../Input";
import { useRouter } from "next/navigation";

const ReserveForm = () => {
  const router = useRouter();
  const [formData, setFormData] = useState({
    origin: "",
    destination: "",
    fromDate: "",
    toDate: "",
    adult: 0,
    child: 0,
    newborn: 0,
    passengerToggle: false,
  });

  const {
    origin,
    destination,
    fromDate,
    toDate,
    adult,
    child,
    newborn,
    passengerToggle,
  } = formData;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleToggle = () => {
    setFormData((prevFormData) => ({
      ...prevFormData,
      passengerToggle: !prevFormData.passengerToggle,
    }));
  };

  const handleCounter = (type, value) => {
    setFormData((prevFormData) => {
      const updatedValue = prevFormData[type] + value;
      const newValue = updatedValue < 0 ? 0 : updatedValue;

      return {
        ...prevFormData,
        [type]: newValue,
      };
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // router.push("/bus/tickets");
    console.log(origin, destination);
    // Handle form submission here
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="flex flex-col lg:flex-row gap-5">
        <div className="flex lg:flex-row flex-col lg:w-[42%] w-full">
          <div className="flex lg:w-1/2 w-full">
            <Input
              className="lg:rounded-l-none lg:rounded-br-md rounded-b-none focus:border-b-gray-300 lg:focus:border-l-gray-300 lg:focus:border-b-blue-500"
              onChange={handleChange}
              value={origin}
              name="origin"
              type="text"
              label="مبدا(شهر)"
            />
          </div>
          <div className="flex lg:w-1/2 w-full">
            <Input
              className="lg:border-r-0 border-t-0 lg:rounded-tl-md rounded-t-none lg:rounded-r-none lg:border-t"
              onChange={handleChange}
              value={destination}
              name="destination"
              type="text"
              label="مقصد(شهر)"
            />
          </div>
        </div>
        <div className="flex flex-row  lg:w-1/3 w-full">
          <Input
            className="rounded-l-none focus:border-l-gray-300"
            onChange={handleChange}
            value={fromDate}
            name="fromDate"
            type="text"
            label="تاریخ رفت"
          />
          <Input
            className="border-r-0 rounded-r-none"
            onChange={handleChange}
            value={toDate}
            name="toDate"
            type="text"
            label="تاریخ برگشت"
          />
        </div>
        <div className="relative ">
          <div className="flex" onClick={handleToggle}>
            <Input
              className=""
              value={1}
              name="passengerToggle"
              type="text"
              label2="۱ مسافر "
            />
            <span className=" absolute tracking-wide pointer-events-none text-slate-500 text-[0.6rem] -translate-y-6 bg-white  duration-200  right-3 px-2 top-4   ">
              {" "}
              مسافران
            </span>
          </div>
          <div
            className={`p-5 space-y-4 rounded-md border shadow-md absolute w-72 bg-white ${
              passengerToggle ? "block" : "hidden"
            }`}
          >
            <Counter
              title="بزرگسال"
              subtitle="(۱۲ سال به بالا)"
              value={adult}
              onAdd={() => handleCounter("adult", 1)}
              onReduce={() => handleCounter("adult", -1)}
            />
            <Counter
              title="کودک"
              subtitle="(۲ تا ۱۲ سال)"
              value={child}
              onAdd={() => handleCounter("child", 1)}
              onReduce={() => handleCounter("child", -1)}
            />
            <Counter
              title="نوزاد"
              subtitle="(۱۰ روز تا ۲ سال)"
              value={newborn}
              onAdd={() => handleCounter("newborn", 1)}
              onReduce={() => handleCounter("newborn", -1)}
            />
          </div>
        </div>
        <Button lg label="جستجو" type="submit" />
      </div>
    </form>
  );
};

export default ReserveForm;
