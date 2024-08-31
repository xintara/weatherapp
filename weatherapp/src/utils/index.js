export const DEFAULT_PLACE = {
    name:"Miami",
    place_id:"miami",
    adm_area1:"Florida",
    adm_area2:"Miami-Dade County",
    country:"United States of America",
    lat:"25.77427N",
    lon:"80.19366W",
    timezone:"America/New_York",
    type:"settlement",
};
export const MEASUREMENT_SYSTEMS = {
    AUTO: 'auto',
    METRIC: 'metric',
    UK: 'uk',
    US: 'us',
    CA: 'ca',
};
export const UNITS = {
    metric: {
        temperature: '°C',
        precipitation: 'mm/h',
        wind_speed: 'm/s',
        visibility: 'km',
        humidity: '%',
        uv_index: '',
        cloud_cover: '%',
    },
    us: {
        temperature: '°F',
        precipitation: 'in/h',
        wind_speed: 'mph',
        visibility: 'mi',
        humidity: '%',
        uv_index: '',
        cloud_cover: '%',
    },
    uk: {
        temperature: '°C',
        precipitation: 'mm/h',
        wind_speed: 'mph',
        visibility: 'mi',
        humidity: '%',
        uv_index: '',
        cloud_cover: '%',
    },
    ca: {
        temperature: '°C',
        precipitation: 'mm/h',
        wind_speed: 'km/h',
        visibility: 'km',
        humidity: '%',
        uv_index: '',
        cloud_cover: '%',
    },
};