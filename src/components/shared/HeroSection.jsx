import React from 'react'
import Image from 'next/image'
import { Heading, Paragraph } from "@/components/ui/typography";
function HeroSection({ title, paraText, subText, ImgUrl }) {
    return (
        <>
            {/* Hero Section */}
            <div className='flex flex-col gap-5 py-5'>
                {/* Headings */}
                <div className='w-full flex lg:flex-row md:flex-row flex-col justify-between items-center px-6 py-4 gap-3'>
                    <div className='w-full md:w-1/2 '>
                        <Heading level="h2" className="text-White font-[900] uppercase">
                            {title}
                        </Heading>


                    </div>
                    <div className=' flex flex-col justify-between text-lightGrey w-full md:w-1/2 gap-3 text-sm md:text-md'>
                        <Paragraph>
                            {paraText}
                        </Paragraph>

                        <Paragraph className='italic'>
                            {subText}
                        </Paragraph>

                    </div>
                </div>
                {/* Image */}
                <div className='mx-auto'>
                    <Image
                        src={ImgUrl}
                        alt='Hero Img Private Tours Bannner '
                    />
                </div>
            </div>
        </>
    )
}

export default HeroSection
