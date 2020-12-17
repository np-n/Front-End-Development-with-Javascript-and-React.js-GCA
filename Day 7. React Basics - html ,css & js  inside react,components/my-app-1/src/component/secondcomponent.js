import React,{Component} from 'react'
import  {MyThirdComponent} from './thirdcomponent'

class MySecondComponent extends Component {
    render(){
        return(
            <div>This is my second component.
                <MyThirdComponent/>
                </div>
        )
    }
}

export {MySecondComponent}