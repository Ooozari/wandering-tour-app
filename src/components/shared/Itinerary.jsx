'use client'
import React, { useState } from 'react'
import { LocationIcon, DishIcon, CalenderIcon, Dropdown } from '@/svgs/Icons'
import { Heading, Paragraph } from "@/components/ui/typography";
function Itinerary({ date, route, highlights, included, notes1, notes2, status }) {
    const [showDetails, setShowDetails] = useState(false)

    return (
        <div className='px-3 py-4 border-1 border-lightGrey rounded-2xl shadow-lg'>
            {/* Topbar */}
            <div className='flex justify-between items-center'>
                <Paragraph size="md" className="flex gap-2.5">
                    <span className="text-Black font-extrabold">{date}</span>
                    <span className="text-lightGrey"> | </span>
                    <span className="text-Primary font-medium">{route}</span>
                    {status && <span className="text-Secondary font-medium">(arrival day)</span>}
                </Paragraph>

                <div onClick={() => setShowDetails(!showDetails)} className="cursor-pointer">
                    <Dropdown />

                </div>
            </div>

            {/* Details */}
            {showDetails && (
                <div className='p-1'>
                    <ol className='list-none text-Black space-y-1 flex flex-col '>
                        <li className='flex items-center gap-2 '>
                            <LocationIcon />
                            <Paragraph size="md">
                                <span className="font-semibold">Highlights:</span> <span>{highlights}</span>
                            </Paragraph>

                        </li>
                        <li className='text-lightGrey pl-3'> | </li>
                        <li className='flex items-center gap-2'>
                            <DishIcon />
                            <Paragraph size="md">
                                <span className='font-semibold'>Included:</span> <span>{included}</span>
                            </Paragraph>
                        </li>
                        <li className='text-lightGrey pl-3'> | </li>
                        <li className='flex items-start gap-2'>
                            <div>
                                <CalenderIcon />
                            </div>
                            <div>
                                <div className="space-y-2.5 ">
                                    <Paragraph size="md">{notes1}</Paragraph>
                                    {notes2 && <Paragraph size="md">{notes2}</Paragraph>}
                                </div>
                            </div>

                        </li>
                    </ol>
                </div>
            )}
        </div>
    )
}

export default Itinerary
