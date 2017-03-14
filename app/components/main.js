var React = require('react')
var styles=require('../styles')

var Main = React.createClass({
  render: function(){
    return(
      <div style={styles.background}>
        {this.props.children}
      </div>
    )
  }
})

module.exports = Main
