'use client';
import React from 'react';
import Image from 'next/image';
import { landingPageHeroSection, HomePageMaps, afterheroImg2, afterheroImg1, Sub2, sub102, sub101 } from '@/assets';
import { Button } from '@/components/ui/Button';
import { AllToursLarge, GroupTourCard, Reviews, GetInTouch } from '@/components/shared'
import { TourGroup1, TourGroup2, TourGroup3, TourGroup4, TourGroup5, TourGroup6, Plane, DashLine } from '@/svgs/Icons'

function LandingPage() {

    const tourGroup = [
        {
            svg: <TourGroup1 />,
            title: "Small Groups",
            text: "12 people or fewer, so you can go where big groups can’t. Forget about big buses, that’s not our style.",
        },
        {
            svg: <TourGroup2 />,
            title: "Unique",
            text: "No two tours are alike. Every itinerary is carefully crafted to offer the most rewarding experience.",
        },
        {
            svg: <TourGroup3 />,
            title: "Local",
            text: "100% local contacts. Direct cultural connections. We’ll immerse you in local culture, everywhere you go.",
        },
        {
            svg: <TourGroup4 />,
            title: "Personal",
            text: "Be treated like a friend, not a customer. Every message you receive comes from a real person. You can even call us, too.",
        },
        {
            svg: <TourGroup5 />,
            title: "Comfortable",
            text: "High quality transportation. Carefully chosen accommodation. Incredible Expert Tour Leaders on every single trip.",
        },
        {
            svg: <TourGroup6 />,
            title: "Educational",
            text: "Itineraries packed with genuine local experiences, providing a fascinating education every step of the way.",
        },
    ]

    return (
        <>

            {/* hero section */}
            < div className='relative w-full h-screen' >
                <Image
                    src={landingPageHeroSection}
                    alt='Landing Page - Hero Section'
                    className='w-full h-full object-cover'
                    priority
                />
                <div className="absolute inset-0 z-0 bg-[linear-gradient(180deg,rgba(30,54,92,0)_0%,rgba(30,54,92,0.3)_52.5%,#1E365C_100%)]" />
                <div className='absolute inset-0 z-20 flex flex-col justify-center items-center text-center px-4 gap-4'>
                    <h1 className="text-2xl text-White text-center sm:text-3xl md:text-6xl font-extrabold uppercase">Unique, Local, Small <span className='text-Secondary'>Groups</span></h1>
                    <p className="text-md  md:text-lg lg:text-xl text-White ">Tours that show you something new.</p>
                    <div className="flex gap-4">
                        <Button>Visit 2024 Tours</Button>
                        <Button variant='secondary'>Visit 2025 Tours</Button>
                    </div>

                </div>
            </div >
            <div className='container mx-auto flex flex-col gap-10 md:gap-15 lg:gap-20'>
                {/* after hero section */}
                <div>
                    <div className="relative w-full bg-Primary overflow-hidden p-15">
                        {/* Gradient Background */}
                        <div className="absolute inset-0 z-0 bg-[linear-gradient(178.06deg,rgba(30,54,92,0.94)_1.84%,rgba(30,54,92,0.85)_22.16%,rgba(30,54,92,0.67)_40.63%,rgba(30,54,92,0.26)_66.16%,rgba(30,54,92,0)_87.56%)]" />

                        {/* Content */}
                        <div className="relative z-10 flex flex-col md:flex-row items-center justify-between px-1 py-3 lg:px-6 lg:py-10">
                            {/* Text Block */}
                            <div className="text-white flex-1 w-full lg:w-1/2 ">
                                <h2 className="text-xl md:text-3xl lg:text-5xl  font-[900] mb-4">Sustainable and responsible travel</h2>
                                <p className="mb-2 text-sm md:text-md lg:text-lg">
                                    We’re fully committed to promoting and offering responsible, respectful and sustainable travel experiences around the world.
                                </p>
                                <p className="mb-2 text-xs md:text-sm lg:text-md">
                                    Everything we do is aimed at enriching the lives of the people we work with. We want you to go away from our tours with great memories, new friends, and a real appreciation for the places we visit. But, more than that, we also want to leave those places better than we found them.
                                </p>
                                <p className="mb-4 text-xs md:text-sm lg:text-md">
                                    We make a point of avoiding mass tourism destinations. Instead, we sustainably support local businesses, communities and the environment everywhere we go. Every aspect of our trips, from accommodation to local guides, activities to meals, and everything in between, are chosen to ensure that your tourism dollar leaves a positive and lasting impact and that our visit leaves a minimal footprint.
                                </p>
                                <div>
                                    <Button variant='secondary'>Book a Tour Now</Button>
                                </div>
                            </div>



                            {/* Images Block */}
                            <div className="relative flex flex-row md:flex-row items-center justify-center gap-8 w-full lg:w-1/2">
                                {/* Img 1 */}
                                <div className="relative top-20 lg:-right-40 z-10">
                                    <Image
                                        src={afterheroImg1}
                                        alt="Image 1"
                                        className="rounded-2xl h-auto"
                                    />

                                    {/* Overlapping DashLine & Plane */}
                                    <div className="absolute top-5 left-2 -translate-x-1/3 -translate-y-1/3 z-20">
                                        <div className="relative">
                                            <DashLine />
                                            <div className="absolute -top-9 left-[90%]">
                                                <Plane />
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Img 2 */}
                                <div className="relative z-10">
                                    <Image
                                        src={afterheroImg2}
                                        alt="Image 2"
                                        className="rounded-2xl h-auto"
                                    />

                                    {/* Overlapping Sub Image */}
                                    <div className="absolute top-5 left-10 -translate-x-1/3 -translate-y-1/3 z-20">
                                        <Image
                                            src={Sub2}
                                            alt="Overlay Image"
                                            className="w-[100px] h-auto"
                                        />
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>

                    {/* Gradient continuation after hero image */}
                    <div
                        className="w-full h-[100px] md:h-[200px] " // Adjust height as needed
                        style={{
                            background:
                                "linear-gradient(0deg, rgba(30, 54, 92, 0) 0%, #1E365C 100%)",
                        }}
                    ></div>
                </div>




                {/* 2024 Tour */}
                <div className='px-5 md:px-10 lg:px-15 xl:px-25 mb-3'>
                    <AllToursLarge year="2024" title="Tours" />
                </div>

                {/* Tour Group */}
                <div className='flex flex-col gap-5 md:gap-10 lg:gap-15'>
                    <div className='text-center'>
                        <div className='mb-4'>
                            <h1 className='text-Black text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl uppercase font-[900] leading-[100%]'>Our trips are not standard</h1>
                            <h1 className='text-Secondary text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl uppercase font-[900] leading-[100%]'>group tours</h1>
                        </div>
                        <p className='text-Black text-md lg:text-lg xl:text-xl '>Experience culture, wonder and fun like never before.</p>
                    </div>

                    {/* Tour Group Card */}
                    <div className='px-5 md:px-10 lg:px-15 xl:px-25 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
                        {
                            tourGroup.map((group, index) => (
                                <GroupTourCard
                                    key={index}
                                    iconSvg={group.svg}
                                    title={group.title}
                                    text={group.text}
                                />
                            ))
                        }

                    </div>
                </div>

                {/* Countries Section */}
                <div>
                    {/* Gradient continuation before hero image */}
                    <div
                        className="w-full h-[100px] md:h-[200px] " // Adjust height as needed
                        style={{
                            background:
                                "linear-gradient(180deg, rgba(30, 54, 92, 0) 0%, #1E365C 100%)",
                        }}
                    ></div>

                    <div className="relative w-full flex flex-col items-center justify-center bg-[#1E365C] py-16">
                        {/* Gradient Background */}
                        <div className="absolute inset-0 -z-10" style={{
                            background: "linear-gradient(180deg, #1E365C 0%, #1E365C 84.5%, rgba(30, 54, 92, 0.94) 100%)",
                            opacity: 0.95
                        }} />

                        {/* Content */}
                        <h1 className="text-xl md:text-2xl lg:text-3xl font-extrabold uppercase text-center text-white px-4 mb-10">
                            Countries where we are offering tours
                            <span className="block text-Secondary">each year</span>

                        </h1>

                        {/* Image */}
                        <div className="w-full max-w-5xl px-4">
                            <Image
                                src={HomePageMaps}
                                alt="Landing Page - Countries"
                                className="object-cover w-full h-auto rounded-xl"
                            />
                        </div>
                    </div>

                    {/* Gradient continuation after hero image */}
                    <div
                        className="w-full h-[100px] md:h-[200px] " // Adjust height as needed
                        style={{
                            background:
                                "linear-gradient(1800deg, rgba(30, 54, 92, 0) 0%, #1E365C 100%)",
                        }}
                    ></div>

                </div>


                {/* 2025 Tour */}
                <div className='px-5 md:px-10 lg:px-15 xl:px-25 mb-3'>
                    <AllToursLarge year="2025" title="Tours" />
                </div>



                {/* Testimonials */}
                <div className='px-5 md:px-15 lg:px-25'>
                    <Reviews />
                </div>

                {/* Get in touch */}
                <div className='px-5 pb-20 ' >
                    <GetInTouch />
                </div>


            </div>
        </>
    );
}

export default LandingPage;


//  <div className='relative h-100px'>
//                     {/* Gradient Background */}
//                     <div className="absolute inset-0 z-0 bg-[linear-gradient(178.06deg,rgba(30,54,92,0.94)_1.84%,rgba(30,54,92,0.85)_22.16%,rgba(30,54,92,0.67)_40.63%,rgba(30,54,92,0.26)_66.16%,rgba(30,54,92,0)_87.56%)]" />

//                 </div> 