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


export default function TransparentHeader() {
    const pathname = usePathname();
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const getLinkClasses = (path) =>
        pathname === path
            ? 'bg-[#FFFFFF1A] text-White rounded-xl px-2 py-0.5'
            : '';

    return (
        <header className='absolute top-0 left-0 z-50 w-full px-4 md:px-[60px] py-4 md:py-[20px]  flex justify-between items-center'>
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
            <nav className="hidden md:flex justify-center items-center gap-4 text-White text-[14px] md:text-md">
                <Link className={getLinkClasses('/tours')} href="/tours">
                    <Paragraph size="xs">TOURS</Paragraph>
                </Link>
                <Link className={getLinkClasses('/about-us')} href="/about-us">
                    <Paragraph size="xs">ABOUT US</Paragraph>
                </Link>
                <Link className={getLinkClasses('/our-style')} href="/our-style">
                    <Paragraph size="xs">OUR STYLE</Paragraph>
                </Link>
                <Link className={getLinkClasses('/private-tours')} href="/private-tours">
                    <Paragraph size="xs">PRIVATE TOURS</Paragraph>
                </Link>
                <Link className={getLinkClasses('/past-tours')} href="/past-tours">
                    <Paragraph size="xs">PAST TOURS</Paragraph>
                </Link>
                <Link className={getLinkClasses('/contact-us')} href="/contact-us">
                    <Paragraph size="xs">CONTACT US</Paragraph>
                </Link>
            </nav>


            {/* Buttons */}
            <div className='hidden md:flex gap-2 items-center z-50'>
                <Button variant='outlineCircle' size='circle' className='border-1'>
                    <Link href="/cart"><Cart color='White' /></Link>
                </Button>
                <Button variant='default' size='lg' className='text-sm px-4 md:px-6'>
                    <Link href="/login">Login</Link>
                </Button>
            </div>

            {/* Mobile Menu Button */}
            <button
                className="md:hidden z-50 text-white text-3xl"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
                {isMenuOpen ? 'x' : '='}
            </button>

            {/* Mobile Menu Panel */}
            {isMenuOpen && (
                <div className="absolute top-0 left-0 w-full h-screen bg-Primary flex flex-col gap-6 justify-center items-center z-40 text-White">
                    <Link onClick={() => setIsMenuOpen(false)} href="/tours">
                        <Paragraph size="xs">TOURS</Paragraph>
                    </Link>
                    <Link onClick={() => setIsMenuOpen(false)} href="/about-us">
                        <Paragraph size="xs">ABOUT US</Paragraph>
                    </Link>
                    <Link onClick={() => setIsMenuOpen(false)} href="/our-style">
                        <Paragraph size="xs">OUR STYLE</Paragraph>
                    </Link>
                    <Link onClick={() => setIsMenuOpen(false)} href="/private-tours">
                        <Paragraph size="xs">PRIVATE TOURS</Paragraph>
                    </Link>
                    <Link onClick={() => setIsMenuOpen(false)} href="/past-tours">
                        <Paragraph size="xs">PAST TOURS</Paragraph>
                    </Link>
                    <Link onClick={() => setIsMenuOpen(false)} href="/contact-us">
                        <Paragraph size="xs">CONTACT US</Paragraph>
                    </Link>

                    <div className='flex gap-2 items-center '>
                        <Button variant='outlineCircle' size='circle' className='border-1'>
                            <Link href="/cart"><Cart color='White' /></Link>
                        </Button>
                        <Button variant='secondary' size='lg' className='text-sm px-4 md:px-6'>
                            <Link href="/login">Login</Link>
                        </Button>
                    </div>
                </div>
            )}
        </header>
    );
}
