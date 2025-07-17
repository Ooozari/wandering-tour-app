import React from 'react'
import { Success } from '@/svgs/Icons'

function PaymentDone() {
    return (
        <>
            <div className="flex flex-col justify-center items-center py-[50px] gap-6">
                <div className="bg-[#E9482B0D] rounded-full w-35 h-35 flex items-center justify-center">
                    <Success />
                </div>
                <p className="text-darkGrey text-center">Your Payment Was Successful!</p>
            </div>

        </>
    )
}

export default PaymentDone
