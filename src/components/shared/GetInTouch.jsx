import React from 'react'
import { Button } from '@/components/ui';
import Image from 'next/image';
import getInTouch from '@/assets/getInTouch.png';

function GetInTouch() {
    return (
        <>
            <div className='relative' >
                    <div className='bg-Secondary rounded-3xl lg:rounded-b-3xl lg:rounded-tl-3xl lg:rounded-tr-[860px]  relative'>
                        <div className=' text-White flex flex-col gap-2 px-10 lg:py-20 md:py-15 py-12 w-full xl:lg:w-[70%] lg:w-[70%]'>
                            <h3 className=' font-extrabold text-2xl md:text-3xl lg:text-4xl'>Get In Touch</h3>
                            <p className='text-sm lg:text-md mt-2 mb-4'>If you’re interested in a private tour like no other, get in touch with us today. We’re ready to use our expertise to create an absolutely unforgettable trip for your group or organization!</p>
                            <div>
                                <Button varient='default' size='lg'>Get in Touch</Button>
                            </div>

                        </div>
                        <div className='absolute z-10 right-0 -top-12 w-[550px] h-[550px] invisible lg:visible'>
                            <Image
                                src={getInTouch}
                                alt='Get in touch Img'
                            />
                        </div>
                    </div>
                </div>
        </>
    )
}

export default GetInTouch
