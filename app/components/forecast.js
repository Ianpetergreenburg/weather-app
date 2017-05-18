var React = require('react')
var DayContainer = require('../containers/daycontainer.js')
var styles = require('../styles')

function Forecast (props) {
  return (props.isLoading === true
    ? <div> Please change your URL to HTTP from HTTPS to get a forecast </div>
    : <div style={styles.forecastContainer}>
        <h1 style={styles.forecastHeader}>{props.city}</h1>
        <p style={styles.forecastPrompt}> Select a Day </p>
        <div style={styles.forecastDays}>
          {props.cityInfo.map(function(city){
            return <DayContainer key={city.dt} cityInfo={city} city={props.city}/>
          })}
        </div>
     </div>)
}

module.exports = Forecast
