import React from 'react'
import CardImg from '@/assets/largeCardImg.png'
import Image from 'next/image'
import { Button } from '@/components/ui/Button'
import { Location, Calender, Spot } from '@/svgs/Icons';


function TourCardLarge({ imgUrl, title, content, bookSpot, location, days }) {
    return (
        <div className='flex flex-col gap-0 max-w-md '>
            {/* Img */}
            <div>
                <Image
                    src={CardImg}
                    alt='Thumbnail'
                />
            </div>
            <div className='bg-White p-4 rounded-b-3xl shadow-md'>
                {/* Card content */}
                <div>
                    <h4 className='text-Black font-[900] text-xl mb-2.5'>{title.toUpperCase()}</h4>
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
                    <Button variant="outline" className="w-full">Details</Button>
                </div>
            </div>
        </div>
    )
}

export default TourCardLarge
