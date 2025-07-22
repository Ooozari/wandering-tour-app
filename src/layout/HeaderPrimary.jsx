
'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Cart } from '@/svgs/Icons';
import { Button } from '@/components/ui/Button';
import Logo from "@/assets/Logo.png";
import companyName from '@/assets/Logo-name.png';
import { Heading, Paragraph } from "@/components/ui/typography";

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
                    <Link href="/tours" className='hover:text-White'>
                        <Paragraph size="xs">TOURS</Paragraph>
                    </Link>
                </li>
                <li className={getLinkClasses('/about-us')}>
                    <Link href="/about-us" className='hover:text-White'>
                        <Paragraph size="xs">ABOUT US</Paragraph>
                    </Link>
                </li>
                <li className={getLinkClasses('/our-style')}>
                    <Link href="/our-style" className='hover:text-White'>
                        <Paragraph size="xs">OUR STYLE</Paragraph>
                    </Link>
                </li>
                <li className={getLinkClasses('/private-tours')}>
                    <Link href="/private-tours" className='hover:text-White'>
                        <Paragraph size="xs">PRIVATE TOURS</Paragraph>
                    </Link>
                </li>
                <li className={getLinkClasses('/past-tours')}>
                    <Link href="/past-tours" className='hover:text-White'>
                        <Paragraph size="xs">PAST TOURS</Paragraph>
                    </Link>
                </li>
                <li className={getLinkClasses('/contact-us')}>
                    <Link href="/contact-us" className='hover:text-White'>
                        <Paragraph size="xs">CONTACT US</Paragraph>
                    </Link>
                </li>
            </ul>


            {/* Desktop Buttons */}
            <div className='hidden md:flex md:items-center gap-2 z-50'>
                <Button variant='outlineCircle' size='circle' className='border-1'>
                    <Link href="/cart">
                        <div className='relative'>
                            <Cart color='White' />
                            <div className="absolute right-0 top-0 translate-x-1/2  w-2 h-2 rounded-full bg-Secondary">
                            </div>
                        </div>
                    </Link>
                </Button>
                <Button variant='whitePrimary' className=''>
                    <Paragraph size="xs">Login</Paragraph>
                </Button>
            </div>

            {/* Mobile Menu Toggle */}
            <button
                className="md:hidden z-50 text-white text-4xl"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
                {isMenuOpen ? 'x' : '='}
            </button>

            {/* Mobile Menu */}
            {isMenuOpen && (
                <div className="absolute top-0 left-0 w-full h-screen bg-Primary flex flex-col gap-6 justify-center items-center z-40 text-White">
                    <Link onClick={() => setIsMenuOpen(false)} href="/tours">
                        <Paragraph size="normal">TOURS</Paragraph>
                    </Link>
                    <Link onClick={() => setIsMenuOpen(false)} href="/about-us">
                        <Paragraph size="normal">ABOUT US</Paragraph>
                    </Link>
                    <Link onClick={() => setIsMenuOpen(false)} href="/our-style">
                        <Paragraph size="normal">OUR STYLE</Paragraph>
                    </Link>
                    <Link onClick={() => setIsMenuOpen(false)} href="/private-tours">
                        <Paragraph size="normal">PRIVATE TOURS</Paragraph>
                    </Link>
                    <Link onClick={() => setIsMenuOpen(false)} href="/past-tours">
                        <Paragraph size="normal">PAST TOURS</Paragraph>
                    </Link>
                    <Link onClick={() => setIsMenuOpen(false)} href="/contact-us">
                        <Paragraph size="normal">CONTACT US</Paragraph>
                    </Link>

                    <div className='flex gap-5 items-center'>
                        <Button variant='outlineCircle' size='circle' className='border-1'>
                            <Link href="/cart">
                                <div className='relative'>
                                    <Cart color='White' />
                                    <div className="absolute right-0 top-0 translate-x-1/2  w-2 h-2 rounded-full bg-Secondary">
                                    </div>
                                </div>
                            </Link>
                        </Button>
                        <Button variant='whitePrimary' size='lg' className=''>
                            <Paragraph size="normal">Login</Paragraph>
                        </Button>
                    </div>
                </div>
            )}
        </header>
    );
}

