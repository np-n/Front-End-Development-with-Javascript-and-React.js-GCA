import React,{Component} from 'react'
import { withRouter } from 'react-router-dom'

class MyFourthComponent extends Component{
    constructor(props){
        super(props)
        console.log(this.props)
    }
    render(){
        return(
            <div>Route programmatically to reach me<br/>
            <p>Name from route: {this.props.location.state.name}</p>
            </div>
        )
    }
}
export default withRouter(MyFourthComponent)