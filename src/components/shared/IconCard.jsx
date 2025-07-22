import React from 'react'
import { Heading, Paragraph } from "@/components/ui/typography";

function NichesCard({ svgImg, title }) {
    return (
        <div className='flex flex-col items-center justify-center gap-[18px] xl:gap-[24px] 2xl:gap-[30px] border border-[rgba(214,214,214,0.4)] rounded-3xl pt-4 px-7 pb-6 text-center'
            style={{ boxShadow: '0px 15px 20px -12px rgba(0, 0, 0, 0.16)' }}>
            {/* Icon */}
            <div className="flex items-center justify-center h-15 w-15 lg:h-20 lg:w-20 xl:h-25 xl:w-25">
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
