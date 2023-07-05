import React, { useEffect } from 'react'


const StarRating = (rate) => {
    /* console.log(rate.rate) */

    let counter = [];

    const createCounter = (n) => {
        
        let counter = [];
        for (let i = 0; i < n; i++) {
            counter.push(i)
        }
        return counter
    }
    useEffect(() => {
        counter = createCounter(rate.rate)
    }, [])
    return (
        counter.forEach((element) => {
            return (
                <div>a</div>
            )
        })
            
    )

}

export default StarRating