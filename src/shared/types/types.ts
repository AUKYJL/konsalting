export enum CardTypes {
  "week" = "1 неделя",
  "month" = "1 месяц",
  "month3" = "3 месяца",
  "always" = "навсегда",
}

export interface IDiscountFields {
  isDiscount: true;
  discountPrice: number;
  discountPercentage: number;
}
export interface ISchedule {
  name: CardTypes;
  price: number;
  lengthInDays: number;
  isPopular: boolean;
  isEndless: boolean;
  isDiscount: boolean;
  nonDiscountId: null;
  id: string;
  ownerId: string;
  statusId: null;
  creationDateTime: string;
  deleted: boolean;
}
