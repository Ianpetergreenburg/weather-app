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
  getWeather: function(city){
    weatherHelpers.getForecast(city)
    .then(function(weather){
      this.setState({
        isLoading: false,
        cityInfo: weather.list
      })
    }.bind(this))
  },
  componentDidMount: function(){
    this.getWeather(this.props.routeParams.city)
  },
  componentWillReceiveProps: function (nextProps) {
    this.getWeather(this.props.routeParams.city)
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
