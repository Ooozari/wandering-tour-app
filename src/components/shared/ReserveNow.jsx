'use client'
import React from 'react'
// import { ShieldIcon } from '@/assets/icons';
import { useState } from 'react'
import { Button } from '@/components/ui/Button'

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
      <div className="inline-flex flex-col">
        {/* Header with circle and rectangle */}
        {/* dont forget to remove mt */}
        <div className="relative mt-9 w-full">
          {/* Circle */}
          <div className="absolute -top-5 left-1/2 -translate-x-1/2 w-10 h-10 bg-Secondary text-White rounded-full flex items-center justify-center z-10">
            {/* <ShieldIcon className="w-12 h-12 text-white" /> */} O
          </div>

          {/* Rectangle Header (full width) */}
          <div className="w-full bg-Secondary text-White rounded-tl-3xl rounded-tr-3xl rounded-b-lg px-6 py-3 text-center text-lg font-bold">
            RESERVE NOW
          </div>
        </div>

        {/* Card Body */}
        <div className="bg-White w-full p-6 rounded-b-3xl shadow-md">
          {/* Choose option */}
          <div>
            <h5 className="text-Grey text-xl mb-2">Choose an Option:</h5>

            <div className='flex gap-2.5'>
              <div className="flex items-center px-[10px] border border-Secondary rounded-2xl gap-10">
                <div>
                  <p className="text-sm">
                    Shared Room
                  </p>
                  <p className="text-xl text-Secondary font-bold">$3,789</p>
                </div>
                <div className="text-Negative font-semibold text-lg">Sold</div>
              </div>

              <div className="flex justify-between items-center px-3 py-2  border rounded-2xl border-lightGrey gap-6">
                <div >
                  <p className="text-sm">Single Supplement</p>
                  <p className="text-lg text-Primary font-bold">$4,449</p>
                </div>
                <div className="text-Negative font-semibold text-lg">
                  <input type="radio" name="option" className="accent-Primary w-6 h-6" />
                </div>
              </div>
            </div>

          </div>

          {/* Payment */}
          <div className="mt-4">
            <h5 className="text-Grey text-xl mb-2">Payment:</h5>
            <div className="flex gap-2.5">
              <div className="flex justify-between items-center px-[10px] py-[16px] border rounded-2xl border-lightGrey gap-6 w-full">
                <label>Pay Deposit</label>
                <input type="radio" name="payment" className="accent-Primary w-6 h-6" />
              </div>
              <div className="flex justify-between items-center px-[10px] py-[16px] border rounded-2xl border-lightGrey gap-6 w-full">
                <label>Pay in Full</label>
                <input type="radio" name="payment" className="accent-Primary w-6 h-6" />
              </div>
            </div>
          </div>

          {/* Person Count */}
          <div className="mt-6">
            <h5 className="text-Grey text-xl">
              Pay a Deposit of <span className="text-Primary font-bold">$500 per person</span>:
            </h5>
            {/* Buttons */}
            <div className='flex gap-2.5 items-center mt-2'>
              {/* ButtonsIncDec */}
              <div className="flex-1 flex">
                <Button variant="outline" className="w-full flex justify-between items-center">
                  <p onClick={handlepersonCounterDec} className='text-darkGrey text-2xl font-bold'>-</p>
                  <p>{personCounter}</p>
                  <p onClick={handlepersonCounterInc} className='text-Secondary text-2xl font-bold'>+</p>
                </Button>
              </div>

              {/* CheckOutButton */}
              <div className='flex-1'>
                <Button className="w-full">Checkout</Button>
              </div>
            </div>
          </div>
        </div>
      </div>

    </>
  )
}



