'use client';
import React from 'react'
import { useState } from 'react';
import { Button } from '@/components/ui'
import { input as Input } from '@/components/ui/input'
import { CrossDelete } from '@/svgs/Icons'
import Image from 'next/image'
import { CartItem1, CartItem2 } from '@/assets'
function Cart() {
    const [personCounter, setPersonCounter] = useState(1)
    const handlepersonCounterInc = () => {
        setPersonCounter(personCounter + 1);
    }
    const handlepersonCounterDec = () => {
        if (personCounter <= 1) return
        else {
            setPersonCounter(personCounter - 1);
        }
    }
    return (
        <>
            <div className='px-5 md:px-10 lg:px-15 py-14 flex flex-col gap-5 md:gap-10 lg:gap-15'>
                {/* Headings */}
                <div className='border-b-1 border-lightGrey py-4'>
                    <h1 className='text-6xl font-[900] text-Black'>Cart</h1>
                </div>
                <div className='flex md:flex-row flex-col gap-15 '>
                    {/* Cart Table */}
                    <div className='w-full md:w-[65%] flex flex-col gap-12'>
                        <div className='relative bg-White px-2 py-4 shadow-lg border border-strokeLight rounded-2xl'>
                            {/* Table Scrollable */}
                            <div className='overflow-x-auto'>
                                <table className="min-w-[800px] w-full border-collapse">
                                    <tbody>
                                        <tr className="border-b">
                                            <td className='p-4'>
                                                <Image
                                                    src={CartItem1}
                                                    alt="Cart Item 1 Img"
                                                    className="w-full h-full object-cover rounded-xl"
                                                />
                                            </td>
                                            <td className="p-4">
                                                <h3 className="font-medium text-Black">Wander Across Iraq - Shared Room</h3>
                                            </td>
                                            <td className="p-4 text-Black">$3,975</td>
                                            <td className="p-4">
                                                <div className="flex-1 flex">
                                                    <Button variant="outline" className="w-full flex justify-between items-center">
                                                        <p onClick={handlepersonCounterDec} className='text-darkGrey text-2xl font-bold cursor-pointer'>-</p>
                                                        <p>{personCounter}</p>
                                                        <p onClick={handlepersonCounterInc} className='text-Secondary text-2xl font-bold cursor-pointer'>+</p>
                                                    </Button>
                                                </div>
                                            </td>
                                            <td className="p-4 text-darkGrey">
                                                <p>$500</p>
                                                <p className="text-sm">$3,975 payable in total</p>
                                            </td>
                                            <td className="p-2 sticky right-0 bg-White">
                                                <CrossDelete />
                                            </td>
                                        </tr>

                                        <tr className="border-b">
                                            <td className='p-4'>
                                                <Image
                                                    src={CartItem2}
                                                    alt="Cart Item 2 Img"
                                                    className="w-full h-full object-cover rounded-xl"
                                                />
                                            </td>
                                            <td className="p-4">
                                                <h3 className="font-medium text-Black">SE Asia Culinary Journey (2024) - Single Supplement</h3>
                                            </td>
                                            <td className="p-4  text-Black">$4,450</td>
                                            <td className="p-4">
                                                <div className="flex-1 flex">
                                                    <Button variant="outline" className="w-full flex justify-between items-center">
                                                        <p onClick={handlepersonCounterDec} className='text-darkGrey text-2xl font-bold cursor-pointer'>-</p>
                                                        <p>{personCounter}</p>
                                                        <p onClick={handlepersonCounterInc} className='text-Secondary text-2xl font-bold cursor-pointer'>+</p>
                                                    </Button>
                                                </div>
                                            </td>
                                            <td className="p-4 text-darkGrey">
                                                <p>$500</p>
                                                <p className="text-sm">$3,975 payable in total</p>
                                            </td>
                                            <td className="p-2 sticky right-0 bg-White">
                                                <CrossDelete className='cursor-pointer' />
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>


                            {/* Sticky Update Cart Button (outside scroll) */}
                            <div className='sticky right-0 bottom-0 flex justify-end bg-White py-4'>
                                <Button variant='lightSecondary' size='lg' className='font-bold'>Update Cart</Button>
                            </div>
                        </div>


                        {/* Coupon Section */}
                        <div className='p-4 bg-white shadow-lg border border-strokeLight rounded-2xl flex flex-col gap-4'>
                            <p className='text-Secondary font-semibold'>If you have a coupon code, please apply it below.</p>
                            <Input type='text' placeholder="Write" />
                            <div>
                                <Button variant='lightPrimary' className='w-full font-semibold text-[16px]'>Apply Coupon</Button>
                            </div>
                        </div>
                    </div>

                    {/* Cart Total */}
                    <div className='w-full md:w-[35%] rounded-t-3xl rounded-b-3xl'>
                        <div className='flex items-center justify-center bg-Secondary rounded-t-3xl rounded-b-[10px] w-full'>
                            <h5 className='text-center text-White font-[900] py-3 text-2xl uppercase'>Cart Totals</h5>
                        </div>

                        <div className='px-5 py-7 w-full rounded-b-3xl shadow-lg flex flex-col gap-8'>
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

                            <div className='text-Primary font-[400] underline text-lg text-center hover:cursor-pointer'>Payment Terms and Schedule</div>

                            <div>
                                <Button className='text-[16px] w-full text-White font-bold'>Proceed to Checkout</Button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Cart
