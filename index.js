var express = require('express');
var app = express();
var http = require('http').Server(app);
var io = require('socket.io')(http);

/*****Get the server up and listening*****/
http.listen(process.env.PORT || 3000, function(){ //Heroku dynamically assigns port: http://stackoverflow.com/a/15693371
  console.log('listening on *:' + (process.env.PORT || 3000));
});

/*****Figure out what to serve*****/
app.use(express.static('public')); //serves stuff in /public as if it's in the main directory
app.get('/', function(req, res){
	//can log a pageload here
	res.sendFile('index.html', { root: __dirname });
});

/*****Data-relaying*****/
io.on('connection', function(socket){
	/*****Handle connects and disconnects*****/
	socket.on('login', function(data){
		socket.userdata = data;
		console.log('Added user:', socket.userdata.Username);
	});
	socket.on('disconnect', function(){ //Usefully, sockets are removed as they disconnect, so I don't have to manually search players[] for the username to remove.
		console.log('Disconnected:', socket.userdata.Username);
	});
	
	/*****Collect sent data*****/
	socket.on('posupdate', function(data){
		if(socket.userdata.Username != data.Username){
			console.log("ERROR: Posupdate name doesn't match socket");
			return;
		}
		if(clientX === null || clientY === null)
			return;
		socket.userdata.x = data.x;
		socket.userdata.y = data.y;
	});
});

/*****Periodically broadcast all data*****/
setInterval(function(){
	var players = [];
	io.sockets.clients().forEach(function (socket) {
		if(socket.userdata)
			players.push(socket.userdata);
	});
	io.sockets.emit('playerdata',players); //this emits to all; socket.emit emits only to current socket (see - function(socket) at the top); socket.broadcast.emit does to everyone except current
},50);
