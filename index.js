var express = require('express');
var app = express();
var http = require('http').Server(app);
var io = require('socket.io')(http);

/*****Get the server up*****/
http.listen(process.env.PORT || 3000, function(){ //Heroku dynamically assigns port http://stackoverflow.com/a/15693371
  console.log('listening on *:' + (process.env.PORT || 3000));
});

/*****Figure out what to serve*****/
app.use(express.static('public'));
app.get('/', function(req, res){
  res.sendFile('index.html', { root: __dirname });
});

/*****Relay data packets*****/
var players = [];
io.on('connection', function(socket){
  console.log('a user connected');
  socket.on('login', function(data){
	  console.log('Added user:',data);
	  io.sockets.emit('login', data);
	  socket.userdata = data;
	  players.push(data);
	  //socket.emit('logininit',players); //only to this socket
  });
  socket.on('disconnect', function(){
	  console.log('Disconnected:',socket.userdata.Username);
	  
	  for(var i = 0; i<players.length;i++){
		  if(players[i].Username == socket.userdata.Username){
			  players.splice(i,1);
			  break;
		  }
	  }
	  console.log(players);
  });
  socket.on('mousemove', function(data){
	//if(data.RSig <= 1 && data.RSig >= 0 && data.Th >= -Math.PI && data.Th <= Math.PI){
	  //io.sockets.emit('update', data);
	  for(var i = 0;i<players.length;i++)
		  if(players[i].Username == data.Username)
			  players[i] = data;
	//}
  });
  setInterval(function(){
	  io.sockets.emit('playerdata',players);
  },50);
});


