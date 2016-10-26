var React = require("react");
var ReactDom = require("react-dom");
var Router = require("react-router");
var Route = Router.Route;
var DefaultRoute = require("react-router").DefaultRoute;

var APP = require("./components/APP");
var Audience = require("./components/Audience")
var Speaker = require("./components/Speaker")
var Board = require("./components/Board")

var routes = (
	<Route handler={APP}>
		<Route path="/" handler={Audience}></Route>
		<Route name="speaker" path="speaker" handler={Speaker}></Route>
		<Route name="board" path="board" handler={Board}></Route>
	</Route>
);

ReactDom.render(<Router>{routes}</Router>, document.getElementById('react-container')) 
