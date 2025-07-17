import React from 'react'
import {touressentials1,touressentials2,touressentials3,touressentials4,touressentials5,touressentials6} from '@/assets'

import {HighlightCard} from '@/components/shared'

function TourEssentials() {
    const TourEssentials = [
        {
        svgImg: touressentials1,
        title:'Medium Physical Level',
        text: 'While the tour itself is not very strenuous, please note that it can involve the following: somewhat long days, a good amount of walking, being in the sun in potentially hot temperatures, long journeys, early morning wake-ups and other similar scenarios.'
        },
        {
        svgImg: touressentials2,
        title:'Medium Physical Level',
        text: `We'll stay in 3* and 4* hotels during this trip. Accommodation is mid-range and all rooms have a private bathroom. There is a maximum of 6 single rooms available, offered on a first come-first served basis. The remainder of the rooms will be shared. Solo travelers will be paired together, two travelers per room in two single beds. (*Please note: If you book a shared room and we cannot find another traveler to share that room, there will be an extra surcharge for having a single room.)`
        },
        {
        svgImg: touressentials3,
        title:'Transport',
        text:  `During the trip, we'll get around with a combination of comfortable vans, public transportation and short flights between countries.`
        },
        {
        svgImg: touressentials4,
        title:'Meals',
        text: `Breakfast every day, 7 lunches and 10 dinners are included. With included meals, some will be served family style, others will involve food tasting at several places and other times you will be able to order anything you wish from the menu. All dietary restrictions can be accommodated.`
        },
        {
        svgImg: touressentials5,
        title:'Sustainability',
        text: `As with all of our trips, we aim to offer as sustainable an experience as we can. Reusable water bottles and shopping bags are provided to all guests, trash is recycled where possible and we avoid mass tourism activities that cause harm to the environment and/or do not benefit local communities.`
        },
        {
        svgImg: touressentials6,
        title:'Small Groups',
        text:  `This tour requires a minimum of 8 participants and has a maximum of 12 participants in order to ensure the best small group tour experience. With such a small group, you'll be able to enjoy unique, rewarding activities that would not be accessible with more people. That's the kind of trip we love to offer!`
        },

    ]
    return (
        <>
            {/* Highlight Cards*/}
            <div className="grid gap-5 grid-cols-1 lg:grid-cols-2">
                {TourEssentials.map((item, index) => (
                    <HighlightCard
                        key={index}
                        title={item.title}
                        svgImg={item.svgImg}
                        text={item.text}
                    />
                ))}
            </div>
        </>
    )
}

export default TourEssentials
