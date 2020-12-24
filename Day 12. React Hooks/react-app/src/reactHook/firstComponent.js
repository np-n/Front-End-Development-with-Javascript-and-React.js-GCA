import React from 'react'
import {useState} from 'react'

export default function FirstComponent() {
    // setState is replaced by
    // useState() in react hook
    // const [state, setstate] = useState(initialState)
    // Here 0 is default value/initialState
    const [counter, changeCounter] = useState(0)
    const [imageUrl,setImageUrl] = useState('https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.cKsIqa8C2cv7vezivnpo4wHaJ4%26pid%3DApi%26h%3D160&f=1')
 
    return (
        <div>
            <div>Counter value {counter}</div>
            <div><button 
            onClick={()=> changeCounter(counter+1)} >Increase counter</button></div>
            <img 
            onClick={()=>setImageUrl('https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.zHtYy800GhmmVF2UfkgymwHaJ4%26pid%3DApi%26h%3D160&f=1')}
            src={imageUrl}/>
        </div>
    )
}
