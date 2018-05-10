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
	
	finalScale = scale;
	var margins = Math.round(25 * scale);
	margins+="px"
	scale = "scale(" + scale + ")";
	$('#reveal').css('-webkit-transform', scale);
	$('#reveal').css('-moz-transform', scale);
	$('#reveal').css('-o-transform', scale);
	$('#reveal').css('-ms-transform', scale);
	
	$('#reveal').css('-moz-transform-origin', '0 0');
	$('#reveal').css('-webkit-transform-origin', '0 0');
	$('#reveal').css('-moz-transform-origin', '0 0');
	$('#reveal').css('-o-transform-origin', '0 0');
	$('#reveal').css('-ms-transform-origin', '0 0');
	

	$('#reveal').css('margin-top', margins);
	$('#reveal').css('margin-left', margins);
	
}

function addClickHandlers() {
	$("#reveal").fadeIn();										  
}

//sound values
var theSnd = null;
function pauseSound() {
	if(theSnd != null) // && theSnd.src != wavePath)
	{ theSnd.pause();}
}

function play_sound(url){
	theSnd = new Audio(url);
	theSnd.load();
	theSnd.play();	
}
////////////////////////////////////////////////////////


function setupCustomStyles() {
	generalStyles.headerColor = formatColor(generalStyles.headerColor); //generalStyles.headerColor.substring(2);
	//generalStyles.letterBarColor = formatColor(generalStyles.letterBarColor); //"#" + generalStyles.contentBodyColor.substring(2);
	//generalStyles.contentHeaderColor = formatColor(generalStyles.contentHeaderColor); //"#" + generalStyles.contentBodyColor.substring(2);
	
	_wordGridColor = formatColor(generalStyles.contentBodyColor); //"#" + generalStyles.contentBodyColor.substring(2);
	generalStyles.bodyColor = formatColor(generalStyles.bodyColor); //"#" + generalStyles.bodyColor.substring(2);
	//generalStyles.arrowColor = formatColor(generalStyles.arrowColor);
	
	_canvasColor = formatColor(generalStyles.btnColorUp);
	generalStyles.btnColorUp = formatColor(generalStyles.btnColorUp);
	generalStyles.btnColorOver = formatColor(generalStyles.btnColorOver);
	generalStyles.btnColorDown = formatColor(generalStyles.btnColorDown);
	generalStyles.clueColor = formatColor(generalStyles.clueColor);
	
	letterStyles.textColor = formatColor(letterStyles.textColor);
	letterStyles.textColorOver = formatColor(letterStyles.textColorOver);
	letterStyles.textColorDown = formatColor(letterStyles.textColorDown);
		


	//alert(generalStyles.lineColor);
		if (currentTheme != 3 && currentTheme != 11 && currentTheme != 16) {
			$('#headerColor').css('background-color', generalStyles.headerColor)//generalStyles.headerColor);
		} else {
			$('#headerColor').css('background-color', generalStyles.bodyColor)//generalStyles.headerColor);
			
		}$('.answerBoxHeader').css('background-color', generalStyles.clueColor)//generalStyles.headerColor);
		$('.answerBoxHeader').text(ID_AnswerClues);
	$('#answerBoxFooter').css('background-color', generalStyles.clueColor)//generalStyles.headerColor);
	$('.wordGridHolder').css('background-color', formatColor(generalStyles.contentBodyColor))//generalStyles.headerColor);
	//$('.wordGridHolder').css('border-color', formatColor(generalStyles.contentBodyColor))//generalStyles.headerColor);

	
	
	
	//$('#headerColor').css('background-image', 'none');
	//$('#Navigation_Container').css('background-color', generalStyles.letterBarColor);
	//$('#Search_Result_Header').css('background-color', generalStyles.contentHeaderColor);
	//$('#Search_Input_Container').css('background-color', generalStyles.contentHeaderColor);
	
	
	//$('#Search_Result_Container').css('background-color', generalStyles.contentBodyColor);
	$('#content_bg').css('background-color', generalStyles.bodyColor);
	$('#reveal').css('background-color', generalStyles.bodyColor);


	if (generalStyles.headerActive == 2) {
		$('#headerColor').css('display', 'none');
	}
}


	/*-----------------------------------------------------------------------------------variables */

