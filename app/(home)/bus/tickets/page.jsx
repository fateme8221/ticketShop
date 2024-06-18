import ReserveForm from "@/components/home/bus/ReserveForm";
import TicketsAndFilter from "@/components/home/bus/tickets-list/TicketsAndFilter";

const TicketsPage = () => {
  return (
    <div className="mt-[470px] lg:-mt-36 lg:pt-96 px-8 lg:px-24">
      <div className="bg-white p-10 z-20 fixed top-14 shadow-lg h-fit inset-x-0">
        <ReserveForm />
      </div>
      <TicketsAndFilter />
    </div>
  );
};

export default TicketsPage;
