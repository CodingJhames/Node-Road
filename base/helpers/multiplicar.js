
const fs = require('fs');
const colors = require('colors/safe');

const createFile = async( base = 5, listar = false ) => {

    try {

        let salida = '';

        for (let i = 1; i <= 10; i++) {
                salida +=`${ base } ${'x'.blue } ${i} = ${ base * i }\n`;
        }

        if( listar ){
            console.log('====================='.green );
            console.log('   Tabla del:'.green, colors.blue( base ) );
            console.log('====================='.green );
            console.log( salida );
        }

        fs.writeFileSync(`table-${base}.txt`, salida );

        return `table-${base}.text created`;
    } catch (error) {
        throw error;
    }

};

module.exports = {
    createFile
}