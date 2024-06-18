"use client";

import { useState } from "react";

const Options = () => {
  const [way, setWay] = useState("one");
  const [straight, setStraight] = useState("straight");
  const [passanger, setPassanger] = useState("normal");
  const [cary, setCary] = useState("no");
  return (
    <div className="flex flex-wrap mb-7 gap-5">
      <select
        className="border-0 ring-1 outline-0 ring-gray-300 px-4 rounded-xl text-sm w-32"
        defaultValue={way}
        onChange={(e) => setWay(e.target.value)}
      >
        <option value="two">رفت و برگشت</option>
        <option value="one">یک طرفه</option>
      </select>
      <select
        className="border-0 ring-1 outline-0 ring-gray-300 px-4 rounded-xl text-sm w-36"
        defaultValue={straight}
        onChange={(e) => setStraight(e.target.value)}
      >
        <option value="straight">دربست می‌خواهم</option>
        <option value="nostraight">دربست نمی‌خواهم</option>
      </select>
      <select
        className="border-0 ring-1 outline-0 ring-gray-300 px-4 rounded-xl text-sm w-32"
        defaultValue={passanger}
        onChange={(e) => setPassanger(e.target.value)}
      >
        <option value="normal">مسافرین عادی</option>
        <option value="men">ویژه برادران</option>
        <option value="women">ویژه خواهران</option>
      </select>
      <select
        className="border-0 ring-1 outline-0 ring-gray-300 px-4 rounded-xl text-sm w-44"
        defaultValue={cary}
        onChange={(e) => setCary(e.target.value)}
      >
        <option value="yes">حمل خودرو می‌خواهم</option>
        <option value="no">حمل خودرو نمی‌خواهم</option>
      </select>
    </div>
  );
};

export default Options;
