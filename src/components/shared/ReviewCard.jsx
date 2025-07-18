
import React from 'react'
import { Review, Location } from '@/svgs/Icons'

function ReviewCard({ msg, name, location }) {
    return (
        <div className="flex shadow-md border-1 border-lightGrey flex-col rounded-3xl px-10 py-10 min-h-[300px] h-[400px] ">
            {/* Icon */}
            <div className="flex justify-center mb-4">
                <Review />
            </div>

            {/* Spacer + Message */}
            <div className="flex-1 flex flex-col justify-end">
                <div className="flex-1" />
                <p className="text-Black text-sm text-center mb-6">{msg}</p>
            </div>

            {/* Name */}
            <p className="text-darkGrey text-md font-semibold text-center mb-2">{name}</p>

            {/* Divider */}
            <hr className="border-lightGrey w-full mb-2" />

            {/* Location */}
            <p className="flex justify-center items-center gap-2">
                <Location />
                <span className="text-lightGrey text-sm font-normal">{location}</span>
            </p>
        </div>
    )
}

export default ReviewCard


// import React from 'react';
// import { Review, Location } from '@/svgs/Icons';

// function ReviewCard({ msg, name, location }) {
//     return (
//         <div className="h-full">
//             <div className="flex flex-col bg-White rounded-3xl shadow-lg px-10 py-8 h-full">
//                 {/* Icon */}
//                 <div className="flex justify-center mb-4">
//                     <Review />
//                 </div>

//                 {/* Review Message (Stretch to Fill) */}
//                 <div className="flex-1 flex items-center">
//                     <p className="text-Black text-sm text-center leading-relaxed">{msg}</p>
//                 </div>

//                 {/* Name */}
//                 <p className="text-darkGrey text-md font-semibold text-center mt-6 mb-2">{name}</p>

//                 {/* Divider */}
//                 <hr className="border-lightGrey w-full mb-2" />

//                 {/* Location */}
//                 <p className="flex justify-center items-center gap-2">
//                     <Location />
//                     <span className="text-lightGrey text-sm font-normal">{location}</span>
//                 </p>
//             </div>
//         </div>
//     );
// }

// export default ReviewCard;