/*array of all letters for word grid*/
var lettersArray=[];
var answersArray=[];
var wordsArray=[];
var questionsArray=[];
var highlightedWord = [];
/*empty array to hold all word tile objects*/
var wordTilesArray=[];
var puzzleWords=[];
//Answer Key
var answerKey=[];

/*the canvas element*/
var $canvas;
/*the word grid element that holds all of the word tiles*/
var $wordGrid;
//The word list
var $canvasWordList;
var $canvasWordList2;

/*sizes for the word grid and word tiles*/
var _wordTileWidth = 20.25; //
var _wordTileHeight = 25; //20.25 x 20.25
var _wordGridRows = 12;
var _wordGridColumns = 14;
var _totalTiles = _wordGridRows * _wordGridColumns;
var _wordTileSpacing = 0;
var _wordGridWidth = 475;
var _wordGridHeight = 375;
var wordX = 10;
var wordY = 10;
var letterStart = null;
var letterLast = null;
var wordsFound = 0;
var gameOver = false;
var attempt = 0;
var maxAttempts = 5;
var wordsLeft = 0;
var lastSuccess = 0;
var finished = false;
var listComplete = false;
var attemptsButtonShown = false;
var enableShow = false;
var answersShown = false;
/*colors for the canvas background and word grid stroke and text*/
var _canvasColor='#111111';
var _wordGridColor='#111111';
var alreadyFound = new Array();
//wordGridHolder

/*---------------------------------------------------------------------------------------setup */
function setup() {
	/*get canvas and word grid element*/
	$canvas = $('#canvas');
	$canvas.css('background-color',_canvasColor);
	$('#instructions').html("<i>"+ID_Clickthefirstandlast+"</i>");
	
	$('.wordGridHolder').css('background-color',_wordGridColor);
	$canvas.css('margin-left','5px');
	$canvas.css('margin-top','5px');
	$wordGrid  = $canvas[0].getContext('2d');
	/*local variables*/
	var wordTile;
	var count = 0;
	var xPosition = 0;
    var yPosition = 0;
	var row = 0;
	var curPos=0;
	/*loop through total number of word tiles and add them to wordTilesArray*/
	//alert(lettersArray.length)
	//alert(14*12);  168 for small
	//alert(17*12);//  206 for large
	$gridHolder = $('.wordGridHolder');
	if(lettersArray.length>180){
		var canv = document.getElementById("canvas");
		canv.width = 425;
		_wordGridRows = 12;
		_wordGridColumns = 17;
		_totalTiles = _wordGridRows*_wordGridColumns;  
		
		_wordTileWidth=25;
		_wordTileHeight=25;
		
		//$('.wordGridHolder').css('height','85px');
		//$canvas.css('margin-left','0px');
		$('.wordGridHolder').css('width','435px');
		$('.answerBox').css('margin-left','-25px');
		$('#content_bg').css('padding-right','10px');
		
		
		
		
	}else{
		_wordGridRows = 12;
		_wordGridColumns = 14;
		_totalTiles = _wordGridRows*_wordGridColumns;
		_wordTileWidth=25;
		_wordTileHeight=25;
	}
	
	for(var i =0;i<answersArray.length;i++){
		if(answersArray[i]!='*'){
			answerKey[curPos] = i;
			curPos++;
			alreadyFound[i] = false;
		}
	}
	
    for(var i = 0;i <_totalTiles;i++){
        wordTile = {};
        wordTile.letter = lettersArray[i];
        wordTile.key = i;
		wordTile.size = _wordTileWidth //Assuming that tiles are always square.
        wordTile.left = xPosition;
        wordTile.top = yPosition;
		wordTile.bottom = yPosition + _wordTileHeight + 2;
		wordTile.right = xPosition + _wordTileWidth + 2;
		wordTile.column = count;
		wordTile.row = row;
		wordTile.incorrect = false;
		wordTile.selected = false;
        wordTilesArray.push(wordTile);
        xPosition += (_wordTileWidth + _wordTileSpacing);
		count++;
        if(count == _wordGridColumns){
           xPosition = 0;
           yPosition += (_wordTileHeight + _wordTileSpacing);
		   count = 0;
		   row++;
         }
    }
	for(i = 0; i < wordsArray.length; i++)
	{
		wordTile = {}; 
		wordTile.word = wordsArray[i];
		wordTile.found = false;
		puzzleWords.push(wordTile);
	}
    //draw word grid after loop is finished
	drawWordGrid();
	drawWordList();
	//document.onmousedown = setLetterStart;
	//document.ontouchstart = setLetterStartTOUCH
	
	//display2 = $canvas[0].getContext("2d");
	//alert(display2);
		//Listen to the OnClick
	$('#canvas').css("-webkit-tap-highlight-color", "rgba(0,0,0,0)");
	$('#canvas').bind("mousedown", function(e) {
			setLetterStart(e);
			dragHighlight(e);
			
	});

	//setLetterStart);
	//$canvas.bind("mouseup", onMouseUp);
		
		//Draw it
//		draw2();
	/*
	$('#foo').bind('click', function() {
  		alert('User clicked on "foo."');
	});
*/	
	
};

