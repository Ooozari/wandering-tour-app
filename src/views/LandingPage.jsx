'use client';
import React from 'react';
import Image from 'next/image';
import Link from "next/link";
import { landingPageHeroSection, HomePageMaps, afterheroImg2, afterheroImg1, Sub2, sub102, sub101 } from '@/assets';
import { Button } from '@/components/ui/Button';
import { AllToursLarge, GroupTourCard, Reviews, GetInTouch } from '@/components/shared'
import { TourGroup1, TourGroup2, TourGroup3, TourGroup4, TourGroup5, TourGroup6, Plane, DashLine } from '@/svgs/Icons'
import { Heading, Paragraph } from "@/components/ui/typography";

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
                <div className='container mx-auto absolute inset-0 z-20 flex flex-col justify-center items-center text-center px-4 gap-4'>
                    <Heading
                        level="h1"
                        className="text-White text-center font-[900] uppercase"
                    >
                        Unique, Local, Small <span className="text-Secondary">Groups</span>
                    </Heading>
                    <Paragraph
                        size="subText"
                        className="text-White"
                    >
                        Tours that show you something new.
                    </Paragraph>
                    <div className="flex gap-4 my-5">
                        <Link href="/tours">
                            <Button>
                                <Paragraph size="normal" className="m-0 p-0">
                                    Visit 2024 Tours
                                </Paragraph>
                            </Button>
                        </Link>

                        <Link href="/tours">
                            <Button variant="secondary">
                                <Paragraph size="normal" className="m-0 p-0">
                                    Visit 2025 Tours
                                </Paragraph>
                            </Button>
                        </Link>
                    </div>

                </div>
            </div >


            <div className='flex flex-col gap-10 md:gap-15 lg:gap-20 xl:gap-25 2xl:gap-30'>
                {/* after hero section */}
                <div>
                    <div className="relative w-full bg-Primary overflow-visible lg:overflow-hidden p-5 lg:p-15">
                        {/* Gradient Background */}
                        <div className="absolute inset-0 z-0 bg-[linear-gradient(178.06deg,rgba(30,54,92,0.94)_1.84%,rgba(30,54,92,0.85)_22.16%,rgba(30,54,92,0.67)_40.63%,rgba(30,54,92,0.26)_66.16%,rgba(30,54,92,0)_87.56%)]" />

                        {/* Content */}
                        <div className="container mx-auto relative z-10 flex flex-col lg:flex-row items-center justify-between px-1 py-3 lg:px-6 lg:py-10 md:gap-0 gap-5">
                            {/* Text Block */}
                            <div className="text-white flex-1 w-full lg:w-1/2 ">

                                <Heading level="h1" className="mb-4 font-extrabold uppercase">
                                    Sustainable and responsible travel
                                </Heading>

                                <Paragraph size="normal" className="mb-2">
                                    We’re fully committed to promoting and offering responsible, respectful and sustainable travel experiences around the world.
                                </Paragraph>
                                <Paragraph size="sm" className="mb-2">
                                    Everything we do is aimed at enriching the lives of the people we work with. We want you to go away from our tours with great memories, new friends, and a real appreciation for the places we visit. But, more than that, we also want to leave those places better than we found them.
                                </Paragraph>

                                <Paragraph size="sm" className="mb-4">
                                    We make a point of avoiding mass tourism destinations. Instead, we sustainably support local businesses, communities and the environment everywhere we go. Every aspect of our trips, from accommodation to local guides, activities to meals, and everything in between, are chosen to ensure that your tourism dollar leaves a positive and lasting impact and that our visit leaves a minimal footprint.
                                </Paragraph>
                                <div>
                                    <Button variant='secondary'>
                                        <Paragraph size="normal" className="m-0 p-0">Book a Tour Now</Paragraph></Button>
                                </div>
                            </div>
                            {/* Images Block */}
                            <div className="relative flex w-full lg:w-1/2 gap-5">
                                {/* Img 1 */}
                                <div className="relative w-[250px] md:w-[300px] aspect-[7/11] z-10 top-30  -right-[15%]">
                                    <Image
                                        src={afterheroImg1}
                                        alt="Image 1"
                                        className="object-cover rounded-3xl shadow-2xl w-full h-full"
                                    />
                                    <div className="absolute top-0 left-0 -translate-x-1/3 -translate-y-1/3 z-20">
                                        <div className="relative">
                                            <DashLine />
                                            <div className="absolute -top-8 left-[90%]">
                                                <Plane />
                                            </div>
                                        </div>
                                    </div>
                                </div>


                                {/* Img 2 */}
                                <div className="relative w-[250px] md:w-[300px] aspect-[7/11] z-10">
                                    <Image
                                        src={afterheroImg2}
                                        alt="Image 2"
                                        className="object-cover rounded-3xl shadow-2xl w-full h-full"
                                    />
                                    <div className="absolute top-0 left-0 -translate-x-1/3 -translate-y-1/3 z-20">
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
                <div className='container mx-auto px-5 md:px-10 lg:px-15 xl:px-25 mb-3'>
                    <AllToursLarge year="2024" title="Tours" />
                </div>

                {/* Tour Group */}
                <div className='container mx-auto flex flex-col gap-5 md:gap-10 lg:gap-15'>
                    <div className='text-center'>
                        <div className='mb-4'>
                            <Heading level="h1" className="text-Black uppercase leading-[100%] font-extrabold">
                                Our trips are not standard
                            </Heading>

                            <Heading level="h1" className="text-Secondary uppercase leading-[100%] font-extrabold">
                                group tours
                            </Heading>
                        </div>
                        <Paragraph size="subText" className="text-Black">
                            Experience culture, wonder and fun like never before.
                        </Paragraph>

                    </div>

                    {/* Tour Group Card */}
                    <div className='container mx-auto px-5 md:px-10 lg:px-15 xl:px-25 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
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

                        <div className='container mx-auto'>
                            {/* Content */}
                            <Heading level="h1" className="text-center text-white px-4 mb-10 font-extrabold">
                                Countries where we are offering tours
                                <span className="block text-Secondary">each year</span>
                            </Heading>


                            {/* Image */}
                            <div className="w-full mx-auto max-w-5xl px-4">
                                <Image
                                    src={HomePageMaps}
                                    alt="Landing Page - Countries"
                                    className="object-cover w-full h-auto rounded-xl"
                                />
                            </div>
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
                <div className='container mx-auto  px-5 md:px-10 lg:px-15 xl:px-25 mb-3'>
                    <AllToursLarge year="2025" title="Tours" />
                </div>



                {/* Testimonials */}
                <div className='container mx-auto  px-5 md:px-15 lg:px-25'>
                    <Reviews />
                </div>

                {/* Get in touch */}
                <div className='container mx-auto px-5 pb-20 ' >
                    <GetInTouch />
                </div>


            </div>
        </>
    );
}

export default LandingPage;