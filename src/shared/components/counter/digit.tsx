import React, { createRef, useEffect } from "react";

import {
  useBlinkAnimation,
  useNumberAnimation,
} from "@/shared/hooks/useTimerAnimation";
import { cn } from "@/shared/lib/utils/helper";

interface Props {
  className?: string;
  oneDigit: string;
  warning: boolean;
  animate: boolean;
}

export const Digit: React.FC<Props> = ({
  className,
  oneDigit,
  warning,
  animate,
}) => {
  const number1 = createRef<HTMLSpanElement>();
  const number2 = createRef<HTMLSpanElement>();
  const { playSlideAnimation, SHIFT } = useNumberAnimation(oneDigit);
  const { playBlinkAnimation } = useBlinkAnimation();

  useEffect(() => {
    if (!animate) return;
    playSlideAnimation(number1.current!, number2.current!);
  }, [oneDigit]);
  useEffect(() => {
    if (warning && animate) {
      playBlinkAnimation(number1.current!, number2.current!);
    }
  });
  return (
    <div
      className={cn(
        "font- relative h-[50px] w-[25px] overflow-hidden font-bebas text-[60px] leading-none text-[#01B9C5] max-[500px]:h-[40px] max-[500px]:w-[20px] max-[500px]:text-[40px]",
        warning && "text-[#FD4D35]",
        className,
      )}
    >
      <span
        ref={number1}
        className={cn(`absolute top-[-${SHIFT}px] left-0`)}
      ></span>
      <span ref={number2} className="absolute left-0 top-0"></span>
    </div>
  );
};
