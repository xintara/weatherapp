import { useContext, useState } from "react";
import '../App.css';
import WeatherContext from "../context/weather-context";
import { MEASUREMENT_SYSTEMS } from "../utils/constants";

function Settings() {
    const { measurementSystem, setMeasurementSystem } = useContext(WeatherContext);
    const [info, setInfo] = useState(false);

    const changeMeasurementSystem = (system) => {
        setMeasurementSystem(system);
    };

    return (
        <>
            <div className='Settings'>
                <h4>Measurement Systems:</h4>
                <div className='measurements'>
                    {Object.values(MEASUREMENT_SYSTEMS).map((system) => (
                        <div className={`system ${system === measurementSystem ? 'active' : ''}`}
                        key={system}
                        onClick={() => changeMeasurementSystem(system)}
                        >
                            {system}
                        </div>
                    ))}
                </div>
            </div>
            <div 
            className='Info'
            onClick={() => setInfo((prevVal) => !prevVal)}
            >
                <i className={`bi bi-info-circle${info ? '-fill' : ''}`}></i>
                <div className={`infobox ${info ? 'open' : ''}`}>
                    <div className='description'>
                        The Product Manager Accelerator Program is designed to support PM professionals through every stage of their career. 
                        From students looking for entry-level jobs to Directors looking to take on a leadership role, our program has helped over hundreds of students fulfill their career aspirations.
                        Our Product Manager Accelerator community are ambitious and committed. Through our program they have learnt, honed and developed new PM and leadership skills, giving them a strong foundation for their future endeavours.
                    </div>
                    <div className='note'>
                        This App was made by Alex Intara.
                    </div>
                </div>
            </div>
        </>
    );
}

export default Settings;