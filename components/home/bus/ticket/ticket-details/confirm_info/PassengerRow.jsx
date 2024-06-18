import React from "react";

const PassengerRow = () => {
  return (
    <tr className="even:bg-slate-50 text-center py-5 duration-200">
      <td className="py-4 px-4 border-b">
        <h2 className="text-slate-800">یوسف خدری</h2>
      </td>
      <td className="py-2 px-4 border-b">
        <h2 className="text-slate-800">مرد</h2>
      </td>
      <td className="py-2 px-4 border-b">
        <h2 className="text-slate-800">1371/02/03 </h2>
      </td>
      <td className="py-2 px-4 border-b">
        <h2 className="text-slate-800">09149689984</h2>
      </td>
    </tr>
  );
};

export default PassengerRow;
