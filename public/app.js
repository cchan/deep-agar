//JSON of relevant stuff
var blobs = [
	{name:"Clive",size:"",pos:{x:400,y:500}}
];


var socket = io();


/*********MOUSE POS --> TO SERVER*********/

var mouseRSig = -100000, mouseTh = -100000;
var sentRSig = -100000, sentTh = -100000;
var clientX, clientY;

//Within the annulus, stopped. On the annulus, moves. Outside of annulus, max speed.
var annulusInnerR = Math.min($(window).height(),$(window).width())/8;
var annulusWidth = Math.min($(window).height(),$(window).width())/4;
$(window).resize(function(){
	annulusInnerR = Math.min($(window).height(),$(window).width())/8;
	annulusWidth = Math.min($(window).height(),$(window).width())/4;
});

$(window).mousemove(function(e){
	if(!e)var e = window.event;
	clientX = e.clientX;
	clientY = e.clientY;
})

//change vel based on mousepos
setInterval(function(e){
	XCtr = parseInt(clientX) - $(window).width() / 2;
	YCtr = parseInt(clientY) - $(window).height() / 2;
	
	mouseRSig = sigmoidFunction(Math.sqrt(XCtr * XCtr + YCtr * YCtr));
	mouseTh = Math.atan2(YCtr, XCtr);
	
	var dRSig = sentRSig - mouseRSig,
		dTh = sentTh - mouseTh;
	
	if(Math.abs(dRSig) > 0.1 || Math.abs(dTh) > 0.1 /*about 6 degrees*/){
		console.log(mouseRSig);
		socket.emit('mousemove', {RSig:mouseRSig, Th:mouseTh});
		sentRSig = mouseRSig;
		sentTh = mouseTh;
	}
},150);

function sigmoidFunction(x){
	return 1/(1+Math.exp(-((x-annulusInnerR-annulusWidth/2)/(annulusWidth/2/4))));
}

/*********GET POSITIONS AND VELOCITIES FROM SERVER*********/

socket.on('update', function(point){}); //how do I uniquely identify each player

//render stuff
//viewport follows user


