
import colors from 'colors';
import { inquiererMenu, pausa } from './helpers/inquirer.js';
import { Tareas } from './models/tareas.js';

// const { mostrarMenu, pause } = require('./helpers/messages');

const main = async() => {
    
    console.log('Hello Micho');

    let opt = '';

    do {
        
        opt = await inquiererMenu();
        console.log( {opt} );
        // if ( opt !== '0' ) await pause();
        
        await pausa();


    } while ( opt !== '0' );

    
    
}


main();








