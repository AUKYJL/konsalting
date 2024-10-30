import { create } from "zustand";

interface State {
  isDiscount: boolean;
  setIsDiscount: (isDiscount: boolean) => void;
}
export const useDiscountStore = create<State>((set) => ({
  isDiscount: true,
  setIsDiscount: (isDiscount) => set({ isDiscount }),
}));
