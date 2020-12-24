import React from 'react'

export default function SecondHookComponent(props) {
    // console.log(props)
    return (
        <div>
        I am from the second functional component.<br/>
        Getting image from firstHookComponent as parent component via props
        <img 
        style={{width:20}}
        src = {props.imageUrl}/>
        <br/>
        Counter: {props.counter}
        </div>
    )
}
