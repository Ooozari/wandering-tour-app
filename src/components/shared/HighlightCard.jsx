import React from 'react'
import Image from 'next/image'

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
                {title && (<h3 className='text-Black font-semibold'>{title}</h3>)}
                <p className='text-Black'>{text}</p>
            </div>
        </>
    )
}

export default HighlightCard