function onMouseDown(evt){
	alert(evt.pageX);	
}
/*-------------------------------------------------------------------------------draw word grid */
function drawWordGrid(){
    /*set up word grid*/
//	alert(_wordGridWidth);
	$wordGrid.fillStyle = _wordGridColor;
	$wordGrid.strokeStyle = _wordGridColor; //changes the spaces betwee letters
	$wordGrid.lineWidth   = 2;
	$wordGrid.font = letterStyles.size + "px " + letterStyles.face; //Arial";
	
	/*
		letterStyles.face = theLettersProps.children('font').attr("face");
		letterStyles.style = theLettersProps.children('font').attr("style");
		letterStyles.size = theLettersProps.children('font').attr("size");
		letterStyles.align = theLettersProps.children('font').attr("align");	
		*/
		
		
    $wordGrid.textAlign = "center";
    $wordGrid.textBaseline = "middle";
	$wordGrid.clearRect(0,0,_wordGridWidth,_wordGridHeight);
	
	/*loop through wordTilesArray and stroke tiles on grid, then add coresponding letter to each tile*/
    var wordTile;
    for(var i = 0;i < wordTilesArray.length;i++){
        wordTile = wordTilesArray[i];
       	$wordGrid.strokeRect(wordTile.left, wordTile.top,_wordTileWidth,_wordTileHeight);
		$wordGrid.fillStyle = generalStyles.btnColorUp;
		$wordGrid.fillRect(wordTile.left, wordTile.top,_wordTileWidth,_wordTileHeight);
		if(wordTile.selected)
		{
			//change correct answer colors
			$wordGrid.fillStyle = generalStyles.btnColorDown;  //
			//bg color swap
			$wordGrid.fillRect(wordTile.left, wordTile.top,_wordTileWidth,_wordTileHeight);
			$wordGrid.fillStyle = letterStyles.textColorDown//'#FF0000';  // text color	
		}
		else if(wordTile.incorrect)
		{
			$wordGrid.fillStyle = generalStyles.btnColorDown;
			$wordGrid.globalAlpha = .1;
			$wordGrid.fillRect(wordTile.left, wordTile.top,_wordTileWidth,_wordTileHeight);
			$wordGrid.fillStyle = letterStyles.textColorUp//'#FF0000';  // text color
			$wordGrid.globalAlpha = 1;
		}else
		{	//default
			$wordGrid.fillStyle = letterStyles.textColor
		}
        $wordGrid.fillText(lettersArray[i], wordTile.left + (_wordTileWidth / 2), wordTile.top + (_wordTileHeight / 2));
    }
}

//----------------------------------------------------------------fire after word grid is drawn
function drawWordList()
{
	var thisWord;
	wordsLeft = 0;

	for(var i = 0; i < puzzleWords.length; i++)
	{
		thisWord = puzzleWords[i];
		yPosition = wordY + (i * 25);
		if(!thisWord.found)
		{
			wordsLeft++;
		}else{
			$('#img'+i).css({
				visibility:"visible"
			})
		}

		
	}  
	
	if(wordsLeft <= 0 && !listComplete)
	{
		listComplete = true;

	} 
	else
	{
		updateFooter(ID_ShowAnswers);
	}
}

