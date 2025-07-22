import React from 'react'
import { CrossCircle, TickCircle } from '@/svgs/Icons'
import { Heading, Paragraph } from "@/components/ui/typography";

function WhatIncluded() {
    return (
        <>
            <div className="flex flex-col md:flex-row gap-5 ">
                <div className="flex-1 px-3 py-4 border-1 border-lightGrey rounded-2xl shadow-lg space-y-1.5">
                    <div className="flex gap-2.5 items-center mb-[8px] md:mb-[10px] lg:mb-[12px] xl:mb-[14px] 2xl:mb-[16px]">
                        <span><TickCircle /></span>
                        <Paragraph size="md">
                            <span className="uppercase text-Black font-semibold">Included</span>
                        </Paragraph>

                    </div>
                    <ul className=" text-darkGrey list-disc px-4 font-medium">
                        <Paragraph size="md" className='space-y-[12px] md:space-y-[16px] lg:space-y-[20px] xl:space-y-[24px] 2xl:space-y-[28px]'>
                            <li>Wandering Earl Tours Expert Tour Leader</li>
                            <li>Small group (maximum 12 participants)</li>
                            <li>Accommodation (11 nights – 3*/4* hotels and a guesthouse)</li>
                            <li>Transportation within Southeast Asia (vans, public transportation and flights)</li>
                            <li>Local English-speaking guides</li>
                            <li>All mentioned activities and entrance fees</li>
                            <li>Breakfast every day, 7 lunches and 10 dinners</li>
                            <li>Water throughout the trip</li>
                            <li>Gratuities at hotels/included meals</li>
                            <li>All airport transfers</li>
                        </Paragraph>
                    </ul>
                </div>

                <div className="flex-1 px-3 py-4 border-1 border-lightGrey rounded-2xl shadow-lg ">
                    <div className="flex gap-2.5  items-center mb-[8px] md:mb-[10px] lg:mb-[12px] xl:mb-[14px] 2xl:mb-[16px]">
                        <span><CrossCircle /></span>
                        <Paragraph size="md">
                            <span className="uppercase text-Black font-semibold">Not Included</span></Paragraph>
                    </div>
                    <ul className="text-darkGrey list-disc px-4 font-medium">
                        <Paragraph size="md" className='space-y-[12px] md:space-y-[16px] lg:space-y-[20px] xl:space-y-[24px] 2xl:space-y-[28px]'>
                            <li>Flights to/from Bangkok and Singapore</li>
                            <li>Passport/visa fees</li>
                            <li>Meals and activities not mentioned</li>
                            <li>Travel insurance (mandatory)</li>
                            <li>Other gratuities</li>
                        </Paragraph>
                    </ul>
                </div>
            </div>

        </>
    )
}

export default WhatIncluded
