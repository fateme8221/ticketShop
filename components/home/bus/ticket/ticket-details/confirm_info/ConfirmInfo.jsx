import ContinueToPay from "./ContinueToPay";
import React from "react";
import SupervisorInfo from "./SupervisorInfo";
import TicketInfo from "./TicketInfo";
import { motion } from "framer-motion";

const ConfirmInfo = ({ prev, delta }) => {
  return (
    <motion.div
      initial={{ x: delta >= 0 ? "-50%" : "50%", opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.3, ease: "easeInOut" }}
    >
      <div className="pt-20 px-8 lg:px-24 space-y-5">
        <TicketInfo />
        <SupervisorInfo />
      </div>
      <ContinueToPay prev={prev} />
    </motion.div>
  );
};

export default ConfirmInfo;
