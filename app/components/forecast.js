var React = require('react')
var DayContainer = require('../containers/daycontainer')
var styles = require('../styles')

function Forecast (props) {
  return (props.isLoading === true
    ? <div> Loading </div>
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
