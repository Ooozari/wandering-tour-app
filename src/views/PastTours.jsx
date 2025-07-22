import React from 'react'
import PastTourHeroSection from '@/assets/PastTour-HeroSection.png'
import Image from 'next/image'
import pastTourBanner from '@/assets/pastTourBanner.png'
import { pastTourImages } from '@/assets/pastTours';
import Reviews from '@/components/shared/Reviews'
import ContactForm from '@/components/shared/ContactForm'
import { Button } from '@/components/ui/Button'
import { Heading, Paragraph } from "@/components/ui/typography";
function PastTours() {

    return (
        <>
            {/* HeroSection */}
            <div className="relative w-full overflow-hidden">
                {/* Background image */}
                <Image
                    src={PastTourHeroSection}
                    alt="Contact page banner"
                    className="object-cover w-full"
                    priority
                />
                <div
                    className="absolute inset-0"
                    style={{
                        background:
                            "linear-gradient(180deg, rgba(30, 54, 92, 0) 0%, #1E365C 100%)",
                    }}
                ></div>

                {/* Centered heading */}
                <div className="absolute inset-0 flex items-center justify-center">
                    <Heading level="h1Large" className="text-white font-[900]">
                        PAST TOURS
                    </Heading>

                </div>
            </div>

            {/* Gradient continuation after hero image */}
            <div
                className="w-full h-[100px] md:h-[150px] 2xl:[180px]" // Adjust height as needed
                style={{
                    background:
                        "linear-gradient(0deg, rgba(30, 54, 92, 0) 0%, #1E365C 100%)",
                }}
            ></div>

            <div className='container mx-auto px-4 py-15'>
                {/* Past Tour images */}
                <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 px-4 gap-3">
                    {pastTourImages.map((item, index) => (
                        <div
                            key={index}
                            className="relative  overflow-hidden rounded-2xl"
                        >
                            <Image
                                src={item.imgSrc}
                                alt={item.imgAlt}
                                width={573}
                                height={374}
                                className="object-cover rounded-2xl w-full h-full"
                            />
                        </div>
                    ))}
                </div>
                
                <div className='gird mt-3 pb-3'>
                    <div className='h-[150px] md:h-[230px] lg:h-[374px]'>
                    <Image
                        src={pastTourBanner}
                        height={374}
                        alt='past Tour Banner Large'
                        className='object-cover rounded-2xl w-full h-full'
                    />
                    </div>
                </div>

                <div className="relative w-full mt-4 ">
                    {/* Review Section */}
                    <div className='px-5 md:px-10 lg:px-20'>
                        <Reviews />
                    </div>

                </div>
            </div>

            <div className='bg-Primary'>
                <div className='container mx-auto px-4'>
                    {/* Heading */}
                    <div>
                        <Heading
                            level="h1"
                            className="text-white font-[900] px-5 md:px-10 lg:px-20 text-center pb-[16px] md:pb-[32px] lg:pb-[48px] xl:pb-[64px] 2xl:pb-[80px] pt-[24px] md:pt-[48px] lg:pt-[72px] xl:pt-[96px] 2xl:pt-[120px]"
                        >
                            IF YOU HAVE ANY QUESTIONS, SIMPLY GET IN TOUCH. WE’RE HERE TO HELP AND WE ALWAYS REPLY QUICKLY.
                        </Heading>

                    </div>

                    {/* Form */}
                    <div className='text-White'>
                        <ContactForm inputBorder='border-White/24' labelText='text-White' />
                    </div>
                    {/* Submit Button */}
                    <div className='text-center pb-[24px] md:pb-[48px] lg:pb-[72px] xl:pb-[96px] 2xl:pb-[120px] pt-[16px] md:pt-[32px] lg:pt-[48px] xl:pt-[64px] 2xl:pt-[80px]'>
                        <Button variant='secondary' size='lg'>
                            <Paragraph size="normal" className="font-semibold">
                                Submit
                            </Paragraph>
                        </Button>

                    </div>
                </div>
            </div>
        </>
    )
}

export default PastTours
