import FlyReserve from "@/components/home/fly/FlyReserve";
import NavigationButtons from "@/components/navigation-buttom/NavigationButtons";
import OtherServices from "@/components/home/other-sevices/OtherServices";
import QuestionsFly from "@/components/home/fly/questions/QuestionsFly";
import ServicesSlider from "@/components/home/other-sevices/ServicesSlider";
import TicketFly from "@/components/home/fly/ticket/TicketFly";

export default function Home() {

  return (

    <main className="pt-56 lg:pt-14 px-8 lg:px-24" >
      <div className="flex flex-col items-center gap-8 mb-10 justify-between ">
        <div className="border mt-[-150px] rounded-lg bg-white  w-full ">
          <NavigationButtons />
          <FlyReserve />
        </div>
        <OtherServices />
        <ServicesSlider />
        <QuestionsFly />
        <TicketFly />
      </div>
    </main>
  );
}
