import React from 'react'
import FirstHookComponent from './reactHook/firstComponent'
import ClassExample from './classComponent/classExample'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

export default function Routes() {
    return (
        <div>
            <Router>
                <Switch>
                    <Route path ='/' exact>
                        <FirstHookComponent/>
                    </Route>
                    <Route path ='/component' exact>
                        <ClassExample/>
                    </Route>
                </Switch>
            </Router>
        </div>
    )
}
