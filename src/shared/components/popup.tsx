"use client";

import React from "react";

import { usePopupStore } from "../store/popupStore";
import { Button } from "../ui/button";
import { Dialog, DialogContent, DialogTitle } from "../ui/dialog";

import { PopupScheduleCardList } from "./popupScheduleCardList";

export const Popup: React.FC = () => {
  const isActive = usePopupStore((state) => state.isActive);

  const setIsActive = usePopupStore((state) => state.setIsActive);
  return (
    <Dialog open={isActive} onOpenChange={(state) => setIsActive(state)}>
      <DialogContent className="mx-2 max-h-[90vh] min-h-[500px] max-w-[750px] overflow-y-auto border-none bg-[#F5F7F7]">
        <DialogTitle className="hidden" />
        <div className="absolute left-[25px] top-0 bg-[#02B9C5] p-1 text-[16px] font-medium text-white">
          горящее предложение
        </div>
        <div className="">
          <h2 className="mb-[20px] mt-[30px] text-center font-rubik text-[30px] font-bold uppercase text-[#12191D]">
            Не упусти свой{" "}
            <span className="text-[#02B9C5]">последний шанс</span>
          </h2>
          <div className="mb-[40px] text-center text-[24px]">
            <p className="mb-[8px] text-[#2D3242]">
              Мы знаем, как трудно начать.. <b>Поэтому!</b>
            </p>
            <div className="inline-block rounded-[30px] border-[1.5px] border-[#01B9C5] px-[30px] py-[12px] font-bold">
              Дарим скидку для{" "}
              <span className="text-[#02B9C5]">лёгкого старта</span> 🏃‍♂️
            </div>
          </div>
          <div className="">
            <h3 className="mb-[20px] text-[24px] text-[#12191D]">
              Посмотри, что мы для тебя приготовили 🔥
            </h3>
            <PopupScheduleCardList className="mb-[40px]" />
            <div className="text-center">
              <Button>Начать тренироваться</Button>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};
