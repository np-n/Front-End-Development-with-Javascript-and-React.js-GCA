import React from 'react'
import { useState } from 'react'
import SecondHookComponent from './secondComponent'
import natureImage from '../image/natureImage.jpeg'
import { useHistory } from 'react-router-dom'

export default function FirstHookComponent() {
    // initialize useHistory( )
    let history = useHistory()

    // setState is replaced by
    // useState() in react hook
    // const [state, setstate] = useState(initialState)
    // Here 0 is default value/initialState
    const [counter, changeCounter] = useState(0)
    const [isLightOn, setLightOnOff] = useState(false)
    const [imageUrl, setImageUrl] = useState('https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.cKsIqa8C2cv7vezivnpo4wHaJ4%26pid%3DApi%26h%3D160&f=1')

    function handleLight() {
        if (isLightOn) {
            setImageUrl('https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.zHtYy800GhmmVF2UfkgymwHaJ4%26pid%3DApi%26h%3D160&f=1')
        }
        else {
            setImageUrl('https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.cKsIqa8C2cv7vezivnpo4wHaJ4%26pid%3DApi%26h%3D160&f=1')
        }
        // to toogle light on-off
        setLightOnOff(!isLightOn)
    }

    return (
        <div>
            <div>Counter value {counter}</div>
            <div><button
                onClick={() => changeCounter(counter + 1)} >Increase counter</button></div>
            <img
                onClick={() => handleLight()}
                src={imageUrl} />
            <hr />
            <SecondHookComponent
                imageUrl={imageUrl}
                counter={counter}
                natureImage={natureImage} />
            <hr />
            <button onClick={() => history.push('component')}>Change Route</button>
            <hr />
            Enter name: <input type="text" /><br />
            Enter Id: <input type="text" /><br />
            {/* Passing value to route using url and state */}
            <button
                onClick={() => history.push('user/profile/00111111/netra',{post:"Manager"})}>
                Change route by passing value from url</button>
        </div>
    )
}