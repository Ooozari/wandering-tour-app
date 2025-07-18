
'use client';
import Image from 'next/image';
import Logo from '@/assets/Logo.png';
import companyName from '@/assets/Logo-name.png';
import bgImage from '@/assets/footer-bg.png';
import Link from "next/link";

export default function Footer() {
    return (
        <div className="w-full relative">
            {/* Background Image */}
            <div className="absolute inset-0 -z-10">
                <Image
                    src={bgImage}
                    alt="Footer Img"
                    fill
                    className="object-cover"
                />
            </div>

            {/* Gradient Overlay */}
           <div className="absolute inset-0 z-10 bg-[linear-gradient(0deg,rgba(30,54,92,0)_0%,rgba(30,54,92,0.95)_54.63%,#1E365C_75.11%,#1E365C_100%)]" />


            {/* Content */}
            <div className="relative z-20 px-5 md:px-[20px] flex flex-col text-white">
                {/* Top Section */}
                <div className="flex flex-col lg:flex-row gap-10  py-10">
                    {/* Left */}
                    <div className="flex flex-col gap-3 p-4 rounded-xl">
                        <div className="relative w-[120px] h-[50px] mx-auto">
                            {/* Second Image (Bottom Layer) */}
                            <div className='absolute inset-0 z-0'>
                                <Image src={Logo} alt="Logo" className="w-auto h-auto" />
                            </div>

                            {/* First Image (Top Layer) */}
                            <div className='relative z-10'>
                                <Image src={companyName} alt="Logo Name" className="w-auto h-auto" />
                            </div>
                        </div>


                        <div className="max-w-md  p-3 rounded-lg">
                            <p className="text-sm text-white leading-relaxed">
                                Thank you for such a well thought-out and memorable trip. The sights and people of Morocco are wonderful. I appreciated you feeding my nerdy self with information on the geography, animals and plants of Morocco.
                            </p>
                        </div>
                    </div>

                    {/* Right */}
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 w-full text-White p-4">
                        <div>
                            <h3 className="font-bold mb-2">OUR PAGES</h3>
                            <ul className="space-y-1 text-sm list-none">
                                <li className="hover:cursor-pointer"><Link href="/tours">Tours</Link></li>
                                <li className="hover:cursor-pointer"><Link href="/about-us">About Us</Link></li>
                                <li className="hover:cursor-pointer"><Link href="/our-style">Our Style</Link></li>
                            </ul>
                        </div>
                        <div>
                            <h3 className="font-bold mb-2">TOUR PAGES</h3>
                            <ul className="space-y-1 text-sm list-none">
                                <li className="hover:cursor-pointer"><Link href="/private-tours">Private Tours</Link></li>
                                <li className="hover:cursor-pointer"><Link href="/past-tours">Past Tours</Link></li>
                            </ul>
                        </div>
                        <div>
                            <h3 className="font-bold mb-2">CONTACT</h3>
                            <ul className="space-y-1 text-sm list-none">
                                <li className="hover:cursor-pointer"><Link href="/contact-us">Contact Us</Link></li>
                            </ul>
                        </div>
                        <div>
                            <h3 className="font-bold mb-2">COMPANY</h3>
                            <ul className="space-y-1 text-sm list-none">
                                <li className="hover:cursor-pointer"><Link href="/">Privacy Policy</Link></li>
                                <li className="hover:cursor-pointer"><Link href="/">Terms of Services</Link></li>
                                <li className="hover:cursor-pointer"><Link href="/">Refund / Cancelation Policy</Link></li>
                            </ul>
                        </div>
                    </div>
                </div>

                {/* Footer Bottom Text */}
                <p className="text-center text-xs py-3 text-darkGrey">©2024 Wandering Earl, LLC. All rights reserved.
                </p>
            </div>
        </div>
    );
}