//----------------------------------------------------------------Fire after mousedown.
//update the footer and data
function updateFooter(msg) {
	//alert(msg);
	var button_elem = document.getElementById('answerBoxFooter');
	button_elem.innerHTML = ID_Remainingwords+": " + wordsLeft + "<br>";
	button_elem.innerHTML += ID_Attempts+": " + attempt + "/" + maxAttempts;
	button_elem.innerHTML += "<div id='showAnswers'>" + msg + "</div>";
	if (!enableShow) {
		$('#showAnswers').hide();
	}
	
	$('#showAnswers').bind("mousedown", function(e) {
		showAnswers();
	});
}


function setLetterStart(e)

{
	letterStart = getLetterTouched(e);
	
	$('#canvas').unbind();
	$('#canvas').bind("mousedown", function(e) { 
											//dragHighlight(e);
											dragHighlight(e);
											t=setTimeout("checkWord()",250);
											
											//checkWord().delay(800);
											
											}) 
}

function setLetterStartTOUCH(e)
{
	document.onmousedown = null;
	//alert("touch");
	//alert(e);
	letterStart = getLetterTouched(e);
	//alert(getLetterTouched(e));
	//var tester = getLetterTouched(e);
	//var obj = tester.getElementByID(tester);
	
	
	//$canvas.bind("mousemove", dragHighlight);
	//$canvas.bind("mouseup", onMouseUp);
	
	
	//document.onmousedown = null;
	//document.ontouchmove = dragHighlight;
	document.onmouseup = checkWord;
}

function dragHighlight(e)
{
	if (!enableShow) {
		letterLast = getLetterTouched(e);
		//alert(letterLast);
		highlightWord();
	}
}

function getMousePos(canvas, evt){
	var off = canvas.offset();
	//alert(evt.originalEvent.targetTouches[0].left);
	//alert(evt.originalEvent.targetTouches[0].pageX);
   //alert(evt.pageX);
	//alert(off.left);
	
	 var scaleArray = new Array();
	 var containerScale = $('#project_container', window.parent.document).css('-ms-transform');
	 scaleArray[0]="";
	 if(containerScale!=null){
	   containerScale = containerScale.substring(7);
	   scaleArray = containerScale.split(',');
	 }
	 if(Number(scaleArray[0])==""){
	  var mouseX = (evt.pageX - off.left) / finalScale;
	  var mouseY = (evt.pageY - off.top) / finalScale;
	 }else{ 
	  var mouseX = (evt.pageX - off.left)/ Number(scaleArray[0]) / finalScale;
	  var mouseY = (evt.pageY - off.top)/ Number(scaleArray[0]) / finalScale;
	 }

    return {
        x: mouseX,
        y: mouseY
    };
}

function getLetterTouched(e)
{
	var mousePos;
	//var offset = $("#canvas").offset();
	//var x_pos = Math.floor(e.pageX - offset.left);
	//var y_pos = Math.floor(e.pageY - offset.top);
		
		
	//if(e.layerX || e.layerX == 0 || e.offsetX || e.offsetX == 0)
	//{
		mousePos = getMousePos($canvas, e);
		//alert(mousePos.x)
	//}
	var obj = null;
	for(var i = 0; i < wordTilesArray.length; i++)
	{
		obj = wordTilesArray[i];
		
		
		if(mousePos.y > obj.bottom || mousePos.y < obj.top || mousePos.x < obj.left || mousePos.x > obj.right)
		{
			continue;
		}
		else
		{
			return obj;
			break;
		}
	}
	
	return obj;
}

