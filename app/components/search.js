var React = require('react')
var styles = require('../styles')

var Search = React.createClass({
  render: function(){
    return(
        <div style={this.props.style}>
          <input type='text' className='form-control' placeholder='Seattle, WA'></input>
          <button type='submit' className='btn btn-success' style={{margin: 10 + 'px'}}>Get Weather</button>
        </div>
      )
  }
})

module.exports = Search
