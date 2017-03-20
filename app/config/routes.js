var React = require('react')
var ReactRouter = require('react-router')
var Router = ReactRouter.Router
var Route = ReactRouter.Route
var hashHistory = ReactRouter.hashHistory
var IndexRoute = ReactRouter.IndexRoute
var Main = require('../components/main.js')
var Home = require('../components/home.js')
var ForecastContainer = require('../containers/forecastcontainer.js')
var Details = require('../components/details.js')

var routes = (
  <Router history={hashHistory}>
    <Route path='/' component={Main}>
      <IndexRoute component={Home} />
      <Route path='forecast/:city' component={ForecastContainer} />
      <Route path='details/:city' component={Details} />
    </Route>
  </Router>
)

module.exports = routes
