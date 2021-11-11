const { crearArchivo } = require('./helpers/multiplicar')
const argv = require('./config/yargs')


console.clear(); //Limpia la consola automaticamente al ejecutar el programa

/*
console.log( process.argv );
console.log( argv );

console.log(`Base: ${argv.b}`);*/


crearArchivo( argv.b , argv.l , argv.t )
    .then( nomArchivo => console.log(nomArchivo, 'creado'))
    .catch( err => console.error(err));