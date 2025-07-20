
import React from 'react'
import { Review, Location } from '@/svgs/Icons'
import { Heading, Paragraph } from "@/components/ui/typography";
function ReviewCard({ msg, name, location }) {
    return (
        <div className="flex shadow-md border-1 border-lightGrey flex-col rounded-3xl px-10 py-10 min-h-[300px] h-[400px] ">
            {/* Icon */}
            <div className="flex justify-center mb-4">
                <Review />
            </div>

            {/* Spacer + Message */}
            <div className="flex-1 flex flex-col justify-end">
                <div className="flex-1" />
                <Paragraph size="xs" className="text-Black text-center mb-6">
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
