import React from 'react'
import { Button } from '@/components/ui/Button'
import { Paragraph, Heading } from "@/components/ui/typography";


function GroupTourCard({ iconSvg, title, text }) {
    return (
        <>
            <div className={
                `flex flex-col justify-center items-center border-1 border-lightGrey rounded-3xl
                shadow-[0px_30px_60px_-24px_#00000029] 
                px-10 pt-[30px]`
            }>
                {/* icon */}
                <div className='w-25 h-25 bg-[#1E365C0D] rounded-2xl flex items-center justify-center'>
                    {iconSvg}
                </div>

                {/* Title */}
                <Heading level="h3" className="text-Black text-center uppercase font-bold my-[8px] md:my-[10px] lg:my-[12px] xl:my-[14px] 2xl:my-[16px]">
                    {title}
                </Heading>

                {/* text */}
                <Paragraph size="md" className="text-darkGrey text-center">
                    {text}
                </Paragraph>

                <div className='mt-[14px] md:mt-[20px] lg:mt-[28px] xl:mt-[34px] 2xl:mt-[40px] mb-10'>
                    <Button variant='primaryOutline' size='sm' className=''>
                        <Paragraph size="sm" className="font-semibold">Learn More</Paragraph>
                    </Button>

                </div>
            </div>
        </>
    )
}

export default GroupTourCard
