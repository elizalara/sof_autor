var btnClicked = "-1";
var finalScale;

function resizeInteraction(thewidth,theheight) {
	var scale = 0;
	thewidth = String(thewidth).replace("px","");
	theheight = String(theheight).replace("px","");
	/*if(thewidth<theheight){
	 scale = thewidth / (680+70);
	}else{
	 scale = theheight/ (500);
	}*/
	
	/**********************/
	//Modification made for Presenter same logic holds good for Captivate
	var scaleW = thewidth / (750);
	var scaleH = theheight/ (500);
	
	if(scaleW<scaleH){
		scale = scaleW
	}else{
		scale = scaleH
	}
	/*********************/
	
	finalScale = scale
	var margins = Math.round(25 * scale);
	margins+="px"
	scale = "scale(" + scale + ")";
	$('#reveal, #overs').css('-webkit-transform', scale);
	$('#reveal, #overs').css('-moz-transform', scale);
	$('#reveal, #overs').css('-o-transform', scale);
	$('#reveal, #overs').css('-ms-transform', scale);
	
	$('#reveal, #overs').css('-moz-transform-origin', '0 0');
	$('#reveal, #overs').css('-webkit-transform-origin', '0 0');
	$('#reveal, #overs').css('-moz-transform-origin', '0 0');
	$('#reveal, #overs').css('-o-transform-origin', '0 0');
	$('#reveal, #overs').css('-ms-transform-origin', '0 0');

	$('#reveal').css('margin-top', margins);
	$('#reveal').css('margin-left', margins);
	
	$('#overs').css('position', 'absolute');
	$('#overs').css('z-index', '100');
	$('#reveal').css('z-index', '10');
	$('#pyramidHolder').css('z-index', '30');
	
}

function repositionPyramid(){
	var ypos = 55;
	var xpos = 42;
	
	ypos = 137-40*((1-finalScale)/.25);   
	xpos = 40*finalScale;
	
	//if no header move it up
	if (generalStyles.headerActive == 2) {
		ypos -= 90;
	}
	
	
	$('#pyramidHolder').css('top', ypos);
	$('#pyramidHolder').css('left', xpos);
}

//$(document).ready(function() {
function addClickHandlers() {
	$("#reveal").fadeIn();
	$("#pyramidHolder").fadeIn();
	
}

/*var theSnd = null;

function pauseSound() {
	if(theSnd != null) // && theSnd.src != wavePath)
	{ theSnd.pause();}
}

function play_sound(url){
	theSnd = new Audio(url);
	theSnd.load();
	theSnd.play();	
}*/

//Modifying the sound function - Audio load and play is now handled by captivate: IF it does not handle the audio revert to old code.
//This fix was mainly  implemented for IPAD.
var isiPad = navigator.userAgent.match(/iPad/i) != null;
var theSnd = null;
var theSndURL = null;

function pauseSound() {
	if(isiPad){
		if(!this.handle)
		return;
		
		if(!this.handle.stopWidgetAudio(theSndURL)){
			if(theSnd != null){ 
				theSnd.pause();
			}
		}else{
			this.handle.stopWidgetAudio(theSndURL)
		}
	} else {
		if(theSnd != null) // && theSnd.src != wavePath)
		{ theSnd.pause();}
	}
}

function play_sound(url){
	if(isiPad){
		if(!this.handle)
		return;
		
		theSndURL = url;
		if(!this.handle.playWidgetAudio(url)){	
			theSnd = new Audio(url);
			theSnd.load();
			theSnd.play();
		}else{
			this.handle.playWidgetAudio(url)
		}
	}else{
		theSnd = new Audio(url);
		theSnd.load();
		theSnd.play();	
	}
}
////////////////////////////////////////////////////////


function setupCustomStyles() {
	

/*pyramid color

	var _canvasColor='#FFFFFF';
_pyramidColor='#ffffff';
_circleColor='#FFF';
_pyramidOverColor='#cccccc';
_pyramidDownColor='#eeeeee';
*/
//alert(generalStyles.btnColorUp);
//alert(generalStyles.contentBodyColor);
	generalStyles.headerColor = formatColor(generalStyles.headerColor); //generalStyles.headerColor.substring(2);
//_canvasColor = '#111111'//formatColor(generalStyles.contentBodyColor);
	_pyramidColor = formatColor(generalStyles.btnColorUp);
	_pyramidOverColor = formatColor(generalStyles.btnColorOver);
	_pyramidDownColor = formatColor(generalStyles.btnColorDown);

	//generalStyles.headerColor = formatColor(generalStyles.headerColor); //generalStyles.headerColor.substring(2);
	generalStyles.contentBodyColor = formatColor(generalStyles.contentBodyColor); //"#" + generalStyles.contentBodyColor.substring(2);
	generalStyles.bodyColor = formatColor(generalStyles.bodyColor); //"#" + generalStyles.bodyColor.substring(2);
	
	
		if (currentTheme != 3 && currentTheme != 11 && currentTheme != 16) {
			$('#headerColor').css('background-color', generalStyles.headerColor)//generalStyles.headerColor);
		} else {
			$('#headerColor').css('background-color', generalStyles.bodyColor)//generalStyles.headerColor);
			
		}
		
	$('.theovertext').css('padding-left', '10px');
	$('.theovertext').css('padding-top', '10px');


//	$('#headerColor').css('background-image', 'none');
	$('#textBox').css('background-color', generalStyles.contentBodyColor);
	$('#content_bg').css('background-color', generalStyles.bodyColor);
	
	$('#reveal').css('background-color', generalStyles.bodyColor);
	$('.theover').css('border-right', generalStyles.btnColorDown);
	
	
	$('#pyramidHolder').css("-webkit-tap-highlight-color", "rgba(0,0,0,0)");
	

	if (generalStyles.headerActive == 2) {
		$('#headerColor').css('display', 'none');
	}
	
}



	