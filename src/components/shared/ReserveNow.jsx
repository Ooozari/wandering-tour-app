'use client'
import React from 'react'
import { SaleIcon } from '@/svgs/Icons';
import { useState } from 'react'
import { Button } from '@/components/ui/Button'
import { Heading, Paragraph } from "@/components/ui/typography";
export default function ReserveNow() {
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
      <div className="w-full inline-flex flex-col mt-10">
        {/* Header with circle and rectangle */}
        <div className="relative w-full">
          {/* Circle */}
          <div className="absolute -top-1/2 left-1/2 -translate-x-1/2 pt-4 px-4 pb-0 bg-Secondary text-White rounded-t-full flex items-center justify-center z-10">
            <SaleIcon className='w-7 h-7' />
          </div>

          {/* Rectangle Header (full width) */}
          <Heading level="h6" className="w-full bg-Secondary text-White rounded-tl-3xl rounded-tr-3xl rounded-b-lg px-6 py-4 text-center text-lg font-[900]">
            RESERVE NOW
          </Heading>

        </div>

        {/* Card Body */}
        <div className="bg-White w-full p-6 rounded-b-3xl shadow-md">
          {/* Choose option */}
          <div>
            <Paragraph size="md" className="text-Grey font-semibold mb-2">
              Choose an Option:
            </Paragraph>
            <div className='flex flex-col lg:flex-row gap-2.5 w-full'>
              <div className="flex items-center border border-Secondary rounded-2xl px-3 py-2 w-full justify-between">
                <div>
                  <Paragraph size="xs">
                    Shared Room
                  </Paragraph>

                  <Paragraph size="subText" className="text-Secondary font-bold">
                    $3,789
                  </Paragraph>

                </div>
                <Paragraph size="md" className="text-Negative font-bold">
                  Sold
                </Paragraph>

              </div>

              <div className="flex items-center justify-between px-3 py-2
                border rounded-2xl border-lightGrey w-full">
                <div>
                  <Paragraph size="xs">Single Supplement</Paragraph>
                  <Paragraph size="subText" className="text-Primary font-bold">$4,449</Paragraph>
                </div>
                <div className="text-Negative font-semibold text-lg">
                  <input type="radio" name="option" className="accent-Primary w-[16px] h-[16px] sm:w-[18px] sm:h-[18px] md:w-[20px] md:h-[20px] lg:w-[22px] lg:h-[22px] xl:w-[22px] xl:h-[22px] 2xl:w-[24px] 2xl:h-[24px]
"/>
                </div>
              </div>
            </div>
          </div>

          {/* Payment */}
          <div className="mt-4">
            <Paragraph size="md" className="text-Grey mb-2 font-semibold">Payment:</Paragraph>
            <div className="flex flex-col lg:flex-row gap-2.5">
              <div className="flex justify-between items-center px-[10px] py-[16px] border rounded-2xl border-lightGrey gap-3 w-full">
                <label><Paragraph size="xs" className='font-medium'>Pay Deposit</Paragraph></label>
                <input type="radio" name="payment" className="accent-Primary w-[16px] h-[16px] sm:w-[18px] sm:h-[18px] md:w-[20px] md:h-[20px] lg:w-[22px] lg:h-[22px] xl:w-[22px] xl:h-[22px] 2xl:w-[24px] 2xl:h-[24px]" />
              </div>
              <div className="flex justify-between items-center px-[10px] py-[16px] border rounded-2xl border-lightGrey gap-3 w-full">
                <label><Paragraph size="xs" className='font-medium'>Pay in Full</Paragraph></label>
                <input type="radio" name="payment" className="accent-Primary w-[16px] h-[16px] sm:w-[18px] sm:h-[18px] md:w-[20px] md:h-[20px] lg:w-[22px] lg:h-[22px] xl:w-[22px] xl:h-[22px] 2xl:w-[24px] 2xl:h-[24px]" />
              </div>
            </div>
          </div>

          {/* Person Count */}
          <div className="my-6">
            <Paragraph size='md' className="text-Grey text-xl font-semibold">
              Pay a Deposit of <span className="text-Primary">$500 per person</span>:
            </Paragraph>

            {/* Buttons */}
            <div className='flex gap-2.5 items-center mt-[24px] md:mt-[32px] lg:mt-[36px] xl:mt-[40px]'>
              {/* ButtonsIncDec */}
              <div className="flex-1 flex">
                <Button variant="outline" className="w-full flex justify-between items-center hover:text-White group">
                  <p onClick={handlepersonCounterDec} className="text-darkGrey text-2xl font-bold">-</p>
                  <p>{personCounter}</p>
                  <p
                    onClick={handlepersonCounterInc}
                    className="text-Secondary group-hover:text-White text-2xl font-bold"
                  >
                    +
                  </p>
                </Button>

              </div>

              {/* CheckOutButton */}
              <div className='flex-1'>
                <Button className="w-full group">
                  <Paragraph size="normal" className='text-White group-hover:text-Primary'>Checkout</Paragraph>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>

    </>
  )
}



