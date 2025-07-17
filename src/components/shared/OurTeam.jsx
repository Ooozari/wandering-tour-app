import React from 'react'
import Image from 'next/image'
function OurTeam({ imgUrl, p1, p2, p3, p4, name, position, Direction }) {
    return (
        <>
            <div className={`flex flex-col items-center mb-14 gap-5 md:gap-10 lg:gap-15 ${Direction ? `lg:${Direction}` : ''}`}>
                {/* Default Img */}
                <div className='w-full lg:w-1/2'>
                    <Image
                        src={imgUrl}
                        alt='Team member'
                        className='rounded-3xl'/>
                </div>
                {/* Text Content */}
                <div className='w-full lg:w-1/2 flex flex-col gap-3'>
                    {/* text */}
                    <p className='text-Black'>{p1}</p>
                    <p className='text-Black'>{p2}</p>
                    {p3 && (<p className='text-Black'>{p3}</p>)

                    }
                    {p4 && (<p className='text-Black'>{p4}</p>)
                    }

                    <div className="flex items-center gap-1 mt-2">
                        <div className="flex gap-1">
                            <span className="text-Primary">{name}</span>
                            <span className="text-Grey">|</span>
                            <span className="text-Grey font-medium">{position}</span>
                        </div>
                        <hr className="flex-1 border-t border-lightGrey ml-2" />
                    </div>

                </div>
            </div>
        </>
    )
}

export default OurTeam
