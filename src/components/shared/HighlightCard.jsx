import React from 'react'
import Image from 'next/image'
import { Heading, Paragraph } from "@/components/ui/typography";

function HighlightCard({ svgImg, title, text }) {
    return (
        <>
            <div className='p-3 rounded-2xl border-1 border-lightGrey shadow-md space-y-1'>
                <div className='inline-block p-3 bg-[#1E365C0A] rounded-2xl'>
                    <Image
                        src={svgImg}
                        alt='Highlight Card'
                        className='block w-10 h-10'
                    />
                </div>
                {title && (
                    <Paragraph size="md" className="text-Black font-semibold">
                        {title}
                    </Paragraph>
                )}
                <Paragraph size="md" className="text-Black">
                    {text}
                </Paragraph>
            </div>
        </>
    )
}

export default HighlightCard
