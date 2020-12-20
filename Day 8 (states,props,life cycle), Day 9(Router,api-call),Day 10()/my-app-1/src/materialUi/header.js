import React,{Component} from 'react'

import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/MenuBookSharp';
import Drawer from '@material-ui/core/Drawer'

class Header extends Component{
    constructor(props){
        super(props)
        this.state={
            openDrawer:false, 
        }
    }
    render(){
        return(
            <div>
            <AppBar position="static" color="secondary">
                <Toolbar>
                <IconButton 
                onClick={()=>{this.setState({openDrawer:true})}}
                edge="start"  color="inherit" aria-label="menu">
                    <MenuIcon />
                </IconButton>
                <Typography variant="h6" >
                    Material UI
                </Typography>
                </Toolbar>
            </AppBar>
            <Drawer anchor="left" open={this.state.openDrawer} onClose={()=>this.setState({openDrawer:false})}>
            Drawer
          </Drawer>


            </div>
        )
    }
}
export default Header
