import React, { useState } from 'react'
import { Rating } from '@mui/material'

function RatingTest() {
    const [value, setValue] = useState(2)
    return (
        <Rating
            value={value}
            onChange={(e, newValue) => {
                setValue(newValue)
            }}
            precision={0.2}
            size='large'
        />


    )
}

export default RatingTest