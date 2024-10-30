import Image from "next/image";
import Link from "next/link";

import { Container } from "@/shared/components/container";
import { SchedulesCardList } from "@/shared/components/schedulesCardList";
import { Button } from "@/shared/ui/button";
import { Checkbox } from "@/shared/ui/checkbox";

export default function Page() {
  return (
    <section className="mb-[100px] mt-[27px]">
      <Container>
        <h1 className="mb-[70px] text-center text-[40px] font-bold text-[#2D3242] max-[1000px]:mb-[40px] max-[500px]:text-[24px]">
          Выберите подходящий тарифный план
        </h1>
        <div className="grid grid-cols-[430px_1fr] gap-[80px] max-[1000px]:flex max-[1000px]:flex-col max-[1000px]:gap-0 xl:gap-[20px]">
          <div className="flex justify-center max-[1000px]:h-[441px]">
            <Image
              className="w-full object-contain"
              src={"/img/01.png"}
              width={0}
              height={0}
              sizes="100vw"
              alt="photo"
            />
          </div>
          <div className="">
            <SchedulesCardList className="mb-[8px]" />
            <div className="">
              <p className="mb-[28px] text-[18px] font-medium text-[#2D3242]">
                Следуя плану на 3 месяца, люди получают в 2 раза лучший
                результат, чем за 1 месяц
              </p>
              <div className="flex gap-[12px]">
                <Checkbox id="agree" />
                <label htmlFor="agree" className="max-w-[400px]">
                  <p className="mb-[50px] text-[16px] leading-none text-[#818799]">
                    Я соглашаюсь с{" "}
                    <Link
                      href={""}
                      className="text-[#2D97F9] duration-300 hover:text-[#206eb7]"
                    >
                      Правилами сервиса и условиями Публичной оферты.{" "}
                    </Link>
                  </p>
                </label>
              </div>
              <Button className="mb-[30px] max-[500px]:w-full" size={"lg"}>
                Купить
              </Button>

              <p className="text-[14px] text-[#818798]">
                Нажимая «Купить», Пользователь соглашается на автоматическое
                списание денежных средств по истечению купленного периода.
                Дальнейшие списания по тарифам участвующим в акции
                осуществляются по полной стоимости согласно оферте.
              </p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
