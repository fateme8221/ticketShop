import React from "react";

const PassengerRow = () => {
  return (
    <tr className="even:bg-slate-50 text-end lg:text-center py-3 px-2 duration-200">
      <td data-th='نام و نام خانوادگی' className="py-2 lg:px-4 lg:border-b">
        <h2 className="text-slate-800">رضا جعفری</h2>
      </td>
      <td data-th='جنسیت' className="py-2 lg:px-4 lg:border-b">
        <h2 className="text-slate-800">مرد</h2>
      </td>
      <td data-th='کد ملی / شماره پاسپورت' className="py-2 lg:px-4 lg:border-b">
        <h2 className="text-slate-800">۰۵۹۶۸۹۹۸۴۲</h2>
      </td>
      <td data-th='تاریخ تولد' className="py-2 lg:px-4 lg:border-b">
        <h2 className="text-slate-800">۱۳۹۰/۰۱/۰۱</h2>
      </td>
      <td data-th='ملیت' className="py-2 lg:px-4 lg:border-b">
        <h2 className="text-slate-800">ایران</h2>
      </td>
    </tr>
  );
};

export default PassengerRow;
