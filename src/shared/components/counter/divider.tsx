import React, { createRef, useEffect } from "react";

import { useBlinkAnimation } from "@/shared/hooks/useTimerAnimation";
import { cn } from "@/shared/lib/utils/helper";

interface Props {
  className?: string;
  warning: boolean;
  animate: boolean;
}

export const Divider: React.FC<Props> = ({ className, warning, animate }) => {
  const { playBlinkAnimation } = useBlinkAnimation();
  const divider = createRef<HTMLSpanElement>();
  useEffect(() => {
    if (!animate) return;
    if (warning) {
      playBlinkAnimation(divider.current!);
    }
  });
  return (
    <span
      ref={divider}
      className={cn(
        "flex max-h-[50px] items-center justify-center font-bebas text-[60px] leading-none text-[#01B9C5] max-[500px]:max-h-[35px] max-[500px]:text-[40px]",
        warning && "text-[#FD4D35]",
        className,
      )}
    >
      :
    </span>
  );
};
