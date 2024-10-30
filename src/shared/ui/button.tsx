import { Slot } from "@radix-ui/react-slot";
import { type VariantProps, cva } from "class-variance-authority";
import * as React from "react";

import { cn } from "../lib/utils/helper";

const buttonVariants = cva(
  "text-[20px] font-medium font-rubik inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md  transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default: "bg-[#FD4D35] text-white  hover:bg-[#E12107]",
        destructive:
          "bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90",
        outline:
          "border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground",
        secondary:
          "bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline",
      },
      size: {
        default: "rounded-[60px]  px-[35px] py-[15px]",
        sm: "h-8 rounded-md px-3 text-xs",
        lg: "h-10 rounded-[60px] px-[100px] py-[28px]",
        icon: "h-9 w-9",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
  isLoading?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    { className, variant, size, isLoading = false, asChild = false, ...props },
    ref,
  ) => {
    const Comp = asChild ? Slot : "button";
    return (
      <>
        <div className="">
          <Comp
            className={cn(
              "relative inline-block",
              buttonVariants({ className, variant, size }),
            )}
            ref={ref}
            {...props}
          />
          {isLoading && (
            <div className="absolute left-0 top-0 flex h-full w-full items-center justify-center gap-2">
              <span className="h-3 w-3 animate-loading rounded-full bg-white"></span>
              <span className="h-3 w-3 animate-loading rounded-full bg-white delay-100"></span>
              <span className="h-3 w-3 animate-loading rounded-full bg-white delay-200"></span>
            </div>
          )}
        </div>
      </>
    );
  },
);
Button.displayName = "Button";

export { Button, buttonVariants };
