import React, { useState, useEffect } from "react";
import TextField from "@material-ui/core/TextField";
import { Card } from '@material-ui/core'
import Grid from '@material-ui/core/Grid';
import DialogBox from './dialog'

export default function Timer() {
  const [time, setTime] = useState();
  const [timer, setTimer] = useState();
  const [isAlert, setIsAlert] = useState(false);
  let [secondCount,setSecondCount] = useState(0)
  let [openDialog,setOpenDialog] = useState(false)

  
  function handleChange(event) {
    console.log(event.target.value);
    setTime(event.target.value);
  }
  
  function runTimer() {
    setTimer(
      setInterval(function () {
        if (secondCount == time) {
        //   alert("Time Out!!");
          setIsAlert(!isAlert);
          setOpenDialog(true)
          setSecondCount(0);
          setTime(0)
        } else {
          setSecondCount(secondCount++);
        }
      }, 1000)
    );
  }

  useEffect(() => {
    clearInterval(timer);
  }, [isAlert]);
  
  function onCloseDialog(){
      setOpenDialog(false)
  }

  return(
    <div style={{ maxWidth: 600, margin: "auto" }}>
      <h2>This is timer app</h2>
      < Grid container  spacing={2}>
            <Grid  item xs="8" sm="8">
        <TextField
          id="time"
          onChange={handleChange}
          value={time}
          label="Please enter your time"
          helperText="Set timer in the basis of seconds"
          fullWidth={true}
          type="number"
          variant="filled"
        />
        </ Grid>
        <Grid  item xs="4" sm="4">
        <button style={{ marginTop:25}} onClick={() => runTimer()}>
          Run Timer
        </button>
        </Grid>
        </Grid>
        <div>
            <Card>
                <h1 style={{ marginTop:30 ,textAlign:'center'}}>{secondCount}</h1>
            </Card>
        </div>

        <DialogBox
        openDialog ={openDialog}
        onCloseDialog = {onCloseDialog}/>
     
    </div>
  );
}
