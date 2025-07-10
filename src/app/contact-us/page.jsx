import React from 'react'
import { input as Input } from '@/components/ui/input'
import { Button } from '@/components/ui/Button'
import Image from 'next/image'
import ContactPageHeroSection from '@/assets/contact-HeroSection.png'

function Contact() {
    return (
        <>
            {/* HeroSection */}
            <div className="relative w-full h-[300px] md:h-[400px] lg:h-[500px] overflow-hidden">
                {/* Background image */}
                <Image
                    src={ContactPageHeroSection}
                    alt="Contact page banner"
                    priority
                />

                {/* Gradient overlay */}
                <div className="absolute top-1/2 inset-0 bg-gradient-to-b from-[#1E365C] to-[#1E365Cf0]" />

                {/* Centered heading */}
                <div className="absolute inset-0 flex items-center justify-center">
                    <h1 className="text-white text-3xl md:text-5xl font-bold">CONTACT US</h1>
                </div>
            </div>

            {/* Headings */}
            <div className='text-center mb-9'>
                <h1 className='text-Black text-3xl font-extrabold mb-2'>HELLO! HAVE <span className='text-Secondary'>
                    A QUESTION? </span>
                </h1>
                <p className='px-3'>We’re here to help. If you have any questions or simply want to chat, let us know below. We’ll always reply quickly!</p>
            </div>
            {/* Form */}
            <div className='flex flex-col mx-auto gap-4 w-[70%]'>
                <div className='flex gap-3'>
                    <div className='w-full flex flex-col gap-2 '>
                        <label >First Name</label>
                        <Input type='text' placeholder="Write" />
                    </div>
                    <div className='w-full flex flex-col gap-2 '>
                        <label >Last Name</label>
                        <Input type='text' placeholder="Write" />
                    </div>
                </div>
                <div className='flex flex-col gap-2'>
                    <label >Email Address</label>
                    <Input type='email' placeholder="Write" />
                </div>
                <div className='flex flex-col gap-2'>
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
