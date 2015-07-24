//JSON of relevant stuff
var blobs = [
	{name:"Clive",size:"",pos:{x:400,y:500}}
];


var socket = io();


/*********MOUSE POS --> TO SERVER*********/

var mouseRSig = -100000, mouseTh = -100000;
var waitms = 150, prevTime = Date.now();
var sentRSig = -100000, sentTh = -100000;

//Within the annulus, stopped. On the annulus, moves. Outside of annulus, max speed.
var annulusInnerR = Math.min($(window).height(),$(window).width())/8;
var annulusWidth = Math.min($(window).height(),$(window).width())/4;
$(window).resize(function(){
	annulusInnerR = Math.min($(window).height(),$(window).width())/8;
	annulusWidth = Math.min($(window).height(),$(window).width())/4;
});

//change vel based on mousepos
$(document).mousemove(function(e){
	if(!e)e=window.event;
	
	XCtr = parseInt(e.clientX) - $(window).width() / 2;
	YCtr = parseInt(e.clientY) - $(window).height() / 2;
	
	mouseRSig = sigmoidFunction(Math.sqrt(XCtr * XCtr + YCtr * YCtr));
	mouseTh = Math.atan2(YCtr, XCtr);
	
	var dRSig = sentRSig - mouseRSig,
		dTh = sentTh - mouseTh;
	
	if((Math.abs(dRSig) > 0.1 || Math.abs(dTh) > 0.05 /*about 3 degrees*/) && Date.now() - prevTime > waitms){
		prevTime = Date.now();
		socket.emit('mousemove', {RSig:mouseRSig, Th:mouseTh});
		sentRSig = mouseRSig;
		sentTh = mouseTh;
	}
});

function sigmoidFunction(x){
	return 1/(1+Math.exp(-((x-annulusInnerR-annulusWidth/2)/(annulusWidth/2/4))));
}

/*********GET POSITIONS AND VELOCITIES FROM SERVER*********/

socket.on('update', function(point){}); //how do I uniquely identify each player

//render stuff
//viewport follows user


