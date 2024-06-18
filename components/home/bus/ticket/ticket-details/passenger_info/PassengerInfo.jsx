import CoachInfo from "./CoachInfo";
import ConfirmAndContinue from "./ConfirmAndContinue";
import PassengerCode from "./PassengerCode";
import React from "react";
import TicketSummary from "./TicketSummary";
import { motion } from "framer-motion";

const PassengerInfo = ({ register, errors, next, delta }) => {
  return (
    <motion.div
      initial={{ x: delta >= 0 ? "-50%" : "50%", opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.3, ease: "easeInOut" }}
    >
      <div className="pt-20 px-8 lg:px-24 space-y-5">
        <TicketSummary />
        <div className="flex flex-col gap-5 lg:flex-row">
          <PassengerCode register={register} errors={errors} />
          <CoachInfo register={register} errors={errors} />
        </div>
      </div>
      <ConfirmAndContinue next={next} />
    </motion.div>
  );
};

export default PassengerInfo;
