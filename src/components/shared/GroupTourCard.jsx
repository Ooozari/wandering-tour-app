import React from 'react'
import {Button} from '@/components/ui'

function GroupTourCard({iconSvg, title, text}) {
    return (
        <>
        <div className='flex flex-col justify-center items-center border-1 border-lightGrey rounded-3xl shadow-[0px_30px_60px_-24px_#00000029] px-10 pb-10 pt-[30px]'>
            {/* icon */}
            <div className='h-25 w-25 bg-[#1E365C0D] 
            rounded-2xl flex items-center justify-center'>
                <div>
 {iconSvg}
                </div>
               
            </div>
            {/* Title */}
            <h3 className='text-2xl text-center  font-bold text-Black'>{title}</h3>
            {/* text */}
            <p className='text-darkGrey text-center text-sm md:text-md lg:text-lg'>{text}</p>
            <div>
                <Button varient='primaryOutline' className='text-sm md:text-md lg:text-lg'>Learn More</Button>
            </div>
        </div>
        </>
    )
}

export default GroupTourCard
