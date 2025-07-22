import React from 'react'
import Image from 'next/image'
import { Button } from '@/components/ui/Button'
import { Location, Calender, Spot } from '@/svgs/Icons';
import { Heading, Paragraph } from "@/components/ui/typography";
import Link from 'next/link';


function TourCardLarge({ imgUrl, Status, title, content, bookSpot, location, days, btnText }) {

    return (
        <div className="w-full mx-auto">
            <div
                className="flex flex-col gap-0 rounded-3xl overflow-hidden bg-White shadow-lg"
                style={{
                    boxShadow: '0px 40px 48px -16px rgba(0, 0, 0, 0.16)',
                }}
            >
                <div className="relative">
                    <Image
                        src={imgUrl}
                        alt="Large Tour Card Thumbnail"
                        className="w-full h-auto"
                    />
                    {Status && (
                        <div className="absolute right-4 bottom-4">
                            <Status />
                        </div>
                    )}
                </div>

                <div className="px-4 py-6">
                    <Heading level="h5" className="text-Black mb-2.5 font-[900]">
                        {title.toUpperCase()}
                    </Heading>
                    <Paragraph size="xs" className="text-Black font-normal">
                        {content}
                    </Paragraph>

                    <div className="flex items-center mt-6 gap-4">
                        <div className="flex gap-1 items-center">
                            <Spot />
                            <Paragraph size="xxs" className="text-Black">
                                {bookSpot}
                            </Paragraph>

                        </div>
                        <div className="flex gap-1 items-center">
                            <Location />
                            <Paragraph size="xxs" className="text-Black">
                                {location}
                            </Paragraph>

                        </div>
                    </div>
                    <div className="flex gap-1 mt-3 items-center">
                        <Calender />
                        <Paragraph size="xxs" className="text-darkGrey">
                            {days}
                        </Paragraph>

                    </div>
                    <div className="mt-[10px] md:mt-[16px] lg:mt-[20px] xl:mt-[26px] 2xl:mt-[30px]"
                    >
                        <Link href="/tours/details">
                            <Button variant="outline" className="w-full text-Primary font-bold group">
                                <Paragraph size="sm" className="font-bold text-Primary group-hover:text-White">
                                    {btnText}
                                </Paragraph>
                            </Button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>


    )
}

export default TourCardLarge
