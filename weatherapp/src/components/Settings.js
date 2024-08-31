import { useState, useContext } from "react";
import WeatherContext from "../context/weather-context";
import { MEASUREMENT_SYSTEMS } from "../utils";

function Settings() {
    const [openSettings, setOpenSettings] = useState(false);
    const {measurementSystem, setMeasurementSystem} = useContext(WeatherContext);
    const changeMeasurementSystem = (system) => {
        setMeasurementSystem(system);
        setOpenSettings(false);
    };

    return (
        <div className='Settings'>
            Settings
        </div>
    );
}

export default Settings;