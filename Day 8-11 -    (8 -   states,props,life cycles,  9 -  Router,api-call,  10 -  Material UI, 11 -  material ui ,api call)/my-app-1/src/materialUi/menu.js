import React, { Component } from 'react'
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';

export default class MenuExample extends Component {
    constructor(props){
        super(props)
        this.state ={
            anchor:'',
            openMenu:false
        }
    }
    handleClose =()=>{
        this.setState({
            openMenu:false
        })
    }
    openMenu =(event)=>{
        this.setState({
            anchor:event.currentTarget,
            openMenu:true

        })
    }
    render() {
        return (
            <div>
                <Button  variant ="outlined" aria-controls="simple-menu" aria-haspopup="true" 
                onClick={this.openMenu}>
                    Open Menu
                    </Button>
                <Menu
                    id="simple-menu"
                    anchorEl={this.state.anchor}
                    keepMounted
                    open={this.state.openMenu}
                    onClose={this.handleClose}
                    >
                    <MenuItem onClick={this.handleClose}>Profile</MenuItem>
                    <MenuItem onClick={this.handleClose}>My account</MenuItem>
                    <MenuItem onClick={this.handleClose}>Logout</MenuItem>
                    </Menu>
                                </div>
        )
    }
}
