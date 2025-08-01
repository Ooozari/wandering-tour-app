import React from 'react'
import Image from 'next/image'
import { Button } from '@/components/ui/Button'
import Link from 'next/link';
import { Location, Calender, Spot } from '@/svgs/Icons';
import { Heading, Paragraph } from "@/components/ui/typography";
function TourCardSmall({ imgUrl, Status, title, content, bookSpot, location, days, btnText }) {
    return (

        <div className='flex flex-col mx-auto'>
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
                    <Heading level="h5" className="text-Black font-[900] mb-[4px] md:mb-[6px] lg:mb-[8px] xl:mb-[9px] 2xl:mb-[10px] uppercase">
                        {title}
                    </Heading>

                    <Paragraph size="xs" className="text-Black">
                        {content}
                    </Paragraph>


                    {/* spot and location */}
                    <div className='flex flex-row lg:flex-col mt-3 gap-1'>
                        <div className='flex gap-1 items-center'>
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
                    <div className='flex gap-1 mt-1 2xl:mt-3 items-center'>
                        <Calender />
                        <Paragraph size="xxs" className="text-Black">
                            {days}
                        </Paragraph>

                    </div>
                </div>

                {/* Button */}
                <div className='mt-3'>
                    <Link href="/tours/details">
                        <Button variant="outline" size="sm" className="w-full text-Primary group">
                            <Paragraph size="sm" className="text-Primary font-bold group-hover:text-White">
                                {btnText}
                            </Paragraph>
                        </Button>
                    </Link>

                </div>
            </div>
        </div>

    )
}

export default TourCardSmall
