import React,{Component} from 'react'
import { withRouter } from 'react-router-dom'

class DynamicCard extends Component{
    constructor(props){
        super(props)
        console.log(this.props)
    }
    render(){
        return(
            <div>Dynamic Routes<br/>
            Username : {this.props.match.params.username}<br/>
            </div>
        )
    }
}
export default withRouter(DynamicCard)