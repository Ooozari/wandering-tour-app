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
            <div className='flex md:flex-row flex-col gap-15'>

                {/* Cart Table */}
                <div className='w-full md:w-[60%] flex flex-col gap-12'>
                    {/* Cart Table */}
                    <div className='bg-White px-2 py-4 shadow-lg border-1 border-strokeLight rounded-2xl '>
                        <table className="w-full border-collapse">
                            <tbody>
                                <tr className="overflow-x-auto w-full border-b">
                                    <td className="p-4">
                                        <Image src={CartItem1} alt="Cart Item 1 Img" className="object-cover rounded-xl" />
                                    </td>

                                    <td className="p-4">
                                        <h3 className="font-medium">Wander Across Iraq - Shared Room</h3>
                                    </td>

                                    <td className="p-4">$3,975</td>

                                    <td className="p-4">
                                        <div className="flex-1 flex">
                                            <Button variant="outline" className="w-full flex justify-between items-center">
                                                <p onClick={handlepersonCounterDec} className='text-darkGrey text-2xl font-bold cursor-pointer'>-</p>
                                                <p>{personCounter}</p>
                                                <p onClick={handlepersonCounterInc} className='text-Secondary text-2xl font-bold cursor-pointer'>+</p>
                                            </Button>
                                        </div>
                                    </td>

                                    <td className="p-4">
                                        <p>$500</p>
                                        <p className="text-sm text-gray-500">$3,975 payable in total</p>
                                    </td>

                                    <td className="p-4">
                                        <CrossDelete />
                                    </td>
                                </tr>
                                <tr className="border-b">
                                    <td className="p-4">
                                        <Image src={CartItem2} alt="Cart Item 2 Img" className="h-20 w-20 object-cover rounded-xl" />
                                    </td>

                                    <td className="p-4">
                                        <h3 className="font-medium">SE Asia Culinary Journey (2024) - Single Supplement</h3>
                                    </td>

                                    <td className="p-4">$4,450</td>

                                    <td className="p-4">
                                        <div className="flex-1 flex">
                                            <Button variant="outline" className="w-full flex justify-between items-center">
                                                <p onClick={handlepersonCounterDec} className='text-darkGrey text-2xl font-bold cursor-pointer'>-</p>
                                                <p>{personCounter}</p>
                                                <p onClick={handlepersonCounterInc} className='text-Secondary cursor-pointer text-2xl font-bold'>+</p>
                                            </Button>
                                        </div>
                                    </td>

                                    <td className="p-4">
                                        <p>$500</p>
                                        <p className="text-sm text-gray-500">$3,975 payable in total</p>
                                    </td>

                                    <td className="p-4 cursor-pointer">
                                        <CrossDelete className='cursor-pointer' />
                                    </td>
                                </tr>
                                <tr>
                                    <td colSpan={6} className='text-right'>
                                        <Button variant='lightSecondary' size='lg' className='font-bold'>Update Cart</Button>
                                    </td>
                                </tr>

                                {/* Add more rows as needed */}
                            </tbody>
                        </table>

                    </div>

                    {/* Coupon */}
                    <div className='py-2 px-4 bg-white shadow-lg border-1 border-strokeLight rounded-2xl flex flex-col gap-4'>
                        <p className='text-Secondary font-semibold' >If you have a coupon code, please apply it below.</p>
                        <Input type='text' placeholder="Write" className='py-2'/>
                        <div>
                            <Button variant='lightPrimary' className='w-full font-semibold text-[16px]' >Apply Coupon</Button>
                        </div>
                    </div>
                </div>

                {/* Cart Total */}
                <div className='w-full md:w-[30%] rounded-t-3xl rounded-b-3xl'>
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
