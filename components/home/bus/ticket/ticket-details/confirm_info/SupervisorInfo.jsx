import { FaUsers } from "react-icons/fa";
import PassengersTable from "./PassengersTable";
import React from "react";

const SupervisorInfo = () => {
  return (
    <div className="bg-white flex-1 rounded-lg shadow-lg overflow-hidden">
      <div className="flex gap-3 p-5 mb-5 border-r-teal-900 border-r-[6px] bg-teal-50">
        <FaUsers className="text-teal-900 text-2xl" />
        <h2 className="bold text-lg text-slate-800">مشخصات سرپرست مسافران</h2>
      </div>
      <PassengersTable />
    </div>
  );
};

export default SupervisorInfo;
