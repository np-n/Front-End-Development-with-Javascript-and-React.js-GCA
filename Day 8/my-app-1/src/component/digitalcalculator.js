import React,{Component} from 'react'

class DigitaCalculator extends Component{
    constructor(props){
        super(props)
        this.state ={
          date: new Date()
        }
      }
   render(){
       return(

        <div className ="headerName" style={{position:'relative', height:'150vh'}}>

            <div style={{display:'flex',position:'absolute',top:'25%',left:'40%'}}>
                <div style={{padding:20}}>{this.state.date.getHours()}</div>
                <div style={{padding:20}}>{this.state.date.getMinutes()}</div>
                <div style={{padding:20}}>{this.state.date.getSeconds()}</div>
                </div></div>
       )
       }
    }


export {DigitaCalculator}