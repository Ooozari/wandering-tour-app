'use client';
import React from 'react'
import { useState } from 'react';
import { Button } from '@/components/ui'
import { input as Input } from '@/components/ui/input'
import { CrossDelete } from '@/svgs/Icons'
import Image from 'next/image'
import Link from 'next/link'
import { CartItem1, CartItem2 } from '@/assets'
import { Heading, Paragraph } from "@/components/ui/typography";
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
            <div className='container mx-auto px-5 md:px-10 lg:px-15 xl:px-20 py-14 flex flex-col gap-5 md:gap-10 lg:gap-15'>

                {/* Headings */}
                <div className='border-b-1 border-lightGrey py-4'>
                    <Heading level="h1Large" className="text-Black font-[900] uppercase">
                        Cart
                    </Heading>

                </div>

                <div className='flex md:flex-row flex-col gap-15 '>

                    {/* Cart Table */}
                    <div className='w-full md:w-[65%] flex flex-col gap-12'>
                        <div className='relative bg-White px-2 py-4 shadow-lg border border-strokeLight rounded-2xl'>
                            <div className='overflow-x-auto'>
                                <table className="min-w-[800px] w-full border-collapse">
                                    <tbody>
                                        <tr className="border-b">
                                            <td className='p-4'>
                                                <Image src={CartItem1} alt="Cart Item 1 Img" className="w-full h-full object-cover rounded-xl" />
                                            </td>
                                            <td className="p-4">
                                                <h3 className="font-medium text-Black">Wander Across Iraq - Shared Room</h3>
                                            </td>
                                            <td className="p-4 text-Black">$3,975</td>
                                            <td className="p-4">
                                                <div className="flex-1 flex">
                                                    <Button variant="outline" className="w-full flex justify-between items-center group">
                                                        <Paragraph size="md" onClick={handlepersonCounterDec} className="text-darkGrey text-2xl font-bold cursor-pointer">
                                                            -
                                                        </Paragraph>
                                                        <Paragraph size="md" className="text-darkGrey">
                                                            {personCounter}
                                                        </Paragraph>
                                                        <Paragraph size="md" onClick={handlepersonCounterInc} className="text-Secondary text-2xl font-bold cursor-pointer group-hover:text-White">
                                                            +
                                                        </Paragraph>

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
                                                <Image src={CartItem2} alt="Cart Item 2 Img" className="w-full h-full object-cover rounded-xl" />
                                            </td>
                                            <td className="p-4">
                                                <h3 className="font-medium text-Black">SE Asia Culinary Journey (2024) - Single Supplement</h3>
                                            </td>
                                            <td className="p-4  text-Black">$4,450</td>
                                            <td className="p-4">
                                                <div className="flex-1 flex">
                                                    <Button variant="outline" className="w-full flex justify-between items-center group">
                                                        <Paragraph size="md" onClick={handlepersonCounterDec} className="text-darkGrey text-2xl font-bold cursor-pointer">
                                                            -
                                                        </Paragraph>
                                                        <Paragraph size="md" className="text-darkGrey">
                                                            {personCounter}
                                                        </Paragraph>
                                                        <Paragraph size="md" onClick={handlepersonCounterInc} className="text-Secondary text-2xl font-bold cursor-pointer group-hover:text-White">
                                                            +
                                                        </Paragraph>

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
                                    </tbody>
                                </table>
                            </div>

                            <div className='sticky right-0 bottom-0 flex justify-end bg-White py-4'>
                                <Button variant='lightSecondary' size='lg' className='font-bold'>Update Cart</Button>
                            </div>
                        </div>
                        
                        {/* Coupon */}
                        <div className='p-4 bg-white shadow-lg border border-strokeLight rounded-2xl flex flex-col gap-4'>
                            <Paragraph size='md' className="text-Secondary font-semibold">
                                If you have a coupon code, please apply it below.
                            </Paragraph>

                            <Input type='text' placeholder="Write" />
                            <div>
                                <Button variant='lightPrimary' className='w-full font-semibold'><Paragraph className="font-semibold">
                                    Apply Coupon
                                </Paragraph>
                                </Button>
                            </div>
                        </div>
                    </div>

                    {/* Cart Total */}
                    <div className='w-full md:w-[35%] rounded-t-3xl rounded-b-3xl'>
                        <div className='flex items-center justify-center bg-Secondary rounded-t-3xl rounded-b-[10px] w-full'>
                            <Heading level="h5" className="text-center text-White py-3 uppercase font-extrabold">
                                Cart Totals
                            </Heading>

                        </div>

                        <div className='px-5 pt-2 pb-6 w-full rounded-b-3xl shadow-lg flex flex-col gap-8'>
                            <div className='flex flex-col'>
                                <div className='border-b border-lightGrey py-5 flex justify-between items-center'>
                                    <Paragraph size='sm' className="text-darkGrey">Subtotal</Paragraph>
                                    <Paragraph size='sm' className="text-Grey">$1,000</Paragraph>
                                </div>
                                <div className='border-b border-lightGrey py-5 flex justify-between items-center'>
                                    <Paragraph size='sm' className="font-[600] text-Black">
                                        Due Today
                                    </Paragraph>
                                    <Paragraph className="font-[600] text-Secondary">
                                        $1,000
                                    </Paragraph>
                                </div>
                                <div className='border-b border-lightGrey py-5 flex justify-between items-center'>
                                    <Paragraph size="sm" className="text-darkGrey">
                                        Future Payments
                                    </Paragraph>
                                    <Paragraph size="sm" className="text-Grey">
                                        $7,425
                                    </Paragraph>

                                </div>
                            </div>

                            <Paragraph size="sm" className="text-Primary font-normal underline text-center hover:cursor-pointer">
                                Payment Terms and Schedule
                            </Paragraph>


                            <div>
                                <Link href="/checkout">

                                    <Button className='text-[16px] w-full text-White font-semibold'><Paragraph size="sm" >
                                        Proceed to Checkout
                                    </Paragraph>
                                    </Button></Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Cart
