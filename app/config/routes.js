var React = require('react')
var ReactRouter = require('react-router')
var Router = ReactRouter.Router
var Route = ReactRouter.Route
var hashHistory = ReactRouter.hashHistory
var IndexRoute = ReactRouter.IndexRoute
var Main = require('../components/Main')
var Home = require('../components/Home')
var ForecastContainer = require('../containers/ForecastContainer')
var Details = require('../components/Details')

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
