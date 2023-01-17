

const { createFile } = require('../helpers/multiplicar');
const argv = require('./config/yargs');
const colors = require('colors');


console.clear();

// console.log( process.argv );
// console.log( argv );

// console.log( 'base: yargs', argv.b );
/* const [,,arg3] = process.argv;
const [, base = 5 ] = arg3.split('=');
console.log( base ); */

// const base = 5;

createFile( argv.b, argv.l )
        .then( nombreArchivo => console.log( nombreArchivo.rainbow, 'creado' ))
        .catch( err => console.log(err) );


