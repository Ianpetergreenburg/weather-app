var React = require('react')
var Header = require('./header')
var styles = require('../styles')
var Search = require('./search')

var Home = React.createClass({
  render: function(){
    return(
        <div className='col-sm-12 text-center' style={styles.homecontainer}>
          <Header />
          <div style={styles.home}>
            <h1 style={styles.enterCity}>Enter a City and State</h1>
            <Search style={styles.search}/>
          </div>
        </div>
      )
  }
})

module.exports = Home
