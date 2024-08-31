import '../App.css';
import CurrentWeather from './CurrentWeather';
import Forecast from './Forecast';
import {getHourlyForecast, getDailyForecast} from '../api';

function Body() {
    return (
        <div className='Body'>
            <CurrentWeather />
            <Forecast 
            type='hourly' 
            title='HOURLY FORECAST' 
            data={getHourlyForecast()}
            />
            <Forecast 
            type='daily' 
            title='21 DAY FORECAST' 
            data={getDailyForecast()}
            />
        </div>
    );
}

export default Body;