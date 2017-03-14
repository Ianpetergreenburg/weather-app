var React = require('react')
var Header = require('./header')
var styles = require('../styles')

var Home = React.createClass({
  render: function(){
    return(
        <div>
          <Header />
          <div className='col-sm-12 col-sm-offset-2' style={styles.home}>
            <h2>Enter A City Or State</h2>
            <form>
              <input type='text' placeholder='Seattle, WA'></input>
              <button type='submit'>Enter</button>
            </form>
          </div>
        </div>
      )
  }
})

module.exports = Home
