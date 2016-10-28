var React = require("react");
var ReactDom = require("react-dom");
var Router = require("react-router").Router;
var Route = require("react-router").Route;
var IndexRoute = require("react-router").IndexRoute;
var hashHistory = require("react-router").hashHistory;

var APP = require("./components/APP");
var Audience = require("./components/Audience")
var Speaker = require("./components/Speaker")
var Board = require("./components/Board")

ReactDom.render(
  <Router history={ hashHistory } >
      <Route path="/" component={ APP }>
          <IndexRoute component={ Audience}/>
          <Route name="speaker" path="speaker" component={Speaker}></Route>
          <Route name="board" path="board" component={Board}></Route>
      </Route>
  </Router>,
  document.getElementById('react-container')
);