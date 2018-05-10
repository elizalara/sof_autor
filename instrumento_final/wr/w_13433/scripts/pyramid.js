/*-----------------------------------------------------------------------------------variables */
	
	
var pwidth = 173;
var pheight = 280;
	  
var originX = 175;
var originY = 7;
/*canvas background color*/
var _canvasColor='#FFFFFF';

/*pyramid color*/
var _circleColor='#FFF';

var _pyramidColor='#00587b';
var _pyramidOverColor='#37b7bb';
var _pyramidDownColor='#111111';

/*switch for when an area is active*/
var _active=-1;
var grad,grad1,grad2,grad3
var theobj;
//var btnNum = -1;
/*---------------------------------------------------------------------------------------init */
function overContent(btnID2, newgrad) {
	//alert("over");
	var tester = layer.getChildren();
	layernum = btnID2*4 + 1;

	oldobj = tester[layernum]
	oldobj.setFill(newgrad);
	layer.draw();
	
}


function showContent(obj, btnID) {
	if (String(btnID).length == 2) {
		//	btnClicked = String(btnID).substr(0,1);	
		var stinger = btnID;
		btnID = Number(stinger.substr(0,1));
		
	}
	
	//check if old button clicked
	var tester = layer.getChildren();
	//var layernum = btnClicked*4 + 1;
	if (btnClicked != -1) {
		var layernum = btnClicked*4 + 1;
		theobj = tester[layernum]
		 theobj.setFill(grad);
		 layer.draw();
	}
	
	
	_active=btnID;		  
	btnClicked = btnID
	//layernum = numarray[btnID]*4 + 1;
	//theobj = tester[layernum]//btnID*4 + 1]
	//theobj.setFill(grad2);
	//layer.draw();
	
	$(".theover").hide();
	$(".theover").eq(btnID).fadeIn();
	$(".theovertext").hide();
	$(".theovertext").eq(btnID).fadeIn();
									
	$(".tab_content").hide(); //hide all
	var selected_tab = $(".tab_content").eq(btnID); //$(this).find("tab"+btnClicked);//.attr("href");
	$(selected_tab).fadeIn(function() {
	
	//after animation is complete, run setup and play audio
				pauseSound();
				if (soundArray[btnClicked] != "-1") {
					setTimeout("play_sound(soundArray[btnClicked])",50);
				}
				
					
   });
}

	var stage = new Kinetic.Stage({
          container: "pyramidHolder",
          width: 355,
          height: 290
        });

        /*declare ne wlayer to draw on*/
		var layer = new Kinetic.Layer();
