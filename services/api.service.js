import https from 'https';
import {getKeyValue, TOKEN_DICTINARY} from './storage.service.js'
import axios from 'axios';

const getIcon = (icon) =>{
    switch(icon.slice(0, -1)){
        case '01':
            return '☀️';
        case '02':
            return '⛅';
        case '03':
            return '☁️';
        case '04':
            return '☁️';
        case '09':
            return '🌧️';
        case '10':
            return '🌦️';
        case '11':
            return '🌩️';
        case '13':
            return '❄️';
        case '50':
            return '🌫️';
    }
}


const getTempIcon = (temp) =>{
    if(temp > 25){
        return '🥵';
    }else if(temp < 25 && temp > 15){
        return '😎'
    }else if(temp < 15 && temp > 5){
        return '🙂'
    }else if(temp < 5 && temp > -15){
        return '🥶';
    }else if( temp < -15){
        return '💀';
    }
    
};


const getWeather = async(city) =>{
    const token = process.env.TOKEN ?? await getKeyValue(TOKEN_DICTINARY.token)
    
    if(!token){
        throw new Error('Не задан ключ API, воспользуйтесь флагом -t [API_KEY]');
    }
    const {data} = await axios.get('https://api.openweathermap.org/data/2.5/weather', {
        params:{
            q:city,
            appid: token,
            lang: 'ru',
            units: 'metric'
        }
    })
   return data;
};

export {getWeather, getIcon, getTempIcon};