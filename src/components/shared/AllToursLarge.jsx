import React from 'react'
import { ArrowRight } from '@/svgs/Icons'
import { Button } from '@/components/ui/Button'
import {
    WanderAcrossMexico,
    WandertoVietnam,
    WanderAcrossRomania,
} from '@/assets'
import Link from 'next/link'
import { Paragraph, Heading } from "@/components/ui/typography";


import { Only2Spots, SoldOut, TourCardLarge } from '@/components/shared'


function AllToursLarge({ year, title }) {
    const largeTourCardDetail = [
        {
            imgUrl: WanderAcrossMexico,
            title: 'Wander Across Mexico',
            Status: Only2Spots,
            content: `Join our unique journey into the heart of Mexico! We'll dive into the rich history, flavorful cuisine, city and village life and vibrant cultures in a style you won't want to miss!`,
            bookSpot: '2 out of 12 spots booked',
            location: 'Mexico',
            days: 'Nov 08 — Nov 17, 2024 (10 days)',
            btnText: 'Details'
        },
        {
            imgUrl: WandertoVietnam,
            title: 'Wander to Vietnam',
            Status: SoldOut,
            content: `Join our unique journey into the heart of Vietnam! We'll dive into the rich history, flavorful cuisine, city and village life and vibrant cultures in a style you won't want to miss!`,
            bookSpot: '2 out of 12 spots booked',
            location: 'Vietnam',
            days: 'Nov 08 — Nov 17, 2024 (10 days)',
            btnText: 'Add to Waitlist'
        },
        {
            imgUrl: WanderAcrossRomania,
            title: 'Wander Across Romania',
            content: `Join our unique journey into the heart of Romania! We'll dive into the rich history, flavorful cuisine, city and village life and vibrant cultures in a style you won't want to miss!`,
            bookSpot: '2 out of 12 spots booked',
            location: 'Romania',
            days: 'Nov 08 — Nov 17, 2024 (10 days)',
            btnText: 'Details'
        },
    ]

    return (
        <>
            <div className='flex flex-col gap-[8px] md:gap-[16px] lg:gap-[24px] xl:gap-[28px] 2xl:gap-[32px]'>
                {/* Heading & Button */}
                <div className='flex justify-between items-end'>
                    <div>
                        <Heading level="h2" className="flex flex-col text-darkGrey uppercase font-[900]">
                            {year && <span className="text-Primary">{year}</span>}
                            <span className="text-darkGrey">{title}</span>
                        </Heading>
                    </div>
                    <div>
                        <Link href="/tours">
                            <Button variant="outline" size="lg" className="group flex items-center gap-2">
                                <Paragraph className="m-0 text-Primary group-hover:text-White">All Tours</Paragraph>
                                <ArrowRight className="text-White group-hover:text-White" />
                            </Button>
                        </Link>
                    </div>
                </div>

                {/* Cards */}
                <div className="grid 2xl:grid-cols-[repeat(auto-fit,_minmax(380px,1fr))] xl:grid-cols-[repeat(auto-fit,_minmax(320px,1fr))]
                grid-cols-[repeat(auto-fit,_minmax(300px,1fr))] justify-center gap-5 ">
                    {largeTourCardDetail.map((tour, index) => (
                        <TourCardLarge
                            key={index}
                            imgUrl={tour.imgUrl}
                            Status={tour.Status}
                            title={tour.title}
                            content={tour.content}
                            bookSpot={tour.bookSpot}
                            location={tour.location}
                            days={tour.days}
                            btnText={tour.btnText}
                        />
                    ))}
                </div>

            </div>
        </>
    )
}

export default AllToursLarge
