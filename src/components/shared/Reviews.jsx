import React from 'react'
import ReviewCard from '@/components/shared/ReviewCard';
import { Button } from '../ui/Button';
import { GreaterThan, SmallerThan } from '@/svgs/Icons'

function Reviews() {
    const reviewsUser = [
        {
            reviewMsg: `Thank you for such a well thought-out and memorable trip. 
            The sights and people of Morocco are wonderful. I appreciated you feeding my nerdy self 
            with information on the geography, animals and plants of Morocco. The meals were laid back 
            and wonderful and I appreciated the pace. Truly memorable. Thank you for your hard work, 
            phenomenal organization and attention to the needs of the group.`,
            name: "Kathy J.",
            location: "Morocco",
        },
        {
            reviewMsg: `Wandering through Romania was an incredible trip in every way: great sights, great people, and everything was very well-organized. This was an excellent trip in which we got to visit many beautiful places (both well-known and off the beaten path) all while in the company of a small, cohesive group of like-minded travelers. I’ve traveled to 40+ countries and this trip still stands out in my mind as one of the best I’ve been on. I would highly recommend it!`,
            name: "Nadia A.",
            location: "Romania",
        },
        {
            reviewMsg: `The trip was amazing, on every level. Your experience and curiosity has created an amazing itinerary, and your willingness to accommodate the random wishes that came up was above and beyond. India is just endless fascination. The accommodations were great, and as someone that doesn’t really care about the food experience…it was great!!`,
            name: "Tricia S.",
            location: "Morocco",
        },
    ]
    return (
        <>
            {/* Top */}
            <div className='flex justify-between items-center'>
                {/* Heading */}
                <div className='text-4xl font-extrabold'>
                    <h2 className='text-Black'>WHAT OUR CLIENTS SAYS</h2>
                    <h2 className='text-Secondary'>ABOUT US</h2>
                </div>
                {/* Buttons */}
                <div className='flex gap-2'>
                    <Button variant='outline'>
                        <SmallerThan />
                    </Button>
                    <Button >
                        <GreaterThan />
                    </Button>
                </div>
            </div>
            {/* Cards */}
            <div className='grid grid-cols-3 gap-5'>
                {reviewsUser.map((review, index) => (
                    <ReviewCard
                        key={index}
                        msg={review.reviewMsg}
                        name={review.name}
                        location={review.location}
                    />
                ))}
            </div>
        </>
    )
}

export default Reviews
