import React, { useState } from "react";

import { useSchedules } from "../hooks/useSchedules";
import { cn } from "../lib/utils/helper";

import { PopupScheduleCard } from "./popupScheduleCard";

interface Props {
  className?: string;
}

export const PopupScheduleCardList: React.FC<Props> = ({ className }) => {
  const { isLoading, discountSchedules, notPopularSchedules } = useSchedules();
  const [activeCards, setActiveCards] = useState([false, false, true]);
  const changeActiveCards = (index: number) => {
    setActiveCards(() => {
      const newActiveCards = [false, false, false, false];
      newActiveCards[index] = true;
      return newActiveCards;
    });
  };
  return (
    <ul
      className={cn(
        "grid grid-cols-3 gap-[20px] max-[700px]:grid-cols-2 max-[550px]:grid-cols-1",
        className,
      )}
    >
      {!isLoading &&
        discountSchedules.map((schedule, i) => {
          const defaultPrice = notPopularSchedules.filter(
            (notPopularSchedule) => notPopularSchedule.name === schedule.name,
          )[0].price;
          const discountPercentage = Math.ceil(
            (schedule.price / defaultPrice) * 100,
          );
          return (
            <li key={schedule.id}>
              <PopupScheduleCard
                activeCard={activeCards[i]}
                onClick={() => {
                  changeActiveCards(i);
                }}
                type={schedule.name}
                price={defaultPrice}
                discountPercentage={discountPercentage}
                discountPrice={schedule.price}
              />
            </li>
          );
        })}
    </ul>
  );
};
