var background = require('../images/pattern.svg')

var styles = {
  header: {
    display:'flex',
    justifyContent:'space-between',
    alignItems:'center',
    background:'#fc6c43',
    color:'#fff',
    padding:'5px',
    margin: '0px',
    borderRadius: '0px',
    height: '8%'
  },
  home: {
    backgroundImage: 'url(' + background + ')',
    backgroundSize:'cover',
    display:'flex',
    flexDirection:'column',
    justifyContent:'center',
    alignItems:'center',
    height:'92%',
    width:'100%'
  },
  homecontainer: {
    padding: 0,
    height: '100%'
  },
  background: {
    width:'100%',
    height:'100%'
  },
  search: {
    display:'flex',
    flexDirection: 'column',
    justifyContent:'center',
    alignItems:'center',
    maxWidth:'300px',
    alignSelf:'right'
  },
  searchBar: {
    display:'flex',
    flexDirection: 'row',
    justifyContent:'center',
    alignItems:'center',
    maxWidth:'300px',
    alignSelf:'right'
  },
  enterCity: {
    color: 'white',
    fontFamily: 'Helvetica Neue',
    fontWeight: 100,
    fontSize: '45px'
  }
}

module.exports = styles

