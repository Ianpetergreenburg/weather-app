var React = require('react')
var Header = require('./header')
var styles=require('../styles')

var Main = React.createClass({
  render: function(){
    return(
      <div style={styles.background}>
        <Header />
        {this.props.children}
      </div>
    )
  }
})

module.exports = Main
