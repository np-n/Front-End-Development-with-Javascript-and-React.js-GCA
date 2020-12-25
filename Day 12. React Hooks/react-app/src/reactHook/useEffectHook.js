import React,{useEffect,useState} from 'react'

export default function UseEffectHook() {
    const [count,setCount] = useState(0)
    const [isCalled,setIsCalled] = useState(false)


    useEffect(()=>{
        console.log('This is useEffect hook')
    })

    return (
        <div>
            <div>This is example of useEffect hook</div>
            <div>Count :{count}</div>
            <button onClick ={()=>setCount(count+1)}>Increase counter</button>

        </div>
    )
}
