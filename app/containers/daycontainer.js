var React = require('react')
var styles = require('../styles')
var dateHelpers = require('../utils/dateHelpers')
var Day = require('../components/Day')

var DayContainer = React.createClass({
  contextTypes: {
    router: React.PropTypes.object.isRequired
  },
  handleGetDetails: function(e){
    e.preventDefault();
    var imageSrc = './app/images/weather-icons/' + this.props.cityInfo.weather[0].icon + '.svg'
    var date = dateHelpers.getDate(this.props.cityInfo.dt)
    var city = this.props.city
    this.context.router.push({
      pathname: '/details/' + city,
      state: {
        city: city,
        cityInfo: this.props.cityInfo,
        imageSrc: imageSrc,
        date: date
      }
    })
  },
  render: function(){
    var imageSrc = './app/images/weather-icons/' + this.props.cityInfo.weather[0].icon + '.svg'
    var date = dateHelpers.getDate(this.props.cityInfo.dt)
    return(
          <Day
          imageSrc={imageSrc}
          date={date}
          getDetails={this.handleGetDetails}
          />)
  }
})

module.exports = DayContainer

