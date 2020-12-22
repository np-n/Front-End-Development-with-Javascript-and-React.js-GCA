import React, { Component } from 'react'
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

export default class TabExample extends Component {
    constructor(props){
        super(props)
        this.state={
            tabIndex:0
        }

    }
    handleChange=(event,tabIndex)=>{
        this.setState({
            tabIndex:tabIndex
        })
                
                
    }
    render() {
        return (
            <div>
                <AppBar position="static">
                <Tabs value={this.state.tabIndex} onChange={this.handleChange} aria-label="simple tabs example">
                    <Tab label="Item One" />
                    <Tab label="Item Two"  />
                    <Tab label="Item Three"   />
                </Tabs>
                </AppBar>
                {this.state.tabIndex==0?
                <div>Index 0</div>:
                ''}
                {this.state.tabIndex==1?
                <div>Index 1</div>:
                ''}
                {this.state.tabIndex==2?
                <div>Index 2</div>:
                ''}
            </div>
        )
    }
}
