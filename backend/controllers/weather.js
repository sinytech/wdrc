const axios = require('axios')
const config = require('config');

const getWeatherInfo = (req, res) => {
    const { lat, lon } = req.query
    if (!lon || !lat) {
        return res.status(400).send('Incorrect params')
    }
    const secretKey = config.get('weather.secretKey')
    return axios.get(`http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${secretKey}&units=metric`)
        .then(({ data }) => res.status(200).send(data))
}

module.exports = {
    getWeatherInfo
}
