

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
                name: '1. Crear tarea'
            },
            {
                value: '2',
                name: '2. Listar tareas'
            },
            {
                value: '3',
                name: '3. Listar tareas completadas'
            },
            {
                value: '4',
                name: '4. Listar tareas pendientes'
            },
            {
                value: '5',
                name: '5. Completar tareas'
            },
            {
                value: '6',
                name: '6. Borrar tarea'
            },
            {
                value: '0',
                name: '0. Salir'
            }
        ]
    }
];


const inquiererMenu = async() => {

    console.clear();
    console.log('=========================='.green);
    console.log('   Select an option');
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


export { 
    inquiererMenu,
    pausa
    };
