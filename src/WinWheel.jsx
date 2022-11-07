import React, { useState } from 'react'
import { Wheel } from 'react-custom-roulette'

const data = [
    { option: '1' },
    { option: '2' },
    // { option: '3' },
]

const WinWheel = () => {
    const [mustSpin, setMustSpin] = useState(false)
    // const [prizeNumber, setPrizeNumber] = useState(0)
    const [prizeNumber, setPrizeNumber] = useState([])


    const handleSpinClick = () => {
        let newPrizeNumber

        do {
            newPrizeNumber = Math.floor(Math.random() * data.length)

            if (prizeNumber.length === data.length) {
                setPrizeNumber([])
            }


        } while (prizeNumber.includes(newPrizeNumber, 0))
        // setPrizeNumber()
        if (newPrizeNumber < 1) {
            setPrizeNumber([0])
        } else {
            setPrizeNumber([1])
        }
        setMustSpin(true)

        console.log(prizeNumber)
        // console.log(newPrizeNumber)
    }

    return (
        <>
            <Wheel
                mustStartSpinning={mustSpin}
                prizeNumber={prizeNumber}
                data={data}
                spinDuration={1.0}

                onStopSpinning={() => {
                    setMustSpin(false);
                }}
            />
            <button onClick={handleSpinClick}>SPIN</button>
        </>
    )
}

export default WinWheel