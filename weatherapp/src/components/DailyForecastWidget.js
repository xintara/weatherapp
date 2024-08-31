import WeatherIcon from './WeatherIcon';

function DailyForecastWidget({data}) {
    const {
        day, 
        summary, 
        icon, 
        temperature_max, 
        temperature_min, 
        probability,
    } = data;

    const now = {
        day: new Intl.DateTimeFormat(navigator.language, {
            weekday: 'short',
            day: '2-digit',
            month:'2-digit'
        }).format(new Date()),
    };
    const weather_date = {
        day: new Intl.DateTimeFormat(navigator.language, {
            weekday: 'short',
            day: '2-digit',
            month:'2-digit'
        }).format(new Date(day)),
    };

    weather_date.day = now.day === weather_date.day ? 'Today' : weather_date.day;

    return <div className='widget'>
        <div className='day'>{weather_date.day}</div>
        <div className='time'>{weather_date.time}</div>
        <div className='icon-temp'>
            <div className='icon'>
                <WeatherIcon iconNumber={icon} summary={summary} />
            </div>
            <div className='daily-temperature'>
                <div className='max'>
                    High: {temperature_max} °F
                </div>
                <div className='min'>
                    Low: {temperature_min} °F
                </div>
            </div>
        </div>
        <div className='precipitation'>
            <i className='bi bi-droplet'></i>
            {probability.precipitation}%
        </div>
    </div>
}

export default DailyForecastWidget;