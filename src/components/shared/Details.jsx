import React from 'react'
import { Location, Calender, Spot } from '@/svgs/Icons';
import { highlightImg1, highlightImg2, highlightImg3, highlightImg4, highlightImg5, highlightImg6 } from '@/assets'
import { Heading, Paragraph } from "@/components/ui/typography";
import { HighlightCard } from '@/components/shared'

function Details() {
    const highlightCards = [
        {
            svgImg: highlightImg1,
            text: 'Spoil yourself with the delicious cuisine of Singapore, with its Chinese, Indian, Malaysian and Indonesian influences'
        },
        {
            svgImg: highlightImg2,
            text: 'Dive deep into the incredible food markets of Bangkok'
        },
        {
            svgImg: highlightImg3,
            text: 'Get ready for the vast foodie scene of Kuala Lumpur, with some of the best food in the world'
        },
        {
            svgImg: highlightImg4,
            text: 'Travel back in time through the ancient city of Ayutthaya'
        },
        {
            svgImg: highlightImg5,
            text: 'Enjoy time exploring the gorgeous Cameron Highlands of Malaysia'
        },
        {
            svgImg: highlightImg6,
            text: 'Visit a tea plantation to learn about the process of making the finest teas'
        },
    ]
    return (
        <>
            <div className='flex flex-col gap-5 '>
                {/* text */}
                <div>
                    <Paragraph size="subText" className="text-Black mb-[12px] md:mb-[16px] lg:mb-[20px] xl:mb-[22px] 2xl:mb-[24px] font-medium">
                        Join us on an unforgettable food-focused adventure in Southeast Asia, where we will uncover the culinary secrets of Thailand, Malaysia and Singapore!
                    </Paragraph>

                    {/* details */}
                    <div className='flex flex-col md:flex-row gap-5 text-lightGrey mb-[20px] md:mb-[26px] lg:mb-[32px] xl:mb-[36px] 2xl:mb-[40px]'>
                        <span>
                            <div className='flex gap-1 items-center'>
                                <Spot />
                                <Paragraph size="sm" className='text-darkGrey'>2 out of 12 spots booked</Paragraph>
                            </div>
                        </span>
                        |
                        <span>
                            <div className='flex gap-1 items-center'>
                                <Location />
                                <Paragraph size="sm" className='text-darkGrey'>Romania</Paragraph>
                            </div>
                        </span>
                        |
                        <span>
                            <div className='flex gap-1 items-center'>
                                <Calender />
                                <Paragraph size="sm" className='text-darkGrey'>Nov 08 — Nov 17, 2024 (10 days)</Paragraph>
                            </div>
                        </span>
                    </div>

                </div>
                {/* Book with confidence */}
                <div className='border-1 border-lightGrey shadow-md p-4 
                rounded-2xl mb-[20px] md:mb-[26px] lg:mb-[32px] xl:mb-[36px] 2xl:mb-[40px]'>
                    <h4 className='text-Secondary font-semibold text-lg'>BOOK WITH CONFIDENCE</h4>
                    <p className='text-darkGrey'>To reserve your spot on a tour, a $500 deposit will be required. However, you can book with complete peace of mind as this deposit will be refundable - minus a 3% transaction fee - for 30 days. [Deposits are non-refundable within 90 days of the tour start date, even if 30 days have not yet passed since the payment date.]</p>
                </div>

                {/* Highlight Cards*/}
                <div className="grid gap-5 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                    {highlightCards.map((item, index) => (
                        <HighlightCard
                            key={index}
                            svgImg={item.svgImg}
                            text={item.text}
                        />
                    ))}
                </div>
                {/* text paragraph */}
                <div className='flex flex-col gap-2.5 text-Black  mt-[20px] md:mt-[26px] lg:mt-[32px] xl:mt-[36px] 2xl:mt-[40px]'>
                    <p>Calling all foodies and travel enthusiasts! This trip is a chance to embark on a culinary adventure through Southeast Asia, where you’ll be immersed in the traditional food culture of each location, while also exploring some of the wonderful sights.</p>
                    <p>Our journey will take us through Bangkok, Ayutthaya, Kuala Lumpur, the Cameron Highlands and Singapore. You’ll discover the secrets of traditional tea plantations and meet local chefs who serve up dishes that will remain etched in your memory forever. You’ll indulge in the explosion of flavors and spices at sprawling markets and enjoy the absolute best street food on the planet. There will be a variety of excellent restaurant experiences, a cooking class and trips to famous local eateries that few visitors ever reach.</p>
                    <p>Throughout the tour, you’ll be in the company of like-minded travelers who share your passion for adventure and culinary exploration. This food tour is an exclusive opportunity to experience Southeast Asia through food, leaving you with a newfound appreciation for the rich culture and gastronomy of this captivating region of the world!</p>
                </div>
            </div>
        </>
    )
}

export default Details
