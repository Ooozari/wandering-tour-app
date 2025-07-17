import React from 'react'
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import { input as Input } from '@/components/ui/input'
import { Button } from '@/components/ui'

function CustomerDetails() {
    const inputBorder = 'border-lightGrey'
    return (
        <>

            <div className='space-y-10'>
                <div className='flex flex-col gap-4'>
                    <div className='flex flex-col gap-3 sm:flex-row'>
                        {/* First Name */}
                        <div className='w-full flex flex-col gap-1 md:gap-2'>
                            <label className='text-Black'>First Name</label>
                            <Input type='text' placeholder="Write" className={inputBorder} />
                        </div>
                        {/* Last Name */}
                        <div className='w-full flex flex-col gap-1 md:gap-2'>
                            <label className='text-Black'>Last Name</label>
                            <Input type='text' placeholder="Write" className={inputBorder} />
                        </div>
                    </div>
                    <div className='flex flex-col gap-3 sm:flex-row'>
                        <div className='w-full flex flex-col gap-1 md:gap-2'>
                            {/* Drop down Country */}
                            <label className='text-Black'>Country / Region</label>
                            <Select>
                                <SelectTrigger className="w-full">
                                    <SelectValue placeholder="Select" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="asia">Asia</SelectItem>
                                    <SelectItem value="europe">Europe</SelectItem>
                                    <SelectItem value="north-america">North America</SelectItem>
                                    <SelectItem value="south-america">South America</SelectItem>
                                    <SelectItem value="africa">Africa</SelectItem>
                                    <SelectItem value="middle-east">Middle East</SelectItem>
                                    <SelectItem value="oceania">Oceania</SelectItem>
                                    <SelectItem value="central-asia">Central Asia</SelectItem>
                                    <SelectItem value="caribbean">Caribbean</SelectItem>
                                    <SelectItem value="antarctica">Antarctica</SelectItem>

                                </SelectContent>
                            </Select>
                        </div>
                        {/* Street Address */}
                        <div className='w-full flex flex-col gap-1 md:gap-2'>
                            <label className='text-Black'>Street Address</label>
                            <Input type='text' placeholder="Write" className={inputBorder} />
                        </div>
                    </div>
                    <div className='flex flex-col gap-3 sm:flex-row'>
                        {/* Drop down Town City */}
                        <div className='w-full flex flex-col gap-1 md:gap-2'>
                            <label className='text-Black'>Town / City</label>
                            <Input type='text' placeholder="Write" className={inputBorder} />

                        </div>
                        <div className='w-full flex flex-col gap-1 md:gap-2'>
                            <label className='text-Black'>State</label>
                            <Select>
                                <SelectTrigger className="w-full">
                                    <SelectValue placeholder="Select" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="california">California</SelectItem>
                                    <SelectItem value="texas">Texas</SelectItem>
                                    <SelectItem value="florida">Florida</SelectItem>
                                    <SelectItem value="new-york">New York</SelectItem>
                                    <SelectItem value="illinois">Illinois</SelectItem>
                                    <SelectItem value="arizona">Arizona</SelectItem>
                                    <SelectItem value="nevada">Nevada</SelectItem>
                                    <SelectItem value="washington">Washington</SelectItem>
                                    <SelectItem value="colorado">Colorado</SelectItem>
                                    <SelectItem value="georgia">Georgia</SelectItem>
                                </SelectContent>
                            </Select>
                        </div>
                    </div>
                    <div className='flex flex-col gap-3 sm:flex-row'>
                        <div className='w-full flex flex-col gap-1 md:gap-2'>
                            <label className='text-Black'>ZIP Code</label>
                            <Input type='text' placeholder="Write" className={inputBorder} />
                        </div>
                        <div className='w-full flex flex-col gap-1 md:gap-2'>
                            <label className='text-Black'>Email</label>
                            <Input type='email' placeholder="Write" className={inputBorder} />
                        </div>
                    </div>
                </div>


                <div className='p-4 bg-white shadow-lg border border-strokeLight rounded-2xl flex flex-col gap-4'>
                    <p className='text-Secondary font-semibold'>If you have a coupon code, please apply it below.</p>
                    <Input type='text' placeholder="Write" />
                    <div>
                        <Button variant='lightPrimary' className='w-full font-semibold text-[16px]'>Apply Coupon</Button>
                    </div>
                </div>
            </div>


        </>
    )
}

export default CustomerDetails
