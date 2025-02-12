#!/usr/bin/env node
import { getArgs } from "./helpers/args.js";
import { getIcon, getTempIcon, getWeather } from "./services/api.service.js";
import { printHelp, printSuccess, printError, printWeather } from "./services/log.service.js";
import { getKeyValue, saveKeyValue, TOKEN_DICTINARY } from "./services/storage.service.js";

const saveToken = async(token) =>{
    if(!token.length){
        printError('Не передан токен');
        return;
    }
    try{
        await saveKeyValue(TOKEN_DICTINARY.token, token);
        printSuccess('Токен сохранен');
    }catch(e){
        printError(e.message);
    }
}
const saveCity = async(city) =>{
    if(!city.length){
        printError('Не передали город');
        return;
    }
    try{
        await saveKeyValue(TOKEN_DICTINARY.city, city);
        printSuccess('Город сохранен')
    }catch(e){
        printError(e.message);
    }
}
const getForCast = async() =>{
    try{
        const city = process.env.CITY ?? await getKeyValue(TOKEN_DICTINARY.city)
        const weather = await getWeather(city);
        printWeather(weather, getIcon(weather.weather[0].icon), getTempIcon(weather.main.temp))
    }catch(e){
        if(e?.response?.status == 404){
            printError("Неверно указан город")
        }else if(e?.response?.status == 401){
            printError("ошибка токена");
        }else{
            printError(e.message)
        }
    }
}
const initCLI = () =>{
    const args = getArgs(process.argv);
    if(args.h){
        return printHelp();
    }
    if(args.s){
        return saveCity(args.s)
    }
    if(args.t){
        return saveToken(args.t);
    }
    return getForCast()
}

initCLI();