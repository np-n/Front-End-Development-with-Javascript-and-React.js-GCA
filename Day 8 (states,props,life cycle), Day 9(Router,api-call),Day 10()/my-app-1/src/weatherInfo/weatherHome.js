import React, { Component } from 'react'
import {WeatherApi} from './weatherApi'

export default class WeatherHome extends Component {
    constructor(props){
        super(props)
            this.state ={
                city:"pokhara",
                weatherData:"",
                isLoading:true,
            }
        
    }
    componentDidMount(){
        this.getWeatherData() 

    }
    getWeatherData =()=>{
        WeatherApi.getCurrentWeatherData(this.state.city) 

    }
    render() {
        return (
            <div>
            Weather
                
            </div>
        )
    }
}
