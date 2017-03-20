var React = require('react')
var Search = require('../components/search')

var SearchContainer = React.createClass({
  contextTypes: {
    router: React.PropTypes.object.isRequired
  },
  getInitialState: function() {
    return({
      search: ''
    })
  },
  handleSearch: function(e){
    e.preventDefault();
    var city = this.state.search
    this.context.router.push('/forecast/' + city)
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
