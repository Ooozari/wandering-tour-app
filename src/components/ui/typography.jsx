import { cn } from "@/lib/utils";
import { cva } from "class-variance-authority";


/* --- Headings --- */
const headingVariants = cva(
  "",
  {
    variants: {
      level: {
        // Section heading
        h1: "text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl",
        // Component heading + Hero Section
        h2: "text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl",
        // Card Headings
        h3: "text- sm:text-sm md:text-base lg:text-lg xl:text-xl 2xl:text-2xl",
        // Review
        h4: "text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl",
        // small tour card
        h5: "text-xs sm:text-xs md:text-sm lg:text-base xl:text-lg 2xl:text-xl",

        h6: "text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl",
      },
    },
    defaultVariants: { level: "h1" },
  }
);

export function Heading({ className, level = "h1", children }) {
  const Tag = level;
  return <Tag className={cn(headingVariants({ level }), className)}>{children}</Tag>;
}

/* --- Paragraph --- */
const paragraphVariants = cva("", {
  variants: {
    size: {
      subText: "text-[8px] sm:text-[12px] md:text-[14px] lg:text-[16px] xl:text-[20px] 2xl:text-[24px]",
      normal: "text-xs sm:text-xs md:text-sm lg:text-base xl:text-lg 2xl:text-xl",
      sm: "text-xs sm:text-sm md:text-sm lg:text-base xl:text-base 2xl:text-lg",
      xs: "text-[8px] md:text-[10px] lg:text-[12px] xl:text-[14px] 2xl:text-base",
      xxs: "text-[8px] md:text-[8px] lg:text-[10px] xl:text-[12px] 2xl:text-[14px]"
    },
  },
  defaultVariants: { size: "normal" },
});

export function Paragraph({ className, size = "normal", children }) {
  return <p className={cn(paragraphVariants({ size }), className)}>{children}</p>;
}
