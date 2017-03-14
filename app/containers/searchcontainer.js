var React = require('react')
var Search = require('../components/search')
var weatherHelpers = require('../utils/weatherHelpers')

var SearchContainer = React.createClass({
  contextTypes: {
    router: React.PropTypes.object.isRequired
  },
  getInitialState() {
    return({
      search: ''
    })
  },
  handleSearch: function(e){
    e.preventDefault();
    weatherHelpers.getCurrentWeather(this.state.search)
    .then(function(weather){
      console.log('weather', weather)
    })
    // this.context.router.push({
    //   pathname: '/forecast',
    //   query: {
    //     city: this.state.search,
    //   }
    // })
  },
  handleUpdateSearch: function (e) {
    this.setState({
      search: e.target.value
    });
  },
  render: function(){
    return (
        <Search
          style={this.props.style}
          onSearch={this.handleSearch}
          updateSearch={this.handleUpdateSearch}
        />
      )
  }
})

module.exports = SearchContainer
