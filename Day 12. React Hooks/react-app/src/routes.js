import React from 'react'
import FirstHookComponent from './reactHook/firstComponent'
import ClassExample from './classComponent/classExample'
import ThirdHookComponent from './reactHook/thirdComponent'
import UserProfile from './reactHook/userProfile';
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
                    <Route path ='/user/profile/:id/:name/' exact>
                        <ThirdHookComponent/>
                    </Route>
                    <Route path ='/user/profile/' exact>
                        <UserProfile/>
                    </Route>
                </Switch>
            </Router>
        </div>
    )
}
