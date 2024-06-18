import Question from "./Question";
import React from "react";

const questions = [
  {
    id: 1,
    title: "در راه آهن و هنگام سوار شدن به قطار چه مدارکی لازم است؟",
    text: "شما برای ورود به قطار باید این مدارک را با خود به همراه داشته باشید: پرینت بلیط و کارت شناسایی معتبر. در صورت داشتن تخفیف جانباز یا خانواده شهدا، به همراه داشتن کارت معتبر مربوطه نیاز ضروری است.",
  },
  {
    id:2,
    title:'مقدار بار مجاز در قطار چقدر است؟',
    text:'هر مسافر می‌تواند وسایل ضروری سفر خود را همراه ببرد به شرط آن‌كه حجم آن از ابعاد 75 سانتی متر و وزن 30 كیلوگرم تجاوز نكند. به عنوان مثال مسافر می‌تواند كیف‌دستی، بسته‌ و چمدان‌های كوچك محتوی لوازم شخصی، صندلی چرخ‌دار بیمار، كالسكه بچه و قفس كوچك پرندگان ریزجثه (حداكثر در ابعاد 40 سانتی‌متر) را به همراه داشته باشد.'
  },
  {
    id:3,
    title:'روال استرداد یا کنسلی بلیط قطار چگونه است؟',
    text:'مسافر می‌تواند تا 60 دقیقه قبل از حرکت قطار، بلیط یا بلیط‌های خریداری‌شده را به صورت آنلاین استرداد کند. برای استرداد بلیط قطار پس از زمان ذکرشده، مسافر باید تا قبل از حرکت قطار، و با ارایه بلیط چاپی و کارت شناسایی به صورت حضوری به یکی از مراکز فروش بلیط قطار مراجعه کند.'
  },
  {
    id:4,
    title:'قیمت بلیط برای کودک و نوزاد چگونه است؟',
    text:'قیمت بلیط کودک نیم‌بها و نوزاد 10 درصد مبلغ بزرگسال است.'
  },
  {
    id:5,
    title:'چه زمانی باید در ایستگاه حضور داشته باشم؟',
    text:'حضور در ایستگاه یک ساعت قبل از حرکت قطار الزامی است. همچنین ده دقیقه مانده به حركت، تمام درهای قطار بسته خواهد شد و بعد از بسته‌شدن درها برای جلوگیری از خطرات احتمالی، سوارشدن به قطار امكان‌پذیر نیست.'
  },
  {
    id:6,
    title:'در یک کوپه دربست چند نفر همراه اضافه می‌توان برد؟',
    text:'مسافر می‌تواند بعد از دربست‌کردن کوپه فقط یک نفر مسافر اضافی را بدون بلیط با این شرایط به همراه خود به قطار ببرد: حق درخواست جا خارج از همان کوپه وجود ندارد قبض این مسافر مطابق استحقاق او توسط رئیس قطار صادر می‌شود.'
  },
  {
    id:7,
    title:'در صورت مفقودی بلیط قطار، چه باید کرد؟',
    text:'در صورت مفقودی بلیط، مسافر می‌تواند در زمان اداری به ایستگاه‌های راه‌آهن که سیستم آنلاین فروش بلیط دارند، مراجعه کند و دوباره بلیط را دریافت کند. همچنین به شرط حضور به‌موقع (حداكثر ۴۵ دقیقه مانده به حركت) در ایستگاه‌های راه‌آهن كه سیستم فروش بلیط آنلاین دارند و در وقت اداری، بلیط المثنی طبق آیین‌نامه‌ مربوط صادر می‌شود. بلیط مفقودی باید از طریق شبكه‌ رایانه‌ای صادر شده و استرداد نشده باشد. صدور بلیط المثنی با ۵ درصد قیمت كل بلیط، انجام می‌شود و در صورت مفقود شدن آن، بلیط‌ المثنی دیگری صادر نخواهد شد. درحال حاضر بلیط المثنی از طریق سیستم استرداد نمی‌شود. (استرداد بلیط المثنی فقط به شرط ارائه‌ بلیط اصلی و بلیط المثنی به صورت همزمان در ایستگاه‌های آنلاین و كلیه‌ نمایندگی‌های فروش و با هماهنگی مركز یكپارچه فروش بلیط قطار انجام می‌شود).'
  },
  {
    id:8,
    title:'آیا این امکان وجود دارد که مسافر درخواست اقامت بیشتر در هتل دهد؟',
    text:'امکان اقامت بیشتر وجود دارد اما باید قبل از خرید با هتل مربوطه هماهنگ کرده باشند؛ همچنین تاریخ رفت و برگشت بلیط قطار باید بر اساس روزهایی باشد که در هتل می‌مانید. گفتنی است اقامت قطار فدک شامل شب اول و شب آخر می‌شود.'
  },
  {
    id:9,
    title:'آیا خانوم‌ها می‌توانند بلیط قطار را برای کوپه مخصوص بانوان بخرند؟',
    text:'بله این امکان وجود دارد. خانوم‌ها می‌توانند برای آرامش و راحتی خود در طول سفر، بلیط قطار را برای کوپه مخصوص بانوان بخرند. البته کوپه مخصوص آقایان هم برای آن‌ها درنظر گرفته شده است.'
  },
  {
    id:10,
    title:'شرایط بیمه قطار چه گونه است؟',
    text:'تمام مسافران قطار از لحظه‌ ورود به ایستگاه مبدا تا خروج از ایستگاه مقصد در برابر حوادث بیمه هستند. بیمه‌ حوادث مسافری شامل جبران هزینه‌های پزشكی و همچنین جبران نقص عضو یا فوت ناشی از حوادثی مانندآتش سوزی، تصادف، انفجار، خارج شدن قطار از ریل، مانور، سنگ‌پرانی و سایر حوادث احتمالی می‌شود.`'
  },
];
const Questions = () => {
  return (
    <div className="my-10">
      <h2 className="text-2xl mb-5 bold text-gray-900">پرسش های شما</h2>
      <div className="rounded-lg border border-gray-300 overflow-hidden bg-white">
        {questions.map((question, index) => 
            <Question key={question.id} index={index} {...question} questions={questions} />
        )}
      </div>
    </div>
  );
};

export default Questions;