import React from 'react'
import { RelatedTourSmall, ReserveNow, Details } from '@/components/shared'
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

function TourDetails() {
    return (
        <>
            <div>
                {/* hero section */}

                {/* Tabs and reserve now*/}
                <div className="flex flex-col md:flex-row gap-15 justify-between">
                    <div className="inline-block max-w-2/3 bg-Primary">
                        <Tabs defaultValue="Details" className="inline-block">
                            <div className="flex flex-col gap-4">
                                <TabsList className="flex w-full gap-2">
                                    <TabsTrigger value="Details">Details</TabsTrigger>
                                    <TabsTrigger value="Gallery">Gallery</TabsTrigger>
                                    <TabsTrigger value="Map">Map</TabsTrigger>
                                    <TabsTrigger value="Itinerary">Itinerary</TabsTrigger>
                                    <TabsTrigger value="Essentials">Tour Essentials</TabsTrigger>
                                    <TabsTrigger value="Included">What's Included</TabsTrigger>
                                </TabsList>

                                <TabsContent value="Details" className="w-full">
                                    <Details />
                                </TabsContent>
                                <TabsContent value="Gallery" className="w-full">Gallery</TabsContent>
                                <TabsContent value="Map" className="w-full">Map</TabsContent>
                                <TabsContent value="Itinerary" className="w-full">Itinerary</TabsContent>
                                <TabsContent value="Essentials" className="w-full">Tour Essentials</TabsContent>
                                <TabsContent value="Included" className="w-full">What's Included</TabsContent>
                            </div>
                        </Tabs>
                    </div>

                    <div className='w-full lg:max-w-[35%] bg-Middle'>
                        <ReserveNow />
                    </div>
                </div>



                {/* related tours */}
                <div>
                    <RelatedTourSmall
                        title='Related Tours' />
                </div>
            </div>
        </>
    )
}

export default TourDetails
