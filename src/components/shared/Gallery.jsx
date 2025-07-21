import React from 'react'
import { pastTourImages } from '@/assets/pastTours';
import Image from 'next/image'
function Gallery() {
    return (
        <>
            {/* Gallery images */}
            <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {pastTourImages.map((item, index) => (
                    <Image
                        key={index}
                        src={item.imgSrc}
                        alt={item.imgAlt}
                        width={338}
                        height={280}
                        className="object-cover rounded-2xl shadow-2xl w-full h-full"
                    />
                ))}
            </div>

        </>
    )
}

export default Gallery
