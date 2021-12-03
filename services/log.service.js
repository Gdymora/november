import chalk from 'chalk';
import dedent from 'dedent';
function printError(error) {
    console.log(chalk.bgRed(' ERROR ') + ' ' + error)
}
function printSuccess(message) {
    console.log(chalk.bgGreen(' SUCCESS ') + ' ' + message)
}
function printHelp(message) {
    console.log(
        dedent`${chalk.bgCyan(' HELP ')} 
    Без параметров - вывод погоды
    -s [CITY] для установки города
    -h для вывода помощи
    -t [API_KEY] для сохранения токена
    `);
}

export { printHelp }
