import React from "react";

import { cn } from "@/shared/lib/utils/helper";

import { Digit } from "./digit";

interface Props {
  className?: string;
  stringNum: string;
  title: string;
  warning: boolean;
  animate: boolean;
}

export const TwoDigit: React.FC<Props> = ({
  className,
  stringNum,
  title,
  warning,
  animate,
}) => {
  return (
    <div
      className={cn(
        "flex flex-col items-center gap-1 max-[500px]:gap-0",
        className,
      )}
    >
      <div className="flex">
        <Digit animate={animate} warning={warning} oneDigit={stringNum[0]} />
        <Digit animate={animate} warning={warning} oneDigit={stringNum[1]} />
      </div>
      <div className="text-center text-[14px] font-medium text-[#818798]">
        {title}
      </div>
    </div>
  );
};
