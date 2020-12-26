import React,{useState,useEffect} from "react";
import TextField from "@material-ui/core/TextField";

export default function Timer() {
    const [time,setTime] = useState()
    const [timer,setTimer] = useState()
    const [isAlert,setIsAlert] = useState(false)

    function handleChange(event){
        console.log(event.target.value)
        setTime(event.target.value)

    }
    function runTimer(){
        let secondCount = 0
        setTimer(setInterval(function(){
            if(secondCount == time){
                alert('Time Out!!')
                setIsAlert(!isAlert)
                secondCount = 0
            }
            else{
                secondCount ++
            }
        },1000))

    }
    useEffect(()=>{
        clearInterval(timer)
    },[isAlert])
  return (
    <div style={{maxWidth:600,margin:'auto'}}>
        <h2>This is timer app</h2>
      <div><TextField
        id="time"
        onChange={handleChange}
        value ={time}
        label="Please enter your time"
        helperText="Set timer in the basis of seconds"
        fullWidth={true}
        type ="number"
        variant="filled"
      />
      </div>
      <div>
          <button style={{margin:'0 30%'}} onClick={()=>runTimer()}>Run Timer</button>
      </div>
    </div>
  );
}
