import React,{Component} from 'react'
import FormExample from './form'
import Header from './header'
import GridExample from './grid';


class MaterialUIHome extends Component{
    render(){
        return(
            <div>
                <Header/>
                <div style={{padding:'25px 20px'}}>
                <GridExample/>
                </div>
            </div>
        )
    }
}
export default MaterialUIHome