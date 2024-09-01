import WeatherIcon from './WeatherIcon';
import { useContext } from 'react';
import WeatherContext from '../context/weather-context';

function HourlyForecastWidget({data}) {
    const {date, icon, summary, temperature, probability, wind} = data;
    const { units } = useContext(WeatherContext);

    const now = {
        day: new Intl.DateTimeFormat(navigator.language, {
            weekday: 'short',
            day: '2-digit',
            month:'2-digit'
        }).format(new Date()),
        time: new Intl.DateTimeFormat(navigator.language, {
            hour: '2-digit',
            minute: '2-digit',
        }).format(new Date().setMinutes(0)),
    };

    const weather_date = {
        day: new Intl.DateTimeFormat(navigator.language, {
            weekday: 'short',
            day: '2-digit',
            month:'2-digit'
        }).format(new Date(date)),
        time: new Intl.DateTimeFormat(navigator.language, {
            hour: '2-digit',
            minute: '2-digit',
        }).format(new Date(date).setMinutes(0)),
    };

    weather_date.day = 
        weather_date.day === now.day && 
        weather_date.time === now.time 
            ? 'Today' 
            : weather_date.time === '12:00 AM'
            ? weather_date.day
            : '';

    return (
        <div className='widget'>
            <div className='day'>{weather_date.day}</div>
            <div className='time'>{weather_date.time}</div>
            <div className='icon-temp'>
                <div className='icon'>
                    <WeatherIcon iconNumber={icon} summary={summary} />
                </div>
                <div className='hourly-temperature'>{temperature} {units.temperature}</div>
            </div>
            <div className='precipitation-probability'>
                <i className='bi bi-droplet'></i>
                {probability.precipitation}%
            </div>
            <div className='wind'>
                <div className='speed'>{wind.speed} {units.wind_speed}</div>
                <div className='dir' style={{transform: `rotate(${-45 + wind.angle}deg)`}}>
                    <i className='bi bi-send-fill'></i>
                </div>
            </div>
        </div>
    )
}

export default HourlyForecastWidget;