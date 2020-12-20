import React,{Component} from 'react'
import FormExample from './form'
import Header from './header'
import GridExample from './grid';
import Button from '@material-ui/core/Button';
import DeleteIcon from '@material-ui/icons/Delete';
import Icon from '@material-ui/core/Icon';
import ButtonGroup from '@material-ui/core/ButtonGroup';


class MaterialUIHome extends Component{
    render(){
        return(
            <div>
                <Header/>
                <div style={{padding:'25px 20px'}}>
                <GridExample/>
                <br/>
                <Button variant="outlined" color="primary" >
                Submit
                </Button>
                <Button variant="contained" color="primary" >
                Submit
                </Button>
                <Button color="secondary">Secondary</Button>
                <Button size="medium" disabled>Disabled</Button>
                <Button
                variant="contained"
                color="primary"
                startIcon={<DeleteIcon/>}>Delete</Button>
                <Button
                variant="contained"
                color="primary"
                endIcon={<Icon>Send</Icon>}
                >Send</Button>
                <br/><br/>

                <ButtonGroup variant="contained" color="primary" aria-label="contained primary button group">
                <Button>One</Button>
                <Button>Two</Button>
                <Button>Three</Button>
                </ButtonGroup>
                </div>
            </div>
        )
    }
}
export default MaterialUIHome