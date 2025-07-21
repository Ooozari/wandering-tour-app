import React from 'react'
import Image from 'next/image'
import { Button } from '@/components/ui/Button'
import { Location, Calender, Spot } from '@/svgs/Icons';
import { Heading, Paragraph } from "@/components/ui/typography";
import Link from 'next/link';


function TourCardLarge({ imgUrl, Status, title, content, bookSpot, location, days, btnText }) {

    return (
        <div className="w-full max-w-[400px] mx-auto">
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

                <div className="p-4">
                    <Heading level="h3" className="text-Black mb-2.5 font-[800]">
                        {title.toUpperCase()}
                    </Heading>
                    <Paragraph size="sm" className="text-Black font-normal">
                        {content}
                    </Paragraph>

                    <div className="flex items-center mt-3 gap-4 text-xs">
                        <div className="flex gap-1 items-center">
                            <Spot />
                            <Paragraph size="xs" className="text-Black">
                                {bookSpot}
                            </Paragraph>

                        </div>
                        <div className="flex gap-1 items-center">
                            <Location />
                            <Paragraph size="xs" className="text-Black">
                                {location}
                            </Paragraph>

                        </div>
                    </div>
                    <div className="flex gap-1 mt-3 items-center">
                        <Calender />
                        <Paragraph size="xs" className="text-darkGrey">
                            {days}
                        </Paragraph>

                    </div>
                    <div className="mt-5">
                        <Link href="/tours/details">
                        <Button variant="outline" className="w-full text-Primary font-bold">
                            <Paragraph size="sm" className="font-bold text-Primary">
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
