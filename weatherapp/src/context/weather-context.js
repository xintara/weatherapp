import {createContext, useEffect, useState} from 'react';
import { DEFAULT_PLACE, UNITS, MEASUREMENT_SYSTEMS } from '../utils/constants';
import { getWeatherData } from '../api';

const WeatherContext = createContext();

function WeatherProvider({children}) {
    const [place, setPlace] = useState(DEFAULT_PLACE);
    const [currentWeather, setCurrentWeather] = useState({});
    const [hourlyForecast, setHourlyForecast] = useState({});
    const [dailyForecast, setDailyForecast] = useState({});
    const [loading, setLoading] = useState(true);
    const [units, setUnits] = useState({});
    const [measurementSystem, setMeasurementSystem] = useState(MEASUREMENT_SYSTEMS.AUTO);

    useEffect(() => {
        async function _getWeatherData() {
            setLoading(true);

            const weather = await getWeatherData('current', place.place_id, measurementSystem);
            setCurrentWeather(weather.current);
            setUnits(UNITS[weather.units]);
            
            const hourlyForecast = await getWeatherData('hourly', place.place_id, measurementSystem);
            setHourlyForecast(hourlyForecast.hourly.data);
            setUnits(UNITS[hourlyForecast.units]);

            const dailyForecast = await getWeatherData('daily', place.place_id, measurementSystem);
            setDailyForecast(dailyForecast.daily.data);
            setUnits(UNITS[dailyForecast.units]);

            setLoading(false);
        }
        _getWeatherData();
    }, [place, measurementSystem]);

    return (
    <WeatherContext.Provider 
        value={{
            place,
            setPlace,
            loading,
            currentWeather,
            hourlyForecast,
            dailyForecast,
            units,
            measurementSystem,
            setMeasurementSystem
        }}
    >
        {children}
    </WeatherContext.Provider>
    );
}

export {WeatherProvider}
export default WeatherContext;