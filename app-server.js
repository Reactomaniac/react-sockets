var express = require("express");

var connections = [];

var app = express();

app.use(express.static("./public"));
app.use(express.static("./node_modules/bootstrap/dist"));

var server = app.listen(3000);

var io = require("socket.io").listen(server);

io.sockets.on("connection", function(socket){

	socket.once("disconnect", function(){
		connections.splice(connections.indexOf(socket), 1);
		socket.disconnect();
		console.log("Disconnected: %s remaining sockets", connections.length);
	});

	connections.push(socket);
	console.log("Connected: %s sockets connected", connections.length);
});

console.log("App is pooling at port 3000");
