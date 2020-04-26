const axios = require('axios');

const getClima = async(lat, lng) => {
    const resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=da95fb04a48eae255d3e66bd6debc570&units=metric`);

    return resp.data.main.temp;

}

module.exports = {
    getClima

}