
import React from 'react'
import { Review, Location } from '@/svgs/Icons'

function ReviewCard({ msg, name, location }) {
    return (
        <div className="flex max-w-md flex-col bg-White rounded-3xl shadow-lg px-10 py-[30px]">
            {/* Icon */}
            <div className="flex justify-center mb-4">
                <Review />
            </div>

            {/* Message (Centered Horizontally & Vertically) */}
            <div className="flex flex-1 items-center justify-center text-center mb-6">
                <p className="text-Black text-sm">{msg}</p>
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

