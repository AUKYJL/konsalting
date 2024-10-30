import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

import { CardTypes } from "@/shared/types/types";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const doTwoSymbols = (num: number) => {
  return num < 10 ? "0" + num.toString() : num.toString();
};

export const typeText = (type: CardTypes) => {
  switch (type) {
    case CardTypes.week:
      return "1 Неделя";
    case CardTypes.month:
      return "1 Месяц";
    case CardTypes.month3:
      return "3 месяца";
    case CardTypes.always:
      return "Навсегда";
  }
};
