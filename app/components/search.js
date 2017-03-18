var React = require('react')
var styles = require('../styles')


function Search (props) {
  return (
      <form onSubmit={props.onSearch} style={props.style}>
        <input onChange={props.updateSearch} type='text' className='form-control' placeholder='Seattle, WA'></input>
        <button type='submit' className='btn btn-info' style={{margin: 10 + 'px'}}>Get Weather</button>
      </form>
    )
}

module.exports = Search
