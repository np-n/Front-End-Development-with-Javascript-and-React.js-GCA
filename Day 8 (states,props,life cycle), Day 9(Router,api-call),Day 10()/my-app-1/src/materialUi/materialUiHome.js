import React,{Component} from 'react'
import FormExample from './form'
import Header from './header'


class MaterialUIHome extends Component{
    render(){
        return(
            <div>
                <Header/>
                <div style={{padding:'25px 200px'}}>
                <FormExample/>
                </div>
            </div>
        )
    }
}
export default MaterialUIHome