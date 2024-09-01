import WeatherContext from "../context/weather-context";
import {useContext} from 'react';

function Location() {
    const {place} = useContext(WeatherContext);
    return (
        <div className='Location'>
            <i className="bi bi-geo-alt-fill"></i>
            {place.name}, {place.country}
        </div>
    );
}

export default Location;