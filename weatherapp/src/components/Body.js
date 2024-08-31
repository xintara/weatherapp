import '../App.css';
import CurrentWeather from './CurrentWeather';
import Forecast from './Forecast';
import {getHourlyForecast, getDailyForecast} from '../api';

function Body() {
    return (
        <div className='Body'>
            <CurrentWeather />
            <div className='hourly-forecast-container'>
                <Forecast 
                type='hourly' 
                title='Hourly Forecast' 
                data={getHourlyForecast()}
                />
            </div>
            <div className='daily-forecast-container'>
                <Forecast 
                type='daily' 
                title='Daily Forecast' 
                data={getDailyForecast()}
                />
            </div>
        </div>
    );
}

export default Body;