

const createFile = async( base = 4 ) => {

    try {
        console.log('=====================');
        console.log('Tabla del:', base );
        console.log('=====================');


        let salida = '';

        for (let i = 1; i <= 10; i++) {
                salida +=`${ base } x ${i} = ${ base * i }\n`;
        }

        console.log( salida );

        fs.writeFileSync(`table-${base}.txt`, salida, (err) => {
                if ( err) throw err;
                // console.log(`created table-${base} file`);
        } )

        return `table-${base}.text created`;
    } catch (error) {
        throw error;
    }

};


module.exports = {
    createFile
}