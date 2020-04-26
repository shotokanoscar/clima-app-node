const axios = require('axios'); //axios para retalizar peticiones a una api

const getLugarLatLng = async(direccion) => {

    const encodedUlr = encodeURI(direccion);


    const instance = axios.create({
        baseURL: `https://devru-latitude-longitude-find-v1.p.rapidapi.com/latlon.php?location=${ encodedUlr }`,
        headers: { 'x-rapidapi-key': 'b987d001b4msh52036dd1e65eb59p1c602cjsneefd605a2c25' }
    });

    const resp = await instance.get();

    if (resp.data.Results.length === 0) {
        throw new Error(`No hay resultado para ${ direccion }`);

    }

    const data = resp.data.Results[0];
    const direc = data.name;
    const lat = data.lat;
    const lng = data.lon;

    return {
        direc,
        lat,
        lng
    }
}

module.exports = {
    getLugarLatLng
}