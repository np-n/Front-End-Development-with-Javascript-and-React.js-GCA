import React from 'react'
import {
    BrowserRouter as Router,
    Route,
    Switch} 
    from 'react-router-dom'
import TodoHome from './todo/todoHome'
       
export default function Routes() {
    return (
        <div>
            <Router>
                <Switch>
                    <Route path="/" exact>
                        <TodoHome/>
                    </Route>
                </Switch>
            </Router>
        </div>
    )
}
