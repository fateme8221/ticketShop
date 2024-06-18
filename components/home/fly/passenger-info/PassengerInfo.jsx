
import React from "react";
import { motion } from "framer-motion";
import ConfirmAndContinue from "./ConfirmAndContinue";
import DetailsPass from "./details-passengers/DetailsPass";
import CoachInfo from "./CoachInfo";
import EmailNumber from "./EmailNumber";

const PassengerInfo = () => {
  return (
    <motion.div
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.3, ease: "easeInOut" }}
    >
      <DetailsPass />
      <div className="  px-9 lg:px-0">
        <CoachInfo />
        <EmailNumber />
      </div>
      <ConfirmAndContinue />
    </motion.div>
  );
};

export default PassengerInfo;
