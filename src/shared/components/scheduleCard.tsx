"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import Image from "next/image";
import React, { createRef, useEffect, useState } from "react";

import { cn, typeText } from "../lib/utils/helper";
import { useDiscountStore } from "../store/discountStore";
import { CardTypes, IDiscountFields } from "../types/types";

gsap.registerPlugin(useGSAP);

type Props = {
  className?: string;
  type: CardTypes;
  price: number;
  desc: string;
  wide?: boolean;
  activeCard?: boolean;
  onClick: () => void;
} & ({ isDiscount: false } | IDiscountFields);

export const ScheduleCard: React.FC<Props> = ({
  className,
  wide = false,
  activeCard = false,
  ...props
}) => {
  const discountImage = createRef<HTMLDivElement>();
  const defaultPrice = createRef<HTMLParagraphElement>();
  const discountPrice = createRef<HTMLParagraphElement>();

  const isDiscount = useDiscountStore((state) => state.isDiscount);

  const [animationPlayed, setAnimationPlayed] = useState(false);

  const playAnimation = () => {
    gsap.to(discountImage.current, {
      opacity: 0,
      scale: 0,
      x: 50,
      y: -10,
      duration: 1,
    });
    gsap.to(defaultPrice.current!.querySelector("span"), {
      width: 0,
      duration: 1,
    });
    gsap.to(defaultPrice.current, {
      color: "#000",
      fontSize: window.innerWidth > 1100 ? "50px" : "30px",
      fontWeight: "bold",
      y: "-1px",
      duration: 1,
    });
    gsap.to(discountPrice.current, {
      opacity: 0,
      height: 0,
      duration: 1,
      onComplete: () => {
        gsap.set(discountPrice.current, {
          delay: 0.1,
          display: "none",
          onComplete: () => {
            setAnimationPlayed(true);
          },
        });
      },
    });
  };

  useEffect(() => {
    console.log(animationPlayed);
    if (!isDiscount && props.isDiscount && !animationPlayed) {
      playAnimation();
    }
  }, [props.isDiscount, isDiscount]);

  return (
    <>
      <div
        onClick={props.onClick}
        className={cn(
          "transform cursor-pointer rounded-[20px] border-[2px] border-[#D3D6DD] duration-300 hover:translate-y-[-10px]",
          activeCard && "border-[#01B9C5]",
          className,
        )}
      >
        <div
          className={cn(
            "relative flex h-full items-start justify-center rounded-[20px] bg-white px-[30px] py-[40px] max-[500px]:grid max-[500px]:grid-cols-2 max-[500px]:gap-3 max-[500px]:px-[24px] max-[500px]:py-[36px]",
            activeCard && "bg-[#01B9C5]/5",
            !wide && "flex-col items-center",
          )}
        >
          {props.isDiscount && (
            <div
              ref={discountImage}
              className="absolute right-[10px] top-[-30px] flex h-[70px] w-[70px] items-center justify-center"
            >
              <Image
                src="/icons/star.svg"
                alt="icon"
                width={70}
                height={70}
              ></Image>
              <p className="z-1 absolute text-[19px] font-medium text-white">
                -{props.discountPercentage}%
              </p>
            </div>
          )}
          <p
            className={cn(
              "mb-[21px] font-bebas text-[30px] font-bold uppercase text-[#687078] max-[500px]:mb-0",
              wide && "mb-0 mr-[20px] text-[38px] text-[#2D3242]",
            )}
          >
            {typeText(props.type)}
          </p>
          <div
            className={cn(
              "mb-[16px] inline-flex flex-col max-[500px]:row-span-2",
              wide && "mb-0 mr-[55px]",
            )}
          >
            {props.isDiscount && !animationPlayed && (
              <>
                <p
                  ref={discountPrice}
                  className="text-[50px] font-bold leading-none text-black max-[500px]:self-end max-[500px]:text-[40px]"
                >
                  {props.discountPrice}₽
                </p>
                <span
                  ref={defaultPrice}
                  className="relative self-end text-[24px] font-medium text-[#95979F] max-[1100px]:text-[30px]"
                >
                  {props.price}₽
                  <span className="absolute left-0 top-1/2 h-[1px] w-full bg-[#95979F]"></span>
                </span>
              </>
            )}
            {(!props.isDiscount || animationPlayed) && (
              <p className="text-[50px] font-bold leading-none text-black max-[1100px]:text-[30px] max-[500px]:row-span-2 max-[500px]:text-right max-[500px]:text-[25px]">
                {props.price}₽
              </p>
            )}
          </div>
          <p
            className={cn(
              "w-[170px] break-words text-center text-[16px] font-medium text-[#2F4353] max-[500px]:text-left",
              wide && "text-left",
            )}
          >
            {props.desc}
          </p>
        </div>
      </div>
    </>
  );
};
