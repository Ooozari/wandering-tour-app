'use client';
import Image from 'next/image';
import Logo from '@/assets/Logo.png'
import companyName from '@/assets/Logo-name.png'

export default function Footer() {
    return (
        <div className="w-full max-h-1/4">
            {/* Background Image */}
            

            {/* Gradient Overlay */}
            <div className="absolute inset-0 z-50 bg-gradient-to-t from-[#1E365C] via-[#1E365C]/95 to-[#1E365C]/0" />

            {/* Content */}
            <div className="relative z-20 px-[20px] py-[80px] flex flex-col gap-[148px] text-white">
                {/* Top Section */}
                <div className="flex flex-col md:flex-row gap-[30px]">
                    {/* Left */}
                    <div className="flex flex-col md:flex-row gap-[30px]">
                        <div className="flex flex-col relative">
                            <Image 
                            src={companyName}
                            alt="Logo Name"
                            className="object-contain z-0"
                            />
                            <Image src={Logo}
                            alt="Logo"
                            className="object-contain z-10"
                             />
                        </div>
                        <div className="max-w-md">
                            <p className="text-sm">
                                Thank you for such a well thought-out and memorable trip. The sights and people of Morocco are wonderful. I appreciated you feeding my nerdy self with information on the geography, animals and plants of Morocco.
                            </p>
                        </div>
                    </div>

                    {/* Right */}
                    <div className="flex justify-between">
                        <div>
                            <h3 className="font-semibold mb-2">OUR PAGES</h3>
                            <ul className="space-y-1 text-sm list-none">
                                <li>Tours</li>
                                <li>About Us</li>
                                <li>Our Style</li>
                            </ul>
                        </div>
                        <div>
                            <h3 className="font-semibold mb-2">TOUR PAGES</h3>
                            <ul className="space-y-1 text-sm list-none">
                                <li>Prvate Tours</li>
                                <li>Past Tours</li>
                            </ul>
                        </div>
                        <div>
                            <h3 className="font-semibold mb-2">CONTACT</h3>
                            <ul className="space-y-1 text-sm list-none">
                                <li>Contact Us</li>
                            </ul>
                        </div>
                        <div>
                            <h3 className="font-semibold mb-2">COMPANY</h3>
                            <ul className="space-y-1 text-sm list-none">
                                <li>Privacy Policy</li>
                                <li>Terms of Services</li>
                                <li>Refund / Cancelation Policy</li>
                            </ul>
                        </div>
                    </div>
                </div>

                {/* Footer Bottom Text */}
                <p className="text-center text-xs">©2024 Wandering Earl, LLC. All rights reserved.</p>
            </div>
        </div>
    );
}
