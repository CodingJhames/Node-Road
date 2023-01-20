

import inquirer from 'inquirer';
import colors from 'colors';

const menuOpts = [
    {
        type: 'list',
        name: 'option',
        message: '¿Qué desea hacer?',
        choices: ['opt1','opt2','opt3']
    }
];


const inquiererMenu = async() => {

    console.clear();
    console.log('=========================='.green);
    console.log('   Select an option');
    console.log('==========================\n'.green);

    const opt = await inquirer.prompt(menuOpts);

    return opt;


};

export { inquiererMenu };
