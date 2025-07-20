import React from 'react'
import { Heading, Paragraph } from "@/components/ui/typography";

function NichesCard({ svgImg, title }) {
    return (
        <div className='flex flex-col items-center justify-center gap-6 border border-[rgba(214,214,214,0.4)] rounded-3xl pt-4 px-7 pb-6 text-center'
            style={{ boxShadow: '0px 15px 20px -12px rgba(0, 0, 0, 0.16)' }}>
            {/* Icon */}
            <div className="flex items-center justify-center">
                {svgImg}
            </div>

            {/* Title */}
            <Paragraph size="subText" className="font-semibold text-Black">
                {title}
            </Paragraph>

        </div>
    )
}

export default NichesCard
