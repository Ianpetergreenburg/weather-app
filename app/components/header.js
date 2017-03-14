var React = require('react')
var styles = require('../styles')
var Search = require('./search')

var Header = React.createClass({
  render: function(){
    return(
        <div style={styles.header}>
          <h2 style={{margin: 0}}>Clever Title</h2>
          <Search style={styles.searchBar}/>
        </div>
      )
  }
})

module.exports = Header
