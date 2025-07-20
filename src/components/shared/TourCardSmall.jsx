import React from 'react'
import Image from 'next/image'
import { Button } from '@/components/ui/Button'
import { Location, Calender, Spot } from '@/svgs/Icons';
import { Heading, Paragraph } from "@/components/ui/typography";
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
                    <Heading level="h5" className="text-Black font-[900] mb-2 uppercase">
                        {title}
                    </Heading>

                    <Paragraph size="xs" className="text-Black">
                        {content}
                    </Paragraph>


                    {/* spot and location */}
                    <div className='flex items-center mt-3 gap-1'>
                        <div className='flex gap-1 items-center '>
                            <Spot />
                            <Paragraph size="xxs" className="text-Black">
                                {bookSpot}
                            </Paragraph>

                        </div>
                        <div className='flex gap-1 items-center'>
                            <Location />
                            <Paragraph size="xxs" className="text-Black">
                                {location}
                            </Paragraph>
                            <p className='text-Black'></p>
                        </div>
                    </div>

                    {/* Days */}
                    <div className='flex gap-1 mt-3 items-center'>
                        <Calender />
                        <Paragraph size="xxs" className="text-Black">
                            {days}
                        </Paragraph>

                    </div>
                </div>

                {/* Button */}
                <div className='mt-3'>
                    <Button variant="outline" size="sm" className="w-full text-Primary">
                        <Paragraph size="sm" className="text-Primary font-bold">
                            {btnText}
                        </Paragraph>
                    </Button>

                </div>
            </div>
        </div>

    )
}

export default TourCardSmall
