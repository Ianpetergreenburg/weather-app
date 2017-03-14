var React = require('react')
var Search = require('../components/search')

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
  },
  handleUpdateSearch: function (e) {
    console.log('search', e.target.value)
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
