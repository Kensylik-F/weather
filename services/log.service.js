import chalk from 'chalk'
import dedent from 'dedent-js';

const printError = (error) =>{
    console.log(chalk.bgRed('ERROR' + ' ' + error));
}

const printSuccess = (message) =>{
    console.log(chalk.bgGreen('SUCCESS' + ' ' + message));
}

const printHelp = () =>{
    console.log(
        dedent`${chalk.bgCyan(' HELP ')}
        Без параметров - вывод погоды
        -s [SITY] установка города
        -h помощь
        -t [API_KEY] сохранение токена
    `);
}


const printWeather = (res, icon, iconTemp) =>{
    console.log(
        dedent(
            `Погода в городe ${chalk.cyan(res.name)}
            ${icon}  ${chalk.cyan(res.weather[0].description)}
            ${iconTemp}  Температура воздуха: ${chalk.cyan(res.main.temp)}
            Oщущается как: ${chalk.cyan(res.main.feels_like)}
            Влажность: ${chalk.cyan(res.main.humidity + '%')} 
            `
        )
    );
}
export {printError, printSuccess, printHelp, printWeather};
