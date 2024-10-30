import { create } from "zustand";

interface State {
  isActive: boolean;
  setIsActive: (isActive: boolean) => void;
}
export const usePopupStore = create<State>((set) => ({
  isActive: false,
  setIsActive: (isActive) => set({ isActive }),
}));