//----------------------------------------------------------------fire when stuff is being selected
function highlightWord()
{
	highlightedWord = [];
	drawWordGrid();
	drawWordList();
	var start = {x:letterStart.left, y:letterStart.top};
	var end = {x:letterLast.left, y:letterLast.top};
	//alert(letterStart.left);
	$wordGrid.save();
	$wordGrid.fillStyle = _wordGridColor;
	$wordGrid.globalAlpha = 1;
	$wordGrid.restore();
	if(start.y == end.y)
	{
		highlightRow();
	}
	else if (start.x == end.x)
	{
		highlightColumn();
	}
	else if (start.y < end.y)
	{
		highlightDDown();
	}
	else if (start.y > end.y)
	{
		highlightDUp();
	}
}

function placeInArray(i, slot)
{
	slot = wordTilesArray[i];
	 //alert(letterStyles.textColorOver);
	 $wordGrid.fillStyle = generalStyles.btnColorOver;
	 //#6a737b
	 $wordGrid.fillRect(slot.left, slot.top, _wordTileWidth, _wordTileHeight);
	 $wordGrid.fillStyle = letterStyles.textColorOver//'#FF0000';  // text color
	 $wordGrid.fillText(lettersArray[i], slot.left + (_wordTileWidth / 2), slot.top + (_wordTileHeight / 2));
	 highlightedWord.push(slot);
 
}

function highlightRow()
{
	$wordGrid.save();
	$wordGrid.fillStyle = _wordGridColor;
	$wordGrid.globalAlpha = 1// 0.3;
	var min;
	var max;
	var slot;
	min = letterStart.key;
	max = letterLast.key;
	if(min < max){
		for(var i = min; i < max + 1; i++){
			placeInArray(i, slot);
		}
	}
	else
	{
		for(var i = min; i > max - 1; i--)
		{
			placeInArray(i, slot);
		}
	}
	$wordGrid.restore();
}

function highlightColumn()
{
	$wordGrid.save();
	$wordGrid.fillStyle = _wordGridColor;
	$wordGrid.globalAlpha = 1;
	var min;
	var max;
	var slot;
	min = letterStart.key;
	max = letterLast.key;
	if(min < max){
		for(var i = min; i < max + 1; i+=_wordGridColumns){
			placeInArray(i, slot);
		}
	}
	else
	{
		for(var i = min; i > max - 1; i-=_wordGridColumns)
		{
			placeInArray(i, slot);
		}
	}
	$wordGrid.restore();
}

function highlightDDown()
{
	var rowDiff = letterStart.row - letterLast.row;
	var columnDiff = letterStart.column - letterLast.column;
	if (rowDiff < 0)
	{
		rowDiff = rowDiff * -1;	
	}
	if (columnDiff < 0)
	{
		columnDiff = columnDiff * -1;	
	}
	if(rowDiff != columnDiff)
	{
		return;	
	}
	$wordGrid.save();
	//color on over
	$wordGrid.fillStyle = _wordGridColor; 
	$wordGrid.globalAlpha = 1;
	var min;
	var max;
	var slot;
	min = letterStart.key;
	max = letterLast.key;
	if(letterStart.left < letterLast.left){
		for(var i = min; i < max + 1; i+=(_wordGridColumns + 1))
		{
			placeInArray(i, slot);
		}
	}
	else
	{
		for(var i = min; i < max + 1; i+=(_wordGridColumns - 1))
		{
			placeInArray(i, slot);
		}
	}
	$wordGrid.restore();
}

function highlightDUp()
{
	var rowDiff = letterStart.row - letterLast.row;
	var columnDiff = letterStart.column - letterLast.column;
	if (rowDiff < 0)
	{
		rowDiff = rowDiff * -1;	
	}
	if (columnDiff < 0)
	{
		columnDiff = columnDiff * -1;	
	}
	if(rowDiff != columnDiff)
	{
		return;	
	}
	$wordGrid.save();
	$wordGrid.fillStyle = _wordGridColor;
	$wordGrid.globalAlpha = 1;
	var min;
	var max;
	var slot;
	min = letterStart.key;
	max = letterLast.key;
	if(letterStart.left < letterLast.left){
		for(var i = min; i >= max; i-=(_wordGridColumns - 1))
		{
			placeInArray(i, slot);
		}
	}
	else
	{
		for(var i = min; i >= max; i-=(_wordGridColumns + 1))
		{
			placeInArray(i, slot);
		}
	}
	$wordGrid.restore();
}

