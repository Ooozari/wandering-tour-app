import React from 'react'
import { Button } from '@/components/ui/Button'
import { Paragraph, Heading } from "@/components/ui/typography";


function GroupTourCard({ iconSvg, title, text }) {
    return (
        <>
            <div className={
                `flex flex-col justify-center items-center border-1 border-lightGrey rounded-3xl
                shadow-[0px_30px_60px_-24px_#00000029] 
                px-[20px] pt-[15px] sm:px-[24px] sm:pt-[17px] md:px-[28px] md:pt-[19px] lg:px-[32px] lg:pt-[22px] xl:px-[36px] xl:pt-[26px] 2xl:px-[40px] 2xl:pt-[30px]`
            }>
                {/* icon */}
                <div className='2xl:w-25 2xl:h-25 xl:w-[80px] xl:h-[80px] lg:w-[60px] lg:h-[60px] md:w-[55px] md:h-[55px] w-[50px] h-[50px]  bg-[#1E365C0D] rounded-2xl flex items-center justify-center'>
                    <div className='w-[30px] h-[30px] sm:w-[33px] sm:h-[30px] md:w-[39px] md:h-[32px] lg:w-[45px] lg:h-[39px] xl:w-[48px] xl:h-[42px] 2xl:w-[51px] 2xl:h-[45px]'>
                        {iconSvg}
                    </div>

                </div>

                {/* Title */}
                <Heading level="h3" className="text-Black text-center uppercase font-bold my-[12px] md:my-[13px] lg:my-[14px] xl:my-[15px] 2xl:my-[16px]
                ">
                    {title}
                </Heading>

                {/* text */}
                <Paragraph size="md" className="text-darkGrey text-center">
                    {text}
                </Paragraph>

                <div className='mt-[20px] md:mt-[24px] lg:mt-[28px] xl:mt-[22px] 2xl:mt-[40px] mb-[20px] sm:mb-[24px] md:mb-[28px] lg:mb-[32px] xl:mb-[36px] 2xl:mb-[40px]
'>
                    <Button variant='primaryOutline' size='sm' className=''>
                        <Paragraph size="sm" className="font-semibold">Learn More</Paragraph>
                    </Button>

                </div>
            </div>
        </>
    )
}

export default GroupTourCard
