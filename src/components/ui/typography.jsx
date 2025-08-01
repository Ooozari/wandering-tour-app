import { cn } from "@/lib/utils";
import { cva } from "class-variance-authority";


/* --- Headings --- */
const headingVariants = cva(
  "",
  {
    variants: {
      level: {
        h1Large: "text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-[64px]",
        // Section heading
        h1: "text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl",
        // Component heading + Hero Section
        h2: "text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl 2xl:text-9xl",
        // Card Headings
        h3: "text- sm:text-sm md:text-base lg:text-lg xl:text-xl 2xl:text-2xl",
        // Review
        h4: "text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl",
        // small tour card
        h5: "text-xs sm:text-xs md:text-sm lg:text-base xl:text-lg 2xl:text-xl",

        h6: "text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl",
      
        lgSubText:"text-[18px] md:text-[20px] lg:text-[24px] xl:text-[32px] 2xl:text-[40px]",
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
      subText: "text-[14px] md:text-[15px] lg:text-[16px] xl:text-[20px] 2xl:text-[24px]",
      normal: "text-sm lg:text-base xl:text-lg 2xl:text-xl",
      md: "text-[12px] lg:text-[14px] xl:text-[16px] 2xl:text-[20px]",
      sm: "text-sm lg:text-base xl:text-base 2xl:text-lg",
      xs: "text-[12px] lg:text-[13px] xl:text-[14px] 2xl:text-base",
      xxs: "text-[11px] lg:text-[12px] xl:text-[13px] 2xl:text-[14px]"
    },
  },
  defaultVariants: { size: "normal" },
});

export function Paragraph({ className, size = "normal", children }) {
  return <p className={cn(paragraphVariants({ size }), className)}>{children}</p>;
}
