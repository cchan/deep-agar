//JSON of relevant stuff
var players = [];
var socket = io();

//https://github.com/neotenic/protobowl/blob/5768a03c0720d10897ec3d4823baf003f64ebfb0/shared/names.coffee
var adjective = ['aberrant','abstemious','abstruse','academic','adamant','affable','affine','agile','agog','agressive','aloof','ambidextrous','ambiguous','antediluvian','apocryphal','arboreal','arcane','ascetic','assiduous','astute','audacious','auspicious','austere','autoerotic','banal','bellicose','belligerent','benign','bioluminescent','bipolar','blithe','bodacious','boisterous','boorish','breezy','brownian','buoyant','cacophonous','callow','candid','capacious','closed','cognizant','compact','complete','conciliatory','concise','conspicuous','contiguous','contrite','copious','corporeal','counterfeit','covert','crass','credulous','cryptic','cubic','curious','dapper','dazzling','defiant','deistic','deleterious','demented','derisive','dialtory','diaphanous','didactic','disconsolate','discordant','discreet','disheveled','distraught','dogmatic','dormant','drunk','dubious','ebullient','eclectic','edgy','egregious','electric','enigmatic','epicurean','errant','erratic','erroneous','erudite','esoteric','euclidean','euphonious','evanescent','exhaustive','exorbitant','expedient','extant','extemporaneous','extraneous','facetious','facile','fallacious','fatuous','feisty','fervid','flamboyant','flaming','flat','flippant','florid','foppish','foreign','frugal','garrulous','gastric','germane','gloomy','greedy','gregarious','gullible','gutsy','hackneyed','halcyon','hardy','heinous','hirsute','hoary','homothetic','ideal','ignoble','ignominious','imminent','immutable','impassive','imperious','imperturbable','impervious','impetuous','implacable','implicit','impromptu','inadvertent','inane','incessant','inchoate','incipient','incongruous','indefatigable','indelible','indigenous','indolent','indomitable','ineffable','ineluctable','inept','inevitable','inexorable','ingenuous','innocuous','inscrutable','insipid','insolent','insouciant','integral','intransigent','intrepid','invalid','inveterate','invincible','inviolable','irascible','irksome','irradiated','isometric','itinerant','jaundiced','jaunty','jocular','jolly','jovial','judicious','karmic','lachrymose','lackadaisical','languid','lascivious','lethargic','licentious','linear','lithe','loquacious','lucid','lugubrious','lusty','lustrous','malleable','marvelous','masochistic','maudlin','maverick','mawkish','melancholy','mellifluous','mendacious','meticulous','metric','mordant','moribund','multifarious','mundane','munificent','mystic','narcissistic','natty','nebulous','nefarious','nonchalant','nostalgic','nuclear','obdurate','obsequious','obstreperous','occult','odious','omnipotent','oneric','onerous','opaque','orthogonal','oscillating','palpable','parsimonious','pedagogical','pedantic','pedestrian','perfunctory','periodic','peripatetic','pernicious','polemic','precise','pristine','profligate','projective','prolific','prolix','puerile','pugnacious','pulsating','punctilious','pusillanimous','quantal','quantum','quirky','quixotic','quizzical','quotidian','rabid','racist','rebellious','recalcitrant','redoubtable','redundant','relativistic','religious','remiss','reserved','reticent','rhetorical','ribald','risible','robotic','sadistic','salacious','salient','salubrious','salutary','sardonic','scientific','scintillating','secular','septic','sinuous','sluggish','somber','soporific','spunky','spurious','stationary','stochastic','stoquastic','succinct','superfluous','supine','symmetric','taciturn','tenebrous','terse','tethered','torpid','transient','trenchant','trite','truculent','turgid','ubiquitous','unctuous','vague','valedictorian','valiant','vehement','verbose','verdant','vituperative','vociferous','warty','wintry','wistful','vivacious','sublime','serendipitous','cross','athletic','aesthete','refined','ibdiplican','irate','incandescent','inflamed','esteemed','illustrious','infidel','odd','bizarre','weird','strange','quaint','fantastic','gilded','round','spherical','promiscuous'];
var animal = ['aardvark','albatross','algae','alligator','alpaca','amoeba','anglerfish','ant','anteater','antelope','ape','armadillo','axolotl','baboon','badger','barracuda','basilosauridae','bat','bear','beaver','bee','bird','bison','boar','buffalo','butterfly','camel','caribou','cat','caterpillar','cephalopod','chamois','cheetah','chicken','chimpanzee','chinchilla','chipmunk','chough','clam','cow','cobra','cockroach','cod','cormorant','coyote','crab','crane','crocodile','crow','curlew','deer','dinohippus','dinosaur','dog','dogfish','dolphin','donkey','dotterel','dove','dragon','dragonfly','drake','duck','dugong','dunlin','eagle','echidna','eel','effeminate','eland','elephant','elk','emu','equus','falcon','fawn','ferret','finch','fish','flamingo','fly','fox','frog','gaur','gazelle','gecko','gerbil','gibbon','giraffe','gnat','gnu','goat','goldfinch','goldfish','goose','gopher','gopher','gorilla','goshawk','grasshopper','grouse','guanaco','guillemot','gull','hamster','hare','hawk','hedgehog','hen','heron','herring','hippopotamus','hornet','horse','housefly','hummingbird','hyena','ibex','iguana','jackal','jackalope','jaguar','jay','jellyfish','kakapo','kalobatippus','kangaroo','kitten','kitty','koala','kodiak','komodo','kouprey','kudu','lapwing','lark','lemur','leopard','lion','llama','lobster','locust','loris','louse','lynx','lyrebird','macaque','macaw','magpie','mallard','manatee','marten','meerkat','mink','mole','monkey','mongoose','moose','mosquito','mouse','mule','mushroom','narwhal','neanderthal','newt','nightingale','ocelot','octopus','okapi','opossum','oryx','osprey','ostrich','otter','owl','ox','oyster','panda','panther','paramecium','parrot','partridge','peafowl','pelican','penguin','pheasant','pig','pigeon','platypus','polecat','pony','porcupine','porpoise','possum','pterodactyl','puma','quail','quelea','quetzal','rabbit','raccoon','rail','ram','raptor','rat','rattlesnake','raven','reindeer','rhinoceros','rook','ruff','salamander','salmon','sandpiper','sardine','scorpion','seahorse','seal','seastar','serval','shark','sheep','shrew','skunk','snail','snake','spider','squid','squirrel','starling','stingray','stinkbug','stork','swallow','swan','tapir','tarsier','termite','tiger','toad','tortoise','trout','turkey','turtle','unicorn','ursine','viper','vulture','wallaby','walrus','warthog','wasp','weasel','werewolf','whale','wolf','wolverine','wombat','woodcock','woodpecker','worm','wren','yak','zebra'];

