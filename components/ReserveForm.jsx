"use client";

import React, { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Button from "./Button";
import Counter from "./Counter";
import Input from "./Input";
import { useRouter } from "next/navigation";

const ReserveForm = () => {
  const [open, setOpen] = useState(false);
  const menuRef = useRef(null);
  const handler = (e) => {
    if (!menuRef.current.contains(e.target) && !document.getElementById("modalId").contains(e.target)) {
      setOpen(false);
    }
  }
  useEffect(() => {
    document.addEventListener('click', handler);
    return () => {
      document.removeEventListener('click', handler);
    };
  }, [])


  const router = useRouter();
  const path = usePathname();
  const labelSrc = path === '/iranout/' ? 'مبدا (شهر، فرودگاه)' : 'مبدا (شهر)';
  const labelSrc2 = path === '/iranout/' ? 'مقصد (شهر، فرودگاه)' : 'مقصد (شهر)';
  const Src = path === "/" ? "/flights/city-to-city" : "";


  const [formData, setFormData] = useState({
    origin: "",
    destination: "",
    fromDate: "",
    toDate: "",
    adult: 1,
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
  const handleCounter2 = (type, value) => {
    setFormData((prevFormData) => {
      const updatedValue = prevFormData[type] + value;
      const newValue = updatedValue < 1 ? 1 : updatedValue;

      return {
        ...prevFormData,
        [type]: newValue,
      };
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
  };
  const total = adult + child + newborn;

  return (
    <form className="" onSubmit={handleSubmit}>
      <div className="flex flex-col lg:flex-row gap-5">
        <div className="flex lg:flex-row flex-col lg:w-[42%] w-full">
          <div className="flex lg:w-1/2 w-full">
            <Input
              className="lg:rounded-l-none lg:rounded-br-md rounded-b-none focus:border-b-gray-300 lg:focus:border-l-gray-300 lg:focus:border-b-blue-500"
              onChange={handleChange}
              value={origin}
              name="origin"
              type="text"
              label={labelSrc}

            />
          </div>
          <div className="flex lg:w-1/2 w-full">
            <Input
              className="lg:border-r-0 border-t-0 lg:rounded-tl-md rounded-t-none lg:rounded-r-none lg:border-t"
              onChange={handleChange}
              value={destination}
              name="destination"
              type="text"
              label={labelSrc2}
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
          <div ref={menuRef} onClick={() => setOpen(true)} className="flex  " >
            <Input readonly
              className=" bold "
              value={1}
              name="passengerToggle"
              type="text"
              label2={(total.toString()?.replace(/\d/g, (d) => "۰۱۲۳۴۵۶۷۸۹"[d])) + 'مسافر'}
              readOnly
            />
            <span className=" absolute  tracking-wide  pointer-events-none text-slate-500  text-[0.6rem]  -translate-y-6 bg-white  duration-200  right-3 px-2 top-4   "> مسافران</span>
          </div>
          <div id="modalId"
            className={`p-5 space-y-4 rounded-md border shadow-md absolute w-72 bg-white ${open ? "block" : "hidden"
              }`}
          >
            <Counter
              title="بزرگسال"
              subtitle="(۱۲ سال به بالا)"
              value={adult.toString()?.replace(/\d/g, (d) => "۰۱۲۳۴۵۶۷۸۹"[d])}
              onAdd={() => handleCounter2("adult", 1)}
              onReduce={() => handleCounter2("adult", -1)}
            />
            <Counter
              title="کودک"
              subtitle="(۲ تا ۱۲ سال)"
              value={child.toString()?.replace(/\d/g, (d) => "۰۱۲۳۴۵۶۷۸۹"[d])}
              onAdd={() => handleCounter("child", 1)}
              onReduce={() => handleCounter("child", -1)}
            />
            <Counter
              title="نوزاد"
              subtitle="(۱۰ روز تا ۲ سال)"
              value={newborn.toString()?.replace(/\d/g, (d) => "۰۱۲۳۴۵۶۷۸۹"[d])}
              onAdd={() => handleCounter("newborn", 1)}
              onReduce={() => handleCounter("newborn", -1)}
            />
            <Button className="w-full" lg label="تایید" type="submit" onclick={() => setOpen(false)} />
          </div>
        </div>
        <Button lg label="جستجو" type="submit" onclick={() => router.push(Src)} />

      </div>
    </form>
  );
};

export default ReserveForm;
