var React = require('react')
var styles = require('../styles')
var SearchContainer = require('../containers/searchcontainer')
var Link = require('react-router').Link

var Header = React.createClass({
  render: function(){
    return(
        <div style={styles.header}>
          <Link to='/' style={styles.noLink}>
            <h2 style={{margin: 0}}>Whatever Your Weather</h2>
          </Link>
          <SearchContainer style={styles.searchBar}/>
        </div>
      )
  }
})

module.exports = Header
