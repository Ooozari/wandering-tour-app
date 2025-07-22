import React from 'react'
import Image from 'next/image'
import { Heading, Paragraph } from "@/components/ui/typography";
function OurTeam({ imgUrl, p1, p2, p3, p4, name, position, Direction }) {
    return (
        <>
            <div className={`flex flex-col items-center justify-between mb-[16px] md:mb-[40px] lg:mb-[60px] xl:mb-[80px] 2xl:mb-[100px] gap-[16px] md:gap-[40px] lg:gap-[64px] xl:gap-[80px] 2xl:gap-[120px] ${Direction ? `lg:${Direction}` : ''}`}>
                {/* Default Img */}
                <div className='flex'>
                    <div className='w-[350px] h-[350px] sm:w-[400px] sm:h-[400px] md:w-[450px] md:h-[450px] lg:w-[470px] lg:h-[470px] xl:w-[500px] xl:h-[500px] 2xl:w-[622px] 2xl:h-[622px]'>
                        <Image
                            src={imgUrl}
                            alt='Team member'
                            className='w-full h-full object-cover rounded-3xl'
                        />
                    </div>
                </div>

                {/* Text Content */}
                <div className='flex flex-col'>

                    {/* Paragraph */}
                    <div className='flex flex-col gap-[8px] md:gap-[16px] lg:gap-[24px] xl:gap-[28px] 2xl:gap-[32px]'>
                        <Paragraph size="normal" className="text-Black">{p1}</Paragraph>
                        <Paragraph size="normal" className="text-Black">{p2}</Paragraph>
                        {p3 && <Paragraph size="normal" className="text-Black">{p3}</Paragraph>}
                        {p4 && <Paragraph size="normal" className="text-Black">{p4}</Paragraph>}
                    </div>

                    <div className="flex items-center gap-1 mt-[8px] md:mt-[16px] lg:mt-[24px] xl:mt-[32px] 2xl:mt-[48px]">
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
