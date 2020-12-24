import React from 'react'
import FirstComponent from './reactHook/firstComponent'
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
                        <FirstComponent/>
                    </Route>
                </Switch>
            </Router>
        </div>
    )
}
