import React from 'react'
import PastTourHeroSection from '@/assets/PastTour-HeroSection.png'
import Image from 'next/image'
import pastTourBanner from '@/assets/pastTourBanner.png'
import { pastTourImages } from '@/assets/pastTours';
import Reviews from '@/components/shared/Reviews'
function PastTours() {

    return (
        <>
            {/* HeroSection */}
            <div className="relative w-full overflow-hidden">
                {/* Background image */}
                <Image
                    src={PastTourHeroSection}
                    alt="Contact page banner"
                    className="object-cover"
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
                    <h1 className="text-white text-2xl sm:text-3xl md:text-5xl font-bold">PAST TOURS</h1>
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

            {/* Past Tour images */}
            <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 px-4'>

                {pastTourImages.map((item, index) => (
                    <Image
                        key={index}
                        src={item.imgSrc}
                        alt={item.imgAlt}
                        className="rounded-lg"
                    />
                ))}
            </div>

            <div className='gird'>
                <Image
                    src={pastTourBanner}
                    alt='past Tour Banner Large'
                />
            </div>

            <div className='mt-4'>
                <Reviews />
            </div>
        </>
    )
}

export default PastTours
