import { create } from "zustand";

const useSteps = create((set) => ({
  step: 0,
  busTicketDetails: undefined,
  onDetails: (data) => set({busTicketDetails: data}),
  onPrev: (prevStep) => set({ step: prevStep - 1 }),
  onNext: (prevStep) => set({ step: prevStep + 1 }),
}));

export default useSteps;
