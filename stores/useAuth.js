import { create } from "zustand";

const useAuth = create((set) => ({
  isAuth: false,
  onOpen: () => set({ isAuth: true }),
  onClose: () => set({ isAuth: false }),
}));

export default useAuth;
