import React from "react";
import Slider from "./Slider";
import TicketReserve from "./TicketReserve";

const Ticket = () => {
  return (
    <div>
      <div className="my-16">
        <h2 className="text-3xl mb-5 bold text-gray-900 text-center">
          بلیط اتوبوس{" "}
        </h2>
        <p className="text-gray-600 leading-7 max-w-4xl mx-auto">
          سفر با اتوبوس به دلیل پایین آوردن هزینه‌ها و البته راحتی و امنیت بالا
          مورد استقبال مسافران است. با توسعه فناوری‌های نوین و ایجاد رفتار خرید
          اینترنتی، دیگر نیازی نیست برای خرید بلیط اتوبوس به ترمینال شرق و سایر
          ترمینال‌های اتوبوس‌رانی مراجعه کنید. علی‌بابا با توجه به اعتبار و
          پیشینه‌ای که در زمینه عرضه بلیط سفر و سایر خدمات گردشگری دارد، بهترین
          وب‌سایت رزرو بلیط اتوبوس است. شما می‌توانید در علی‌بابا بهترین قیمت را
          برای خرید بلیط اتوبوس پیدا کنید؛ همچنین این امکان را دارید تا از بین
          شرکت‎‌های اتوبوس‌رانی مختلف دست به انتخاب بزنید. علی‌بابا به عنوان
          مرجع فروش بلیط اینترنتی اتوبوس، تمام مسیرهای زمینی داخل کشور و تعدادی
          از مسیرهای خارجی را پوشش می‌دهد. در دسترس بودن لیست کاملی از شرکت‌های
          اتوبوس‌رانی در سایت علی‌بابا امکان خرید آنلاین بلیط اتوبوس را با قیمت
          مناسب برای شما ممکن می‌سازد. از طرف دیگر اگر ترجیح شما رفاه و آرامش
          بیشتر در طول سفر است، می‌توانید بلیط اتوبوسی را بخرید که اگرچه قیمتش
          کمی بیشتر است، اما از امکانات رفاهی بیشتری نیز برخوردار است و سفر را
          برای شما دلپذیرتر می‌کند. ضمنا شما هنگام خرید آنلاین بلیط اتوبوس از
          علی‌بابا، علاوه بر انتخاب صندلی، می‌توانید طول مسیر، ساعت حرکت و
          قوانین استرداد بلیط را نیز مشاهده کنید.{" "}
        </p>
      </div>
      <Slider />
      <TicketReserve />
    </div>
  );
};

export default Ticket;
