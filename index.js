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



//broadcast positions
io.on('connection', function(socket){
  console.log('a user connected');
  socket.on('disconnect', function(){
	  console.log('disconnected');
  });
  socket.on('mousemove', function(point){
	if(point.RSig <= 1 && point.RSig >= 0 && point.Th >= -Math.PI && point.Th <= Math.PI)
		console.log(point);
  });
});


