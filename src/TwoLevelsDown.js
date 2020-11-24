import React from "react"
import ThreeLevelsDown from './ThreeLevelsDown';

const TwoLevelsDown = () => {
    return (
        <div>
           <p>Two Levels Down! ⬇️</p>
           <ThreeLevelsDown />
        </div>
    )
}

export default TwoLevelsDown