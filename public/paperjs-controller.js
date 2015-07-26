//On each frame, draws a circle and text for each player
function onFrame(){
	project.activeLayer.removeChildren(); //clear the layer - hm layers are actually really powerful
	
	//--todo--store previous players[] and make fading trails :)
	for(var i in players){
		var pt = new Point(players[i].x, players[i].y);
		var color = 'red';
		
		if(players[i].Username == username){
			pt = new Point(mouseX, mouseY); //Our own one should follow without lag
			color = 'green';
		}
		
		Shape.Circle({
			center: pt,
			radius: 50,
			fillColor: color //it's green if it's yours
		});
		
		new PointText({
			point: pt,
			content: players[i].Username.replace(' ','\n'),
			justification: 'center',
			fillColor: 'white',
			fontSize: '8pt'
		});
	}
}

//I really like http://paperjs.org/examples/candy-crash/
