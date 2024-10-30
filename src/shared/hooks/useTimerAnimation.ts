import { useGSAP } from "@gsap/react";
import gsap from "gsap";

gsap.registerPlugin(useGSAP);

export function useBlinkAnimation(DURATION = 0.3) {
  const playBlinkAnimation = (...spans: HTMLSpanElement[]) => {
    gsap.fromTo(
      spans,
      {
        delay: DURATION,
        duration: DURATION * 3,
        color: "#A11502",
        scale: 0.9,
        ease: "power1.out",
        yoyo: true,
      },
      {
        scale: 1,
        color: "#FD4D35",
      },
    );
  };
  return {
    playBlinkAnimation,
  };
}
export function useNumberAnimation(
  oneDigit: string,
  DURATION = 0.3,
  SHIFT = 100,
) {
  const playSlideAnimation = (
    number1: HTMLSpanElement,
    number2: HTMLSpanElement,
  ) => {
    renderNumber(number1, number2);
    gsap.to(number2, {
      duration: DURATION,
      top: SHIFT,
      ease: "power1.out",
    });

    gsap.to(number1, {
      duration: DURATION,
      top: 0,
      ease: "power1.out",
      onComplete: () => {
        number2.innerText = oneDigit;
        number1.innerText = oneDigit;
        gsap.set(number2, { top: 0 });
        gsap.set(number1, { top: -SHIFT });
      },
    });
  };
  const renderNumber = (number1: HTMLSpanElement, number2: HTMLSpanElement) => {
    number2.innerText = oneDigit;
    oneDigit = (+oneDigit >= 0 ? +oneDigit : 9).toString();
    number1.innerText = oneDigit;
  };

  return {
    playSlideAnimation,
    SHIFT,
  };
}
