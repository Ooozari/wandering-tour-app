import React from 'react'
import { Button } from '@/components/ui/Button'

function GroupTourCard({ iconSvg, title, text }) {
    return (
        <>
            <div className={
                `flex flex-col justify-center items-center gap-4 border-1 border-lightGrey rounded-3xl
                shadow-[0px_30px_60px_-24px_#00000029] 
                px-10 py-5`
            }>
                {/* icon */}
                <div className='w-25 h-25 bg-[#1E365C0D] rounded-2xl flex items-center justify-center'>
                    {iconSvg}
                </div>

                {/* Title */}
                <h3 className='text-md md:text-lg lg:text-xl xl:text-2xl text-center font-bold text-Black uppercase'>{title}</h3>
                {/* text */}
                <p className='text-darkGrey text-center text-sm lg:text-md'>{text}</p>
                <div className='mt-2 mb-4'>
                    <Button variant='primaryOutline' className='text-md font-semibold' size='sm'>Learn More</Button>
                </div>
            </div>
        </>
    )
}

export default GroupTourCard
