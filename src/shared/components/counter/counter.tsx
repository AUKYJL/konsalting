"use client";

import React, { useEffect, useState } from "react";

import { cn, doTwoSymbols } from "@/shared/lib/utils/helper";
import { useDiscountStore } from "@/shared/store/discountStore";
import { usePopupStore } from "@/shared/store/popupStore";

import { Divider } from "./divider";
import { TwoDigit } from "./twoDigit";

interface Props {
  className?: string;
  timerInSeconds: number;
  blinkStartTime?: number;
}

export const Counter: React.FC<Props> = ({
  className,
  timerInSeconds,
  blinkStartTime = 30,
}) => {
  const [warning, setWarning] = useState(false);
  const [animate, setAnimate] = useState(true);
  const setPopupActive = usePopupStore((state) => state.setIsActive);

  const setIsDiscount = useDiscountStore((state) => state.setIsDiscount);

  const [timer, setTimer] = useState(timerInSeconds);
  const [hours, setHours] = useState(doTwoSymbols(Math.floor(timer / 3600)));
  const [minutes, setMinutes] = useState(
    doTwoSymbols(Math.floor((timer % 3600) / 60)),
  );
  const [seconds, setSeconds] = useState(doTwoSymbols(timer % 60));

  const prepareDate = () => {
    setHours(doTwoSymbols(Math.floor(timer / 3600)));
    setMinutes(doTwoSymbols(Math.floor((timer % 3600) / 60)));
    setSeconds(doTwoSymbols(timer % 60));
  };

  useEffect(() => {
    prepareDate();
    if (timer <= blinkStartTime && !warning) {
      setWarning(true);
    }
    if (timer === -1) {
      setAnimate(false);
      setIsDiscount(false);
      setTimeout(() => {
        setPopupActive(true);
      }, 1000);
    } else {
      setTimeout(() => {
        setTimer((t) => t - 1);
      }, 1000);
    }
  }, [timer]);
  return (
    <div
      className={cn(
        "flex items-start gap-[20px] max-[500px]:gap-[5px]",
        className,
      )}
    >
      <TwoDigit
        animate={animate}
        warning={warning}
        stringNum={hours}
        title="Часов"
      />
      <Divider animate={animate} warning={warning} />
      <TwoDigit
        animate={animate}
        warning={warning}
        stringNum={minutes}
        title="Минут"
      />
      <Divider animate={animate} warning={warning} />
      <TwoDigit
        animate={animate}
        warning={warning}
        stringNum={seconds}
        title="Секунд"
      />
    </div>
  );
};
