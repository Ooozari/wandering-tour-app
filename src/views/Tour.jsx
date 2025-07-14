import { TourCardSmall } from '@/components'
import React from 'react'
import Image from 'next/image'

function Tour() {

    const Year2024 = {

    }
    return (
        <>
            <div>
                {/* Hero Section */}
                <div>
                    <Image />
                </div>

                {/* Past Tour */}
                <div>
                    <div>
                        <h1><span className='text-Secondary'>2024</span>Year</h1>
                    </div>
                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4'>
                        {Year2024.map(() => (
                            <TourCardSmall />
                        ))}
                    </div>

                </div>
            </div>
        </>
    )
}

export default Tour
