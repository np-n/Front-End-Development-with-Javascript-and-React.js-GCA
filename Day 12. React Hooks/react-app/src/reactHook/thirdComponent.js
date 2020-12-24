import React from 'react'
import {useHistory,useParams} from 'react-router-dom'

export default function ThirdHookComponent() {
    let history = useHistory()
    let params = useParams()

    console.log(history)
    console.log(params)
    return (
        <div>
            I am from third component.<br/>
            name: {params.id} <br/>
            Id : {params.name}
        </div>
    )
}
