var React = require('react')
var Day = require('./day')
var styles = require('../styles')

function puke(object) {
  return <pre>{JSON.stringify(object, null, ' ')}</pre>;
}

// {
//  "dt": 1489694400,
//  "temp": {
//   "day": 280.83,
//   "min": 276.38,
//   "max": 280.83,
//   "night": 276.38,
//   "eve": 279.43,
//   "morn": 277.61
//  },
//  "pressure": 1026.78,
//  "humidity": 92,
//  "weather": [
//   {
//    "id": 500,
//    "main": "Rain",
//    "description": "light rain",
//    "icon": "10d"
//   }
//  ],
//  "speed": 4.81,
//  "deg": 208,
//  "clouds": 80,
//  "rain": 0.78
// }

function Forecast (props) {
  return (props.isLoading === true
    ? <div> Loading </div>
    : <div style={styles.forecastContainer}>
        <h1 style={styles.forecastHeader}>{props.city}</h1>
        <p style={styles.forecastPrompt}> Select a Day </p>
        <div style={styles.forecastDays}>
          {props.cityInfo.map(function(city){
            return <Day key={city.dt} cityInfo={city}/>
          })}
        </div>
     </div>)
}

module.exports = Forecast
