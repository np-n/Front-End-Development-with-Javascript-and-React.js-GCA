import axios from 'axios'
import {CONFIG} from './config'

export class WeatherApi{
    static getCurrentWeatherData = async (cityName)=>{
        let url =CONFIG.WEATHER_API_URL.replace('~',cityName)
        console.log(url)
        return await axios.get(url + CONFIG.WEATHER_API_KEY )

    }
}