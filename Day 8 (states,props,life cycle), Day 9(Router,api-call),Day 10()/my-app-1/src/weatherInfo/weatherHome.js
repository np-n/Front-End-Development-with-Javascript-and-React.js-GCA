import React, { Component } from 'react'
import {WeatherApi} from './weatherApi'

export default class WeatherHome extends Component {
    componentDidMount(){
        this.getWeatherData() 

    }
    getWeatherData =()=>{
        WeatherApi.getCurrentWeatherData('pokhara') 

    }
    render() {
        return (
            <div>
            Weather
                
            </div>
        )
    }
}
