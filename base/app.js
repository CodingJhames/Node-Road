
const { createFile } = require('../helpers/multiplicar');
const argv = require('yargs').argv;


console.clear();

console.log( process.argv );
console.log( argv );


/* const [,,arg3] = process.argv;
const [, base = 5 ] = arg3.split('=');
console.log( base ); */


// const base = 5;

/* createFile( base )
        .then( nombreArchivo => console.log( nombreArchivo, 'creado' ))
        .catch( err => console.log(err) ); */


/* const arr = [1,2,3,4,5,6,7,8,9,10];

for (let i = 0; i < arr.length; i++) {32
        console.log( `5 x ${ arr[i] } = ${5 * arr[i]}` );
}

 */


/* const base = 3;
let salida = '';

for (let i = 1; i <= 10; i++) {
        salida +=`${ base } x ${i} = ${ base * i }\n`;
}

console.log( salida );

fs.writeFileSync(`table-${base}.txt`, salida, (err) => {
        if ( err) throw err;
        // console.log(`created table-${base} file`);
} )

console.log(  `table-${base}.text created` ); */