function initPyramid(ttlBtns){
	/*declare new stage*/

		var pyramidPoints = [];
		var effectPoints = [];
		var pyramid = new Array();
		circlePoints = new Array()
		textPoints = new Array();
		
			//Dimensions

			//color and position
		var colorOneUp;
		var colorTwoUp;
		var colorOneOver;
		var colorTwoOver;
		var colorOneDown;
		var colorTwoDown;
		var alpha=.25;
	currentTheme = parseInt(currentTheme);
	

	switch(currentTheme){
	case 1:
		style=1;
		colorOneUp = _pyramidColor;
		colorTwoUp = 'black';
		colorOneOver = _pyramidOverColor;
		colorTwoOver = 'black';
		colorOneDown = _pyramidDownColor;
		colorTwoDown = 'black';
		alpha=.7;
		break;
	case 2:
		style=3;
		colorOneUp = _pyramidColor;
		colorTwoUp = 'black';
		colorOneOver = _pyramidOverColor;
		colorTwoOver = 'black';
		colorOneDown = _pyramidDownColor;
		colorTwoDown = 'black';
		break;
	case 3:
		style=1;
		colorOneUp = _pyramidColor;
		colorTwoUp = _pyramidColor;
		colorOneOver = _pyramidOverColor;
		colorTwoOver = _pyramidOverColor;
		colorOneDown = _pyramidDownColor;
		colorTwoDown = 'black';

		alpha=.9;
		break;
	case 4:
		style=2;
		colorOneUp = 'black';
		colorTwoUp = _pyramidColor;
		colorOneOver = 'black';
		colorTwoOver = _pyramidOverColor;
		colorOneDown = 'black';
		colorTwoDown = _pyramidDownColor;
		alpha=.7;
		break;
	case 5:
		style=2;
		colorOneUp = _pyramidColor;
		colorTwoUp = 'black';
		colorOneOver = _pyramidOverColor;
		colorTwoOver = 'black';
		colorOneDown = _pyramidDownColor;
		colorTwoDown = 'black';
		break;
	case 6:
		style=1;
		colorOneUp = 'white';
		colorTwoUp = _pyramidColor;
		colorOneOver = 'white';
		colorTwoOver = _pyramidOverColor;
		colorOneDown = 'white';
		colorTwoDown = _pyramidDownColor;
		alpha=.7;
		break;
	case 7:
		style=2;
		colorOneUp = _pyramidColor;
		colorTwoUp = 'black';
		colorOneOver = _pyramidOverColor;
		colorTwoOver = 'black';
		colorOneDown = _pyramidDownColor;
		colorTwoDown = 'black';
		break;
	case 8:
		style=4;
		colorOneUp = _pyramidColor;
		colorTwoUp = 'black';
		colorOneOver = _pyramidOverColor;
		colorTwoOver = 'black';
		colorOneDown = _pyramidDownColor;
		colorTwoDown = 'black';
		break;
	case 9:
		style=4;
		colorOneUp = _pyramidColor;
		colorTwoUp = 'black';
		colorOneOver = _pyramidOverColor;
		colorTwoOver = 'black';
		colorOneDown = _pyramidDownColor;
		colorTwoDown = 'black';
		break;
	case 10:
		style=2;
		colorOneUp = 'black';
		colorTwoUp = _pyramidColor;
		colorOneOver = 'black';
		colorTwoOver = _pyramidOverColor;
		colorOneDown = 'black';
		colorTwoDown = _pyramidDownColor;
		break;
	case 11:
		style=2;
		colorOneUp = 'black';
		colorTwoUp = _pyramidColor;
		colorOneOver = 'black';
		colorTwoOver = _pyramidOverColor;
		colorOneDown = 'black';
		colorTwoDown = _pyramidDownColor;
		alpha=.4;
		break;
	case 12:
		style=1;
		colorOneUp = _pyramidColor;
		colorTwoUp = _pyramidColor;
		colorOneOver = _pyramidOverColor;
		colorTwoOver = _pyramidOverColor;
		colorOneDown = _pyramidDownColor;
		colorTwoDown = _pyramidDownColor;
		break;
	case 13:
		style=3;
		colorOneUp = _pyramidColor;
		colorTwoUp = 'black';
		colorOneOver = _pyramidOverColor;
		colorTwoOver = 'black';
		colorOneDown = _pyramidDownColor;
		colorTwoDown = 'black';
		break;
		break;
	case 14:
		style=2;
		colorOneUp = _pyramidColor;
		colorTwoUp = 'black';
		colorOneOver = _pyramidOverColor;
		colorTwoOver = 'black';
		colorOneDown = _pyramidDownColor;
		colorTwoDown = 'black';
		break;
	case 15:
		style=1;
		colorOneUp = _pyramidColor;
		colorTwoUp = 'black';
		colorOneOver = _pyramidOverColor;
		colorTwoOver = 'black';
		colorOneDown = _pyramidDownColor;
		colorTwoDown = 'black';
		alpha=.7;
		break;
	case 16:
		style=2;
		colorOneUp = _pyramidColor;
		colorTwoUp = _pyramidColor;
		colorOneOver = _pyramidOverColor;
		colorTwoOver = _pyramidOverColor;
		colorOneDown = _pyramidDownColor;
		colorTwoDown = _pyramidDownColor;
		break;
	case 17:
		style=1;
		colorOneUp = _pyramidColor;
		colorTwoUp = 'black';
		colorOneOver = _pyramidOverColor;
		colorTwoOver = 'black';
		colorOneDown = _pyramidDownColor;
		colorTwoDown = 'black';
		alpha=.5;
		break;
	}
	
	switch(style){
		case 1: //horizontal
			var ctx = layer.getContext("2d");
			grad = ctx.createLinearGradient(175, 0+(0)*pheight/ttlBtns, 175, 190+(1)*pheight/ttlBtns);
			grad.addColorStop(0,colorOneUp);
			grad.addColorStop(.2,colorOneUp);
			grad.addColorStop(.8,colorTwoUp);
			grad.addColorStop(1,colorTwoUp);
			ctx.fillStyle=grad;	
			grad2 = ctx.createLinearGradient(175, 0+(0)*pheight/ttlBtns, 175, 190+(1)*pheight/ttlBtns);
			grad2.addColorStop(0,colorOneDown);
			grad2.addColorStop(.2,colorOneDown);
			grad2.addColorStop(.8,colorTwoDown);
			grad2.addColorStop(1,colorTwoDown);
			ctx.fillStyle=grad2;	
			grad3 = ctx.createLinearGradient(175, 0+(0)*pheight/ttlBtns, 175, 190+(1)*pheight/ttlBtns);
			grad3.addColorStop(0,colorOneOver);
			grad3.addColorStop(.2,colorOneOver);
			grad3.addColorStop(.8,colorTwoOver);
			grad3.addColorStop(1,colorTwoOver);
			ctx.fillStyle=grad3;	
		break;
		case 2: //vertical
			var ctx = layer.getContext("2d");
			grad = ctx.createLinearGradient(0, 0+(1)*pheight/ttlBtns, 400, 0+(1)*pheight/ttlBtns);
			grad.addColorStop(0,colorOneUp);
			grad.addColorStop(1,colorTwoUp);
			ctx.fillStyle=grad;	 
			grad2 = ctx.createLinearGradient(0, 0+(1)*pheight/ttlBtns, 400, 0+(1)*pheight/ttlBtns);
			grad2.addColorStop(0,colorOneDown);
			grad2.addColorStop(1,colorTwoDown);
			ctx.fillStyle=grad2;	
			grad3 = ctx.createLinearGradient(0, 0+(1)*pheight/ttlBtns, 400, 0+(1)*pheight/ttlBtns);
			grad3.addColorStop(0,colorOneOver);
			grad3.addColorStop(1,colorTwoOver);
			ctx.fillStyle=grad3;
		break;
		case 3: //slanted
			var ctx = layer.getContext("2d");
			grad = ctx.createLinearGradient(0, 0+(0+1)*pheight/ttlBtns, 300, 70+(0+1)*pheight/ttlBtns);
			grad.addColorStop(0,colorOneUp);
			grad.addColorStop(.2,colorOneUp);
			grad.addColorStop(.3,colorTwoUp);
			grad.addColorStop(.4,colorOneUp);
			grad.addColorStop(.7,colorTwoUp);
			grad.addColorStop(.8,colorOneUp);
			grad.addColorStop(1,colorTwoUp);
			ctx.fillStyle=grad;	
			grad2 = ctx.createLinearGradient(0, 0+(0+1)*pheight/ttlBtns, 300, 70+(0+1)*pheight/ttlBtns);
			grad2.addColorStop(0,colorOneUp);
			grad2.addColorStop(.2,colorOneUp);
			grad2.addColorStop(.3,colorTwoUp);
			grad2.addColorStop(.4,colorOneUp);
			grad2.addColorStop(.7,colorTwoUp);
			grad2.addColorStop(.8,colorOneUp);
			grad2.addColorStop(1,colorTwoUp);
			ctx.fillStyle=grad2;	
			grad3 = ctx.createLinearGradient(0, 0+(0+1)*pheight/ttlBtns, 300, 70+(0+1)*pheight/ttlBtns);
			grad3.addColorStop(0,colorOneUp);
			grad3.addColorStop(.2,colorOneUp);
			grad3.addColorStop(.3,colorTwoUp);
			grad3.addColorStop(.4,colorOneUp);
			grad3.addColorStop(.7,colorTwoUp);
			grad3.addColorStop(.8,colorOneUp);
			grad3.addColorStop(1,colorTwoUp);
			ctx.fillStyle=grad3;
		break;
		case 4: //slanted two
			var ctx = layer.getContext("2d");
			grad = ctx.createLinearGradient(0, 0+(1)*pheight/ttlBtns, 300, 70+(1)*pheight/ttlBtns);
			grad.addColorStop(0,colorOneUp);
			grad.addColorStop(.5,colorOneUp);
			grad.addColorStop(.6,colorTwoUp);
			grad.addColorStop(1,colorTwoUp);
			ctx.fillStyle=grad;	
			grad2 = ctx.createLinearGradient(0, 0+(1)*pheight/ttlBtns, 300, 70+(1)*pheight/ttlBtns);
			grad2.addColorStop(0,colorOneDown);
			grad2.addColorStop(.5,colorOneUp);
			grad2.addColorStop(.6,colorTwoUp);
			grad2.addColorStop(1,colorTwoDown);
			ctx.fillStyle=grad2;	
			grad3 = ctx.createLinearGradient(0, 0+(1)*pheight/ttlBtns, 300, 70+(1)*pheight/ttlBtns);
			grad3.addColorStop(0,colorOneOver);
			grad3.addColorStop(.5,colorOneUp);
			grad3.addColorStop(.6,colorTwoUp);
			grad3.addColorStop(1,colorTwoOver);
			ctx.fillStyle=grad3;
		break;
	}
	
	
	//var grd=context.createLinearGradient(startX, startY, endX, endY);
			//fill at line 101
		
		//SETUP THE TOP PORTION
		thisPoint = [{
				  x: originX,
				  y: originY
				}, {
				  x: originX+(1)*pwidth/ttlBtns,
				  y: originY+(1)*pheight/ttlBtns
				}, {
				  x: originX-(1)*pwidth/ttlBtns,
				  y: originY+(1)*pheight/ttlBtns
				}, {
				  x: originX,
				  y: originY
				}];
			
			thisPyramid = new Kinetic.Polygon({
			  points: thisPoint,
			  fill: _pyramidColor,
			  stroke: "white",
			  strokeWidth: 2,
			  name: 0
			});
			
			thisEffect = new Kinetic.Polygon({
			  points: thisPoint,
			  fill: grad,
			  stroke: "white",
			  strokeWidth: 2,
			  name: 0
			});
			
			thisEffect.on("mouseout", function() {
			   if (_active!=this.getName()){
				 overContent(this.getName(), grad);
			   }
			});			
			
			thisEffect.on("mouseover", function() {					   
			   if (_active!=this.getName()){
				 overContent(this.getName(), grad3);
			   }
			});
			
			thisEffect.on("mousedown touchstart", function() {
			  showContent(this, this.getName());
			});
			
			thisEffect.setAlpha(alpha);
			pyramidPoints[0] = thisPyramid;
			effectPoints[0] = thisEffect;
			
			/*construct circle to display number*/
			thisCircle = new Kinetic.Circle({
			  x: originX,
			  y: originY+pheight/ttlBtns/2,
			  radius: 12,
			  fill: _circleColor,
			  name:00
			});
			
			thisCircle.on("mousedown touchstart", function() {		  
					showContent(this, this.getName());
			});
			thisCircle.on("mouseout", function() {
				var circNum = this.getName();
				if (circNum.length >= 2) {
					circNum = circNum.substr(0,1);
				}					   
			   if (_active!=circNum){
				 overContent(circNum, grad);
			   }
			});			
			
			thisCircle.on("mouseover", function() {
				var circNum = this.getName();
				if (circNum.length >= 2) {
					circNum = circNum.substr(0,1);
				}					   
			   if (_active!=circNum){
				 overContent(circNum, grad3);
			   }
			});
			
			circlePoints[0] = thisCircle;
			/*construct number to show inside circle*/
			thisText = new Kinetic.Text({
			  x: originX,
			  y: originY+pheight/ttlBtns/2,
			  text: "1",
			  fontSize: 13,
			  fontFamily: "Arial",
			  fontStyle: "bold",
			  textFill: _pyramidColor,
			  align: "center",
			  verticalAlign: "middle",
			  name:00
			});
			
			
			thisText.on("mousedown touchstart", function() {		  
				showContent(this, this.getName());
			});
			thisText.on("mouseout", function() {
				var circNum = this.getName();
				if (circNum.length >= 2) {
					circNum = circNum.substr(0,1);
				}					   
			   if (_active!=circNum){
				 overContent(circNum, grad);
			   }
			});			
			
			thisText.on("mouseover", function() {
				var circNum = this.getName();
					if (circNum.length >= 2) {
					circNum = circNum.substr(0,1);
				}				   
			   if (_active!=circNum){
				  // alert("here");
				 overContent(circNum, grad3);
			   }
			});
			
		
			textPoints[0] = thisText;
			
			thisCircle.on("mousedown touchstart", function() {
			  _active=this.getName();
			  showContent(this, this.getName());
			});

						
			thisText.on("mousedown touchstart", function() {
			  _active=this.getName();
			  showContent(this, this.getName());
			});
				
				
				
			////////////////////////////////////////////////////////////////////////////////////
			
			
		var overMC;
		//LOOP THROUGH OTHER LAYERS
		for (var num=1; num < ttlBtns; num++) {
			
			
			(function(){
			thisPoint = pyramidPoints[num];
			thisItem = pyramid[num];

			thisPoint = [{
				  x: originX-(num)*pwidth/ttlBtns,
				  y: originY+(num)*pheight/ttlBtns//185 + (num*50)
				}, {
				  x: originX+(num)*pwidth/ttlBtns,
				  y: originY+(num)*pheight/ttlBtns//185 + (num*50)
				}, {
				  x: originX+(num+1)*pwidth/ttlBtns,
				  y: originY+(num+1)*pheight/ttlBtns//200 + (num*50)
				}, {
				  x: originX-(num+1)*pwidth/ttlBtns,
				  y: originY+(num+1)*pheight/ttlBtns//200 + (num*50)
				}, {
				  x: originX-(num)*pwidth/ttlBtns,
				  y: originY+(num)*pheight/ttlBtns//185 + (num*50)
				}];
		
		
		switch(style){
		case 1: //horizontal
			var ctx = layer.getContext("2d");
			//var grad = ctx.createLinearGradient(originX-(num)*pwidth/ttlBtns, originY+(num)*pheight/ttlBtns/185 + (num*50), originX-(num+1)*pwidth/ttlBtns, originY+(num+1)*pheight/ttlBtns/200 + (num*50));
			grad = ctx.createLinearGradient(175, 0+(num)*pheight/ttlBtns-15, 175, 190+(num+1)*pheight/ttlBtns-15);
			grad.addColorStop(0,colorOneUp);
			grad.addColorStop(.2,colorOneUp);
			grad.addColorStop(.8,colorTwoUp);
			grad.addColorStop(1,colorTwoUp);
			ctx.fillStyle=grad;	
		
			//var grad2 = ctx.createLinearGradient(originX-(num)*pwidth/ttlBtns, originY+(num)*pheight/ttlBtns/185 + (num*50), originX-(num+1)*pwidth/ttlBtns, originY+(num+1)*pheight/ttlBtns/200 + (num*50));
			grad2 = ctx.createLinearGradient(175, 0+(num)*pheight/ttlBtns-15, 175, 190+(num+1)*pheight/ttlBtns-15);
			//grad2 = ctx.createLinearGradient(175, 0+(0)*pheight/ttlBtns, 175, 190+(1)*pheight/ttlBtns);
			grad2.addColorStop(0,colorOneDown);
			grad2.addColorStop(.2,colorOneDown);
			grad2.addColorStop(.8,colorTwoDown);
			grad2.addColorStop(1,colorTwoDown);
			ctx.fillStyle=grad2;	
		
			//grad3 = ctx.createLinearGradient(originX-(num)*pwidth/ttlBtns, originY+(num)*pheight/ttlBtns/185 + (num*50), originX-(num+1)*pwidth/ttlBtns, originY+(num+1)*pheight/ttlBtns/200 + (num*50));
			grad3 = ctx.createLinearGradient(175, 0+(num)*pheight/ttlBtns-15, 175, 190+(num+1)*pheight/ttlBtns-15);
			grad3.addColorStop(0,colorOneOver);
			grad3.addColorStop(.2,colorOneOver);
			grad3.addColorStop(.8,colorTwoOver);
			grad3.addColorStop(1,colorTwoOver);
			ctx.fillStyle=grad3;	
			break;
		case 2: //vertical
			var ctx = layer.getContext("2d");
			grad = ctx.createLinearGradient(0, 0+(num+1)*pheight/ttlBtns, 400, 0+(num+1)*pheight/ttlBtns);
			grad.addColorStop(0,colorOneUp);
			grad.addColorStop(1,colorTwoUp);
			ctx.fillStyle=grad;	
			grad2 = ctx.createLinearGradient(0, 0+(num+1)*pheight/ttlBtns, 400, 0+(num+1)*pheight/ttlBtns);
			grad2.addColorStop(0,colorOneDown);
			grad2.addColorStop(1,colorTwoDown);
			ctx.fillStyle=grad2;	
			grad3 = ctx.createLinearGradient(0, 0+(num+1)*pheight/ttlBtns, 400, 0+(num+1)*pheight/ttlBtns);
			grad3.addColorStop(0,colorOneOver);
			grad3.addColorStop(1,colorTwoOver);
			ctx.fillStyle=grad3;	
			break;
		case 3: //slanted
			var ctx = layer.getContext("2d");
			grad = ctx.createLinearGradient(0, 0+(num+1)*pheight/ttlBtns, 300, 70+(num+1)*pheight/ttlBtns);
			grad.addColorStop(0,colorOneUp);
			grad.addColorStop(.2,colorOneUp);
			grad.addColorStop(.3,colorTwoUp);
			grad.addColorStop(.4,colorOneUp);
			grad.addColorStop(.7,colorTwoUp);
			grad.addColorStop(.8,colorOneUp);
			grad.addColorStop(1,colorTwoUp);
			ctx.fillStyle=grad;	
			grad2 = ctx.createLinearGradient(0, 0+(num+1)*pheight/ttlBtns, 300, 70+(num+1)*pheight/ttlBtns);
			grad2.addColorStop(0,colorOneUp);
			grad2.addColorStop(.2,colorOneUp);
			grad2.addColorStop(.3,colorTwoUp);
			grad2.addColorStop(.4,colorOneUp);
			grad2.addColorStop(.7,colorTwoUp);
			grad2.addColorStop(.8,colorOneUp);
			grad2.addColorStop(1,colorTwoUp);
			ctx.fillStyle=grad2;	
			grad3 = ctx.createLinearGradient(0, 0+(num+1)*pheight/ttlBtns, 300, 70+(num+1)*pheight/ttlBtns);
			grad3.addColorStop(0,colorOneUp);
			grad3.addColorStop(.2,colorOneUp);
			grad3.addColorStop(.3,colorTwoUp);
			grad3.addColorStop(.4,colorOneUp);
			grad3.addColorStop(.7,colorTwoUp);
			grad3.addColorStop(.8,colorOneUp);
			grad3.addColorStop(1,colorTwoUp);
			ctx.fillStyle=grad3;
			break;
		case 4: //none
			var ctx = layer.getContext("2d");
			grad = ctx.createLinearGradient(0, 0+(num+1)*pheight/ttlBtns, 300, 70+(num+1)*pheight/ttlBtns);
			grad.addColorStop(0,colorOneUp);
			grad.addColorStop(.5,colorOneUp);
			grad.addColorStop(.6,colorTwoUp);
			grad.addColorStop(1,colorTwoUp);
			ctx.fillStyle=grad;	
			grad2 = ctx.createLinearGradient(0, 0+(num+1)*pheight/ttlBtns, 300, 70+(num+1)*pheight/ttlBtns);
			grad2.addColorStop(0,colorOneDown);
			grad2.addColorStop(.5,colorOneUp);
			grad2.addColorStop(.6,colorTwoUp);
			grad2.addColorStop(1,colorTwoDown);
			ctx.fillStyle=grad2;	
			grad3 = ctx.createLinearGradient(0, 0+(num+1)*pheight/ttlBtns, 300, 70+(num+1)*pheight/ttlBtns);
			grad3.addColorStop(0,colorOneOver);
			grad3.addColorStop(.5,colorOneUp);
			grad3.addColorStop(.6,colorTwoUp);
			grad3.addColorStop(1,colorTwoOver);
			ctx.fillStyle=grad3;
			break;
		}
		
		thisPyramid = new Kinetic.Polygon({
			  points: thisPoint,
			  fill: _pyramidColor,
			  stroke: "white",
			  strokeWidth: 2,
			  name: num
			});
			
			thisEffect = new Kinetic.Polygon({
			  points: thisPoint,
			  fill: grad,
			  stroke: "white",
			  strokeWidth: 2,
			  name: num
			});
			
			thisEffect.on("mouseout", function() {
			   if (_active!=this.getName()){
				overContent(this.getName(), grad);
			   }
			  // alert("out");
			});			
			
			thisEffect.on("mouseover", function() {					   
			   if (_active!=this.getName()){
				 overContent(this.getName(), grad3);
			   }
			});
			
			thisEffect.on("mousedown touchstart", function() {
			  showContent(this, this.getName());
			});
			
			thisEffect.setAlpha(alpha);
			pyramidPoints[num] = thisPyramid;
			effectPoints[num] = thisEffect;
			
			newname = String(num) + 0;
			/*construct circle to display number*/
			thisCircle = new Kinetic.Circle({
			  x: originX,
			  y: originY+(num)*pheight/ttlBtns+pheight/ttlBtns/2,
			  radius: 12,
			  fill: _circleColor,
			  name:newname
			});
			
			thisCircle.on("mousedown touchstart", function() {		  
					showContent(this, this.getName());
			});
			
			thisCircle.on("mouseout", function() {
				var circNum = this.getName();
				if (circNum.length >= 2) {
					circNum = circNum.substr(0,1);
				}		
				
			   if (_active!=circNum){
				 overContent(circNum, grad);
			   }
			});			
			
			thisCircle.on("mouseover", function() {
				var circNum = this.getName();
				if (circNum.length >= 2) {
					circNum = circNum.substr(0,1);
				}					   
			   if (_active!=circNum){
				   
				 overContent(circNum, grad3);
			   }
			});
			
			
			circlePoints[num] = thisCircle;
			
			/*construct number to show inside circle*/
			thisText = new Kinetic.Text({
			  x: originX,
			  y: originY+(num)*pheight/ttlBtns+pheight/ttlBtns/2,
			  text: num+1,
			  fontSize: 13,
			  fontFamily: "Arial",
			  fontStyle: "bold",
			  textFill: _pyramidColor,
			  align: "center",
			  verticalAlign: "middle",
			  name:newname
			});
			
			
			thisText.on("mousedown touchstart", function() {		  
				showContent(this, this.getName());
			});
			thisText.on("mouseout", function() {
				var circNum = this.getName();
				if (circNum.length >= 2) {
					circNum = circNum.substr(0,1);
				}					   
			   if (_active!=circNum){
				 overContent(circNum, grad);
			   }
			});			
			
			thisText.on("mouseover", function() {
				var circNum = this.getName();
					if (circNum.length >= 2) {
					circNum = circNum.substr(0,1);
				}				   
			   if (_active!=circNum){
				 overContent(circNum, grad3);
			   }
			});
			
			
			textPoints[num] = thisText;
			}());
		
			
		}
        // add the shapes to the layer
		for (num=0; num < ttlBtns; num++) {
        	layer.add(pyramidPoints[num]);
			layer.add(effectPoints[num]);
        	layer.add(circlePoints[num]);
        	layer.add(textPoints[num]);
		}

        // add the layer to the stage
		layer.setScale(finalScale);
        stage.add(layer);
}


