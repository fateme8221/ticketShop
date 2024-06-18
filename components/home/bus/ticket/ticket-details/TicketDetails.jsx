"use client";

import React, { useContext, useState } from "react";
import Steps from "../../../../Steps";
import { SubmitHandler, useForm } from "react-hook-form";
import { z } from "zod";
import ConfirmInfo from "./confirm_info/ConfirmInfo";
import { FormDataSchema } from "@/lib/schema";
import PassengerInfo from "./passenger_info/PassengerInfo";
import useSteps from "@/stores/useSteps";
import { zodResolver } from "@hookform/resolvers/zod";
import AuthContext from "@/components/context/AuthContext";
;
const TicketDetails = () => {
  const { step_items } = useContext(AuthContext);
  const { step, onNext, onPrev } = useSteps();
  const [previousStep, setPreviousStep] = useState(0);
  const delta = step - previousStep;
  const {
    register,
    handleSubmit,
    watch,
    reset,
    trigger,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(FormDataSchema),
  });
  const processForm = (data) => {
    console.log(data);
    reset();
  };


  const next = async () => {
    const fields = step_items[step].fields;
    const output = await trigger(fields, { shouldFocus: true });

    if (!output) return;

    if (step < step_items.length - 1) {
      if (step === step_items.length - 2) {
        await handleSubmit(processForm)();
      }
      setPreviousStep(step);
      onNext(step);
      window.scrollTo(0, 0);
    }
  };

  const prev = () => {
    if (step > 0) {
      setPreviousStep(step);
      onPrev(step);
      window.scrollTo(0, 0);
    }
  };

  return (
    <section>
      <Steps />
      <form onSubmit={handleSubmit(processForm)}>
        {step === 0 && (
          <PassengerInfo
            register={register}
            errors={errors}
            next={next}
            delta={delta}
          />
        )}
        {step === 1 && <ConfirmInfo prev={prev} delta={delta} />}
      </form>
    </section>
  );
};

export default TicketDetails;
