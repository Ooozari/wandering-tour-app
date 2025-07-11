
import React from 'react'
import { Review, Location } from '@/svgs/Icons'

function ReviewCard({ msg, name, location }) {
    return (
        <div className="flex flex-col bg-White rounded-3xl shadow-lg px-10 py-[20px] md:py-[30px] h-full">
            {/* Icon */}
            <div className="flex justify-center mb-4">
                <Review />
            </div>

            {/* Spacer + Message */}
            <div className="flex-1 flex flex-col justify-end">
                <div className="flex-1" /> {/* Spacer to push content down */}
                <p className="text-Black text-sm text-center mb-6">{msg}</p>
            </div>

            {/* Name */}
            <p className="text-darkGrey text-md font-semibold text-center mb-2">{name}</p>

            {/* Divider */}
            <hr className="border-lightGrey w-full mb-2" />

            {/* Location */}
            <p className="flex justify-center items-center gap-2">
                <Location />
                <span className="text-lightGrey text-sm font-normal">{location}</span>
            </p>
        </div>


    )
}

export default ReviewCard

