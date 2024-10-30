import { ISchedule } from "@/shared/types/types";

export const getSchedules = async () => {
  const response = await fetch("https://t-pay.iqfit.app/subscribe/list-test");
  const schedulesData = (await response.json()) as ISchedule[];

  const popularSchedules = schedulesData.filter(
    (schedule: ISchedule) => schedule.isPopular,
  );
  const notPopularSchedules = schedulesData.filter(
    (schedule: ISchedule) => !schedule.isPopular && !schedule.isDiscount,
  );
  const discountSchedules = schedulesData.filter(
    (schedule: ISchedule) => schedule.isDiscount,
  );

  return {
    popularSchedules,
    notPopularSchedules,
    discountSchedules,
  };
};
