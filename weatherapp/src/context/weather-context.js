import {createContext, useEffect, useState} from 'react';
import { DEFAULT_PLACE } from '../utils';
import { getWeatherData } from '../api';

const WeatherContext = createContext();

function WeatherProvider({children}) {
    const [place, setPlace] = useState(DEFAULT_PLACE);
    const [currentWeather, setCurrentWeather] = useState({});
    const [hourlyForecast, setHourlyForecast] = useState({});
    const [dailyForecast, setDailyForecast] = useState({});
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function _getWeatherData() {
            setLoading(true);

            const weather = await getWeatherData('current', place.place_id, 'auto');
            setCurrentWeather(weather.current);
            
            const hourlyForecast = await getWeatherData('hourly', place.place_id, 'auto');
            setHourlyForecast(hourlyForecast.hourly.data);

            const dailyForecast = await getWeatherData('daily', place.place_id, 'auto');
            setDailyForecast(dailyForecast.daily.data);

            setLoading(false);
        }
        _getWeatherData();
    }, [place]);

    return (
    <WeatherContext.Provider 
        value={{
            place,
            setPlace,
            loading,
            currentWeather,
            hourlyForecast,
            dailyForecast,
        }}
    >
        {children}
    </WeatherContext.Provider>
    );
}

export {WeatherProvider}
export default WeatherContext;