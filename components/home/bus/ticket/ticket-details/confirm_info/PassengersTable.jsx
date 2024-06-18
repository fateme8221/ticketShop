import PassengerRow from "./PassengerRow";
import React from "react";

const PassengersTable = () => {
  return (
    <div className="m-10 rounded-md border overflow-auto">
      <table className="w-[970px] md:w-full mx-auto text-right bg-white border-collapse">
        <thead className="border-b-2 bg-slate-100 border-slate-800">
          <tr className="text-slate-800 text-center">
            <th className="py-2 px-4 border-b">نام و نام خانوادگی</th>
            <th className="py-2 px-4 border-b">جنسیت</th>
            <th className="py-2 px-4 border-b">تاریخ تولد</th>
            <th className="py-2 px-4 border-b">شماره همراه</th>
          </tr>
        </thead>
        <tbody>
          <PassengerRow />
        </tbody>
      </table>
    </div>
  );
};

export default PassengersTable;
