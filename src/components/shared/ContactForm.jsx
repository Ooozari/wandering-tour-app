import React from 'react'
import { input as Input } from '@/components/ui/input'

function ContactForm({inputBorder}) {
    
    return (
        <div className='flex flex-col mx-auto gap-4 w-[80%]'>
            <div className='flex flex-col gap-3 sm:flex-row'>
                <div className='w-full flex flex-col gap-1 md:gap-2'>
                    <label>First Name</label>
                    <Input type='text' placeholder="Write" className={inputBorder} />
                </div>
                <div className='w-full flex flex-col gap-1 md:gap-2'>
                    <label>Last Name</label>
                    <Input type='text' placeholder="Write" className={inputBorder} />
                </div>
            </div>
            <div className='flex flex-col gap-1 md:gap-2'>
                <label>Email Address</label>
                <Input type='email' placeholder="Write" className={inputBorder} />
            </div>
            <div className='flex flex-col gap-1 md:gap-2'>
                <label>Message</label>
                <Input type='text' placeholder="Write..." className={inputBorder} />
            </div>
        </div>
    )
}

export default ContactForm
