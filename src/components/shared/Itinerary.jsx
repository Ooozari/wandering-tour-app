'use client'
import React, { useState } from 'react'
import { LocationIcon, DishIcon, CalenderIcon, Dropdown } from '@/svgs/Icons'

function Itinerary({ date, route, highlights, included, notes1, notes2, status }) {
    const [showDetails, setShowDetails] = useState(false)

    return (
            <div className='px-3 py-4 border-1 border-lightGrey rounded-2xl shadow-lg'>
                {/* Topbar */}
                <div className='flex justify-between items-center'>
                    <p className='flex gap-2.5'>
                        <span className='text-Black font-extrabold text-lg'>{date}</span>
                        <span className='text-lightGrey'> | </span>
                        <span className='text-Primary font-semibold text-lg'>{route}</span>
                        {status && (<span className='text-Secondary'>(arrival day)</span>)}
                    </p>
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
                                <p>
                                    <span className='font-semibold'>Highlights:</span> <span>{highlights}</span>
                                </p>
                            </li>
                            <li className='text-lightGrey pl-3'> | </li>
                            <li className='flex items-center gap-2'>
                                <DishIcon />
                                <p>
                                    <span className='font-semibold'>Included:</span> <span>{included}</span>
                                </p>
                            </li>
                            <li className='text-lightGrey pl-3'> | </li>
                            <li className='flex items-start gap-2'>
                                <CalenderIcon />
                                <div>
                                    <div className="space-y-2.5 ">
                                        <p className="text-wrap">{notes1}</p>
                                        {notes2 && <p className="text-wrap">{notes2}</p>}
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
