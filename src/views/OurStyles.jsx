import React from 'react'
import Image from 'next/image'
// Images
import {
    heroImgOurStyle,
    OurSyleDes,
    OurStyleTourThatAreGood,
    OurStyleCookies,
    OurStyleSafety,
    uniquetour1,
    uniquetour2,
    uniquetour3,
    goodtour1,
    goodtour2,
    goodtour3,
} from '@/assets';

import { HeroSection, GetInTouch, AllToursLarge } from '@/components/shared'
import { Heading, Paragraph } from "@/components/ui/typography";

function OurStyles() {
    const HeroSectionDetails = {
        title: 'Our style',
        paraText: 'Incredible, small-group tours that are anything but typical. Get to the heart of your destination. Interact with local people and their communities. Learn about their culture. Visit destinations that a regular group tour can’t visit.',
        subText: 'Travel with us, as a friend.',
        ImgUrl: heroImgOurStyle,
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

            <div className='container mx-auto flex flex-col gap-[80px] md:gap-[90px] lg:gap-[100px] xl:gap-[110px] 2xl:gap-[120px] pt-[36px] md:pt-[50px] lg:pt-[65px] xl:pt-[80px] 2xl:pt-[95px] px-[32px] md:px-[48px] lg:px-[64px] xl:px-[80px] 2xl:px-[100px] mb-[80px] md:mb-[96px] lg:mb-[112px] xl:mb-[126px] 2xl:mb-[140px]'>

                {/* After Hero Section */}
                <div className='flex flex-col items-center lg:flex-row gap-10'>
                    <div className='w-full lg:w-1/2'>
                        <Heading level="lgSubText" className="text-Black font-bold uppercase leading-tight ">
                            <span className="text-Secondary">Unique tours<br /></span>
                            you can’t find anywhere else.
                        </Heading>

                        <div className='flex flex-col gap-4 text-Black pt-[8px] md:pt-[16px] lg:pt-[24px] xl:pt-[32px] 2xl:pt-[40px]'>
                            <Paragraph size="normal">
                                Through Wandering Earl Tours, we want to you to have authentic experiences and meet the people who live their everyday lives in the places you’re visiting. We want you to really understand the destinations you’ve explored with us, and never feel like you just “passed through.”
                            </Paragraph>

                            <Paragraph size="normal">
                                Our tours are built with the help of an extensive network of local contacts and friends in each country, contacts with whom we’ve formed wonderful bonds with over many years. We work together to ensure that our itineraries are full of genuinely rewarding activities away from the tourist crowds instead of a collection of quick photo stops.
                            </Paragraph>

                            <Paragraph size="normal">
                                And, most of all, we want you to feel like you took the trip you wanted to take.
                            </Paragraph>

                        </div>
                    </div>
                    {/* Image Block */}
                    <div className='w-full lg:w-1/2 flex gap-2'>
                        {/* Left */}
                        <div className='max-w-[297px] max-h-[563px]'>
                            <Image
                                src={uniquetour1}
                                alt="Our Style Description Img"
                                className='object-cover rounded-3xl shadow-2xl w-full h-full aspect-1/2'
                            />
                        </div>

                        {/* Right */}
                        <div className='flex flex-col gap-5'>
                            {/* right top */}
                            <div className='min-w-[calc(100%+40px)] -translate-x-10 border-[8px] md:border-[10px] lg:border-[12px]  border-White bg-White rounded-[2rem] shadow-[-13px_22px_53px_11px_rgba(0,0,0,0.55)]'>
                                <Image
                                    src={uniquetour3}
                                    alt="Our Style Description Img"
                                    className='object-cover w-full rounded-[2rem]'
                                />
                            </div>
                            {/* right bottom */}
                            <div className='flex flex-1 max-w-[297px] max-h-[305px]'>
                                <Image
                                    src={uniquetour2}
                                    alt="Our Style Description Img"
                                    className='object-cover aspect-[6/5] rounded-3xl w-full h-full'
                                />
                            </div>
                        </div>
                    </div>

                </div>

                {/* Tour that are good for Every One */}
                <div className='flex flex-col items-center lg:flex-row-reverse gap-10'>

                    <div className='w-full lg:w-1/2'>
                        <Heading level="lgSubText" className="text-Black font-bold uppercase leading-tight">
                            <span className="text-Secondary">Tours<br /></span>that are good for everyone.
                        </Heading>

                        <div className='flex flex-col gap-4 text-Black pt-[8px] md:pt-[16px] lg:pt-[24px] xl:pt-[32px] 2xl:pt-[40px]'>
                            <Paragraph size="normal" className="text-Black">
                                Our tours are full of people and places we love. And, like anything else that we love, we want to take care of them. We want to make sure the people and places we visit together don’t just survive, but thrive.
                            </Paragraph>

                            <Paragraph size="normal" className="text-Black">
                                That’s why we choose to support local businesses, especially women-owned and minority-owned businesses. We believe a rising tide lifts all boats, which is why we avoid mass tourism and big-bus itineraries, and instead focus on the people that make up the fabric of their local community.
                            </Paragraph>

                        </div>
                    </div>

                    <div className='w-full lg:w-1/2'>
                        <div className="max-w-[614px] grid grid-cols-2 gap-4 lg:min-w-[550px]">
                            {/* Top Full Width Image */}
                            <div className="flex max-w-[614px] max-h-[349px] col-span-2 shadow-[-40px_30px_60px_0px_#00000066] rounded-[2rem] overflow-hidden">
                                <Image
                                    src={goodtour1}
                                    alt="About Image 1"
                                    className="object-cover aspect-[12/7] rounded-[2rem]"
                                />
                            </div>

                            {/* Bottom Left Small Image */}
                            <div className="max-w-[297px] max-h-[185px]">
                                <Image
                                    src={goodtour2}
                                    alt="About Image 2"
                                    className="object-cover aspect-[3/2] rounded-[2rem]"
                                />
                            </div>

                            {/* Bottom Right Floating Image */}
                            <div className="flex max-w-[297px] max-h-[391px] translate-x-1 -mt-[60%] border-[8px] md:border-[10px] lg:border-[12px] border-White bg-White rounded-[2rem] shadow-[-40px_30px_60px_0px_#00000066]">
                                <Image
                                    src={goodtour3}
                                    alt="About Image 3"
                                    className="object-cover aspect-[3/4] rounded-[2rem]"
                                />
                            </div>
                        </div>
                    </div>

                </div>
                
            </div>


            {/* Cookies Cutter and Safety */}
            <div className='container mx-auto flex flex-col lg:flex-row w-full relative'>
                {/* left */}
                <div className='flex w-full lg:w-1/2 relative'>

                    {/* Image */}
                    <Image
                        src={OurStyleCookies}
                        alt='Our Style Cookies'
                        className='w-full'
                    />
                    {/* Gradient */}
                    <div
                        className="absolute inset-0 w-full h-full"
                        style={{
                            background: 'linear-gradient(180deg, rgba(30, 54, 92, 0) 0%, rgba(30, 54, 92, 0) 15.27%, rgba(30, 54, 92, 0.2) 25.06%, rgba(30, 54, 92, 0.85) 61.66%, #1E365C 100%)'
                        }}
                    ></div>

                    <div>
                        <div className=' absolute 
                        bottom-3 left-5 right-5
                        md:bottom-7 md:left-9 md:right-9
                        lg:bottom-10 lg:left-12 lg:right-12'>
                            <Heading level="lgSubText" className="text-White uppercase font-bold mb-[8px] md:mb-[16px] lg:mb-[24px] xl:mb-[32px] 2xl:mb-[40px]">
                                No <span className="text-Secondary">cookie-cutter </span>trips.
                            </Heading>

                            <div className='flex text-White flex-col gap-1 lg:gap-4'>
                                <Paragraph size="xs">
                                    We make a point of handcrafting every trip we offer, which is why we can say with pride that no two tours we offer are the same. Every time we sit down to make an itinerary for a tour, we build it from the ground up. We choose the ideal route, best lodgings, most rewarding activities, tastiest restaurants, and more, that will all lead to the most extraordinary trip possible.
                                </Paragraph>
                                <Paragraph size="xs">
                                    We also allow for flexibility on the spot, so if we see something fantastic happening (ever been to an Indian wedding?) we can stop and join in the fun without worrying that we’ll be “off-schedule.”
                                </Paragraph>
                                <Paragraph size="xs">
                                    It’s for these reasons that we don’t make contracts with hotels, restaurants, and tourist sites like so many other operators. We want to have the freedom to offer the absolute best trip, and we want to make sure it’s not just what you expected, but so much more.
                                </Paragraph>

                            </div>
                        </div>
                    </div>
                    {/* Text Content */}

                </div>
                {/* Right */}
                <div className='flex w-full lg:w-1/2 relative'>

                    {/* Image */}
                    <Image
                        src={OurStyleSafety}
                        alt='Our Style Safety'
                        className='w-full'
                    />
                    {/* Gradient */}
                    <div
                        className="absolute inset-0 w-full h-full"
                        style={{
                            background:
                                'linear-gradient(180deg, rgba(30, 54, 92, 0) 0%, rgba(30, 54, 92, 0) 26.95%, rgba(30, 54, 92, 0.12) 42.24%, rgba(30, 54, 92, 0.85) 66.65%, #1E365C 100%)'
                        }}
                    ></div>
                    <div>
                        <div className='absolute bottom-3 left-5 right-5
                        md:bottom-7 md:left-9 md:right-9
                        lg:bottom-10 lg:left-12 lg:right-12'>
                            <Heading level="lgSubText" className="font-bold text-White uppercase mb-[8px] md:mb-[16px] lg:mb-[24px] xl:mb-[32px] 2xl:mb-[40px]">
                                Safety
                            </Heading>

                            <div className='flex text-White flex-col  gap-1 lg:gap-4'>
                                <Paragraph size="xs" >
                                    Safety is not something we take lightly. When you travel with Wandering Earl Tours, you can be confident that the safety of every traveler, every team member and the local populations is our top priority…always.
                                </Paragraph>

                                <Paragraph size="xs">
                                    Every tour is led by one of our amazing Expert Tour Leaders who is there to ensure your trip runs smoothly and safely. These leaders are with you throughout your experience and are highly skilled in handling all kinds of situations. They also work side by side with our fantastic team of local contacts who offer a level of expertise that ensures any situation can be handled quickly and properly.
                                </Paragraph>

                            </div>
                        </div>
                    </div>
                    {/* Text Content */}

                </div>
            </div>

            <div className='container mx-auto mb-[80px] md:mb-[100px] lg:mb-[120px] xl:mb-[130px] 2xl:mb-[140px]'>
                {/* Get in Touch */}
                <div className='px-[20px] py-[80px] md:py-[90px] lg:py-[100px] xl:py-[110px] 2xl:py-[120px]'>
                    <GetInTouch />
                </div>

                {/* TOURS LARGE */}
                <div className='px-5 md:px-8 lg:px-10 xl:px-15 2xl:px-20 "mb-[32px] md:mb-[48px] lg:mb-[80px] xl:mb-[112px] 2xl:mb-[150px]"
                '>
                    <AllToursLarge title="Tours" />
                </div>
            </div>

        </>
    )
}

export default OurStyles
