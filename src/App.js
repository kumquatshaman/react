import React from 'react'
import "./App.css"
import SwatchCreator from "./components/SwatchCreator"

const App = () => {
    return(
        <div className = "App">
            <SwatchCreator faveColor = "blue"/>
            <p>colour picker</p>
        </div>
    )
}

export default App