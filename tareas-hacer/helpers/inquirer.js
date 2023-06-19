

import inquirer from 'inquirer';
import colors from 'colors';

const menuOpts = [
    {
        type: 'list',
        name: 'option',
        message: '¿Qué desea hacer?',
        choices: [
            {
                value: '1',
                name: '1.'.blue + 'Crear tarea'
            },
            {
                value: '2',
                name: '2.'.blue + 'Listar tareas'
            },
            {
                value: '3',
                name: '3.'.blue + 'Listar tareas completadas'
            },
            {
                value: '4',
                name: '4.'.blue + 'Listar tareas pendientes'
            },
            {
                value: '5',
                name: '5.'.blue + 'Completar tareas'
            },
            {
                value: '6',
                name: '6.'.blue + 'Borrar tarea'
            },
            {
                value: '0',
                name: '0.'.blue + 'Salir'
            }
        ]
    }
];


const inquiererMenu = async() => {

    console.clear();
    console.log('=========================='.green);
    console.log('   Select an option'.blue);
    console.log('==========================\n'.green);

    const { option } = await inquirer.prompt(menuOpts);

    return option;

};

const pausa = async() => {

    const question = [
        {
            type: 'input',
            name: 'enter',
            message: `Presiones ${ 'enter'.green } para continuar`
        }
    ];

    console.log( '\n' );
    await inquirer.prompt( question );

};

const leerInput = async( message ) => {

    const question = [
        {
            type: 'input',
            name: 'desc',
            message,
            validate( value ){
                if ( value.name === 0 ) {
                    return 'Por favor ingrese un valor';
                }
                return true;
            }
        }
    ];

    const { desc } = await inquirer.prompt( question );
    return desc;




};



export { 
    inquiererMenu,
    pausa,
    leerInput
};
