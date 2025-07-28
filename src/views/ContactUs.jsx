import React from 'react'
import { input as Input } from '@/components/ui/input'
import { Button } from '@/components/ui/Button'
import Image from 'next/image'
import { ContactForm } from '@/components/shared'
import ContactPageHeroSection from '@/assets/contact-HeroSection.png'
import { Heading, Paragraph } from "@/components/ui/typography";

function ContactUs() {
    return (
        <>
            {/* HeroSection */}
            <div className="relative w-full overflow-hidden">
                <Image
                    src={ContactPageHeroSection}
                    alt="Contact page banner"
                    className="object-cover w-full h-auto"
                    priority
                />
                <div
                    className="absolute inset-0"
                    style={{
                        background:
                            "linear-gradient(180deg, rgba(30, 54, 92, 0) 0%, #1E365C 100%)",
                    }}
                ></div>
                <div className="absolute inset-0 flex items-center justify-center">
                    <Heading level="h1Large" className="text-white font-[900]">
                        CONTACT US
                    </Heading>

                </div>
            </div>

            {/* Gradient below image */}
            <div
                className="w-full h-[50px] md:h-[100px]"
                style={{
                    background:
                        "linear-gradient(0deg, rgba(30, 54, 92, 0) 0%, #1E365C 100%)",
                }}
            ></div>

            {/* CONTENT WRAPPER STARTS HERE */}
            <div className="container mx-auto px-4">

                {/* Headings */}
                <div className='text-center mb-9'>
                    <Heading level="h1" className="text-Black font-bold mb-[6px] md:mb-[12px] lg:mb-[16px] xl:mb-[20px] 2xl:mb-[24px]">
                        HELLO! HAVE <span className="text-Secondary">A QUESTION?</span>
                    </Heading>

                    <Paragraph size="normal" className="text-darkGrey">
                        We’re here to help. If you have any questions or simply want to chat, let us know below. We’ll always reply quickly!
                    </Paragraph>

                </div>

                {/* Form */}
                <div className="my-[10px] md:my-[20px] lg:my-[40px] xl:my-[60px] 2xl:my-[80px]">
                    <ContactForm inputBorder='border-lightGrey' labelText='text-Black' />
                </div>
                <div className='text-center mb-20'>
                    <Button variant='secondary' size='lg'><Paragraph size="normal">Submit</Paragraph>
                    </Button>
                </div>

            </div>
            {/* CONTENT WRAPPER ENDS HERE */}
        </>
    )
}

export default ContactUs
