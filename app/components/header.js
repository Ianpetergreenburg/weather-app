var React = require('react')
var styles = require('../styles')

var Header = React.createClass({
  render: function(){
    return(
        <div className="navbar" style={styles.header}>
          <h1>Clever Title</h1>
        </div>
      )
  }
})

module.exports = Header
