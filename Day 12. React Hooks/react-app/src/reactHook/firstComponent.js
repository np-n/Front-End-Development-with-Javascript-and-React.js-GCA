import React from 'react'
import {useState} from 'react'

export default function FirstComponent() {
    // setState is replaced by
    // useState() in react hook
    // const [state, setstate] = useState(initialState)
    const [counter, changeCounter] = useState(0)
 
    return (
        <div>
            <div>Counter value {counter}</div>
            <div><button onClick={()=> changeCounter(counter+1)} >Increase counter</button></div>
        </div>
    )
}
