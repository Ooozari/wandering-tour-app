import React from 'react'

function PastTour(Year, imgUrl, Status, title, content, bookSpot, location, days, btnText) {
    return (
        <>
            <div>
                <div>
                    <h1>{Year} Tour</h1>
                </div>
                <div>
                    <TourCardSmall
                        imgUrl={imgUrl}
                    />
                </div>

            </div>
        </>
    )
}

export default PastTour
