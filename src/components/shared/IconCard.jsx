import React from 'react'
import { Heading, Paragraph } from "@/components/ui/typography";

function NichesCard({ svgImg, title }) {
    return (
        <div className='flex flex-col items-center justify-center gap-[15px]
        sm:gap-[18px]
        md:gap-[21px]
        lg:gap-[24px]
        xl:gap-[27px]
        2xl:gap-[30px]
        border border-[rgba(214,214,214,0.4)] rounded-3xl pt-[15px] px-[20px] pb-[15px]
        sm:pt-[17px] sm:px-[24px] sm:pb-[18px]
        md:pt-[20px] md:px-[28px] md:pb-[22px]
        lg:pt-[24px] lg:px-[32px] lg:pb-[28px]
        xl:pt-[27px] xl:px-[36px] xl:pb-[34px]
        2xl:pt-[30px] 2xl:px-[40px] 2xl:pb-[40px]
        text-center'
            style={{ boxShadow: '0px 15px 20px -12px rgba(0, 0, 0, 0.16)' }}>
            {/* Icon */}
            <div className="flex items-center justify-center 2xl:w-25 2xl:h-25 xl:w-[80px] xl:h-[80px] lg:w-[60px] lg:h-[60px] md:w-[55px] md:h-[55px] w-[50px] h-[50px]">
                {svgImg}
            </div>

            {/* Title */}
            <Paragraph size="subText" className="font-medium text-Black">
                {title}
            </Paragraph>
        </div>
    )
}

export default NichesCard
