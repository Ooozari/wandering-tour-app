import React from 'react'
import { Secure } from '@/svgs/Icons'
import { Heading, Paragraph } from "@/components/ui/typography";
function BookingDetails() {
    return (
        <>
            <div className="inline-flex flex-col">
                {/* Header rectangle */}
                <Heading level="h5" className="w-full bg-Secondary text-White rounded-tl-3xl rounded-tr-3xl rounded-b-lg px-6 py-4 text-center font-[900]">
                    SE Asia Culinary Journey (2024)
                </Heading>



                {/* Card Body */}
                <div className="bg-White w-full p-6 rounded-b-3xl shadow-md space-y-3">

                    <div className='border-b-1 border-lightGrey py-3'>
                        <div className='font-semibold text-lg flex gap-2 justify-between'>
                            <div>
                                <Paragraph size="sm" className="text-Grey">
                                    Wander Across Iraq -
                                </Paragraph>
                                <Paragraph size="sm" className="text-Grey">
                                    Shared Room<span className="text-Black"> × 1</span>
                                </Paragraph>

                            </div>
                            <div className='space-y-1 text-end'>
                                <Paragraph size="sm" className="text-darkGrey">
                                    $500
                                </Paragraph>
                                <Paragraph size="sm" className="text-darkGrey">
                                    $3,975 payable in total
                                </Paragraph>

                            </div>
                        </div>
                    </div>

                    <div className='border-b-1 border-b-lightGrey py-3'>
                        <div className='font-semibold text-lg flex gap-2 justify-between'>
                            <div>
                                <Paragraph size="sm" className="text-Grey">
                                    SE Asia Culinary Journey (2024) -
                                </Paragraph>
                                <Paragraph size="sm" className="text-Grey">
                                    Shared Room<span className="text-Black"> × 1</span>
                                </Paragraph>

                            </div>

                            <div className='space-y-1 text-end'>
                                <Paragraph size="sm" className="text-darkGrey">
                                    $500
                                </Paragraph>
                                <Paragraph size="sm" className="text-darkGrey">
                                    $4,450 payable in total
                                </Paragraph>

                            </div>
                        </div>
                    </div>

                    <div className='border-b-1 border-b-lightGrey py-3'>
                        <div className='font-semibold text-lg flex justify-between'>
                            <Paragraph size="sm" className="text-Grey">
                                Subtotal
                            </Paragraph>
                            <Paragraph size="sm" className="text-darkGrey">
                                $1,000
                            </Paragraph>

                        </div>

                    </div>

                    <div className='border-b-1 border-b-lightGrey py-3 space-y-3'>
                        <div className='font-semibold text-lg flex justify-between'>
                            <Paragraph size="sm" className="text-Black">
                                Due Today
                            </Paragraph>
                            <Paragraph size="sm" className="text-Secondary">
                                $1,000
                            </Paragraph>

                        </div>
                        <div className='font-semibold text-lg flex justify-between'>
                            <Paragraph size="sm" className="text-Black">
                                Future Payments
                            </Paragraph>
                            <Paragraph size="sm" className="text-Secondary">
                                $7,425
                            </Paragraph>

                        </div>
                    </div>

                    <div className='flex flex-col gap-3 py-3'>
                        <Paragraph size="sm" className="text-Primary underline text-center">
                            Payment Terms and Schedule
                        </Paragraph>
                        <div className="inline-flex items-center space-x-1 bg-[#1AA9030D] p-2 rounded-[8px] mx-auto">
                            <span><Secure /></span>
                            <Paragraph size="sm" className="text-Positive">Secure Checkout</Paragraph>
                        </div>

                    </div>


                </div>
            </div>

        </>
    )
}

export default BookingDetails
