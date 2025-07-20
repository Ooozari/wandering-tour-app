import React from 'react'
import Image from 'next/image'
import { Heading, Paragraph } from "@/components/ui/typography";
function OurTeam({ imgUrl, p1, p2, p3, p4, name, position, Direction }) {
    return (
        <>
            <div className={`flex flex-col items-center mb-14 gap-5 md:gap-10 lg:gap-15 ${Direction ? `lg:${Direction}` : ''}`}>
                {/* Default Img */}
                <div className='w-full lg:w-1/2'>
                    <Image
                        src={imgUrl}
                        alt='Team member'
                        className='rounded-3xl' />
                </div>
                {/* Text Content */}
                <div className='w-full lg:w-1/2 flex flex-col gap-3'>
                    {/* text */}
                    <Paragraph size="sm" className="text-Black">{p1}</Paragraph>
                    <Paragraph size="sm" className="text-Black">{p2}</Paragraph>
                    {p3 && <Paragraph size="sm" className="text-Black">{p3}</Paragraph>}
                    {p4 && <Paragraph size="sm" className="text-Black">{p4}</Paragraph>}


                    <div className="flex items-center gap-1 mt-2">
                        <Paragraph size="normal" className="flex gap-1">
                            <span className="text-Primary">{name}</span>
                            <span className="text-Grey">|</span>
                            <span className="text-Grey font-medium">{position}</span>
                        </Paragraph>

                        <hr className="flex-1 border-t border-lightGrey ml-2" />
                    </div>

                </div>
            </div>
        </>
    )
}

export default OurTeam
