var React = require('react')
var Day = require('./day')
var styles = require('../styles')
var convertTemp = require('../utils/dateHelpers').convertTemp

function puke(object) {
  return <pre>{JSON.stringify(object, null, ' ')}</pre>;
}
var Details = React.createClass({
  render: function(){
    var state = this.props.location.state

    return(<div>
      <Day date={state.date} imageSrc={state.imageSrc} />
      <div style={styles.details}>
        <p>{state.city}</p>
        <p>{state.cityInfo.weather[0].description}</p>
        <p>min temp: {convertTemp(state.cityInfo.temp.min)} degrees</p>
        <p>max temp: {convertTemp(state.cityInfo.temp.max)} degrees</p>
        <p>humidity: {state.cityInfo.humidity}</p>
      </div>
    </div>)
  }
})

module.exports = Details
