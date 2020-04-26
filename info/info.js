const lugar = require('../lugar/lugar');
const clima = require('../clima/clima');

const getINfo = async(direccion) => {

    try {
        const cordenas = await (lugar.getLugarLatLng(direccion));
        const temp = await (clima.getClima(cordenas.lat, cordenas.lng));

        return `El clima para ${cordenas.direc} es de ${temp}`;
    } catch (e) {
        return `No se pude determinar el clima de ${direccion}`;
    }

}

module.exports = {
    getINfo

}