import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva } from "class-variance-authority";

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-[30px] text-base font-medium transition-all  disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",
  {
    variants: {
      variant: {
        default:
          "bg-Primary text-White shadow-xs hover:bg-Primary/90",
        primaryOutline:
          "text-Primary bg-White shadow-xs border border-Primary ",
        destructive:
          "bg-destructive text-white shadow-xs hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60",
        lightPrimary:
          "bg-[#1E365C1A] text-Primary shadow-xs hover:bg-[#1E365C1A]/90",
        outline:
          "border bg-White shadow-xs  hover:bg-Secondary hover:text-White dark:bg-input/30 dark:border-input dark:hover:bg-input/50",
        secondary:
          "bg-Secondary font-bold text-White shadow-xs hover:bg-Secondary/80",
        lightSecondary:
          "bg-[#E9482B1A] shadow-xs hover:bg-[#E9482B1A]/80 text-Secondary",
        ghost:
          "hover:bg-accent hover:text-accent-foreground dark:hover:bg-accent/50",
        link: "text-Primary underline-offset-4 hover:underline",
        circle: "bg-White text-White border-2 border-Primary flex items-center justify-center hover:bg-Secondary hover:border-Secondary focus-visible:ring-2",
        outlineCircle: "text-darkGrey border-2 border-lightGrey flex items-center justify-center hover:bg-[#ffffff33] focus-visible:ring-2",
        whitePrimary: "bg-white text-Primary shadow-xs hover:bg-gray-100 focus-visible:ring-2 focus-visible:ring-Primary/20",

      },
      size: {
        default: "h-9 px-4 py-6 has-[>svg]:px-3",
        sm: "h-9 rounded-4xl gap-1.5 py-4 px-3 has-[>svg]:px-2.5",
        lg: "h-10 rounded-4xl px-6 has-[>svg]:px-4",
        xl: "h-10 rounded-4xl px-6 py-4",
        icon: "size-9",
        circle: "w-10 h-10 p-0",

      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

function Button({
  className,
  variant,
  size,
  asChild = false,
  ...props
}) {
  const Comp = asChild ? Slot : "button"

  return (
    <Comp
      data-slot="button"
      className={cn(buttonVariants({ variant, size, className }))}
      {...props} />
  );
}

export { Button, buttonVariants }
