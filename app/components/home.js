var React = require('react')
var Header = require('./header')
var styles = require('../styles')

var Home = React.createClass({
  render: function(){
    return(
        <div style={styles.home}>
          <Header />
          <div className='container'>
            <h2>Enter A City Or State</h2>
            <form>
              <input type='text' placeholder='Seattle, WA'></input>
              <button type='submit'>Enter</button>
            </form>
          </div>
          Home Component
        </div>
      )
  }
})

module.exports = Home
