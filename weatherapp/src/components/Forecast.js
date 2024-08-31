import '../App.css';
import HourlyForecastWidget from './HourlyForecastWidget';
import DailyForecastWidget from './DailyForecastWidget';
import ForecastScroll from './ForecastScroll';

function Forecast({ title, type, data }) {
    return (
        <div className='Forecast'>
            <div className='forecast-container'>
                <h3>{title}</h3>
                <ForecastScroll className='forecast-widget-container'>
                    {data.map((singleData) => (
                        <div key={singleData.date || singleData.day}>
                            {type === 'hourly' ? (
                                <HourlyForecastWidget data={singleData} />
                            ) : (
                                <DailyForecastWidget data={singleData} />
                            )}
                        </div>
                    ))}
                </ForecastScroll>
            </div>
        </div>
    );
}

export default Forecast;