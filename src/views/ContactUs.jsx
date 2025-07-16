import React from 'react'
import { input as Input } from '@/components/ui/input'
import { Button } from '@/components/ui/Button'
import Image from 'next/image'
import { ContactForm } from '@/components/shared'
import ContactPageHeroSection from '@/assets/contact-HeroSection.png'

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
                    <h1 className="text-white text-2xl sm:text-3xl md:text-5xl font-bold">CONTACT US</h1>
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
            <div className="container mx-auto px-4 max-w-[1280px]">

                {/* Headings */}
                <div className='text-center mb-9'>
                    <h1 className='text-Black text-2xl sm:text-3xl md:text-4xl font-extrabold mb-2'>
                        HELLO! HAVE <span className='text-Secondary'>A QUESTION? </span>
                    </h1>
                    <p className='text-darkGrey text-sm md:text-md'>
                        We’re here to help. If you have any questions or simply want to chat, let us know below. We’ll always reply quickly!
                    </p>
                </div>

                {/* Form */}
                <div className="mb-10">
                    <ContactForm inputBorder='border-lightGrey' />
                </div>

                <div className='text-center mb-20'>
                    <Button variant='secondary' size='lg'>Submit</Button>
                </div>

            </div>
            {/* CONTENT WRAPPER ENDS HERE */}
        </>
    )
}

export default ContactUs
