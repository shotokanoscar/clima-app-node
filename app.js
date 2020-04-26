const info = require('./info/info');

const argv = require('yargs').options({
    direccion: {
        alias: 'd',
        desc: 'Direccion de la ciudad para obtener el clima',
        demand: true
    }

}).argv;


info.getINfo(argv.direccion)
    .then(console.log)
    .catch(console.log);