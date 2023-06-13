
const fs = require('fs');
const colors = require('colors/safe');

const createFile = async( base = 5, listar = false, hasta = 10 ) => {

    try {

        let salida = '';

        for (let i = 1; i <= hasta; i++) {
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
app
module.exports = {
    createFile
}