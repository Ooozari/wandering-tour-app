// 'use client';
// import Image from 'next/image';
// import Logo from '@/assets/Logo.png'
// import companyName from '@/assets/Logo-name.png'
// import bgImage from '@/assets/footer-bg.png'

// export default function Footer() {
//     return (
//         <div className="w-full relative">
//             {/* Background Image */}
//             <div className="absolute inset-0 -z-10">
//                 <Image
//                     src={bgImage}
//                     alt="Footer Img"
//                     fill // makes it full width and height of parent
//                     className="object-cover" // covers the area like background-size: cover
//                 />
//             </div>
//             {/* Gradient Overlay */}
//             <div className="absolute inset-0 z-10 bg-gradient-to-b from-[#1E365C] via-[#1E365C]/95 to-[#1E365C]/0" />

//             {/* Content */}
//             <div className="relative z-20 px-[20px] flex flex-col gap-10 text-white">
//                 {/* Top Section */}
//                 <div className="flex items-center  gap-[30px] bg-Icon">
//                     {/* Left */}
//                     <div className="flex flex-col gap-3 bg-Grey">
//                         {/* Overlapping Images */}
//                         <div className="relative bg-Negative"> {/* Adjust size as needed */}
//                             <div className='relative'>
//                                 <Image
//                                     src={companyName}
//                                     alt="Logo Name"
//                                     className="z-0"
//                                 />
//                             </div>

//                             <div className='absolute -top-0'>
//                                 <Image
//                                     src={Logo}
//                                     alt="Logo"
//                                     className="z-10"
//                                 />
//                             </div>

//                         </div>
//                         {/* Text */}
//                         <div className="max-w-md bg-Black">
//                             <p className="text-sm text-white">
//                                 Thank you for such a well thought-out and memorable trip. The sights and people of Morocco are wonderful. I appreciated you feeding my nerdy self with information on the geography, animals and plants of Morocco.
//                             </p>
//                         </div>
//                     </div>


//                     {/* Right */}
//                     <div className="flex w-full justify-between px-2.5 text-White bg-Secondary">
//                         <div>
//                             <h3 className="font-bold mb-2 ">OUR PAGES</h3>
//                             <ul className="space-y-1 text-sm list-none ">
//                                 <li>Tours</li>
//                                 <li>About Us</li>
//                                 <li>Our Style</li>
//                             </ul>
//                         </div>
//                         <div>
//                             <h3 className="font-bold mb-2">TOUR PAGES</h3>
//                             <ul className="space-y-1 text-sm list-none">
//                                 <li>Prvate Tours</li>
//                                 <li>Past Tours</li>
//                             </ul>
//                         </div>
//                         <div>
//                             <h3 className="font-bold mb-2">CONTACT</h3>
//                             <ul className="space-y-1 text-sm list-none">
//                                 <li>Contact Us</li>
//                             </ul>
//                         </div>
//                         <div>
//                             <h3 className="font-bold mb-2">COMPANY</h3>
//                             <ul className="space-y-1 text-sm list-none">
//                                 <li>Privacy Policy</li>
//                                 <li>Terms of Services</li>
//                                 <li>Refund / Cancelation Policy</li>
//                             </ul>
//                         </div>
//                     </div>
//                 </div>

//                 {/* Footer Bottom Text */}
//                 <p className="text-center text-xs py-3 text-darkGrey">©2024 Wandering Earl, LLC. All rights reserved.</p>
//             </div>
//         </div>
//     );
// }


'use client';
import Image from 'next/image';
import Logo from '@/assets/Logo.png';
import companyName from '@/assets/Logo-name.png';
import bgImage from '@/assets/footer-bg.png';

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
            <div className="absolute inset-0 z-10 bg-gradient-to-b from-[#1E365C] via-[#1E365C]/95 to-[#1E365C]/0" />

            {/* Content */}
            <div className="relative z-20 px-5 md:px-[20px] flex flex-col gap-10 text-white">
                {/* Top Section */}
                <div className="flex flex-col lg:flex-row gap-10 bg-Icon py-10">
                    {/* Left */}
                    <div className="flex flex-col gap-3 bg-Grey p-4 rounded-xl">
                        <div className="relative bg-Negative w-[120px] h-[50px]">
                            <div className='relative'>
                                <Image src={companyName} alt="Logo Name" className="z-0 w-auto h-auto" />
                            </div>
                            <div className='absolute -top-0'>
                                <Image src={Logo} alt="Logo" className="z-10 w-auto h-auto" />
                            </div>
                        </div>

                        <div className="max-w-md bg-Black p-3 rounded-lg">
                            <p className="text-sm text-white leading-relaxed">
                                Thank you for such a well thought-out and memorable trip. The sights and people of Morocco are wonderful. I appreciated you feeding my nerdy self with information on the geography, animals and plants of Morocco.
                            </p>
                        </div>
                    </div>

                    {/* Right */}
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 w-full text-White bg-Secondary p-4 rounded-xl">
                        <div>
                            <h3 className="font-bold mb-2">OUR PAGES</h3>
                            <ul className="space-y-1 text-sm list-none">
                                <li>Tours</li>
                                <li>About Us</li>
                                <li>Our Style</li>
                            </ul>
                        </div>
                        <div>
                            <h3 className="font-bold mb-2">TOUR PAGES</h3>
                            <ul className="space-y-1 text-sm list-none">
                                <li>Private Tours</li>
                                <li>Past Tours</li>
                            </ul>
                        </div>
                        <div>
                            <h3 className="font-bold mb-2">CONTACT</h3>
                            <ul className="space-y-1 text-sm list-none">
                                <li>Contact Us</li>
                            </ul>
                        </div>
                        <div>
                            <h3 className="font-bold mb-2">COMPANY</h3>
                            <ul className="space-y-1 text-sm list-none">
                                <li>Privacy Policy</li>
                                <li>Terms of Services</li>
                                <li>Refund / Cancelation Policy</li>
                            </ul>
                        </div>
                    </div>
                </div>

                {/* Footer Bottom Text */}
                <p className="text-center text-xs py-3 text-darkGrey">©2024 Wandering Earl, LLC. All rights reserved.</p>
            </div>
        </div>
    );
}
