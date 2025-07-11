import React from 'react'
import Image from 'next/image'
import heroImgPrivateTours from '@/assets/heroImgPrivateTours.png'

function PrivateTours() {
    return (
        <>
            {/* Hero Section */}
            <div className='bg-Primary gap-5 px-5 py-5'>
                {/* Headings */}
                <div className='w-full flex lg:flex-row md:flex-row flex-col justify-between px-6 py-4 gap-3'>
                    <div className='w-full md:w-1/2 '>
                        <h1 className='text-White text-xl sm:text-xl md:text-2xl lg:text-3xl xl:text-6xl font-extrabold'>
                            Private Tours by Wandering Earl Tours
                        </h1>
                    </div>
                    <div className=' flex flex-col justify-between text-lightGrey w-full md:w-1/2 gap-3 '>
                        <p>Imagine an amazing private tour specifically crafted for your group or organization. We’ll take care of every aspect of the trip, and will even provide one of our Expert Tour Leaders.
                        </p>
                        <p className='italic'>All you need to do is enjoy.</p>
                    </div>
                </div>
                {/* Image */}
                <div>
                    <Image
                        src={heroImgPrivateTours}
                        alt='Hero Img Private Tours Bannner'
                    />
                </div>
            </div>
        </>
    )
}

export default PrivateTours

