"use client"
import React from 'react'
import ReviewCard from '@/components/shared/ReviewCard'
import { Button } from '@/components/ui'
import { GreaterThan, SmallerThan } from '@/svgs/Icons'

// Swiper imports
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'

function Reviews() {
    const reviewsUser = [
        {
            reviewMsg: `Thank you for such a well thought-out and memorable trip. 
      The sights and people of Morocco are wonderful. I appreciated you feeding my nerdy self 
      with information on the geography, animals and plants of Morocco. The meals were laid back 
      and wonderful and I appreciated the pace. Truly memorable. Thank you for your hard work.`,
            name: 'Kathy J.',
            location: 'Morocco',
        },
        {
            reviewMsg: `Wandering through Romania was an incredible trip in every way: great sights, great people, and everything was very well-organized. This was an excellent trip in which we got to visit many beautiful places (both well-known and off the beaten path) all while in the company of a small, cohesive group of like-minded travelers.`,
            name: 'Nadia A.',
            location: 'Romania',
        },
        {
            reviewMsg: `The trip was amazing, on every level. Your experience and curiosity has created an amazing itinerary, and your willingness to accommodate the random wishes that came up was above and beyond. India is just endless fascination. The accommodations were great, and as someone that doesn’t really care about the food!!`,
            name: 'Tricia S.',
            location: 'India',
        },
        {
            reviewMsg: `Absolutely phenomenal! From the moment we landed to the very last day, every detail was taken care of. The itinerary was well-paced, the guides were knowledgeable, and we got a real taste of the culture. I can’t wait to book my next adventure with you guys.`,
            name: 'Adeel R.',
            location: 'Turkey',
        },
        {
            reviewMsg: `It was my first solo trip and I was nervous, but everything was smooth and well organized. The team made me feel so welcome and part of a family. I made friends for life and came back with unforgettable memories.`,
            name: 'Sana M.',
            location: 'Thailand',
        },
        {
            reviewMsg: `Absolutely phenomenal! From the moment we landed to the very last day, every detail was taken care of. The itinerary was well-paced, the guides were knowledgeable, and we got a real taste of the culture. I can’t wait to book my next adventure with you guys.`,
            name: 'Bilal H.',
            location: 'Pakistan',
        },
        {
            reviewMsg: `Thank you for such a well thought-out and memorable trip. 
      The sights and people of Morocco are wonderful. I appreciated you feeding my nerdy self 
      with information on the geography, animals and plants of Morocco. The meals were laid back 
      and wonderful and I appreciated the pace. Truly memorable.`,
            name: 'Maira Z.',
            location: 'Georgia',
        },

    ]

    return (
        <>
            <div>
                {/* Top Header + Navigation */}
                <div className="flex justify-between items-center">
                    {/* Headings */}
                    <div className="text-xl md:text-2xl lg:text-4xl font-extrabold">
                        <h2 className="text-Black">WHAT OUR CLIENTS SAY</h2>
                        <h2 className="text-Secondary">ABOUT US</h2>
                    </div>

                    {/* Nav Buttons */}
                    <div className="flex gap-2">
                        <Button variant='outlineCircle' size='circle' id="prevBtn">
                            <SmallerThan color='White' />
                        </Button>
                        <Button variant='circle' size='circle' id="nextBtn" className='bg-Primary'>
                            <GreaterThan color='Primary' />
                        </Button>
                    </div>
                </div>

                <Swiper
                    modules={[Navigation]}
                    spaceBetween={20}
                    slidesPerView={1}
                    breakpoints={{
                        640: { slidesPerView: 1 },
                        768: { slidesPerView: 2 },
                        1024: { slidesPerView: 3 },
                    }}
                    navigation={{
                        prevEl: '#prevBtn',
                        nextEl: '#nextBtn',
                    }}
                    onSwiper={(swiper) => {
                        setTimeout(() => swiper.navigation.update(), 100)
                    }}
                    className="h-full"
                >
                    {reviewsUser.map((review, index) => (
                        <SwiperSlide key={index} className="h-auto flex">
                            <div className="flex flex-col h-full w-full">
                                <ReviewCard
                                    msg={review.reviewMsg}
                                    name={review.name}
                                    location={review.location}
                                />
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>

            </div>

        </>
    )
}

export default Reviews
