var background = require('../images/blue-pattern.svg')

var styles = {
  header: {
    display:'flex',
    justifyContent:'space-between',
    alignItems:'center',
    background:'#4083BD',
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
  },
  forecastContainer: {
    textAlign: 'center'
  },
  forecastHeader: {
    fontSize:'65px',
    color:'#333',
    fontWeight:'100',
    textAlign:'center',
    marginTop:'50px',
    marginBottom:'30px'
  },
  forecastPrompt: {
    fontSize:'30px',
    color:'#333',
    fontWeight:'100'
  },
  forecastDays: {
    display:'flex',
    justifyContent:'space-between',
    alignItems:'center',
    flexDirection:'row',
    flexWrap:'wrap',
    maxWidth:'1200px',
    margin:'50px auto'
  },
  dayContainer: {
    display:'flex',
    alignItems:'center',
    justifyContent:'center',
    flexDirection:'column',
    margin:'35px'
  },
  weatherIcon:{
    height: '130px'
  },
  dayHeader: {
    fontSize:'30px',
    color:'#333',
    fontWeight:'100'
  },
  details: {
    fontSize:'34px',
    fontWeight:'100',
    maxWidth:'400px',
    margin:'0 auto',
    textAlign:'center'
  },
  noLink: {
    color: 'white',
   textDecoration: 'none'
  }
}

module.exports = styles

