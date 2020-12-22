import React, { Component } from 'react'
import {WeatherApi} from './weatherApi'
import Header from './header'
import {CircularProgress} from '@material-ui/core'
import CurrentWeatherCard from './currentWeatherCard'
import ErrorComponent from './errorComponent'
export default class WeatherHome extends Component {
    constructor(props){
        super(props)
            this.state ={
                city:"pokhara",
                weatherData:"",
                isLoading:true,
                error:false,
            }
        
    }
    componentDidMount(){
        this.getWeatherData() 

    }
    getWeatherData =()=>{
        self = this
        WeatherApi.getCurrentWeatherData(self.state.city).
        then(function(response){
            // console.log(response.data)
            self.setState({
                weatherData:response.data,
                isLoading:false

            })
            console.log(self.state.weatherData)
        }).catch(function(error){
            // console.log('Error')
            self.setState({
                error:true,
            })
        })   

    }

    onRetry =()=>{
        this.setState({
            error:false,
            loading:true,
        })
        this.getWeatherData()
    }
    render() {
        return (
            <div>
                <Header/>
                <div style={{margin:'30px 8%'}}>
                    {this.state.error?
                    <ErrorComponent 
                    onRetry ={this.onRetry}/>:
                this.state.isLoading?
                <div> Loading data...........             <CircularProgress/> 
                        .......wait for a while</div>:
                <div><CurrentWeatherCard
                    data ={this.state.weatherData}/>
                   </div>
                 
                }
                </div> 
            </div>
                
        )
    }
}
