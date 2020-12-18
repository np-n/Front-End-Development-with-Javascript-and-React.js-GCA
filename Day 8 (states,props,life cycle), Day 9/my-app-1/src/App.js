import React, {Component} from 'react'
import './App.css'
import { DigitaCalculator } from './component/digitalcalculator'
import {MyFirstComponent} from './component/firstcomponent'
import { MyThirdComponent } from './component/thirdcomponent'

// class based approach
export default class App extends Component {
  render() {
    return(
      <div className ="headerName">
      <div style ={{background:'#f5f5f5',textAlign:'center',margin:'auto'}}>
        <MyFirstComponent/>
      </div>
      </div>

      // <DigitaCalculator/>
    ) 
  }
}
// export default App