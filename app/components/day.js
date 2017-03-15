var React = require('react')
var styles = require('../styles')

function Day (props) {
  return(
        <div onClick={props.getDetails} style={styles.dayContainer}>
          <img src={props.imageSrc} style={styles.weatherIcon}/>
          <h2 style={styles.dayHeader}> {props.date} </h2>
        </div>
        )
 }

module.exports = Day

