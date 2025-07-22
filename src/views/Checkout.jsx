import React from 'react'
import { BookingDetails, CustomerDetails, PaymentInfo, PaymentDone } from '@/components/shared'
import CheckoutTabs from '@/components/ui/CheckoutTabs'
import { Heading, Paragraph } from "@/components/ui/typography";
function Checkout() {
    return (
        <>
            <div className="container mx-auto px-5 pt-10 pb-[20px] md:pb-[40px] lg:pb-[60px] xl:pb-[70px] 2xl:pb-[80px]">
                {/* Headings */}
                <div className='border-b-1 border-lightGrey py-[14px] md:py-[18px] lg:py-[22px] xl:py-[26px] 2xl:py-[30px]'>
                    <Heading level="h1Large" className="text-Black uppercase font-[900]">
                        Checkout
                    </Heading>

                </div>

                <div className='flex flex-col lg:flex-row gap-5 pt-[20px] md:pt-[40px] lg:pt-[60px] xl:pt-[70px] 2xl:pt-[80px]'>
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
