import axios from 'axios';

const baseUrl = 'https://api.openweathermap.org/data/2.5/weather?';
const apiKey = '97cc62b44c4b906b00eb382881df4484';

export const getWeatherData = async (cityname) => {
    try{
        const {data} = await axios.get(baseUrl + `q=${cityname}&appid=${apiKey}`);
        return data;
    }catch(error) {
        throw error;
    }
}