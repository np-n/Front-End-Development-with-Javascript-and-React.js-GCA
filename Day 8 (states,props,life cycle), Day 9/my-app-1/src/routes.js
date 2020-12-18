 import React,{Component} from 'react'
// importing  classes to use react router dom
import{
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from 'react-router-dom'

import {MyFirstComponent} from './component/firstcomponent'
import {DigitaCalculator} from './component/digitalcalculator'

 class Routes extends Component{
     render(){
         return(
            <div className ="headerName">
                <Router>
                    <Switch>
                        <Route path="/" exact>
                            <MyFirstComponent/>
                        </Route>

                        <Route path="/calculator" exact>
                            <DigitaCalculator/>
                        </Route>
                    </Switch>
                </Router>
            </div>

         )
     }
 }

 export {Routes}