import Button from "@/components/Button";
import React from "react";

const ContinueToPay = ({prev}) => {
  return (
    <div className="bg-gray-700 p-5 px-8 lg:px-24 mt-10 border flex flex-col items-center justify-center lg:flex-row lg:justify-between">
      <div>
        <h2 className="text-white text-lg bold mb-5 lg:mb-0">
          هنگام پرداخت با استفاده از موجودی، در صورت استرداد، مبلغ قابل پرداخت
          به موجودی حساب شما باز خواهد گشت.
        </h2>
        <button onClick={prev} className="border rounded-md text-white p-2 px-4 mt-5 hover:bg-white/10 duration-200">بازگشت</button>
      </div>
      <div className="flex flex-col gap-5 items-center justify-center">
        <div className="flex gap-8 items-center justify-between">
          <h2 className="text-white text-lg bold mb-5 lg:mb-0">
            مبلغ قابل پرداخت
          </h2>
          <div>
            <b className="text-blue-300 ml-1">61,000,000</b>
            <span className="text-gray-300">ریال</span>
          </div>
        </div>
        <Button label="پرداخت آنلاین" />
      </div>
    </div>
  );
};

export default ContinueToPay;
