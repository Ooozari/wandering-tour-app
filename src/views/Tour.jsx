
import React from 'react'
import Image from 'next/image'
import { ToursHeroImg } from '@/assets'
import { TourCardSmall, Only2Spots, SoldOut, HeroSection } from '@/components/shared'
import {
    Tour2024Img1,
    Tour2024Img2,
    Tour2024Img3,
    Tour2024Img4,
    Tour2024Img5,
    Tour2024Img6,
    Tour2024Img8
} from '@/assets/tour2024'
import {
    Tour2025Img1,
    Tour2025Img2,
    Tour2025Img3,
    Tour2025Img4,
    Tour2025Img5,
    Tour2025Img6,
    Tour2025Img7,
    Tour2025Img8
} from '@/assets/tour2025'
import { Heading, Paragraph } from "@/components/ui/typography";

function Tour() {

    const Year2024 = [
        {
            imgUrl: Tour2024Img1,
            title: 'Wander Across Mexico',
            Status: Only2Spots,
            content: `Join our unique journey into the heart of Mexico! We'll dive into the rich history, flavorful cuisine, city and village life and vibrant cultures in a style you won't want to miss!`,
            bookSpot: '2 out of 12 spots booked',
            location: 'Mexico',
            days: 'Nov 08 — Nov 17, 2024 (10 days)',
            btnText: 'Details'
        },
        {
            imgUrl: Tour2024Img2,
            title: 'Wander Across Mexico',
            content: `Join our unique journey into the heart of Mexico! We'll dive into the rich history, flavorful cuisine, city and village life and vibrant cultures in a style you won't want to miss!`,
            bookSpot: '2 out of 12 spots booked',
            location: 'Mexico',
            days: 'Nov 08 — Nov 17, 2024 (10 days)',
            btnText: 'Details'
        },
        {
            imgUrl: Tour2024Img3,
            title: 'Wander Across Mexico',
            Status: SoldOut,
            content: `Join our unique journey into the heart of Mexico! We'll dive into the rich history, flavorful cuisine, city and village life and vibrant cultures in a style you won't want to miss!`,
            bookSpot: '2 out of 12 spots booked',
            location: 'Mexico',
            days: 'Nov 08 — Nov 17, 2024 (10 days)',
            btnText: 'Add to Waitlist'
        },
        {
            imgUrl: Tour2024Img4,
            title: 'Wander Across Mexico',
            Status: Only2Spots,
            content: `Join our unique journey into the heart of Mexico! We'll dive into the rich history, flavorful cuisine, city and village life and vibrant cultures in a style you won't want to miss!`,
            bookSpot: '2 out of 12 spots booked',
            location: 'Mexico',
            days: 'Nov 08 — Nov 17, 2024 (10 days)',
            btnText: 'Details'
        },
        {
            imgUrl: Tour2024Img5,
            title: 'Wander Across Mexico',
            Status: SoldOut,
            content: `Join our unique journey into the heart of Mexico! We'll dive into the rich history, flavorful cuisine, city and village life and vibrant cultures in a style you won't want to miss!`,
            bookSpot: '2 out of 12 spots booked',
            location: 'Mexico',
            days: 'Nov 08 — Nov 17, 2024 (10 days)',
            btnText: 'Add to Waitlist'
        },
        {
            imgUrl: Tour2024Img6,
            title: 'Wander Across Mexico',
            content: `Join our unique journey into the heart of Mexico! We'll dive into the rich history, flavorful cuisine, city and village life and vibrant cultures in a style you won't want to miss!`,
            bookSpot: '2 out of 12 spots booked',
            location: 'Mexico',
            days: 'Nov 08 — Nov 17, 2024 (10 days)',
            btnText: 'Details'
        },
        {
            imgUrl: Tour2024Img1,
            title: 'Wander Across Mexico',
            content: `Join our unique journey into the heart of Mexico! We'll dive into the rich history, flavorful cuisine, city and village life and vibrant cultures in a style you won't want to miss!`,
            bookSpot: '2 out of 12 spots booked',
            location: 'Mexico',
            days: 'Nov 08 — Nov 17, 2024 (10 days)',
            btnText: 'Details'
        },
        {
            imgUrl: Tour2024Img8,
            title: 'Wander Across Mexico',
            content: `Join our unique journey into the heart of Mexico! We'll dive into the rich history, flavorful cuisine, city and village life and vibrant cultures in a style you won't want to miss!`,
            bookSpot: '2 out of 12 spots booked',
            location: 'Mexico',
            days: 'Nov 08 — Nov 17, 2024 (10 days)',
            btnText: 'Details'
        },
    ]

    const Year2025 = [
        {
            imgUrl: Tour2025Img1,
            title: 'Wander Across Mexico',
            Status: Only2Spots,
            content: `Join our unique journey into the heart of Mexico! We'll dive into the rich history, flavorful cuisine, city and village life and vibrant cultures in a style you won't want to miss!`,
            bookSpot: '2 out of 12 spots booked',
            location: 'Mexico',
            days: 'Nov 08 — Nov 17, 2024 (10 days)',
            btnText: 'Details'
        },
        {
            imgUrl: Tour2025Img2,
            title: 'Wander Across Mexico',
            content: `Join our unique journey into the heart of Mexico! We'll dive into the rich history, flavorful cuisine, city and village life and vibrant cultures in a style you won't want to miss!`,
            bookSpot: '2 out of 12 spots booked',
            location: 'Mexico',
            days: 'Nov 08 — Nov 17, 2024 (10 days)',
            btnText: 'Details'
        },
        {
            imgUrl: Tour2025Img3,
            title: 'Wander Across Mexico',
            Status: SoldOut,
            content: `Join our unique journey into the heart of Mexico! We'll dive into the rich history, flavorful cuisine, city and village life and vibrant cultures in a style you won't want to miss!`,
            bookSpot: '2 out of 12 spots booked',
            location: 'Mexico',
            days: 'Nov 08 — Nov 17, 2024 (10 days)',
            btnText: 'Add to Waitlist'
        },
        {
            imgUrl: Tour2025Img4,
            title: 'Wander Across Mexico',
            Status: Only2Spots,
            content: `Join our unique journey into the heart of Mexico! We'll dive into the rich history, flavorful cuisine, city and village life and vibrant cultures in a style you won't want to miss!`,
            bookSpot: '2 out of 12 spots booked',
            location: 'Mexico',
            days: 'Nov 08 — Nov 17, 2024 (10 days)',
            btnText: 'Details'
        },
        {
            imgUrl: Tour2025Img5,
            title: 'Wander Across Mexico',
            Status: SoldOut,
            content: `Join our unique journey into the heart of Mexico! We'll dive into the rich history, flavorful cuisine, city and village life and vibrant cultures in a style you won't want to miss!`,
            bookSpot: '2 out of 12 spots booked',
            location: 'Mexico',
            days: 'Nov 08 — Nov 17, 2024 (10 days)',
            btnText: 'Add to Waitlist'
        },
        {
            imgUrl: Tour2025Img6,
            title: 'Wander Across Mexico',
            content: `Join our unique journey into the heart of Mexico! We'll dive into the rich history, flavorful cuisine, city and village life and vibrant cultures in a style you won't want to miss!`,
            bookSpot: '2 out of 12 spots booked',
            location: 'Mexico',
            days: 'Nov 08 — Nov 17, 2024 (10 days)',
            btnText: 'Details'
        },
        {
            imgUrl: Tour2025Img7,
            title: 'Wander Across Mexico',
            content: `Join our unique journey into the heart of Mexico! We'll dive into the rich history, flavorful cuisine, city and village life and vibrant cultures in a style you won't want to miss!`,
            bookSpot: '2 out of 12 spots booked',
            location: 'Mexico',
            days: 'Nov 08 — Nov 17, 2024 (10 days)',
            btnText: 'Details'
        },
        {
            imgUrl: Tour2025Img8,
            title: 'Wander Across Mexico',
            content: `Join our unique journey into the heart of Mexico! We'll dive into the rich history, flavorful cuisine, city and village life and vibrant cultures in a style you won't want to miss!`,
            bookSpot: '2 out of 12 spots booked',
            location: 'Mexico',
            days: 'Nov 08 — Nov 17, 2024 (10 days)',
            btnText: 'Details'
        },
    ]

    return (
        <>
            <div className='flex flex-col mb-[80px] md:mb-[96px] lg:mb-[112px] xl:mb-[128px] 2xl:mb-[144px]'>

                {/* Hero Section */}
                <div className='relative w-full'>
                    <Image
                        src={ToursHeroImg}
                        alt='Tours Hero Img'
                        className='w-full h-auto object-cover'
                        priority
                    />
                    <div
                        className="absolute inset-0"
                        style={{
                            background: "linear-gradient(180deg, rgba(30, 54, 92, 0) 0%, #1E365C 100%)",
                        }}
                    />
                    <div className='absolute inset-0 z-10 flex justify-center items-center'>
                        <Heading level="h1Large" className="text-White font-[900]">TOURS</Heading>
                    </div>
                </div>

                {/* Gradient continuation after hero image */}
                <div
                    className="w-full h-[100px] md:h-[200px] lg:h-[230px] xl:h-[280px] -z-10"
                    style={{
                        background:
                            "linear-gradient(1800deg, rgba(30, 54, 92, 0) 0%, #1E365C 100%)",
                    }}
                ></div>

                {/* Other Sections with gap */}
                <div className='container mx-auto px-[16px] md:px-[32px] lg:px-[48px] xl:px-[64px] 2xl:px-[80px] flex flex-col -mt-[48px] md:-mt-[68px] lg:-mt-[88px] xl:-mt-[105px] 2xl:-mt-[120px]'>

                    {/* Past Tour 2024*/}
                    <div className=''>
                        <Heading level="h1" className="font-[900] text-center mb-[30px] md:mb-[40px] lg:mb-[50px] xl:mb-[60px] 2xl:mb-[70px] uppercase">
                            <span className="text-Secondary">2024 </span>TOURS
                        </Heading>

                        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3'>
                            {Year2024.map((tour, index) => (
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

                    {/* Past Tour 2025*/}
                    <div className=''>
                        <Heading level="h1" className="font-[900] text-center mb-[32px] md:mb-[44px] lg:mb-[54px] xl:mb-[62px] 2xl:mb-[70px] mt-[94px] uppercase">
                            <span className='text-Secondary'>2025 </span>TOURS
                        </Heading>
                        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-[6px] md:gap-[10px] lg:gap-[14px] xl:gap-[16px] 2xl:gap-[20px]'>
                            {Year2025.map((tour, index) => (
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

                </div>

            </div>

        </>
    )
}

export default Tour
