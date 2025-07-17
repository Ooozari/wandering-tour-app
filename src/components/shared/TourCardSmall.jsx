import React from 'react'
import Image from 'next/image'
import { Button } from '@/components/ui/Button'
import { Location, Calender, Spot } from '@/svgs/Icons';

function TourCardSmall({ imgUrl, Status, title, content, bookSpot, location, days, btnText }) {
    return (

        <div className='flex flex-col gap-0 max-w-[300px] w-full mx-auto'>
            {/* Img */}
            <div className='relative'>
                <Image
                    src={imgUrl}
                    alt='small tour card img'
                    className='w-full h-auto object-cover rounded-t-3xl' // Optional rounded corners
                />
                {/* Conditional Rendering for tickets Left status */}
                {Status && (
                    <div className='absolute right-3 bottom-3'>
                        <Status />
                    </div>
                )}
            </div>

            <div className='bg-White px-4 py-3 rounded-b-3xl shadow-md'>
                {/* Card content */}
                <div>
                    <h4 className='text-Black font-[900] text-lg mb-2 uppercase'>{title}</h4>
                    <p className='font-normal text-xs lg:text-sm text-Black'>{content}</p>

                    {/* spot and location */}
                    <div className='flex items-center mt-3 gap-1 text-xs'>
                        <div className='flex gap-1 items-center '>
                            <Spot />
                            <p className='text-Black '>{bookSpot}</p>
                        </div>
                        <div className='flex gap-1 items-center'>
                            <Location />
                            <p className='text-Black'>{location}</p>
                        </div>
                    </div>

                    {/* Days */}
                    <div className='flex gap-1 mt-3 items-center text-xs'>
                        <Calender />
                        <p className='text-darkGrey '>{days}</p>
                    </div>
                </div>

                {/* Button */}
                <div className='mt-3'>
                    <Button variant="outline" size='sm' className="w-full text-Primary font-bold">{btnText}</Button>
                </div>
            </div>
        </div>

    )
}

export default TourCardSmall
