import { create } from "zustand";

const useFilter = create((set) => ({
  isOpen: false,
  isBusOpen: false,
  onOpen: () => set({ isOpen: true }),
  onClose: () => set({ isOpen: false }),
  onBusOpen: () => set({ isBusOpen: true }),
  onBusClose: () => set({ isBusOpen: false }),
}));

export default useFilter;
