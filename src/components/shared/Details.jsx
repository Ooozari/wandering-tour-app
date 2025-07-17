import React from 'react'
import { Location, Calender, Spot } from '@/svgs/Icons';
function Details() {
    return (
        <>
            <div className='max-w-2/3'>
                {/* text */}
                <div className=''>
                    <p className='text-Black mb-3'>Join us on an unforgettable food-focused adventure in Southeast Asia, where we will uncover the culinary secrets of Thailand, Malaysia and Singapore!</p>
                    <div className='flex gap-5 text-lightGrey'>
                        <span>
                            <div className='flex gap-1 items-center '>
                                <Spot />
                                <p className='text-darkGrey'>2 out of 12 spots booked</p>
                            </div>
                        </span>
                         |
                        <span><div className='flex gap-1 items-center'>
                                <Location />
                                <p className='text-darkGrey'>Romania</p>
                            </div>
                        </span>
                        |
                        <span>
                        
                            <div className='flex gap-1 items-center'>
                            <Calender />
                            <p className='text-darkGrey'>Nov 08 — Nov 17, 2024 (10 days)</p>
                        </div>
                        </span>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Details
