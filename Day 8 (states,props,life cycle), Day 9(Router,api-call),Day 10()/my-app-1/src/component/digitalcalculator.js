import React,{Component} from 'react'

class DigitaCalculator extends Component{
    constructor(props){
        super(props)
        this.state ={
          date: new Date()
        }
      }

// will call when first render is executed
// note: api call are also done inside this componentDidMount() life cycle
// this is similar to window.onload() of vanilla js
componentDidMount(){
    console.log(this.props)
    // To use this keyword further inside other function 
    let self = this
    // Call every second
    this.timer = setInterval(function(){
        // this function may have this already in it's scope 
        // to refer this of class scope, we are using self variable where class scope this is assigned
        // now self reference this scope of state i.e outside function
        self.setState({
            // at every seconds date is changed
            date:new Date()
        })

    },1000)


}

// At the end of component life cycle or time of ending our component
componentWillUnmount(){
    // clear timer
    clearInterval(this.timer)
}

// working illustration of componentWillUnmount
clearTimer =()=>{
    console.log(this.timer)
    clearInterval(this.timer)
}

   render(){
       return(

        <div className ="headerName" style={{position:'relative', height:'150vh'}}>
            <div style={{display:'flex',position:'absolute',top:'25%',left:'40%'}}>
                <div style={{padding:20}}>{this.state.date.getHours()}</div>
                <div style={{padding:20}}>{this.state.date.getMinutes()}</div>
                <div style={{padding:20}}>{this.state.date.getSeconds()}</div>
                <br/>
                <button style ={{ height:'50%',marginTop:30, fontSize:'auto'}} onClick={this.clearTimer}>Clear Timer</button>
                
                </div>
    
                </div>
       )
       }
    }


export default DigitaCalculator
// Why react ?
// SPA -> single page application
// PWA -> Progressive web app