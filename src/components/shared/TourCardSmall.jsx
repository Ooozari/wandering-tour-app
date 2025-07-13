import React from 'react'
import Image from 'next/image'
import { Button } from '@/components/ui/Button'
import { Location, Calender, Spot } from '@/svgs/Icons';

function TourCardSmall({ imgUrl, Status, title, content, bookSpot, location, days, btnText }) {
    return (
        <div className='flex flex-col gap-0 max-w-sm'>
            {/* Img */}
            <div className=' relative'>
                <Image
                    src={imgUrl}
                    alt='small tour card img'
                />
                {/* Conditional Rendaring for ticktes Left status*/}
                {Status && (
                    <div className='absolute right-3 bottom-3'>
                        <Status />
                    </div>
                )}
            </div>
            <div className='bg-White p-4 rounded-b-3xl shadow-md'>
                {/* Card content */}
                <div>
                    <h4 className='text-Black font-[900] text-xl mb-2.5 uppercase'>{title}</h4>
                    <p className='font-normal text-Black'>{content}</p>
                    {/* spot and location */}
                    <div className='flex items-center mt-3 gap-4 '>
                        {/* spots */}
                        <div className='flex gap-1 items-center'>
                            <Spot />
                            <p className='text-Black text-sm'>{bookSpot}</p>
                        </div>
                        {/* location */}
                        <div className='flex gap-1 items-center'>
                            <Location />
                            <p className='text-Black text-sm'>{location}</p>
                        </div>
                    </div>
                    {/* Days */}
                    <div className='flex gap-1 mt-3 items-center'>
                        <Calender />
                        <p className='text-darkGrey text-sm'>{days}</p>
                    </div>
                </div>
                {/* Button */}
                <div className='mt-5'>
                    <Button variant="outline" className="w-full text-Primary font-bold">{btnText}</Button>
                </div>
            </div>
        </div>
    )
}

export default TourCardSmall
