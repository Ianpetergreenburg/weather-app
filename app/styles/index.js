var background = require('../images/pattern.svg')

var styles = {
  header: {
    display:'flex',
    justifyContent:'space-between',
    alignItems:'center',
    background:'#fc6c43',
    color:'#fff',
    padding:'5px'
  },
  home: {
    backgroundImage: 'url(' + background + ')',
    backgroundSize:'cover',
    display:'flex',
    flexDirection:'column',
    justifyContent:'center',
    alignItems:'center',
    height:'100%',
    width:'100%'
  },
  background: {
    width:'100%',
    height:'92%'
  }
}

module.exports = styles;
