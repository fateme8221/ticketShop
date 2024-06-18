import ContinueToPay from "./ContinueToPay";
import React from "react";
import SupervisorInfo from "./SupervisorInfo";
import TicketInfo from "./TicketInfo";
import { motion } from "framer-motion";

const ConfirmInfo = () => {
  return (
    <motion.div
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.3, ease: "easeInOut" }}
    >
      <div className=" pt-32 lg:pt-20 px-9 lg:px-0 space-y-5">
        <TicketInfo />
        <SupervisorInfo />
      </div>
      <ContinueToPay />
    </motion.div>
  );
};

export default ConfirmInfo;