$(function(){
	window.username = adjective[Math.floor(adjective.length * Math.random())] + " " + animal[Math.floor(animal.length * Math.random())]
	window.startpos = {x:Math.random()*$(window).width(), y:Math.random()*$(window).height()};
	console.log("You are logged in as",username,"with start position",startpos);
	socket.emit("login",{Username:window.username,Pos:window.startpos}); //DO ON RECONNECT --todo--
});
socket.on('logininit', function(playersdata){
	players = playersdata;
	console.log('Fetched player list:', playersdata);
});
socket.on('login',function(data){
	players.push(data);
	console.log('Added user:',data);
});

/*********MOUSE POS --> TO SERVER*********/

var mouseRSig = 0, mouseTh = 0;
var sentRSig = 0, sentTh = 0;
var clientX = 0, clientY = 0;

//Within the annulus, stopped. On the annulus, moves. Outside of annulus, max speed.
var annulusInnerR = Math.min($(window).height(),$(window).width())/8;
var annulusWidth = Math.min($(window).height(),$(window).width())/4;
$(window).resize(function(){
	annulusInnerR = Math.min($(window).height(),$(window).width())/8;
	annulusWidth = Math.min($(window).height(),$(window).width())/4;
});

var mouseDown = 0;
$(window).on('touchstart mousedown',function() {mouseDown = 1;});
$(window).on('touchend touchcancel mouseup',function() {mouseDown = 0;});
$(window).on('touchmove mousemove',function(e){
	if(mouseDown){
		clientX = e.clientX || e.originalEvent.touches[0].pageX;
		clientY = e.clientY || e.originalEvent.touches[0].pageY;
	}
});

setInterval(function(e){
	if(clientX === null || clientY === null)return;
	
	var XCtr = parseInt(clientX) - $(window).width() / 2;
	var YCtr = parseInt(clientY) - $(window).height() / 2;
	
	mouseRSig = sigmoidFunction(Math.sqrt(XCtr * XCtr + YCtr * YCtr));
	mouseTh = Math.atan2(YCtr, XCtr);
	
	var dRSig = sentRSig - mouseRSig,
		dTh = sentTh - mouseTh;
	
	//if(Math.abs(dRSig) > 0.1 || Math.abs(dTh) > 0.1 /*about 6 degrees*/){
		socket.emit('mousemove', {Username: username, /*RSig:mouseRSig, Th:mouseTh, */x:clientX, y:clientY}); //lol what is security
		sentRSig = mouseRSig;
		sentTh = mouseTh;
	//}
	
	updateData();
},20);

function updateData(){//change pos based on received data
	for(var i in players){
		//players[i].Pos.x += 10*players[i].RSig*Math.cos(players[i].Th);
		//players[i].Pos.x = normalize(players[i].Pos.x,0,$(window).width());
		//players[i].Pos.y += 10*players[i].RSig*Math.sin(players[i].Th);
		//players[i].Pos.y = normalize(players[i].Pos.y,0,$(window).height());
	}
}
function normalize(a,low,high){
	if(a<low)return low;
	if(a>high)return high;
	return a;
}

function sigmoidFunction(x){
	return 1/(1+Math.exp(-((x-annulusInnerR-annulusWidth/2)/(annulusWidth/2/4))));
}

/*********GET POSITIONS AND VELOCITIES FROM SERVER*********/

socket.on('update', function(data){
	var ind = -1;
	for(var i = 0; i < players.length; i++){
		if(players[i].Username == data.Username){
			players[i].RSig = data.RSig;
			players[i].Th = data.Th;
			break;
		}
	}
});

socket.on('playerdata', function(data){
	players = data;
});

//render stuff
//viewport follows user


