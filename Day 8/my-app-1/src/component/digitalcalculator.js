import React,{Component} from 'react'

class DigitaCalculator extends Component{
    constructor(props){
        super(props)
        this.state ={
          date: new Date()
        }
      }

// will call when first render is executed
componentDidMount(){
    // To use this keyword further inside other function 
    let self = this
    // Call every second
    this.state.timer = setInterval(function(){
        // this function has this in scope 
        // to refer state we use self variable which reference to state
        self.setState({
            date:new Date()
        })

    },1000)
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