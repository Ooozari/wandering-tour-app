import React from 'react'
import { input as Input } from '@/components/ui/input'
import { Button } from '@/components/ui/Button'
import Image from 'next/image'
import ContactPageHeroSection from '@/assets/contact-HeroSection.png'

function Contact() {
    return (
        <>
            {/* HeroSection */}
            <div className="relative w-full overflow-hidden">
                {/* Background image */}
                <Image
                    src={ContactPageHeroSection}
                    alt="Contact page banner"
                    className="object-cover"
                    priority
                />

                <div
                    className="absolute inset-0"
                    style={{
                        background:
                            "linear-gradient(180deg, rgba(30, 54, 92, 0) 0%, #1E365C 100%)",
                    }}
                ></div>

                {/* Centered heading */}
                <div className="absolute inset-0 flex items-center justify-center">
                    <h1 className="text-white text-3xl md:text-5xl font-bold">CONTACT US</h1>
                </div>
            </div>

            {/* Gradient continuation after hero image */}
            <div
                className="w-full h-[100px]" // Adjust height as needed
                style={{
                    background:
                        "linear-gradient(0deg, rgba(30, 54, 92, 0) 0%, #1E365C 100%)",
                }}
            ></div>
            {/* Headings */}
            <div className='text-center mb-9'>
                <h1 className='text-Black text-2xl sm:text-3xl md:text-4xl font-extrabold mb-2'>HELLO! HAVE <span className='text-Secondary'>
                    A QUESTION? </span>
                </h1>
                <p className='px-2 text-darkGrey text-sm md:text-md'>We’re here to help. If you have any questions or simply want to chat, let us know below. We’ll always reply quickly!</p>
            </div>
            {/* Form */}
            <div className='flex flex-col mx-auto gap-4 w-[70%]'>
                <div className='flex flex-col gap-3 sm:flex-row'>
                    <div className='w-full flex flex-col gap-1 md:gap-2'>
                        <label >First Name</label>
                        <Input type='text' placeholder="Write" />
                    </div>
                    <div className='w-full flex flex-col gap-1 md:gap-2 '>
                        <label >Last Name</label>
                        <Input type='text' placeholder="Write" />
                    </div>
                </div>
                <div className='flex flex-col gap-1 md:gap-2'>
                    <label >Email Address</label>
                    <Input type='email' placeholder="Write" />
                </div>
                <div className='flex flex-col gap-1 md:gap-2'>
                    <label >Message</label>
                    <Input type='text' placeholder="Write..." />
                </div>
            </div>

            <div className='text-center mb-10 mt-6'>
                <Button variant='secondary' size='lg'>Submit</Button>
            </div>
        </>
    )
}

export default Contact
