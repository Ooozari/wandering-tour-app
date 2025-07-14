import React from 'react'
import Image from 'next/image'

function HeroSection({ title, paraText, subText, ImgUrl }) {
    return (
        <>
            {/* Hero Section */}
            <div className='flex flex-col gap-5 py-5'>
                {/* Headings */}
                <div className='w-full flex lg:flex-row md:flex-row flex-col justify-between items-center px-6 py-4 gap-3'>
                    <div className='w-full md:w-1/2 '>
                        <h1 className="text-White text-2xl md:text-3xl lg:text-4xl xl:text-6xl font-extrabold">
                            {title}
                        </h1>

                    </div>
                    <div className=' flex flex-col justify-between text-lightGrey w-full md:w-1/2 gap-3 text-sm md:text-md'>
                        <p>{paraText}
                        </p>
                        <p className='italic'>{subText}</p>
                    </div>
                </div>
                {/* Image */}
                <div>
                    <Image
                        src={ImgUrl}
                        alt='Hero Img Private Tours Bannner'
                    />
                </div>
            </div>
        </>
    )
}

export default HeroSection
