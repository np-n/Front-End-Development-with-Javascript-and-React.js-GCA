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
            {/* Getting data from routes */}
            Item : {this.props.match.params.id}<br/>
            Item Id  f: {this.props.match.params.value}
            </div>
        )
    }
}
export default withRouter(DynamicCard)