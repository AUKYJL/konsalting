import React from "react";

import { cn } from "@/shared/lib/utils/helper";

import { Container } from "../container";
import { Counter } from "../counter/counter";

interface Props {
  className?: string;
}

export const Header: React.FC<Props> = ({ className }) => {
  return (
    <header className={cn("bg-white py-2", className)}>
      <Container>
        <div className="flex justify-center gap-[16px] max-[350px]:flex-col max-[350px]:items-center max-[350px]:gap-[8px]">
          <p className="mt-2 text-[30px] font-bold text-[#2D3242] max-[500px]:text-[16px] max-[350px]:text-[25px]">
            Скидка действует:
          </p>
          <Counter timerInSeconds={1} />
        </div>
      </Container>
    </header>
  );
};
