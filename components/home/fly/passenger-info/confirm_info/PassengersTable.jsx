import PassengerRow from "./PassengerRow";
import React from "react";

const PassengersTable = () => {
  return (
    <div className="m-3 lg:m-5 rounded-md border overflow-auto">
      <table className=" md:w-full mx-auto text-right  bg-white lg:border-collapse">
        <thead className="lg:border-b-2 bg-slate-100 border-slate-800">
          <tr className="text-slate-800 bold  text-center">
            <th className="lg:py-2 lg:px-4 lg:border-b">نام و نام خانوادگی</th>
            <th className="lg:py-2 lg:px-4 lg:border-b">جنسیت</th>
            <th className="lg:py-2 lg:px-4 lg:border-b">کد ملی / شماره پاسپورت</th>
            <th className="lg:py-2 lg:px-4 lg:border-b">تاریخ تولد</th>
            <th className="lg:py-2 lg:px-4 lg:border-b">ملیت</th>
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
