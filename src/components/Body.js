import '../App.css';
import CurrentWeather from './CurrentWeather';
import Forecast from './Forecast';
import { useContext } from 'react';
import WeatherContext from '../context/weather-context';
import Loader from './Loader';

function Body() {
    const {loading, currentWeather, hourlyForecast, dailyForecast} = useContext(WeatherContext);
    return (
        <div className='Body'>
            {loading ? (
            <Loader />
            ) : (
                <>
                    <CurrentWeather data={currentWeather} />
                    <div className='hourly-forecast-container'>
                        <Forecast 
                        type='hourly' 
                        title='Hourly Forecast' 
                        data={hourlyForecast}
                        />
                    </div>
                    <div className='daily-forecast-container'>
                        <Forecast 
                        type='daily' 
                        title='Daily Forecast' 
                        data={dailyForecast}
                        />
                    </div>
                </>
            )}
        </div>
    );
}

export default Body;