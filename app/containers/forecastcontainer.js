var React = require('react')
var weatherHelpers = require('../utils/weatherHelpers')
var Forecast = require('../components/Forecast')

var ForecastContainer = React.createClass({
  getInitialState() {
    return({
      isLoading: true,
      cityInfo: []
    })
  },
  componentDidMount: function(){
    weatherHelpers.getForecast(this.props.routeParams.city)
    .then(function(weather){
      this.setState({
        isLoading: false,
        cityInfo: weather.list
      })
    }.bind(this))
  },
  render: function(){
    return (<Forecast
            isLoading={this.state.isLoading}
            cityInfo={this.state.cityInfo}
            city={this.props.routeParams.city}
            />)
  }
})

module.exports = ForecastContainer
