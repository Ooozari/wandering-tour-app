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
                <div className='container mx-auto absolute inset-0 z-20 flex flex-col justify-center items-center text-center'>
                    <Heading
                        level="h1Large"
                        className="text-White text-center font-[900] uppercase mb-[12px] md:mb-[16px] lg:mb-[20px] xl:mb-[22px] 2xl:mb-[25px]
"
                    >
                        Unique, Local, Small <span className="text-Secondary">Groups</span>
                    </Heading>
                    <Paragraph
                        size="subText"
                        className="text-White mb-[30px] md:mb-[40px] lg:mb-[48px] xl:mb-[54px] 2xl:mb-[60px]"
                    >
                        Tours that show you something new.
                    </Paragraph>
                    <div className="flex gap-[6px] md:gap-[7px] lg:gap-[8px] xl:gap-[10px] 2xl:gap-[12px]">
                        <Link href="/tours">
                            <Button>
                                <Paragraph size="normal" className="">
                                    Visit 2024 Tours
                                </Paragraph>
                            </Button>
                        </Link>

                        <Link href="/tours">
                            <Button variant="secondary">
                                <Paragraph size="normal" className="">
                                    Visit 2025 Tours
                                </Paragraph>
                            </Button>
                        </Link>
                    </div>

                </div>
            </div >


            <div className='flex flex-col'>

                {/* after hero section */}
                <div>
                    <div className="relative w-full  overflow-visible lg:overflow-hidden bg-Primary px-5 md:px-10 lg:px-15 xl:px-20 2xl:px-25">
                        {/* Gradient Background */}
                        <div className="absolute inset-0 z-0 bg-[linear-gradient(178.06deg,rgba(30,54,92,0.94)_1.84%,rgba(30,54,92,0.85)_22.16%,rgba(30,54,92,0.67)_40.63%,rgba(30,54,92,0.26)_66.16%,rgba(30,54,92,0)_87.56%)]" />
                        {/* Content */}
                        <div className="container mx-auto relative z-10 flex flex-col lg:flex-row items-center justify-between px-1 py-3 lg:px-6 lg:py-25 md:gap-0 gap-5 ">
                            {/* Text Block */}
                            <div className="text-white flex-1 w-full lg:w-1/2">
                                <Heading level="h1" className="mb-[4px] md:mb-[6px] lg:mb-[8px] xl:mb-[10px] 2xl:mb-[12px] font-[900] uppercase">
                                    Sustainable and responsible travel
                                </Heading>
                                <Paragraph size="subText" className="mt-[6px] md:mt-[12px] lg:mt-[18px] xl:mt-[24px] 2xl:mt-[30px]">
                                    We’re fully committed to promoting and offering responsible, respectful and sustainable travel experiences around the world.
                                </Paragraph>
                                <Paragraph size="xs" className="mt-[6px] md:mt-[12px] lg:mt-[18px] xl:mt-[24px] 2xl:mt-[30px] mb-2">
                                    Everything we do is aimed at enriching the lives of the people we work with. We want you to go away from our tours with great memories, new friends, and a real appreciation for the places we visit. But, more than that, we also want to leave those places better than we found them.
                                </Paragraph>
                                <Paragraph size="xs">
                                    We make a point of avoiding mass tourism destinations. Instead, we sustainably support local businesses, communities and the environment everywhere we go. Every aspect of our trips, from accommodation to local guides, activities to meals, and everything in between, are chosen to ensure that your tourism dollar leaves a positive and lasting impact and that our visit leaves a minimal footprint.
                                </Paragraph>
                                <div className='mt-[12px] md:mt-[16px] lg:mt-[12px] xl:mt-[24px] 2xl:mt-[30px]'>
                                    <Button variant='secondary'>
                                        <Paragraph size="normal" className="m-0 p-0">Book a Tour Now</Paragraph></Button>
                                </div>
                            </div>
                            {/* Images Block */}
                            <div className="relative flex w-full lg:w-1/2 gap-5 lg:pb-20">
                                {/* Img 1 */}
                                <div className="relative w-[250px] md:w-[300px] aspect-[7/11] z-10 top-25 -right-[15%]">
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
                <div className='container mx-auto px-[32px] md:px-[48px] lg:px-[64px] xl:px-[80px] 2xl:px-[100px] mt-[40px] md:mt-[32px] lg:-mt-[48px] xl:-mt-[64px] 2xl:-mt-[80px]'>
                    <AllToursLarge year="2024" title="Tours" />
                </div>

                {/* Tour Group */}
                <div className='container mx-auto px-[32px] md:px-[48px] lg:px-[64px] xl:px-[80px] 2xl:px-[100px] flex flex-col mt-[120px] md:mt-[140px] lg:mt-[160px] xl:mt-[180px] 2xl:mt-[197px]
                text-center'>
                    <div className=''>
                        <Heading level="h1" className="text-Black uppercase leading-[100%] font-[900]">
                            Our trips are not standard
                        </Heading>

                        <Heading level="h1" className="text-Secondary uppercase leading-[100%] font-[900]">
                            group tours
                        </Heading>
                    </div>
                    <Paragraph size="subText" className="text-Black mt-[4px] md:mt-[8px] lg:mt-[16px] xl:mt-[20px] 2xl:mt-[24px] mb-[40px] md:mb-[50px] lg:mb-[60px] xl:mb-[70px] 2xl:mb-[80px]
                    ">
                        Experience culture, wonder and fun like never before.
                    </Paragraph>

                    {/* Tour Group Card */}
                    <div className='container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
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
                <div >
                    {/* Gradient continuation before hero image */}
                    <div
                        className="w-full h-[100px] md:h-[200px] -z-40"
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
                            <Heading level="h1" className="text-center text-white px-4 mb-[30px] md:mb-[45px] lg:mb-[60px] xl:mb-[70px] 2xl:mb-[80px] font-[900] uppercase">
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
                <div className='container mx-auto mt-[24px] md:mt-[32px] lg:-mt-[48px] xl:-mt-[64px] 2xl:-mt-[80px] px-[32px] md:px-[48px] lg:px-[64px] xl:px-[80px] 2xl:px-[100px]'>
                    <AllToursLarge year="2025" title="Tours" />
                </div>



                {/* Testimonials */}
                <div className='container mx-auto  px-[32px] md:px-[48px] lg:px-[64px] xl:px-[80px] 2xl:px-[100px] mt-[80px] md:mt-[100px] lg:mt-[110px] xl:mt-[125px] 2xl:mt-[140px]'>
                    <Reviews />
                </div>

                {/* Get in touch */}
                <div className='container mx-auto px-4 md:px-8 lg:px-10 xl:px-12 2xl:px-14 py-[40px] md:py-[70px] lg:py-[100px] xl:py-[120px] 2xl:py-[140px]' >
                    <GetInTouch />
                </div>


            </div>
        </>
    );
}

export default LandingPage;