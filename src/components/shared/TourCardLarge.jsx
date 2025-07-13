import React from 'react'
import Image from 'next/image'
import { Button } from '@/components/ui/Button'
import { Location, Calender, Spot } from '@/svgs/Icons';


function TourCardLarge({ imgUrl, Status, title, content, bookSpot, location, days, btnText }) {

    return (
        <div className='flex flex-col gap-0'
            style={{
                boxShadow: '0px 40px 48px -16px rgba(0, 0, 0, 0.16)'
            }}>
            {/* Img */}
            <div className='relative'>
                <Image
                    src={imgUrl}
                    alt='Large Tour Card Thumbnail'
                />

                {/* Conditional Rendaring for ticktes Left status*/}
                {Status && (
                    <div className='absolute right-4 bottom-4'>
                        <Status />
                    </div>
                )}

            </div>
            <div className='p-4 rounded-b-3xl shadow-md'>
                {/* Card content */}
                <div>
                    <h4 className='text-Black font-[900] text-xl mb-2.5'>{title.toUpperCase()}</h4>
                    <p className='font-normal text-Black text-sm'>{content}</p>
                    {/* spot and location */}
                    <div className='flex items-center mt-3 gap-4 text-xs '>
                        {/* spots */}
                        <div className='flex gap-1 items-center'>
                            <Spot />
                            <p className='text-Black '>{bookSpot}</p>
                        </div>
                        {/* location */}
                        <div className='flex gap-1 items-center'>
                            <Location />
                            <p className='text-Black'>{location}</p>
                        </div>
                    </div>
                    {/* Days */}
                    <div className='flex gap-1 mt-3 items-center'>
                        <Calender />
                        <p className='text-darkGrey text-xs'>{days}</p>
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

export default TourCardLarge
