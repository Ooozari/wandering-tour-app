import React from 'react'
import { pastTourImages } from '@/assets/pastTours';
import Image from 'next/image'
function Gallery() {
    return (
        <>
          {/* Gallery images */}
                        <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 '>
        
                            {pastTourImages.map((item, index) => (
                                <Image
                                    key={index}
                                    src={item.imgSrc}
                                    alt={item.imgAlt}
                                    className="rounded-lg"
                                />
                            ))}
                        </div>
        </>
    )
}

export default Gallery
