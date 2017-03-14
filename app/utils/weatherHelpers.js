var axios = require('axios');

var id = "fec0e1a8dd1b22b9cad7dd37a52fdd13";
var prefix = '&APPID='
var param = prefix + id

function getCurrentWeather (city) {
  return axios.get('http://api.openweathermap.org/data/2.5/weather?q=' + city + '&type=accurate' + param);
}

function getForecast (city) {
  return axios.get('http://api.openweathermap.org/data/2.5/weather?q=' + city + '&type=accurate' + param);
  http://api.openweathermap.org/data/2.5/forecast/daily?q=' + city + '&type=accurate&APPID=YOUR-API-KEY&cnt=5
}

var helpers = {
  getCurrentWeather: function (city) {
    return getCurrentWeather(city)
    .then(function(weather){
      return weather
    })
    .catch(function (err) {console.warn('Error in getCurrentWeather: ', err)})
  },
  getForecast: function(city){

  }
};

module.exports = helpers;
