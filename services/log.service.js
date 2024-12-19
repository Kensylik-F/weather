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

export {printError, printSuccess, printHelp};
