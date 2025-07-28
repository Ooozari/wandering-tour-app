import React from 'react'
import { ArrowRight } from '@/svgs/Icons'
import { Button } from '@/components/ui/Button'
import {
    relatedTour1, relatedTour2, relatedTour3, relatedTour4,
} from '@/assets'

import { Only2Spots, SoldOut, TourCardSmall } from '@/components/shared'

function RelatedTourSmall({ year, title }) {
    const largeTourCardDetail = [
        {
            imgUrl: relatedTour1,
            title: 'Wander Across Mexico',
            Status: Only2Spots,
            content: `Join our unique journey into the heart of Mexico! We'll dive into the rich history, flavorful cuisine, city and village life and vibrant cultures in a style you won't want to miss!`,
            bookSpot: '2 out of 12 spots booked',
            location: 'Mexico',
            days: 'Nov 08 — Nov 17, 2024 (10 days)',
            btnText: 'Details'
        },
        {
            imgUrl: relatedTour2,
            title: 'Wander Across Mexico',
            content: `Join our unique journey into the heart of Mexico! We'll dive into the rich history, flavorful cuisine, city and village life and vibrant cultures in a style you won't want to miss!`,
            bookSpot: '2 out of 12 spots booked',
            location: 'Mexico',
            days: 'Nov 08 — Nov 17, 2024 (10 days)',
            btnText: 'Details'
        },
        {
            imgUrl: relatedTour3,
             title: 'Wander Across Mexico',
            Status: SoldOut,
            content: `Join our unique journey into the heart of Mexico! We'll dive into the rich history, flavorful cuisine, city and village life and vibrant cultures in a style you won't want to miss!`,
            bookSpot: '2 out of 12 spots booked',
            location: 'Mexico',
            days: 'Nov 08 — Nov 17, 2024 (10 days)',
            btnText: 'Details'
        },
        {
            imgUrl: relatedTour4,
             title: 'Wander Across Mexico',
            Status: Only2Spots,
            content: `Join our unique journey into the heart of Mexico! We'll dive into the rich history, flavorful cuisine, city and village life and vibrant cultures in a style you won't want to miss!`,
            bookSpot: '2 out of 12 spots booked',
            location: 'Mexico',
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
                        <h1 className='flex flex-col text-darkGrey uppercase font-extrabold text-2xl md:text-3xl lg:text-5xl xl:text-7xl'>
                            {year && <span className='text-Primary'>{year}</span>}
                            <span className='text-darkGrey'>
                                {title}
                            </span>

                        </h1>
                    </div>
                    <div>
                        <Button variant='outline' size='lg'>All Tours <ArrowRight /></Button>
                    </div>
                </div>

                {/* Cards */}
                <div className="grid 2xl:grid-cols-[repeat(auto-fit,_minmax(355px,1fr))] xl:grid-cols-[repeat(auto-fit,_minmax(290px,1fr))]
                grid-cols-[repeat(auto-fit,_minmax(300px,1fr))] justify-center gap-[10px] xl:gap-[15px] 2xl:gap-[20px] w-full">
                    {largeTourCardDetail.map((tour, index) => (
                        <TourCardSmall
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

export default RelatedTourSmall
