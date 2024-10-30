import Image from "next/image";
import React from "react";

import { cn, typeText } from "../lib/utils/helper";
import { CardTypes } from "../types/types";

type Props = {
  className?: string;
  type: CardTypes;
  price: number;
  discountPrice: number;
  activeCard?: boolean;
  discountPercentage: number;
  onClick: () => void;
};

export const PopupScheduleCard: React.FC<Props> = ({ className, ...props }) => {
  return (
    <div
      onClick={props.onClick}
      className={cn(
        "relative cursor-pointer duration-300 hover:translate-y-[-10px]",
        className,
      )}
    >
      <div
        className={cn(
          "absolute right-[26px] top-[34px] size-[22px] rounded-full border-[2px] border-[#2D3242] duration-300",
          props.activeCard &&
            "border-[#02B9C5] before:absolute before:left-1/2 before:top-1/2 before:size-[11px] before:translate-x-[-50%] before:translate-y-[-50%] before:rounded-full before:bg-[#02B9C5] before:content-['']",
        )}
      ></div>
      <div
        className={cn(
          "rounded-[20px] border-[2px] border-transparent bg-white p-[26px]",
          props.activeCard && "border-[#02B9C5] bg-[#02B9C5]/5",
        )}
      >
        <p className="font-bebas text-[26px] font-bold uppercase text-[#2D3242]">
          {typeText(props.type)}
        </p>
        <span className="red-cross relative text-[20px] font-bold text-[#2D3242]/80">
          {props.price}₽
        </span>
        <div className="mx-auto mb-3 w-[80%] border-b-[1px] border-[#E7EAF1] pb-[8px]"></div>
        <div className="relative">
          <span className="text-[46px] font-bold text-[#2D3242]">
            {props.discountPrice}₽
          </span>
          <div className="absolute right-[-10px] top-[-45px] flex h-[70px] w-[70px] items-center justify-center">
            <Image
              src="/icons/star.svg"
              alt="icon"
              width={50}
              height={50}
            ></Image>
            <p className="z-1 absolute text-[13px] font-medium text-white">
              -{props.discountPercentage}%
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
