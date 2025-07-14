import React from 'react'
import { Button } from '@/components/ui'
function Cart() {
    return (
        <>
            <div className='px-5 py-6 bg-White'>
                <div className='rounded-t-3xl rounded-b-3xl'>
                    {/* Top */}
                    <div className=' flex items-center justify-center bg-Secondary rounded-t-3xl rounded-b-[10px] w-full'>
                        <h5 className='text-center text-White font-[900] py-3 text-2xl uppercase'>Cart Totals</h5>
                    </div>

                    {/* text */}
                    <div className='px-5 py-7 w-full rounded-b-3xl shadow-lg flex flex-col gap-8'>
                        {/* Totals */}
                        <div className='flex flex-col'>
                            <div className='border-b border-lightGrey py-5 flex justify-between items-center'>
                                <p className='text-darkGrey'>Subtotal</p>
                                <p className='text-lightGrey'>$1,000</p>
                            </div>
                            <div className='border-b border-lightGrey py-5 flex justify-between items-center'>
                                <p className='font-[600] text-Black text-lg'>Due Today</p>
                                <p className='font-[600] text-Secondary text-xl'>$1,000</p>
                            </div>
                            <div className='border-b border-lightGrey py-5 flex justify-between items-center'>
                                <p className='text-darkGrey'>Future Payments</p>
                                <p className='text-lightGrey'>$7,425</p>
                            </div>
                        </div>

                        {/* Terms and Schedule */}
                        <div className='text-Primary font-[400] underline text-lg text-center hover:cursor-pointer'>Payment Terms and Schedule</div>
                        {/* Button */}
                        <div>
                            <Button className='text-[16px] w-full text-White font-bold'>Proceed to Checkout</Button>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Cart
