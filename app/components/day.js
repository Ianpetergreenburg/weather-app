var React = require('react')
var styles = require('../styles')

function puke(object) {
  return <pre>{JSON.stringify(object, null, ' ')}</pre>;
}

var Day = React.createClass({
  render: function(){
    return(
          <div style={styles.dayContainer}>
            {puke(this.props.cityInfo)}
          </div>)
  }
})

module.exports = Day
