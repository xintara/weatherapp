import axios from 'axios';

export async function getWeatherData(endpoint, place_id, measurementSystem) {

    const options = {
    method: 'GET',
    url: `https://ai-weather-by-meteosource.p.rapidapi.com/${endpoint}`,
    params: {
        place_id,
        language: 'en',
        units: measurementSystem,
    },
    headers: {
        'x-rapidapi-key': '7808fe7b29msh228d10d3ecadca8p129d34jsn84f31d4255d9',
        'x-rapidapi-host': 'ai-weather-by-meteosource.p.rapidapi.com'
    }
    };

    try {
        const response = await axios.request(options);
        return response.data;
    } catch (error) {
        console.error(error);
    }
}