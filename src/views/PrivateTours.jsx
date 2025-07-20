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

import { Reviews, HeroSection, GetInTouch } from '@/components/shared'

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
        { title: 'South Korea', icon: Flag19 },
        { title: 'China', icon: Flag20 },
        { title: 'Tanzania', icon: Flag21 },
        { title: 'Kenya', icon: Flag22 },
        { title: 'South Africa', icon: Flag23 },
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
            <div className='bg-Primary px-5'>
                <HeroSection
                    title={HeroSectionDetails.title}
                    paraText={HeroSectionDetails.paraText}
                    subText={HeroSectionDetails.subText}
                    ImgUrl={HeroSectionDetails.ImgUrl}
                />
            </div>
            <div className='container mx-auto px-4 py-10 flex flex-col gap-20 md:gap-25 lg:gap-30 '>
                {/* after hero section */}
                <div className='px-[20px] flex flex-col items-center lg:flex-row gap-10 '>
                    <div className='w-full lg:w-1/2'>
                        <Heading level="h6" className="text-Black font-bold uppercase mb-4">
                            <span className="text-Secondary">Private tours</span>,<br />
                            perfectly crafted.
                        </Heading>

                        <div className='flex flex-col gap-4'>
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
                        <div className=' border-White border-[16px] rounded-2xl '
                            style={{ boxShadow: '-40px 30px 60px 0px rgba(0, 0, 0, 0.4)' }}
                        >
                            <Image
                                src={privateTourDes}
                                alt="Private Tour Description Img"
                                className="rounded-2xl"
                            />
                        </div>
                    </div>

                </div>

                {/* Niches */}
                <div className='px-[20px]'>
                    <div className='flex justify-center items-center flex-col mb-5'>
                        <Heading level="h1" className="text-Black font-bold mb-1 lg:mb-2">
                            NICHES
                        </Heading>

                        <Paragraph size="sm" className="text-Black text-center">
                            Some of the niches that we’ve organized private tours around include:
                        </Paragraph>

                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-10"
                    >
                        {nicheData.map((niche, index) => (
                            <IconCard key={index} svgImg={<niche.icon />} title={niche.title} />
                        ))}
                    </div>
                </div>

                {/* Countries */}
                <div className='px-[20px]'>
                    <div className='flex justify-center items-center flex-col mb-5'>
                        <Heading level="h1" className="text-Black font-bold mb-1 lg:mb-2">
                            COUNTRIES
                        </Heading>

                        <Paragraph size="sm" className="text-Black text-center">
                            Some of the countries we’ve organized private tours to include:
                        </Paragraph>

                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6 mt-10 content-center">
                        {country.map((item, index) => {
                            const Icon = item.icon;
                            return (
                                <IconCard className='grid justify-center' key={index} svgImg={<Icon />} title={item.title} />
                            );
                        })}
                    </div>

                </div>

                {/* Get in touch */}
                <div className='p-5' >
                    <GetInTouch />
                </div>

                {/* Testimonials */}
                <div className='px-5 md:px-15 lg:px-25'>
                    <Reviews />
                </div>
            </div>
        </>
    )
}

export default PrivateTours

