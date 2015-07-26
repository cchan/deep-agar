//On each frame, draws a circle and text for each player
function onFrame(){
	project.activeLayer.removeChildren(); //clear the layer - hm layers are actually really powerful
	for(var i in players){
		var point = new Point(players[i].x,players[i].y);
		var color = 'red';
		
		if(players[i].Username == username){
			point = new Point(mouseX, mouseY);
			color = 'green';
		}
		
		Shape.Circle({
			center: point,
			radius: 50,
			fillColor: color //it's green if it's yours
		});
		
		PointText({
			center: point,
			content: players[i].Username.replace(' ','\n'),
			justification: 'center',
			fillColor: 'white',
			fontSize: '8pt'
		});
	}
}

//I really like http://paperjs.org/examples/candy-crash/
