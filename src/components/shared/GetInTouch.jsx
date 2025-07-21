import React from 'react'
import { Button } from '@/components/ui/Button';
import Image from 'next/image';
import getInTouch from '@/assets/getInTouch.png';
import { Heading, Paragraph } from "@/components/ui/typography";

function GetInTouch() {
    return (
        <>
            <div className='relative' >
                <div className='bg-Secondary rounded-3xl lg:rounded-b-3xl lg:rounded-tl-3xl lg:rounded-tr-[860px]  relative'>
                    {/* text */}
                    <div className=' text-White flex flex-col gap-2 px-10 lg:py-20 md:py-15 py-12 w-full lg:max-w-[calc(100%-550px)]'>
                        <Heading level="h4" className="font-extrabold">
                            Get In Touch
                        </Heading>

                        <Paragraph size="normal" className="mt-2 mb-4">
                            If you’re interested in a private tour like no other, get in touch with us today. We’re ready to use our expertise to create an absolutely unforgettable trip for your group or organization!
                        </Paragraph>

                        <div>
                            <Button variant="default" size="lg">
                                <Paragraph size="sm" className="m-0 p-0">Get in Touch</Paragraph>
                            </Button>

                        </div>

                    </div>
                    {/* img */}
                    <div className='absolute z-10 right-0 -top-12 w-[550px] h-[550px] invisible lg:visible '>
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
