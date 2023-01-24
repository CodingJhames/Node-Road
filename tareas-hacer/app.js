
import colors from 'colors';
import { inquiererMenu, pausa, leerInput } from './helpers/inquirer.js';
import { Tareas } from './models/tareas.js';

// const { mostrarMenu, pause } = require('./helpers/messages');

const main = async() => {
    
    console.log('Hello Micho');

    let opt = '';
    const tareas = new Tareas();

    do {
        
        opt = await inquiererMenu();
        
        switch (opt) {
            case '1':
                // crear opción
                const desc = await leerInput('Descripción: ');
                tareas.crearTarea( desc );
            break;
            case '2':
                console.log( tareas._listado );
            break;
        }
        
        await pausa();


    } while ( opt !== '0' );

    
    
}


main();








