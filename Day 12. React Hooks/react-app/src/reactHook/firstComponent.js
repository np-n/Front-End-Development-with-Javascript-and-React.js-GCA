import React from 'react'
import {useState} from 'react'
import SecondHookComponent from './secondComponent'
import natureImage from '../image/natureImage.jpeg'

export default function FirstHookComponent() {
    // setState is replaced by
    // useState() in react hook
    // const [state, setstate] = useState(initialState)
    // Here 0 is default value/initialState
    const [counter, changeCounter] = useState(0)
    const [isLightOn,setLightOnOff] = useState(false)
    const [imageUrl,setImageUrl] = useState('https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.cKsIqa8C2cv7vezivnpo4wHaJ4%26pid%3DApi%26h%3D160&f=1')
 
    function handleLight(){
        if(isLightOn){
            setImageUrl('https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.zHtYy800GhmmVF2UfkgymwHaJ4%26pid%3DApi%26h%3D160&f=1')
        }
        else{
            setImageUrl('https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.cKsIqa8C2cv7vezivnpo4wHaJ4%26pid%3DApi%26h%3D160&f=1')
        }
        // to toogle light on-off
        setLightOnOff(!isLightOn)
    }

    return (
        <div>
            <div>Counter value {counter}</div>
            <div><button 
            onClick={()=> changeCounter(counter+1)} >Increase counter</button></div>
            <img 
            onClick={()=>handleLight()}
            src={imageUrl}/>
            <SecondHookComponent
            imageUrl ={imageUrl}
            counter = {counter}
            natureImage = {natureImage}/>
        </div>
    )
}