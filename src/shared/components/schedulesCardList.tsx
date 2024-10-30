"use client";

import React, { useEffect, useState } from "react";

import { useSchedules } from "../hooks/useSchedules";
import { cn } from "../lib/utils/helper";
import { Skeleton } from "../ui/skeleton";

import { ScheduleCard } from "./scheduleCard";

interface Props {
  className?: string;
}

export const SchedulesCardList: React.FC<Props> = ({ className }) => {
  const [isWide, setIsWide] = useState(true);
  const { isLoading, popularSchedules, notPopularSchedules } = useSchedules();

  const [activeCards, setActiveCards] = useState([false, false, true, false]);
  const changeActiveCards = (index: number) => {
    setActiveCards(() => {
      const newActiveCards = [false, false, false, false];
      newActiveCards[index] = true;
      return newActiveCards;
    });
  };

  useEffect(() => {
    const handleResize = () => {
      setIsWide(window.innerWidth > 1100);
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, [isLoading]);
  return (
    <div
      className={cn(
        "grid grid-cols-3 gap-[12px] gap-y-[30px] max-[1100px]:grid-cols-2 max-[1100px]:gap-[30px] max-[500px]:flex max-[500px]:flex-col",
        className,
      )}
    >
      {!isLoading &&
        popularSchedules.map((item, i) => {
          const defaultPrice = notPopularSchedules.filter(
            (schedule) => schedule.name === item.name,
          )[0].price;
          const discountPercentage = Math.ceil(
            (item.price / defaultPrice) * 100,
          );
          return (
            <ScheduleCard
              key={item.id}
              onClick={() => changeActiveCards(i)}
              isDiscount={item.isPopular}
              activeCard={activeCards[i]}
              price={defaultPrice}
              discountPercentage={discountPercentage}
              discountPrice={item.price}
              type={item.name}
              wide={i === 3 && isWide}
              className={
                i === 3 && isWide ? "col-span-3 max-[1100px]:col-span-1" : ""
              }
              desc="Чтобы просто начать 👍🏻"
            />
          );
        })}
      {isLoading && (
        <>
          <Skeleton className="h-[300px] w-[200px]" />
          <Skeleton className="h-[300px] w-[200px]" />
          <Skeleton className="h-[300px] w-[200px]" />
          <Skeleton className="col-span-3 h-[170px]" />
        </>
      )}
    </div>
  );
};
