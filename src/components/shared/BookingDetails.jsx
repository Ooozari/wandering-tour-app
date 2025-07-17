import React from 'react'
import { Secure } from '@/svgs/Icons'

function BookingDetails() {
    return (
        <>
            <div className="inline-flex flex-col mt-10">
                {/* Header rectangle */}
                <div className="w-full bg-Secondary text-White rounded-tl-3xl rounded-tr-3xl rounded-b-lg px-6 py-4 text-center text-lg font-[900]">
                    SE Asia Culinary Journey (2024)
                </div>


                {/* Card Body */}
                <div className="bg-White w-full p-6 rounded-b-3xl shadow-md space-y-3">

                    <div className='border-b-1 border-lightGrey py-3'>
                        <div className='font-semibold text-lg flex gap-2 justify-between'>
                            <div>
                                <p className='text-Grey'>Wander Across Iraq -</p>
                            <p className='text-Grey'>Shared Room<span className='text-Black'> × 1</span></p>
                            </div>
                            <div className='space-y-1 text-end'>
                                <p className='text-darkGrey'>$500</p>
                                <p className='text-darkGrey'>$3,975 payable in total</p>
                            </div>
                        </div>
                    </div>

                    <div className='border-b-1 border-b-lightGrey py-3'>
                        <div className='font-semibold text-lg flex gap-2 justify-between'>
                            <div>
<p className='text-Grey'>SE Asia Culinary Journey (2024) -</p>
                            <p className='text-Grey'>Shared Room<span className='text-Black'> × 1</span></p>
                            </div>
                            
                            <div className='space-y-1 text-end'>
                                <p className='text-darkGrey'>$500</p>
                                <p className='text-darkGrey'>$4,450 payable in total</p>
                            </div>
                        </div>
                    </div>

                    <div className='border-b-1 border-b-lightGrey py-3'>
                        <div className='font-semibold text-lg flex justify-between'>
                            <p className='text-Grey'>Subtotal</p>
                            <p className='text-darkGrey'>$1,000</p>
                        </div>

                    </div>

                    <div className='border-b-1 border-b-lightGrey py-3 space-y-3'>
                        <div className='font-semibold text-lg flex justify-between'>
                            <p className='text-Black'>Due Today</p>
                            <p className='text-Secondary'>$1,000</p>
                        </div>
                        <div className='font-semibold text-lg flex justify-between'>
                            <p className='text-Black'>Future Payments</p>
                            <p className='text-Secondary'>$7,425</p>
                        </div>
                    </div>

                    <div className='flex flex-col gap-3 py-3'>
                        <span className='text-Primary underline text-center'>Payment Terms and Schedule</span>
                        <span className='inline-flex items-center space-x-1 bg-[#1AA9030D] p-2 rounded-[8px] mx-auto'>
                            <span><Secure /></span>
                            <span className='text-Positive'>Secure Checkout</span>
                        </span>
                    </div>


                </div>
            </div>

        </>
    )
}

export default BookingDetails
