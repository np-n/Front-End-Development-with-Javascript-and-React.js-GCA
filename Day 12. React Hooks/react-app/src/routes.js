import React from 'react'
import FirstHookComponent from './reactHook/firstComponent'
import ClassExample from './classComponent/classExample'
import ThirdHookComponent from './reactHook/thirdComponent'
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
                    <Route path ='/users/profile/:id/:name/' exact>
                        <ThirdHookComponent/>
                    </Route>
                </Switch>
            </Router>
        </div>
    )
}
