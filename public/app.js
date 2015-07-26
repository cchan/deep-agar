var socket = io();

/*****"Log in" with a username*****/
//https://github.com/neotenic/protobowl/blob/5768a03c0720d10897ec3d4823baf003f64ebfb0/shared/names.coffee
var adjective = ['aberrant','abstemious','abstruse','academic','adamant','affable','affine','agile','agog','agressive','aloof','ambidextrous','ambiguous','antediluvian','apocryphal','arboreal','arcane','ascetic','assiduous','astute','audacious','auspicious','austere','autoerotic','banal','bellicose','belligerent','benign','bioluminescent','bipolar','blithe','bodacious','boisterous','boorish','breezy','brownian','buoyant','cacophonous','callow','candid','capacious','closed','cognizant','compact','complete','conciliatory','concise','conspicuous','contiguous','contrite','copious','corporeal','counterfeit','covert','crass','credulous','cryptic','cubic','curious','dapper','dazzling','defiant','deistic','deleterious','demented','derisive','dialtory','diaphanous','didactic','disconsolate','discordant','discreet','disheveled','distraught','dogmatic','dormant','drunk','dubious','ebullient','eclectic','edgy','egregious','electric','enigmatic','epicurean','errant','erratic','erroneous','erudite','esoteric','euclidean','euphonious','evanescent','exhaustive','exorbitant','expedient','extant','extemporaneous','extraneous','facetious','facile','fallacious','fatuous','feisty','fervid','flamboyant','flaming','flat','flippant','florid','foppish','foreign','frugal','garrulous','gastric','germane','gloomy','greedy','gregarious','gullible','gutsy','hackneyed','halcyon','hardy','heinous','hirsute','hoary','homothetic','ideal','ignoble','ignominious','imminent','immutable','impassive','imperious','imperturbable','impervious','impetuous','implacable','implicit','impromptu','inadvertent','inane','incessant','inchoate','incipient','incongruous','indefatigable','indelible','indigenous','indolent','indomitable','ineffable','ineluctable','inept','inevitable','inexorable','ingenuous','innocuous','inscrutable','insipid','insolent','insouciant','integral','intransigent','intrepid','invalid','inveterate','invincible','inviolable','irascible','irksome','irradiated','isometric','itinerant','jaundiced','jaunty','jocular','jolly','jovial','judicious','karmic','lachrymose','lackadaisical','languid','lascivious','lethargic','licentious','linear','lithe','loquacious','lucid','lugubrious','lusty','lustrous','malleable','marvelous','masochistic','maudlin','maverick','mawkish','melancholy','mellifluous','mendacious','meticulous','metric','mordant','moribund','multifarious','mundane','munificent','mystic','narcissistic','natty','nebulous','nefarious','nonchalant','nostalgic','nuclear','obdurate','obsequious','obstreperous','occult','odious','omnipotent','oneric','onerous','opaque','orthogonal','oscillating','palpable','parsimonious','pedagogical','pedantic','pedestrian','perfunctory','periodic','peripatetic','pernicious','polemic','precise','pristine','profligate','projective','prolific','prolix','puerile','pugnacious','pulsating','punctilious','pusillanimous','quantal','quantum','quirky','quixotic','quizzical','quotidian','rabid','racist','rebellious','recalcitrant','redoubtable','redundant','relativistic','religious','remiss','reserved','reticent','rhetorical','ribald','risible','robotic','sadistic','salacious','salient','salubrious','salutary','sardonic','scientific','scintillating','secular','septic','sinuous','sluggish','somber','soporific','spunky','spurious','stationary','stochastic','stoquastic','succinct','superfluous','supine','symmetric','taciturn','tenebrous','terse','tethered','torpid','transient','trenchant','trite','truculent','turgid','ubiquitous','unctuous','vague','valedictorian','valiant','vehement','verbose','verdant','vituperative','vociferous','warty','wintry','wistful','vivacious','sublime','serendipitous','cross','athletic','aesthete','refined','ibdiplican','irate','incandescent','inflamed','esteemed','illustrious','infidel','odd','bizarre','weird','strange','quaint','fantastic','gilded','round','spherical','promiscuous'];
var animal = ['aardvark','albatross','algae','alligator','alpaca','amoeba','anglerfish','ant','anteater','antelope','ape','armadillo','axolotl','baboon','badger','barracuda','basilosauridae','bat','bear','beaver','bee','bird','bison','boar','buffalo','butterfly','camel','caribou','cat','caterpillar','cephalopod','chamois','cheetah','chicken','chimpanzee','chinchilla','chipmunk','chough','clam','cow','cobra','cockroach','cod','cormorant','coyote','crab','crane','crocodile','crow','curlew','deer','dinohippus','dinosaur','dog','dogfish','dolphin','donkey','dotterel','dove','dragon','dragonfly','drake','duck','dugong','dunlin','eagle','echidna','eel','effeminate','eland','elephant','elk','emu','equus','falcon','fawn','ferret','finch','fish','flamingo','fly','fox','frog','gaur','gazelle','gecko','gerbil','gibbon','giraffe','gnat','gnu','goat','goldfinch','goldfish','goose','gopher','gopher','gorilla','goshawk','grasshopper','grouse','guanaco','guillemot','gull','hamster','hare','hawk','hedgehog','hen','heron','herring','hippopotamus','hornet','horse','housefly','hummingbird','hyena','ibex','iguana','jackal','jackalope','jaguar','jay','jellyfish','kakapo','kalobatippus','kangaroo','kitten','kitty','koala','kodiak','komodo','kouprey','kudu','lapwing','lark','lemur','leopard','lion','llama','lobster','locust','loris','louse','lynx','lyrebird','macaque','macaw','magpie','mallard','manatee','marten','meerkat','mink','mole','monkey','mongoose','moose','mosquito','mouse','mule','mushroom','narwhal','neanderthal','newt','nightingale','ocelot','octopus','okapi','opossum','oryx','osprey','ostrich','otter','owl','ox','oyster','panda','panther','paramecium','parrot','partridge','peafowl','pelican','penguin','pheasant','pig','pigeon','platypus','polecat','pony','porcupine','porpoise','possum','pterodactyl','puma','quail','quelea','quetzal','rabbit','raccoon','rail','ram','raptor','rat','rattlesnake','raven','reindeer','rhinoceros','rook','ruff','salamander','salmon','sandpiper','sardine','scorpion','seahorse','seal','seastar','serval','shark','sheep','shrew','skunk','snail','snake','spider','squid','squirrel','starling','stingray','stinkbug','stork','swallow','swan','tapir','tarsier','termite','tiger','toad','tortoise','trout','turkey','turtle','unicorn','ursine','viper','vulture','wallaby','walrus','warthog','wasp','weasel','werewolf','whale','wolf','wolverine','wombat','woodcock','woodpecker','worm','wren','yak','zebra'];
var username = adjective[Math.floor(adjective.length * Math.random())] + " " + animal[Math.floor(animal.length * Math.random())]

socket.on('connect',function(){ //on connect (or reconnect) send the login info so it can init you on the server side
	socket.emit("login",{Username:window.username, x:0, y:0});
	console.log("You are logged in as", username);
});

/*****Track current dragged position of mouse, in both touch and mouse*****/
var mouseDown = false;
var mouseX = 0, mouseY = 0;

$(window).on('touchstart mousedown',function() {mouseDown = true;});
$(window).on('touchend touchcancel mouseup',function() {mouseDown = false;});
$(window).on('mousemove',function(e){
	if(mouseDown){
		mouseX = e.clientX;
		mouseY = e.clientY;
	}
});

$(window).on('touchmove',function(e){
	if(mouseDown){
		mouseX = e.originalEvent.touches[0].pageX; //ooh multitouch
		mouseY = e.originalEvent.touches[0].pageY;
	}
	e.preventDefault(); //prevent scrolling and stuff
	return false;
});

/*****Send periodic updates of position*****/
setInterval(function(e){
	socket.emit('posupdate', {Username: username, x:mouseX, y:mouseY});
},50);

/*****Receive periodic updates of positions*****/
socket.on('playerdata', function(data){
	players = data;
});
