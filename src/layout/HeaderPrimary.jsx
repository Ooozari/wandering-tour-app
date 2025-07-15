// 'use client';
// import React from 'react'
// import Image from 'next/image'
// import Link from 'next/link'
// import { usePathname } from 'next/navigation' // ✅ import this
// import { Cart } from '@/svgs/Icons'
// import { Button } from '@/components/ui/Button'
// import Logo from "@/assets/Logo.png"
// import companyName from '@/assets/Logo-name.png'

// function HeaderPrimary() {
//     const pathname = usePathname(); // ✅ Get current path

//     // Helper to style active link
//     const getLinkClasses = (path) =>
//         pathname === path
//             ? 'bg-[#FFFFFF1A] text-White rounded-xl px-2 py-0.5'
//             : '';

//     return (
//         <div className='flex justify-between items-center w-full px-[60px] py-[20px] bg-Primary'>
//             {/* logo */}
//             <div className="relative flex items-center">
//                 <Image
//                     src={companyName}
//                     alt="Logo Name"
//                     className="relative z-20"
//                     width={150}
//                     height={150}
//                 />
//                 <Image
//                     src={Logo}
//                     alt="Logo"
//                     className="absolute top-0 left-0 z-10"
//                     width={150}
//                     height={150}
//                 />
//             </div>

//             {/* navbar links with active styling */}
//             <div>
//                 <ul className='flex justify-center items-center gap-4 text-Grey  text-md'>
//                     <li className={getLinkClasses('/tours')}>
//                         <Link href="/tours">TOURS</Link>
//                     </li>
//                     <li className={getLinkClasses('/about-us')}>
//                         <Link href="/about-us">ABOUT US</Link>
//                     </li>
//                     <li className={getLinkClasses('/our-style')}>
//                         <Link href="/our-style">OUR STYLE</Link>
//                     </li>
//                     <li className={getLinkClasses('/private-tours')}>
//                         <Link href="/private-tours">PRIVATE TOURS</Link>
//                     </li>
//                     <li className={getLinkClasses('/past-tours')}>
//                         <Link href="/past-tours">PAST TOURS</Link>
//                     </li>
//                     <li className={getLinkClasses('/contact-us')}>
//                         <Link href="/contact-us">CONTACT US</Link>
//                     </li>
//                 </ul>
//             </div>

//             {/* buttons */}
//             <div className='flex gap-2'>
//                 <Button variant='outlineCircle' size='circle'>
//                    <Link href="/cart"><Cart color='White'/></Link> 
//                 </Button>
//                 <Button variant='whitePrimary' size='lg' className='bg-White'>
//                     <Link href="/login">Login</Link>
//                 </Button>
//             </div>
//         </div>
//     )
// }

// export default HeaderPrimary


'use client';
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Cart } from '@/svgs/Icons';
import { Button } from '@/components/ui/Button';
import Logo from "@/assets/Logo.png";
import companyName from '@/assets/Logo-name.png';

function HeaderPrimary() {
    const pathname = usePathname();

    const getLinkClasses = (path) =>
        pathname === path
            ? 'bg-[#FFFFFF1A] text-White rounded-xl px-2 py-0.5'
            : '';

    return (
        <div className='flex flex-col md:flex-row justify-between items-center w-full px-4 md:px-[60px] py-4 md:py-[20px] bg-Primary gap-4 md:gap-0'>
            {/* Logo */}
            <div className="relative flex items-center">
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
            </div>

            {/* Navbar Links */}
            <ul className='flex flex-wrap justify-center items-center gap-4 text-Grey text-[14px] md:text-md'>
                <li className={getLinkClasses('/tours')}>
                    <Link href="/tours">TOURS</Link>
                </li>
                <li className={getLinkClasses('/about-us')}>
                    <Link href="/about-us">ABOUT US</Link>
                </li>
                <li className={getLinkClasses('/our-style')}>
                    <Link href="/our-style">OUR STYLE</Link>
                </li>
                <li className={getLinkClasses('/private-tours')}>
                    <Link href="/private-tours">PRIVATE TOURS</Link>
                </li>
                <li className={getLinkClasses('/past-tours')}>
                    <Link href="/past-tours">PAST TOURS</Link>
                </li>
                <li className={getLinkClasses('/contact-us')}>
                    <Link href="/contact-us">CONTACT US</Link>
                </li>
            </ul>

            {/* Buttons */}
            <div className='flex gap-2'>
                <Button variant='outlineCircle' size='circle'>
                    <Link href="/cart"><Cart color='White' /></Link>
                </Button>
                <Button variant='whitePrimary' size='lg' className='bg-White text-sm px-4 md:px-6'>
                    <Link href="/login">Login</Link>
                </Button>
            </div>
        </div>
    );
}

export default HeaderPrimary;
