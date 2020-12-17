import React, {Component} from 'react'
import './App.css'
import {MyFirstComponent} from './component/firstcomponent'

// class based approach
export default class App extends Component {
  render() {
    return(
      <div className ="headerName">
      <div style ={{background:'#f5f5f5',textAlign:'center',margin:'auto'}}>
        <MyFirstComponent/>
      </div>
      </div>
    ) 
  }
}
// export default App