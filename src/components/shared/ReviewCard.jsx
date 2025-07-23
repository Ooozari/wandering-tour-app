
import React from 'react'
import { Review, Location } from '@/svgs/Icons'
import { Heading, Paragraph } from "@/components/ui/typography";
function ReviewCard({ msg, name, location }) {
    return (
        <div className="h-[360px] md:h-[420px] lg:h-[460px] xl:h-[420px] 2xl:h-[499px] flex flex-col justify-between shadow-md border border-lightGrey rounded-3xl px-[20px] md:px-[25px] lg:px-[30px] xl:px-[35px] 2xl:px-[40px] py-[24px] md:py-[30px] lg:py-[36px] xl:py-[42px] 2xl:py-[48px] bg-White">

            {/* Icon */}
            <div className="flex justify-center mb-[8px] md:mb-[10px] lg:mb-[12px] xl:mb-[14px] 2xl:mb-[16px]"
>
                <Review />
            </div>

            {/* Spacer + Message */}
            <div className="flex-1 flex flex-col justify-cente">
                <Paragraph size="sm" className="text-Black text-center mb-[12px] md:mb-[15px] lg:mb-[18px] xl:mb-[21px] 2xl:mb-[24px]">
                    {msg}
                </Paragraph>
            </div>

            {/* Name */}
            <Paragraph size="sm" className="text-darkGrey font-semibold text-center mb-2">
                {name}
            </Paragraph>


            {/* Divider */}
            <hr className="border-lightGrey w-full mb-2" />

            {/* Location */}
            <Paragraph size="xs" className="flex justify-center items-center gap-2">
                <Location />
                <span className="text-lightGrey font-normal">{location}</span>
            </Paragraph>

        </div>
    )
}

export default ReviewCard