//----------------------------------------------------------------fire after word is selected
function checkWord()
{
	document.onmousemove = null;
	document.removeEventListener(MouseEvent.mousemove,dragHighlight);
	var word;
	var highlight;
	//word.found = false;
	for(var i = 0; i < puzzleWords.length; i++)
	{
		word = puzzleWords[i];
		var matched = word.word;
		highlight = '';
		//alert(highlightedWord.length);
		for(var j = 0; j < highlightedWord.length; j++)
		{
			highlight += highlightedWord[j].letter;	
		}
		if(highlight == matched)
		{
			if (!alreadyFound[i]) {
				word.found = true;
				lastSuccess = 2;
				updateFoundLetters();
				alreadyFound[i] = true;
				break;
			}
		}
		var reversed = highlightedWord.reverse();
		highlight = '';
		for(j = 0; j < reversed.length; j++)
		{
			highlight += reversed[j].letter;	
		}
		if(highlight == matched)
		{
			if (!alreadyFound[i]) {
				word.found = true;
				lastSuccess = 2;
				updateFoundLetters();
				alreadyFound[i] = true;
				break;
			}
		}
		else
		{
			updateSelectedLetters();
			lastSuccess = 1;
		}
	}
	//alert(lastSuccess);
	if (lastSuccess == 1) { //then they missed the word
		attempt++;
		if(attempt >= maxAttempts && !attemptsButtonShown)
		{
			allAttempts();
			attemptsButtonShown = true;
		}
		if (attempt > maxAttempts) {	attempt = maxAttempts;	 }
	}
	//$canvasWordList2.fillText("Attempt " + attempt + " out of " + maxAttempts, 100, 250);
	
	
	drawWordGrid();
	drawWordList();
	
	if(!gameOver)
	{
		//document.onmousedown = setLetterStart;	
		$('#canvas').unbind();
		$('#canvas').bind("mousedown", function(e) {
			setLetterStart(e);
			dragHighlight(e);
		});
	}
}

function allAttempts()
{
	$("#showAnswers").fadeIn();
	enableShow = true;	
	gameover = true;
	
		$('#canvas').unbind();
		
			document.onmousedown = null;
			document.onmousemove = null;
			document.onmouseup = null;
			//alert("in");
			
}

function showAnswerLoc(e){
	wordTile = wordTilesArray[e];			
	$wordGrid.fillStyle = generalStyles.btnColorOver; //'#FFFF00';  //yellow
	$wordGrid.fillRect(wordTile.left, wordTile.top,_wordTileWidth,_wordTileHeight);
	$wordGrid.fillStyle = letterStyles.textColorOver//'#FF0000';  // text color
   
	$wordGrid.fillText(lettersArray[e], wordTile.left + (_wordTileWidth / 2), wordTile.top + (_wordTileHeight / 2));
}

function showAnswers(e)
{
	//This is where it should highlight tag1
	if (!answersShown) { 
		updateFooter(ID_HideAnswers);
		answersShown = true;
		var ans;
		for(i = 0;i<answerKey.length;i++){
			ans = answerKey[i];
			showAnswerLoc(ans);
		}
		finished = true;
		drawWordList();
	} else { 
		answersShown = false;
		drawWordGrid();
		drawWordList();
	}
	
}

function updateSelectedLetters(){
	var i;
	var word;
	for(i = 0; i < highlightedWord.length; i++)
	{
		word = highlightedWord[i];
		word.incorrect = true;
	}
}

function updateFoundLetters()
{
	wordsFound++;
	var i;
	var word;
	for(i = 0; i < highlightedWord.length; i++)
	{
		word = highlightedWord[i];
		word.selected = true;
	}
	if(wordsFound == puzzleWords.length)
	{
		gameOver = true;	
		$("#endGameScreen").fadeIn();
			$('#endGameScreen').click(function(e){				  
				$("#endGameScreen").hide();
			});
			//eliminate mouse clicks
			document.onmousedown = null;
			document.onmousemove = null;
			document.onmouseup = null;
	
					
			
	}
}