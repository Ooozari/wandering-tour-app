import React from 'react'
import Image from 'next/image'
// Images
import {
    heroImgOurStyle,
    OurSyleDes,
    OurStyleTourThatAreGood,
    OurStyleCookies,
    OurStyleSafety,
} from '@/assets';

import { HeroSection, GetInTouch, AllToursLarge } from '@/components/shared'

function OurStyles() {
    const HeroSectionDetails = {
        title: 'Our style',
        paraText: 'Incredible, small-group tours that are anything but typical. Get to the heart of your destination. Interact with local people and their communities. Learn about their culture. Visit destinations that a regular group tour can’t visit.',
        subText: 'Travel with us, as a friend.',
        ImgUrl: heroImgOurStyle,
    }
    return (
        <>
            <div className='flex flex-col gap-10 md:gap-20 lg:gap-25'>
                {/* Hero Section */}
                <div className='bg-Primary px-5'>
                    <HeroSection
                        title={HeroSectionDetails.title}
                        paraText={HeroSectionDetails.paraText}
                        subText={HeroSectionDetails.subText}
                        ImgUrl={HeroSectionDetails.ImgUrl}
                    />
                </div>

                {/* After Hero Section */}
                <div className='px-5 md:px-10 lg:px-15 xl:px-25 flex flex-col items-center lg:flex-row gap-10'>
                    <div className='w-full lg:w-1/2'>
                        <h3 className='text-Black font-bold text-2xl md:text-3xl lg:text-4xl uppercase mb-4'><span className='text-Secondary'>Unique tours<br /></span>you can’t find anywhere else.</h3>
                        <div className='flex flex-col gap-4 text-Black text-sm lg:text-md'>
                            <p>Through Wandering Earl Tours, we want to you to have authentic experiences and meet the people who live their everyday lives in the places you’re visiting. We want you to really understand the destinations you’ve explored with us, and never feel like you just “passed through.”</p>
                            <p>Our tours are built with the help of an extensive network of local contacts and friends in each country, contacts with whom we’ve formed wonderful bonds with over many years. We work together to ensure that our itineraries are full of genuinely rewarding activities away from the tourist crowds instead of a collection of quick photo stops.</p>
                            <p>
                                And, most of all, we want you to feel like you took the trip you wanted to take.
                            </p>
                        </div>
                    </div>

                    <div className='w-full lg:w-1/2'>
                        <div
                        >
                            <Image
                                src={OurSyleDes}
                                alt="Our Style Description Img"

                            />
                        </div>
                    </div>

                </div>

                {/* Tour that are good for Every One */}
                <div className='px-5 md:px-10 lg:px-15 xl:px-25 flex flex-col items-center lg:flex-row-reverse gap-10'>
                    <div className='w-full lg:w-1/2'>
                        <h3 className='text-Black font-bold text-2xl md:text-3xl lg:text-4xl uppercase mb-4'><span className='text-Secondary'>Tours<br /></span>that are good for everyone.</h3>
                        <div className='flex flex-col gap-4 text-Black text-sm lg:text-md'>
                            <p>Our tours are full of people and places we love. And, like anything else that we love, we want to take care of them. We want to make sure the people and places we visit together don’t just survive, but thrive.</p>
                            <p>That’s why we choose to support local businesses, especially women-owned and minority-owned businesses. We believe a rising tide lifts all boats, which is why we avoid mass tourism and big-bus itineraries, and instead focus on the people that make up the fabric of their local community.</p>
                        </div>
                    </div>

                    <div className='w-full lg:w-1/2'>
                        <div
                        >
                            <Image
                                src={OurStyleTourThatAreGood}
                                alt="Our Style Tour That Are Good Img"

                            />
                        </div>
                    </div>

                </div>

                {/* Cookies Cutter and Safety */}
                <div className='flex flex-col lg:flex-row w-full relative'>
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
                        {/* Text Content */}
                        <div className=' absolute 
                        bottom-3 left-5 right-5
                        md:bottom-7 md:left-9 md:right-9
                        lg:bottom-10 lg:left-12 lg:right-12'>
                            <h3 className='text-White font-bold text-2xl md:text-3xl lg:text-4xl uppercase mb-4'>No <span className='text-Secondary'>cookie-cutter </span>trips.</h3>
                            <div className='flex text-White flex-col gap-4 text-xs md:text-sm lg:text-md'>
                                <p>We make a point of handcrafting every trip we offer, which is why we can say with pride that no two tours we offer are the same. Every time we sit down to make an itinerary for a tour, we build it from the ground up. We choose the ideal route, best lodgings, most rewarding activities, tastiest restaurants, and more, that will all lead to the most extraordinary trip possible.</p>
                                <p>We also allow for flexibility on the spot, so if we see something fantastic happening (ever been to an Indian wedding?) we can stop and join in the fun without worrying that we’ll be “off-schedule.”</p>
                                <p>It’s for these reasons that we don’t make contracts with hotels, restaurants, and tourist sites like so many other operators. We want to have the freedom to offer the absolute best trip, and we want to make sure it’s not just what you expected, but so much more.</p>
                            </div>
                        </div>
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
                        {/* Text Content */}
                        <div className='absolute bottom-3 left-5 right-5
                        md:bottom-7 md:left-9 md:right-9
                        lg:bottom-10 lg:left-12 lg:right-12'>
                            <h3 className='text-White font-bold text-2xl md:text-3xl lg:text-4xl uppercase mb-4'>Safety</h3>
                            <div className='flex text-White flex-col gap-4 text-xs md:text-sm lg:text-md'>
                                <p>Safety is not something we take lightly. When you travel with Wandering Earl Tours, you can be confident that the safety of every traveler, every team member and the local populations is our top priority…always.</p>
                                <p>Every tour is led by one of our amazing Expert Tour Leaders who is there to ensure your trip runs smoothly and safely. These leaders are with you throughout your experience and are highly skilled in handling all kinds of situations. They also work side by side with our fantastic team of local contacts who offer a level of expertise that ensures any situation can be handled quickly and properly.</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Get in Touch */}
                <div className='p-5' >
                    <GetInTouch />
                </div>

                {/* TOURS LARGE */}
                <div className='px-5 md:px-10 lg:px-15 xl:px-25 mb-3'>
                    <AllToursLarge />
                </div>
            </div>
        </>
    )
}

export default OurStyles
