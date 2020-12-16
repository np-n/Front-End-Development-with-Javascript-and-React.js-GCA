import React, {Component} from 'react'
import './App.css'

// class based approach
export default class App extends Component {
  render() {
    return(
      <div className ="headerName">
      <div style ={{background:'#f5f5f5',textAlign:'center',margin:'auto'}}>
        Hello World from react...............
        
        {console.log('This is react class')}
        <div>
        <p style ={{fontSize:30}}>I am from Nepal</p>
        </div>
      </div>
      </div>
    ) 
  }
}
// export default App