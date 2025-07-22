import React from 'react'
import { input as Input } from '@/components/ui/input'
import { Heading, Paragraph } from "@/components/ui/typography";
function ContactForm({ inputBorder,labelText }) {

    return (
        <div className='flex flex-col mx-auto gap-[8px] md:gap-[16px] lg:gap-[24px] xl:gap-[32px] 2xl:gap-[40px] w-[80%]'>
            <div className='flex flex-col gap-[8px] md:gap-[16px] lg:gap-[24px] xl:gap-[32px] 2xl:gap-[40px] sm:flex-row'>
                <div className='w-full flex flex-col gap-[4px] md:gap-[8px] lg:gap-[12px] xl:gap-[14px] 2xl:gap-[16px]'>
                    <label><Paragraph size="normal" className={`block ${labelText}`}>
                        First Name
                    </Paragraph></label>
                    <Input type='text' placeholder="Write" className={inputBorder} />
                </div>
                <div className='w-full flex flex-col gap-[4px] md:gap-[8px] lg:gap-[12px] xl:gap-[14px] 2xl:gap-[16px]'>
                    <label><Paragraph className={`${labelText}`}>
                        Last Name
                    </Paragraph>
                    </label>
                    <Input type='text' placeholder="Write" className={inputBorder} />
                </div>
            </div>
            <div className='flex flex-col gap-[4px] md:gap-[8px] lg:gap-[12px] xl:gap-[14px] 2xl:gap-[16px]'>
                <label><Paragraph className={`${labelText}`}>
                    Email Address
                </Paragraph>
                </label>
                <Input type='email' placeholder="Write" className={inputBorder} />
            </div>
            <div className='flex flex-col gap-[4px] md:gap-[8px] lg:gap-[12px] xl:gap-[14px] 2xl:gap-[16px]'>
                <label><Paragraph className={`${labelText}`}>
                    Message
                </Paragraph>
                </label>
                <textarea
                    placeholder="Write..."
                    className={`border ${inputBorder} resize-none rounded-md px-3 py-2 focus:outline-none focus:ring-0 `}
                    rows={4}
                />

            </div>

        </div>
    )
}

export default ContactForm
