import React from 'react'
import { RelatedTourSmall, ReserveNow, Details, Gallery, Map, Itinerary, TourEssentials, WhatIncluded } from '@/components/shared'
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ToursDetailsHeroImg } from '@/assets'
import Image from 'next/image'
import { Heading, Paragraph } from "@/components/ui/typography";

function TourDetails() {
    const itinerary = [
        {
            date: 'Jan 20',
            route: 'Bangkok',
            highlights: 'Arival Day',
            included: 'Dinner',
            notes1: 'Upon arrival, you’ll be picked up at the airport and taken to our hotel in the city center. After getting settled and having a good rest, we’ll start off with an evening orientation and a group dinner at one of the city’s best restaurants.',
            status: true,
        },
        {
            date: 'Jan 21',
            route: 'Bangkok',
            highlights: `Full-day tour of Bangkok's highlights and markets`,
            included: 'Breakfast, Lunch, Dinner',
            notes1: `Today, we'll dive into the heart of Bangkok, exploring its rich culture, delicious cuisine, and local hotspots. We'll start off at the Grand Palace, a mesmerizing blend of buildings and temples that were the royal abode for the Kings of Siam. While there, we'll also make a stop at Wat Phra Kaew, the residence of the revered Emerald Buddha, and marvel at the grandeur of the Reclining Buddha at Wat Pho.`,
            notes2: `
            Once we've soaked in the historical significance, we'll move on to the bustling flower market where you'll get hands-on experience in a garland flower arrangement workshop before grabbing lunch at a highly-rated local restaurant. After a break at the hotel to rest and recharge, our evening will take us on a culinary journey through Chinatown. We'll wander its narrow lanes, tasting a mix of time-honored and distinct dishes.`,
            status: false,
        },
        {
            date: 'Jan 22',
            route: 'Bangkok',
            highlights: `Full-day tour of Bangkok's highlights and markets`,
            included: 'Breakfast, Lunch, Dinner',
            notes1: `Today, we'll dive into the heart of Bangkok, exploring its rich culture, delicious cuisine, and local hotspots. We'll start off at the Grand Palace, a mesmerizing blend of buildings and temples that were the royal abode for the Kings of Siam. While there, we'll also make a stop at Wat Phra Kaew, the residence of the revered Emerald Buddha, and marvel at the grandeur of the Reclining Buddha at Wat Pho.`,
            notes2: `
            Once we've soaked in the historical significance, we'll move on to the bustling flower market where you'll get hands-on experience in a garland flower arrangement workshop before grabbing lunch at a highly-rated local restaurant. After a break at the hotel to rest and recharge, our evening will take us on a culinary journey through Chinatown. We'll wander its narrow lanes, tasting a mix of time-honored and distinct dishes.`,
            status: false,
        },
        {
            date: 'Jan 23',
            route: 'Bangkok >> Ayutthaya',
            highlights: `Full-day tour of Bangkok's highlights and markets`,
            included: 'Breakfast, Lunch, Dinner',
            notes1: `Today, we'll dive into the heart of Bangkok, exploring its rich culture, delicious cuisine, and local hotspots. We'll start off at the Grand Palace, a mesmerizing blend of buildings and temples that were the royal abode for the Kings of Siam. While there, we'll also make a stop at Wat Phra Kaew, the residence of the revered Emerald Buddha, and marvel at the grandeur of the Reclining Buddha at Wat Pho.`,
            notes2: `
            Once we've soaked in the historical significance, we'll move on to the bustling flower market where you'll get hands-on experience in a garland flower arrangement workshop before grabbing lunch at a highly-rated local restaurant. After a break at the hotel to rest and recharge, our evening will take us on a culinary journey through Chinatown. We'll wander its narrow lanes, tasting a mix of time-honored and distinct dishes.`,
            status: false,
        },
        {
            date: 'Jan 24',
            route: 'Ayutthaya >> Bangkok >> Kuala Lumpur',
            highlights: `Full-day tour of Bangkok's highlights and markets`,
            included: 'Breakfast, Lunch, Dinner',
            notes1: `Today, we'll dive into the heart of Bangkok, exploring its rich culture, delicious cuisine, and local hotspots. We'll start off at the Grand Palace, a mesmerizing blend of buildings and temples that were the royal abode for the Kings of Siam. While there, we'll also make a stop at Wat Phra Kaew, the residence of the revered Emerald Buddha, and marvel at the grandeur of the Reclining Buddha at Wat Pho.`,
            notes2: `
            Once we've soaked in the historical significance, we'll move on to the bustling flower market where you'll get hands-on experience in a garland flower arrangement workshop before grabbing lunch at a highly-rated local restaurant. After a break at the hotel to rest and recharge, our evening will take us on a culinary journey through Chinatown. We'll wander its narrow lanes, tasting a mix of time-honored and distinct dishes.`,
            status: false,
        }

    ]
    return (
        <>
            <div>
                {/* hero section */}
                <div className='relative w-full h-screen'>
                    <Image
                        src={ToursDetailsHeroImg}
                        alt='Tours Details Hero Img'
                        className='w-full h-full object-cover'
                        priority
                    />
                    <div
                        className="absolute inset-0"
                        style={{
                            background: "linear-gradient(180deg, rgba(30, 54, 92, 0) 0%, #1E365C 100%)",
                        }}
                    />
                    <div className='absolute inset-0 z-10 flex justify-center items-center text-center px-4'>
                        <Heading level="h1Large" className="text-White font-[900] leading-tight">
                            SE Asia Culinary Journey (2024)
                        </Heading>

                    </div>
                </div>

                {/* Gradient continuation after hero image */}
                <div
                    className="w-full h-[100px] md:h-[200px] " // Adjust height as needed
                    style={{
                        background:
                            "linear-gradient(1800deg, rgba(30, 54, 92, 0) 0%, #1E365C 100%)",
                    }}
                ></div>



                <div className='container mx-auto px-4 py-14'>
                    {/* Tabs and reserve now*/}
                    <div className="flex flex-col gap-10 lg:flex-row lg:gap-15 justify-between">
                        <div className="w-full lg:max-w-[65%]">
                            <Tabs defaultValue="Details" className="w-full">
                                <div className="flex flex-col gap-4">
                                    {/* Tabs List Scrollable on small screens */}
                                    <TabsList className="
                                            flex w-full 
                                            overflow-x-auto
                                            whitespace-nowrap 
                                            flex-nowrap 
                                            scroll-smooth"
                                    >
                                        <TabsTrigger className="min-w-[120px] snap-start" value="Details">Details</TabsTrigger>
                                        <TabsTrigger className="min-w-[120px] snap-start" value="Gallery">Gallery</TabsTrigger>
                                        <TabsTrigger className="min-w-[120px] snap-start" value="Map">Map</TabsTrigger>
                                        <TabsTrigger className="min-w-[120px] snap-start" value="Itinerary">Itinerary</TabsTrigger>
                                        <TabsTrigger className="min-w-[120px] snap-start" value="Essentials">Tour Essentials</TabsTrigger>
                                        <TabsTrigger className="min-w-[120px] snap-start" value="Included">What's Included</TabsTrigger>
                                    </TabsList>


                                    {/* Tabs Content */}
                                    <TabsContent value="Details" className="w-full max-w-full py-5 px-2">
                                        <Details />
                                    </TabsContent>
                                    <TabsContent value="Gallery" className="w-full max-w-full py-5 px-2">
                                        <Gallery />
                                    </TabsContent>
                                    <TabsContent value="Map" className="w-full max-w-full py-5 px-2">
                                        <Map />
                                    </TabsContent>
                                    <TabsContent value="Itinerary" className="w-full max-w-full flex flex-col gap-3 py-5 px-2">
                                        {itinerary.map((item, index) => (
                                            <Itinerary
                                                key={index}
                                                date={item.date}
                                                route={item.route}
                                                highlights={item.highlights}
                                                included={item.included}
                                                notes1={item.notes1}
                                                notes2={item.notes2}
                                                status={item.status}
                                            />
                                        ))}
                                    </TabsContent>
                                    <TabsContent value="Essentials" className="w-full py-5 px-2">
                                        <TourEssentials />
                                    </TabsContent>
                                    <TabsContent value="Included" className="w-full py-5 px-2">
                                        <WhatIncluded />
                                    </TabsContent>
                                </div>
                            </Tabs>
                        </div>

                        <div className="w-full mx-auto lg:max-w-[35%]">
                            <ReserveNow />
                        </div>


                    </div>


                    {/* related tours */}
                    <div className='mt-10 px-5 md:px-8 lg:px-10'>
                        <RelatedTourSmall
                            title='Related Tours' />
                    </div>
                </div>
            </div>
        </>
    )
}

export default TourDetails