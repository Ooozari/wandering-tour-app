import React from 'react'
import Image from 'next/image'
import IconCard from '@/components/shared/IconCard'

import { Heading, Paragraph } from "@/components/ui/typography";

// Niches
import {
    Niches1,
    Niches2,
    Niches3,
    Niches4,
    Niches5,
    Niches6,
    Niches7,
    Niches8,
    Niches9,
    Niches10,
    Niches11,
    Niches12,
} from '@/svgs/Icons';
// Flags
import {
    Flag1,
    Flag2,
    Flag3,
    Flag4,
    Flag5,
    Flag6,
    Flag7,
    Flag8,
    Flag9,
    Flag10,
    Flag11,
    Flag12,
    Flag13,
    Flag14,
    Flag15,
    Flag16,
    Flag17,
    Flag18,
    Flag19,
    Flag20,
    Flag21,
    Flag22,
    Flag23,
    Flag24,
    Flag25,
    Flag26,
    Flag27,
} from '@/svgs/Icons';

import { Reviews, HeroSection, GetInTouch,CountryCard } from '@/components/shared'

// Images
import {
    heroImgPrivateTours,
    privateTourDes,
} from '@/assets';

function PrivateTours() {
    const nicheData = [
        { title: 'Portrait photography', icon: Niches1 },
        { title: 'Abandoned buildings', icon: Niches2 },
        { title: 'Textiles / crafts', icon: Niches3 },
        { title: 'Photography workshops', icon: Niches4 },
        { title: 'Wellness / spa', icon: Niches5 },
        { title: 'Yoga / meditation retreats', icon: Niches6 },
        { title: 'Adventure / hiking', icon: Niches7 },
        { title: 'Biking', icon: Niches8 },
        { title: 'Marathon / running', icon: Niches9 },
        { title: 'Food/drink', icon: Niches10 },
        { title: 'History', icon: Niches11 },
        { title: 'General sightseeing', icon: Niches12 },
    ];

    const country = [
        { title: 'Pakistan', icon: Flag1 },
        { title: 'India', icon: Flag2 },
        { title: 'Turkey', icon: Flag3 },
        { title: 'Thailand', icon: Flag4 },
        { title: 'Indonesia', icon: Flag5 },
        { title: 'Vietnam', icon: Flag6 },
        { title: 'Morocco', icon: Flag7 },
        { title: 'Egypt', icon: Flag8 },
        { title: 'Jordan', icon: Flag9 },
        { title: 'Sri Lanka', icon: Flag10 },
        { title: 'Nepal', icon: Flag11 },
        { title: 'Uzbekistan', icon: Flag12 },
        { title: 'Georgia', icon: Flag13 },
        { title: 'Armenia', icon: Flag14 },
        { title: 'Iran', icon: Flag15 },
        { title: 'Malaysia', icon: Flag16 },
        { title: 'Philippines', icon: Flag17 },
        { title: 'Japan', icon: Flag18 },
        { title: 'Korea', icon: Flag19 },
        { title: 'China', icon: Flag20 },
        { title: 'Tanzania', icon: Flag21 },
        { title: 'Kenya', icon: Flag22 },
        { title: 'Africa', icon: Flag23 },
        { title: 'Spain', icon: Flag24 },
        { title: 'Portugal', icon: Flag25 },
        { title: 'Romania', icon: Flag26 },
        { title: 'Bulgaria', icon: Flag27 },
    ];

    const HeroSectionDetails = {
        title: 'Private Tours by Wandering Earl Tours',
        paraText: 'Imagine an amazing private tour specifically crafted for your group or organization. We’ll take care of every aspect of the trip, and will even provide one of our Expert Tour Leaders.',
        subText: 'All you need to do is enjoy.',
        ImgUrl: heroImgPrivateTours,
    }

    return (
        <>

            {/* Hero Section */}
            <div className='bg-Primary'>
                <HeroSection
                    title={HeroSectionDetails.title}
                    paraText={HeroSectionDetails.paraText}
                    subText={HeroSectionDetails.subText}
                    ImgUrl={HeroSectionDetails.ImgUrl}
                />
            </div>
            {/* Gradient continuation after hero image */}
            <div
                className="w-full h-[80px] md:h-[120px] 2xl:[150px]" // Adjust height as needed
                style={{
                    background:
                        "linear-gradient(0deg, rgba(30, 54, 92, 0) 0%, #1E365C 100%)",
                }}
            ></div>

            <div className='container mx-auto px-[16px] md:px-[32px] lg:px-[48px] xl:px-[64px] 2xl:px-[80px] flex flex-col'>
                {/* after hero section */}
                <div className='flex flex-col items-center lg:flex-row gap-[16px] md:gap-[32px] lg:gap-[64px] xl:gap-[96px] 2xl:gap-[128px] pt-[16px] md:pt-[32px] lg:pt-[48px] xl:pt-[64px] 2xl:pt-[80px] -mt-[50px] md:-mt-[60px] lg:-mt-[75px] xl:-mt-[94px] 2xl:-mt-[150px]'>
                    <div className='w-full lg:w-1/2 flex flex-col gap-[8px] md:gap-[16px] lg:gap-[24px] xl:gap-[32px] 2xl:gap-[40px] '>
                        <Heading level="h6" className="text-Black font-bold uppercase">
                            <span className="text-Secondary">Private tours</span>,<br />
                            perfectly crafted.
                        </Heading>

                        <div className='flex flex-col gap-[4px] md:gap-[8px] lg:gap-[16px] xl:gap-[20px] 2xl:gap-[24px]'>
                            <Paragraph size="sm" className="text-Black">
                                Whether you’re a group of friends, a photography organization, a textile club, abandoned building enthusiasts, or anything in between, we’ll create a magical private tour for your group.
                            </Paragraph>
                            <Paragraph size="sm" className="text-Black">
                                Unlike tour operators that use the exact same itinerary over and over again, we ensure that every trip is 100% unique. We want to learn about your specific interests, goals, budget and more in order to carefully craft and customize every aspect of the trip in a way that will suit your group perfectly. We choose the ideal route, best lodgings, most rewarding activities, tastiest restaurants, and more, that will all lead to the most extraordinary trip possible.
                                Since 2013, we’ve offered our highly-regarded, excellent value trips to dozens of groups in dozens of countries around the world.
                            </Paragraph>

                        </div>
                    </div>

                    <div className='w-full lg:w-1/2'>
                        <div className=' border-White border-[16px] rounded-2xl w-full h-full '
                            style={{ boxShadow: '-40px 30px 60px 0px rgba(0, 0, 0, 0.4)' }}
                        >
                            <Image
                                src={privateTourDes}
                                alt="Private Tour Description Img"
                                width={870}
                                height={557}
                                className="rounded-2xl w-full h-full"
                            />
                        </div>
                    </div>

                </div>

                {/* Niches */}
                <div className='pt-[120px] md:pt-[160px] lg:pt-[200px] xl:pt-[240px] 2xl:pt-[280px]'>
                    <div className='flex justify-center items-center flex-col mb-5'>
                        <Heading level="lgSubText" className="text-Black font-bold mb-[4px] md:mb-[8px] lg:mb-[12px] xl:mb-[16px] 2xl:mb-[20px]">
                            NICHES
                        </Heading>

                        <Paragraph size="subText" className="text-Black text-center">
                            Some of the niches that we’ve organized private tours around include:
                        </Paragraph>

                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 pt-[16px] md:pt-[32px] lg:pt-[48px] xl:pt-[64px] 2xl:pt-[80px]"
                    >
                        {nicheData.map((niche, index) => (
                            <IconCard key={index} svgImg={<niche.icon />} title={niche.title} />
                        ))}
                    </div>
                </div>

                {/* Countries */}
                <div className='py-[80px] md:py-[96px] lg:py-[112px] xl:py-[126px] 2xl:py-[140px]'>
                    <div className='flex justify-center items-center flex-col mb-5'>
                        <Heading level="lgSubText" className="text-Black font-bold mb-[4px] md:mb-[8px] lg:mb-[12px] xl:mb-[16px] 2xl:mb-[20px]">
                            COUNTRIES
                        </Heading>

                        <Paragraph size="subText" className="text-Black text-center">
                            Some of the countries we’ve organized private tours to include:
                        </Paragraph>

                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-5 pt-[16px] md:pt-[32px] lg:pt-[48px] xl:pt-[64px] 2xl:pt-[80px] content-center">
                        {country.map((item, index) => {
                            const Icon = item.icon;
                            return (
                                <CountryCard className='grid justify-center' key={index} svgImg={<Icon />} title={item.title} />
                            );
                        })}
                    </div>

                </div>

                {/* Get in touch */}
                <div className='p-5'>
                    <GetInTouch />
                </div>

                {/* Testimonials */}
                <div className='py-[80px] md:py-[96px] lg:py-[112px] xl:py-[126px] 2xl:py-[140px]'>
                    <div className='px-5 md:px-10 lg:px-20'>
                        <Reviews />
                    </div>
                </div>

            </div>
        </>
    )
}

export default PrivateTours

