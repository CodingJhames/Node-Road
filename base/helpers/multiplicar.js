
const fs = require('fs');

const createFile = async( base = 5, listar = false ) => {

    try {

        let salida = '';

        for (let i = 1; i <= 10; i++) {
                salida +=`${ base } x ${i} = ${ base * i }\n`;
        }

        if( listar ){
            console.log('=====================');
            console.log('   Tabla del:', base );
            console.log('=====================');
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