import React from "react";

import { cn } from "../lib/utils/helper";

interface Props {
  className?: string;
  children: React.ReactNode;
}

export const Container: React.FC<Props> = ({ className, children }) => {
  return (
    <div className={cn("mx-auto w-full max-w-[1100px] px-2", className)}>
      {children}
    </div>
  );
};
