import React,{useEffect,useState} from 'react'

export default function UseEffectHook() {
    const [count,setCount] = useState(0)
    const [isCalled,setIsCalled] = useState(false)
    const [isCalledAgain,setIsCalledAgain] = useState(false)

    // useEffect is called if isCalled state is set
    useEffect(()=>{
        console.log('This is useEffect hook')
    },[isCalled,isCalledAgain])

    return (
        <div>
            <div>This is example of useEffect hook</div>
            <div>Count :{count}</div>
            <button onClick ={()=>setCount(count+1)}>Increase counter</button>
            <button onClick ={()=>setIsCalled(true)}>setIsCalled</button>
            <button onClick ={()=>setIsCalledAgain(true)}>setIsCalledAgain</button>

        </div>
    )
}
