import React,{Component} from 'react'

class ErrorComponent extends Component{
    render(){
        return(
            <div>
                <p>Something error occurs!</p>
                {/* Without passing value
                <button onClick={this.props.onRetry}>Try Again</button> */}
                <button onClick={() => this.props.onRetry()}>Try Again</button>
                </div>
            
        )
    }
}
export {ErrorComponent}