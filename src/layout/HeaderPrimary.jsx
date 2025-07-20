
'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Cart } from '@/svgs/Icons';
import { Button } from '@/components/ui/Button';
import Logo from "@/assets/Logo.png";
import companyName from '@/assets/Logo-name.png';

export default function HeaderPrimary() {
    const pathname = usePathname();
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const getLinkClasses = (path) =>
        pathname === path
            ? 'bg-[#FFFFFF1A] text-White font-bold rounded-md px-2 py-1'
            : '';

    return (
        <header className='relative z-50 w-full bg-Primary px-4 md:px-[60px] py-4 md:py-[20px] flex justify-between items-center'>
            {/* Logo */}
            <div className="relative flex items-center z-50">
                <Link href="/">
                    <Image
                        src={companyName}
                        alt="Logo Name"
                        className="relative z-20 w-[100px] md:w-[150px] h-auto"
                        width={150}
                        height={150}
                    />
                    <Image
                        src={Logo}
                        alt="Logo"
                        className="absolute top-0 left-0 z-10 w-[100px] md:w-[150px] h-auto"
                        width={150}
                        height={150}
                    />
                </Link>
            </div>

            {/* Desktop Navbar */}
            <ul className='hidden md:flex flex-wrap justify-center items-center gap-4 text-Grey text-[14px] md:text-md'>
                <li className={getLinkClasses('/tours')}>
                    <Link href="/tours" className='hover:text-White'>TOURS</Link>
                </li>
                <li className={getLinkClasses('/about-us')}>
                    <Link href="/about-us" className='hover:text-White'>ABOUT US</Link>
                </li>
                <li className={getLinkClasses('/our-style')}>
                    <Link href="/our-style" className='hover:text-White'>OUR STYLE</Link>
                </li>
                <li className={getLinkClasses('/private-tours')}>
                    <Link href="/private-tours" className='hover:text-White'>PRIVATE TOURS</Link>
                </li>
                <li className={getLinkClasses('/past-tours')}>
                    <Link href="/past-tours" className='hover:text-White'>PAST TOURS</Link>
                </li>
                <li className={getLinkClasses('/contact-us')}>
                    <Link href="/contact-us" className='hover:text-White'>CONTACT US</Link>
                </li>
            </ul>

            {/* Desktop Buttons */}
            <div className='hidden md:flex gap-2 z-50'>
                <Button variant='outlineCircle' size='circle' className='border-1'>
                    <Link href="/cart"><Cart color='White' /></Link>
                </Button>
                <Button variant='whitePrimary' size='lg' className='bg-White text-sm px-4 md:px-6'>
                    <Link href="/login">Login</Link>
                </Button>
            </div>

            {/* Mobile Menu Toggle */}
            <button
                className="md:hidden z-50 text-white text-3xl"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
                {isMenuOpen ? 'x' : '='}
            </button>

            {/* Mobile Menu */}
            {isMenuOpen && (
                <div className="absolute top-0 left-0 w-full h-screen bg-Primary flex flex-col gap-6 justify-center items-center z-40 text-White">
                    <Link onClick={() => setIsMenuOpen(false)} className="text-lg" href="/tours">TOURS</Link>
                    <Link onClick={() => setIsMenuOpen(false)} className="text-lg" href="/about-us">ABOUT US</Link>
                    <Link onClick={() => setIsMenuOpen(false)} className="text-lg" href="/our-style">OUR STYLE</Link>
                    <Link onClick={() => setIsMenuOpen(false)} className="text-lg" href="/private-tours">PRIVATE TOURS</Link>
                    <Link onClick={() => setIsMenuOpen(false)} className="text-lg" href="/past-tours">PAST TOURS</Link>
                    <Link onClick={() => setIsMenuOpen(false)} className="text-lg" href="/contact-us">CONTACT US</Link>
                    <div className='flex gap-5 items-center'>
                        <Button variant='outlineCircle' size='circle' className='border-1'>
                            <Link href="/cart"><Cart color='White' /></Link>
                        </Button>
                        <Button variant='whitePrimary' size='lg' className='bg-White text-sm px-7 md:px-6'>
                            <Link href="/login">Login</Link>
                        </Button>
                    </div>
                </div>
            )}
        </header>
    );
}

