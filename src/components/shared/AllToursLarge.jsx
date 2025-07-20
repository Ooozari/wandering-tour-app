import React from 'react'
import { ArrowRight } from '@/svgs/Icons'
import { Button } from '@/components/ui/Button'
import {
    WanderAcrossMexico,
    WandertoVietnam,
    WanderAcrossRomania,
} from '@/assets'
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
            <div className='flex flex-col gap-5'>
                {/* Heading & Button */}
                <div className='flex justify-between items-end'>
                    <div>
                        <Heading level="h2" className="flex flex-col text-darkGrey uppercase font-[900]">
                            {year && <span className="text-Primary">{year}</span>}
                            <span className="text-darkGrey">{title}</span>
                        </Heading>
                    </div>
                    <div>
                        <Button variant="outline" size="lg">
                            <Paragraph className="m-0">All Tours</Paragraph> <ArrowRight />
                        </Button>
                    </div>
                </div>

                {/* Cards */}
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2'>
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
