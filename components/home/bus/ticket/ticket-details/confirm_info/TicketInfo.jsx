import { FaTicketAlt } from "react-icons/fa";
import React from "react";
import Row from "./Row";

const items = [
  { id: 1, name: "مبدا" },
  { id: 2, name: "مقصد" },
  { id: 3, name: "تاریخ و ساعت حرکت" },
  { id: 4, name: "شرکت مسافربری" },
  { id: 5, name: "نوع اتوبوس" },
  { id: 6, name: "تعداد صندلی" },
  { id: 7, name: "شماره صندلی(ها)" },
  { id: 8, name: "قیمت هر صندلی" },
  { id: 9, name: "مبلغ کل" },
];
const TicketInfo = () => {
  return (
    <div className="bg-white flex-1 rounded-lg shadow-lg overflow-hidden">
      <div className="flex gap-3 p-5 mb-5 border-r-teal-900 border-r-[6px] bg-teal-50">
        <FaTicketAlt className="text-teal-900 text-xl" />
        <h2 className="bold text-lg text-slate-800">اطلاعات بلیط</h2>
      </div>
      <div className="rounded-md border m-5 mx-10 overflow-hidden">
        {items.map((item) => (
          <Row key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};

export default TicketInfo;
