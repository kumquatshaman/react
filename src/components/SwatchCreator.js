import React from 'react'
import colorPickerCard from './colorPickerCard'

const SwatchCreator = (props) => {
    console.log(props);
    return(
        <div>
            <p>I am a swatch creator! my favorite color is {props.faveColor}</p>
            <colorPickerCard />
        </div>
    )
}

export default SwatchCreator