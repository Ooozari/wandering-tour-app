import React from 'react'
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from '@/components/ui/Button'
import { input as Input } from '@/components/ui/input'
import { creditcards } from '@/assets'
import { Heading, Paragraph } from "@/components/ui/typography";
import Image from 'next/image';

function PaymentInfo() {
    const inputBorder = 'border-lightGrey'
    return (
        <>
            <div className='space-y-10'>

                <div className='flex flex-col gap-2'>
                    <div className='shadow-lg rounded-2xl p-5 flex flex-col gap-4'>
                        <Paragraph size="subText" className="font-[900] text-Black uppercase inline-flex items-center gap-2">
                            Credit Card
                            <span>
                                <Image
                                    src={creditcards}
                                    alt="creditcards"
                                />
                            </span>
                        </Paragraph>


                        <div className='w-full flex flex-col gap-3 '>
                            <label className='text-Black'>Card Number</label>
                            <Input type='text' placeholder="Write" className={inputBorder} />
                        </div>
                        <div className='flex flex-col gap-3 sm:flex-row'>
                            {/* First Name */}
                            <div className='w-full flex flex-col gap-1 md:gap-2'>
                                <label className='text-Black'>MM / YY</label>
                                <Input type='text' placeholder="Write" className={inputBorder} />
                            </div>
                            {/* Last Name */}
                            <div className='w-full flex flex-col gap-1 md:gap-2'>
                                <label className='text-Black'>CVV</label>
                                <Input type='text' placeholder="Write" className={inputBorder} />
                            </div>
                        </div>
                    </div>

                    <div className="flex items-center w-full gap-4">
                        <div className="flex-1 h-px bg-strokeLight"></div>
                        <span className="text-Grey ">Or</span>
                        <div className="flex-1 h-px bg-strokeLight"></div>
                    </div>

                    <div className='flex justify-between p-4  shadow-lg border border-strokeLight rounded-2xl'>
                        <Paragraph size="subText" className="text-Black font-[900] uppercase">
                            Direct bank transfer
                        </Paragraph>

                        <div> <input type="radio" name="option" className="accent-Primary w-6 h-6" /></div>
                    </div>
                    <div className="flex items-center w-full gap-4">
                        <div className="flex-1 h-px bg-strokeLight"></div>
                        <span className="text-Grey">Or</span>
                        <div className="flex-1 h-px bg-strokeLight"></div>
                    </div>

                    <div className='flex justify-between p-4  shadow-lg border border-strokeLight rounded-2xl'>
                        <Paragraph size="subText" className="text-Black font-[900] text-lg uppercase">
                            Check payments
                        </Paragraph>

                        <div> <input type="radio" name="option" className="accent-Primary w-6 h-6" /></div>
                    </div>
                </div>

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
                <div className='text-darkGrey space-y-3.5'>
                    <Paragraph size="sm">
                        Your personal data will be used to process your order, support your experience throughout this website, and for other purposes described in our <span className='text-Primary underline hover:cursor-pointer'>privacy policy</span>.
                    </Paragraph>
                    <Paragraph size="sm" className='flex items-center'>
                        <span className='mr-1 lg:mr-1.5 xl:mr-2 2xl:mr-2.5'><Checkbox /></span>I have read and agree to the payment and website<span className='text-Primary underline ml-1 hover:cursor-pointer'>terms and conditions</span>.
                    </Paragraph>

                </div>
            </div>
        </>
    )
}

export default PaymentInfo
