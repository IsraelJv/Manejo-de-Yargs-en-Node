//Se manda a llamar el paquete
const fs = require('fs'); //fs(file system)
const colors = require('colors');

const crearArchivo = ( base , listar , tope) => { //Forma 1

    return new Promise((resolve, reject) => {

        let salida = '';
        let consola = '';
        const nombreA = `tabla-${base}.txt`;
        const ubicacionA = `./salida/tabla-${base}.txt`;

        for (let i = 1; i <= tope; i++){
            salida += `${base} x ${i} = ${base * i} \n`;
            consola += `${base} ${ 'x'.white } ${i} ${ '='.white } ${base * i} \n`;
        }
            

        if( listar ){
            console.log(colors.green('---------------'));
            console.log(colors.rainbow(`  Tabla del ${base}`));
            console.log(colors.blue('---------------'));

            console.log(colors.yellow(consola)); //Muestra en consola el resultado
        }

        fs.writeFileSync(ubicacionA, salida);

        resolve(nombreA);
    })
}

module.exports = {
    //Nombre con el que se exporta, nombre de la función 
    //crearArchivo: crearArchivo
    //Como tienen el mismo nombre se puede poner solo una vez.
    crearArchivo
}


/*
const crearArchivo = async (base) => { //Forma 2

    try {
        let salida = '';
        const nombreA = `tabla-${base}.txt`;

        console.log('---------------');
        console.log(`  Tabla del ${base}`);
        console.log('---------------');

        for (let i = 1; i <= 10; i++)
            salida += `${base} x ${i} = ${base * i} \n`;

        console.log(salida); //Muestra en consola el resultado

        fs.writeFileSync(nombreA, salida);

        return (nombreA);
    } catch (err) {
        throw err;
    }

}*/