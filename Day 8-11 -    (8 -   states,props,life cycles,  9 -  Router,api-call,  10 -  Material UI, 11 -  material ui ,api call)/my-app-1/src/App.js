import { ThemeProvider } from '@material-ui/core'
import {theme } from './theme'
import React, {Component} from 'react'
import { Route } from 'react-router-dom'
import './App.css'
import { DigitaClock } from './component/digitalclock'
// import {MyFirstComponent} from './component/firstcomponent'
import MyFirstComponent from './component/firstcomponent'
import { MyThirdComponent } from './component/thirdcomponent'
import {Routes} from './routes'

// class based approach
export default class App extends Component {
  render() {
    return(
      // <div className ="headerName">
      // <div style ={{background:'#f5f5f5',textAlign:'center',margin:'auto'}}>
      //   <MyFirstComponent/>
      // </div>
      // </div>
      // // <DigitaClock/>

      <ThemeProvider  theme={theme}>
      <Routes/>
      </ThemeProvider>

    )
  }
}
// export default App
