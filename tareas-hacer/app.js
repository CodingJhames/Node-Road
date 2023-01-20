
import colors from 'colors';
import { inquiererMenu } from './helpers/inquirer.js';
// const { mostrarMenu, pause } = require('./helpers/messages');

console.clear();

const main = async() => {
    
    // console.log('Hello Micho');

    let opt = '';

    do {
        
        opt = await inquiererMenu();
        console.log( {opt} );
        if ( opt !== '0' ) await pause();

    } while ( opt !== '0' );

    // pause();
    
}


main();








