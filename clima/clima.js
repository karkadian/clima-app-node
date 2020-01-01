const axios = require('axios');

const getClima = async (lat, lng) => {
    const resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=251c6927e4c4ce466d06d8220341c36a&units=metric`);

    return resp.data.main.temp;
}

module.exports = {
    getClima
}