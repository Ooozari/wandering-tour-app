import React from 'react'
import { BookingDetails, CustomerDetails, PaymentInfo, PaymentDone } from '@/components/shared'
import CheckoutTabs from '@/components/ui/CheckoutTabs'

function Checkout() {
    return (
        <>
            <div className="container mx-auto px-4 py-10">
                {/* Headings */}
                <div className='border-b-1 border-lightGrey py-4'>
                    <h1 className='text-3xl md:text-5xl lg:text-6xl font-[900] text-Black uppercase'>Checkout</h1>
                </div>

                <div className='flex flex-col lg:flex-row gap-5 pt-10'>
                    {/* tabs */}
                    <div className='w-full lg:max-w-[60%] '>
                        <CheckoutTabs>
                            <div><CustomerDetails /></div>
                            <div><PaymentInfo /></div>
                            <div><PaymentDone /></div>
                        </CheckoutTabs>
                    </div>
                    {/* right */}
                    <div>
                        <BookingDetails />
                    </div>
                </div>
            </div>

        </>
    )
}

export default Checkout
