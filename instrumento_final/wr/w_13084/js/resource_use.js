var movieWidth;
var movieHeight;
var scalePercentagew;
var scalePercentageh;
var lcap;
var finished = "notdone";
var finishedarray;
var finalScore = 0;
window.quizscope = 0;
var width
var height
var no_of_attempts;
var no_of_tries;
var m_movieProps

var catchRoot;
var catchStage;

var VarFScore
var variableSpeed;

var gameMainBgSel, gameMainBgColor
var gameInstructionTitle, gameInstructions;
var gameMainName,gameMainNameColor,gamePlayBtnText,gamePlayBtnTextColor,gamePlayBtnBaseColor
var gameLifeLineColor, gameScoreTimeSel, gameScoreTimeText,gameScoreTimeColor,gameTopBannerSel, gameTopBannerColor, gameStartQuestionTextColor, gameNextQuestionText1, gameNextQuestionText2, gameNextQuestionTextColor, gameCartColor, gameShapeSelected, gameShapeBaseSelected, gameShapeBaseColor,gameShapeBorderSelected, gameShapeBorderColor, gameShapeTextColor, gameQuestionColor, gameAnswerBaseColor,gameAnswerTextColor
var gameCrctFeedbackTxt, gameCrctFeedbackTxtColor, gameWrngFeedbackTxt, gameWrngFeedbackTxtColor, gameYourScoreTxt, yourScoreTxtHex, gamefinalScoreTxtColor
var getAllPanelInformationArray

var alphaMixList = new Array();
var alphaMixListDefault = ["A", "a", "B", "b", "C", "c", "D", "d", "E", "e", "F", "f", "G", "g", "H", "h", "I", "i", "J", "j", "K", "k", "L", "l", "M", "m", "N", "n", "O", "o", "P", "p", "Q", "q", "R", "r", "S", "s", "T", "t", "U", "u", "V", "v", "W", "w", "X", "x", "Y", "y", "Z", "z"];
var numMixList = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "+", "-", "/", "(", ")", "*"];

var ID_Whatisthecolorofthesky, ID_Blue, ID_AlphaSetFull

var totalQuestions = 0;
var currentScore = 0;
var totalScore = 0;
var totalGameTime;
var qNum = 0;
var ranCount;
var charArrayToRemove;

var isDevice;
var parentDeviceMotion;
var parentOrientation;
var lastOrientation;
var activateCart = false;

var gameSelLifeline =0;;

var cartMc;

isDevice = {
	Android: function() {
		return navigator.userAgent.match(/Android/i) ? true : false;
	},
	BlackBerry: function() {
		return navigator.userAgent.match(/BlackBerry/i) ? true : false;
	},
	IOS: function() {
		return navigator.userAgent.match(/iPhone|iPad|iPod/i) ? true : false;
	},
	Windows: function() {
		return navigator.userAgent.match(/IEMobile/i) ? true : false;
	},
	any: function() {
		return (isDevice.Android() || isDevice.BlackBerry() || isDevice.IOS() || isDevice.Windows());
	}
};

resourceUse = {
	onLoad: function() {

		if (!this.captivate) return;
		lcap = this.captivate;

		handle = this.captivate.CPMovieHandle;
		if (handle.isWidgetVisible() == true) {

			var lInteractiveWidgetHandle = this.captivate.CPMovieHandle.getInteractiveWidgetHandle();
			if (lInteractiveWidgetHandle) {
				if (lInteractiveWidgetHandle.shouldDisable()) this.disable();
			}

			try {
				no_of_attempts = this.captivate.CPMovieHandle.getCPQuestionData().maxAttempts
				if (no_of_attempts == -1) {
					no_of_attempts = 1
				}
				no_of_tries = this.captivate.CPMovieHandle.getCPQuestionData().numTries
			} catch (err) {
				no_of_attempts = 0;
				no_of_tries = 0;
			}

			this.movieProps = this.captivate.CPMovieHandle.getMovieProps();
			if (!this.movieProps) return;
			m_movieProps = this.movieProps;
			this.varHandle = this.movieProps.variablesHandle;
			m_VariableHandle = this.varHandle;
			this.eventDisp = this.movieProps.eventDispatcher;
			this.xmlStr = this.captivate.CPMovieHandle.widgetParams();
			var size = this.OpenAjax.getSize();
			width = size.width;
			height = size.height;
			this.externalImage = '';
			this.description = '';
			this.myVar = '';
			this.myVar1 = '';


			movieWidth = parseInt(size.width.split("px")[0]);
			movieHeight = parseInt(size.height.split("px")[0]);

			this.updateData();
			this.doUpdate();

			if (parent.cpInQuizScope == true) {
				id = setInterval(checkval, 100)
				window.quizscope = 1
			} else {
				id = setInterval(checkval, 100)
			}
		}
	},
	//To be implemented by a QUESTION WIDGET to be part of Captivate's Quizzing framework
	enable: function() {
		var btnElement = document.getElementById('feedbackCanvas');
		btnElement.disabled = false;
	},
	//To be implemented by a QUESTION WIDGET to be part of Captivate's Quizzing framework
	disable: function() {
		var btnElement = document.getElementById('feedbackCanvas');
		btnElement.disabled = 'disabled';
	},
	//Captivate App will not recognize a Question Widget unless this function is implemented and returns true
	getInteractionQuestionState: function() {
		var lResult_Str = finished + ":quiz";
		//Append with score
		lResult_Str = lResult_Str + ":" + finalScore;

		//Implements this to return Widget State as String
		return lResult_Str;
	},
	setInteractionQuestionState: function(aVal) {
		//Implements this to set Widget State from input String(aVal)
		var lArray = [];
		lArray = aVal.split(",");
		if (lArray[0] != "") {
			finished = lArray[0];
		} else {
			finished = "notdone"
		}
		valueset = 1;
		if (lArray.length < 2) return;
	},
	getCorrectAnswerAsArray: function() {
		//Return correct answer as string
		return ["1"];
	},
	getCurrentAnswerAsString: function() {
		//Return current answer as string
	},
	//Handle Click, if Clicked Outside Widget ( will be called from captivate internally)
	onClickExternal: function(e) {
		var lMsg = 'On Click Received in Widget';
		if (e) {
			lMsg += "x=" + e.pageX + "y=" + e.pageY;
		}
		if (!this.captivate) return;
		//Call set Failure
		var lInteractiveWidgetHandle = this.captivate.CPMovieHandle.getInteractiveWidgetHandle();
	},
	updateData: function() {
		var allWidgets = window.parent.document.getElementsByClassName("cp-widget");
		var myFrameName = window.name;
		var myWidgetiFrame = window.parent.document.getElementById(window.name);
		if (myWidgetiFrame) {
			myWidgetiFrame.style.height = movieHeight + "px";
			myWidgetiFrame.style.width = movieWidth + "px";
		}
		var id = 0;
		var result = jQuery.parseXML(this.xmlStr);
		var resultDoc = jQuery(result);
		var strProp = resultDoc.find('string').text();

		//BREAKING UP THE XML FROM CAPTIVATE
//VARIABLE
		//Game Variable
		var varFscr = resultDoc.find('#gameVariable');
        if (varFscr){
            if (varFscr.find('string')){
                VarFScore = varFscr.find('string').text();
            }
        }
		
//BACKGROUND
		//Game bg selected
		var gamebgsel = resultDoc.find('#bgSelected');
		if (gamebgsel) {
			if (gamebgsel.find('string')) {
				gameMainBgSel = gamebgsel.find('string').text();
			}
		}
		
		//Get Bg Color
		var gamebghex = resultDoc.find('#bgColorHex');
		if (gamebghex) {
			if (gamebghex.find('string')) {
				gameMainBgColor = '#' + gamebghex.find('string').text();
			}
		}
		
//INSTRUCTIONS
		//Get instruction title
		var gamedesctitle = resultDoc.find('#instTitleText');
		if (gamedesctitle) {
		 if (gamedesctitle.find('string')) {
			gameInstructionTitle = gamedesctitle.find('string').text();
		 }
		}
		
		//Get instructions for the game
		var gamedesc = resultDoc.find('#instText');
		if (gamedesc) {
		 if (gamedesc.find('string')) {
			gameInstructions = gamedesc.find('string').text();
		 }
		}
		
//START SCREEN
		//Game Name
		var gamename = resultDoc.find('#gameNameText');
		if (gamename) {
		 if (gamename.find('string')) {
			gameMainName = gamename.find('string').text();
		 }
		}
		
		//Game name color
		var gamenamecolor = resultDoc.find('#gameNameColorHex');
		if (gamenamecolor) {
		 if (gamenamecolor.find('string')) {
			gameMainNameColor =  '#' + gamenamecolor.find('string').text();
		 }
		}
		
		//Play Button text
		var gameplaybtn = resultDoc.find('#playButtonText');
		if (gameplaybtn) {
		 if (gameplaybtn.find('string')) {
			gamePlayBtnText = gameplaybtn.find('string').text();
		 }
		}
		
		//Play Button Text Color
		var gameplaybtnhex = resultDoc.find('#playButtonColorHex');
		if (gameplaybtnhex) {
			if (gameplaybtnhex.find('string')) {
				gamePlayBtnTextColor = '#' + gameplaybtnhex.find('string').text();
			}
		} 
		
		//Play Button Base Color
		var gameplaybtnbasehex = resultDoc.find('#playButtonBaseColorHex');



		if (gameplaybtnbasehex) {
			if (gameplaybtnbasehex.find('string')) {
				gamePlayBtnBaseColor = '#' + gameplaybtnbasehex.find('string').text();
			}
		} 
		
//GAME SCREEN
		//LifeLine color
		var lifeLineColorHex = resultDoc.find('#lifeLineColorHex');
		if (lifeLineColorHex) {
			if (lifeLineColorHex.find('string')) {
				gameLifeLineColor = '#' + lifeLineColorHex.find('string').text();
			}
		}
		
		//Lifeline choosen
		var selLifeline = resultDoc.find('#selLifeline');
		if (selLifeline) {
			if (selLifeline.find('number')) {
				gameSelLifeline = parseInt(selLifeline.find('number').text());
			}
		}
		
		//Score Time Color
		var scoretimesel = resultDoc.find('#scoreTimeSel');
		if (scoretimesel) {
			if (scoretimesel.find('string')) {
				gameScoreTimeSel = scoretimesel.find('string').text();
			}
		} 
		
		//Score Time Color
		var scoretimetext = resultDoc.find('#scoreTimeText');
		if (scoretimetext) {
			if (scoretimetext.find('string')) {
				gameScoreTimeText = scoretimetext.find('string').text();
			}
		} 
		
		//Score Time Color
		var scoretimehex = resultDoc.find('#scoreTimeColorHex');
		if (scoretimehex) {
			if (scoretimehex.find('string')) {
				gameScoreTimeColor = '#' + scoretimehex.find('string').text();
			}
		} 
		
		//Top banner sel
		var topbannersel = resultDoc.find('#topBannerSelected');
		if (topbannersel) {
			if (topbannersel.find('string')) {
				gameTopBannerSel = topbannersel.find('string').text();
			}
		} 
		
		//Top banner color
		var topbannerHex = resultDoc.find('#topBannerColorHex');
		if (topbannerHex) {
		 if (topbannerHex.find('string')) {
			gameTopBannerColor = '#' + topbannerHex.find('string').text();
		 }
		}
		
		//Start Question color
		var startQuestionTexthex = resultDoc.find('#startQuestionColorHex');
		if (startQuestionTexthex) {
			if (startQuestionTexthex.find('string')) {
				gameStartQuestionTextColor = '#' + startQuestionTexthex.find('string').text();
			}
		}
		
		//Next Question Panel text 1
		var nextQuestionText1 = resultDoc.find('#nextQuestionText1');
		if (nextQuestionText1) {
			if (nextQuestionText1.find('string')) {
				gameNextQuestionText1 = nextQuestionText1.find('string').text();
			}
		}
		
		//Next Question Panel text2
		var nextQuestionText2 = resultDoc.find('#nextQuestionText2');
		if (nextQuestionText2) {
			if (nextQuestionText2.find('string')) {
				gameNextQuestionText2 = nextQuestionText2.find('string').text();
			}
		}
		
		//Next Question Panel text2
		var nextQuestionTexthex = resultDoc.find('#nextQuestionColorHex');
		if (nextQuestionTexthex) {
			if (nextQuestionTexthex.find('string')) {
				gameNextQuestionTextColor = '#' + nextQuestionTexthex.find('string').text();
			}
		}
		
		//Cart color
		var cartColorHex = resultDoc.find('#cartColorHex');
		if (cartColorHex) {
			if (cartColorHex.find('string')) {
				gameCartColor = '#' + cartColorHex.find('string').text();
			}
		}
		
		//Shape details
		//Shape selected
		var shapeSelected = resultDoc.find('#shapeSelected');
		if (shapeSelected) {
			if (shapeSelected.find('number')) {
				gameShapeSelected = parseInt(shapeSelected.find('number').text());
			}
		}
		
		//Shape shapeBaseSelected
		var shapeBaseSelected = resultDoc.find('#shapeBaseSelected');
		if (shapeBaseSelected) {
			if (shapeBaseSelected.find('string')) {
				gameShapeBaseSelected = shapeBaseSelected.find('string').text();
			}
		}
		
		//Shape shapeBaseSelected color
		var shapeBaseColorHex = resultDoc.find('#shapeBaseColorHex');
		if (shapeBaseColorHex) {
			if (shapeBaseColorHex.find('string')) {
				gameShapeBaseColor = '#' +shapeBaseColorHex.find('string').text();
			}
		}
		
		//Shape shapeBorderSelected
		var shapeBorderSelected = resultDoc.find('#shapeBorderSelected');
		if (shapeBorderSelected) {
			if (shapeBorderSelected.find('string')) {
				gameShapeBorderSelected = shapeBorderSelected.find('string').text();
			}
		}
		
		//Shape shapeBorderSelected color
		var shapeBorderColorHex = resultDoc.find('#shapeBorderColorHex');
		if (shapeBorderColorHex) {
			if (shapeBorderColorHex.find('string')) {
				gameShapeBorderColor = '#' +shapeBorderColorHex.find('string').text();
			}
		}
		
		//Shape text color
		var shapeTextColorHex = resultDoc.find('#shapeTextColorHex');
		if (shapeTextColorHex) {
			if (shapeTextColorHex.find('string')) {
				gameShapeTextColor = '#' +shapeTextColorHex.find('string').text();
			}
		}
		
		//Bottom banner  color
		var bottomBannerColorHex = resultDoc.find('#bottomBannerColorHex');
		if (bottomBannerColorHex) {
			if (bottomBannerColorHex.find('string')) {
				gameBottomBannerColor = '#' +bottomBannerColorHex.find('string').text();
			}
		}
		
		//Question color
		var questionColorHex = resultDoc.find('#questionColorHex');
		if (questionColorHex) {
			if (questionColorHex.find('string')) {
				gameQuestionColor = '#' +questionColorHex.find('string').text();
			}
		}
		
		//Answer base color
		var answerBaseColorHex = resultDoc.find('#answerBaseColorHex');
		if (answerBaseColorHex) {
			if (answerBaseColorHex.find('string')) {
				gameAnswerBaseColor = '#' +answerBaseColorHex.find('string').text();
			}
		}
		
		//Answer text color
		var answerTextColorHex = resultDoc.find('#answerTextColorHex');
		if (answerTextColorHex) {
			if (answerTextColorHex.find('string')) {
				gameAnswerTextColor = '#' +answerTextColorHex.find('string').text();
			}
		}
		
//END SCREEN
		//Correct feedback text
		var crctFeedbackTxt = resultDoc.find('#crctFeedbackText');
		if (crctFeedbackTxt) {
		 if (crctFeedbackTxt.find('string')) {
			gameCrctFeedbackTxt = crctFeedbackTxt.find('string').text();
		 }
		}
		
		//Correct feedback text color
		var crctFeedbackTxtHex = resultDoc.find('#crctFeedbackColorHex');
		if (crctFeedbackTxtHex) {
		 if (crctFeedbackTxtHex.find('string')) {
			gameCrctFeedbackTxtColor = '#' + crctFeedbackTxtHex.find('string').text();
		 }
		}
		
		//InCorrect feedback text
		var wrngFeedbackTxt = resultDoc.find('#wrngFeedbackText');
		if (wrngFeedbackTxt) {
		 if (wrngFeedbackTxt.find('string')) {
			gameWrngFeedbackTxt = wrngFeedbackTxt.find('string').text();
		 }
		}
		
		//InCorrect feedback text color
		var wrngFeedbackTxtHex = resultDoc.find('#wrngFeedbackColorHex');
		if (wrngFeedbackTxtHex) {
		 if (wrngFeedbackTxtHex.find('string')) {
			gameWrngFeedbackTxtColor = '#' + wrngFeedbackTxtHex.find('string').text();
		 }
		}
		
		//Your score text
		var yourScoreTxt = resultDoc.find('#yourScoreText');
		if (yourScoreTxt) {
		 if (yourScoreTxt.find('string')) {
			gameYourScoreTxt = yourScoreTxt.find('string').text();
		 }
		}
		
		//Your score text color
		var yourScoreTxtHex = resultDoc.find('#yourScoreColorHex');
		if (yourScoreTxtHex) {
		 if (yourScoreTxtHex.find('string')) {
			gameYourScoreTxtColor = '#' + yourScoreTxtHex.find('string').text();
		 }
		}
		
		//Finalscore color
		var finalScoreTxtHex = resultDoc.find('#finalScoreColorHex');
		if (finalScoreTxtHex) {
		 if (finalScoreTxtHex.find('string')) {
			gamefinalScoreTxtColor = '#' + finalScoreTxtHex.find('string').text();
		 }
		}
//ADDITION FOR LOCALIZATION
		//Finalscore color
		var ID_Whatisthecoloroftheskytxt = resultDoc.find('#ID_Whatisthecolorofthesky');
		if (ID_Whatisthecoloroftheskytxt) {
		 if (ID_Whatisthecoloroftheskytxt.find('string')) {
			ID_Whatisthecolorofthesky = ID_Whatisthecoloroftheskytxt.find('string').text();
		 }
		}
		
		var ID_Bluetxt = resultDoc.find('#ID_Blue');
		if (ID_Bluetxt) {
		 if (ID_Bluetxt.find('string')) {
			ID_Blue = ID_Bluetxt.find('string').text();
		 }
		}
		
		var ID_AlphaSetFulltxt = resultDoc.find('#ID_AlphaSetFull');
		if (ID_AlphaSetFulltxt) {
		 if (ID_AlphaSetFulltxt.find('string')) {
			ID_AlphaSetFull = ID_AlphaSetFulltxt.find('string').text();
		 }
		}
		
		alphaMixListDefault = ID_AlphaSetFull.split(",")

		//Get All Questions Information
		var getAllPanelInformation = resultDoc.find('#allPanelInformation');
		
		getAllPanelInformationArray = new Array();
		if (getAllPanelInformation){
			totalQuestions = getAllPanelInformation.children().children().children().length;
			if(totalQuestions>0){
				for (i=0; i<totalQuestions; i++) {
					var questionObj = new Object();
					var questionList = $(getAllPanelInformation.find('array').children()[i]);
					questionObj.type = ($($(questionList).find('#0')).find('string').text());
					if (questionObj.type == "word") {
						questionObj.num = ($($(questionList).find('#1')).find('string').text());
						questionObj.qTxt = ($($(questionList).find('#2')).find('string').text());
						questionObj.aTxt = ($($(questionList).find('#3')).find('string').text());
						questionObj.scoreTxt = ($($(questionList).find('#4')).find('string').text());
						questionObj.removeATxt = ($($(questionList).find('#5')).find('string').text());
						questionObj.lifeLines = ($($(questionList).find('#6')).find('number').text());
						questionObj.cTxt = ($($(questionList).find('#7')).find('string').text());
					} else if (questionObj.type == "number") {
						questionObj.num = ($($(questionList).find('#1')).find('string').text());
						questionObj.aTxt = ($($(questionList).find('#2')).find('string').text());
						questionObj.scoreTxt = ($($(questionList).find('#3')).find('string').text());
						questionObj.removeNTxt = ($($(questionList).find('#4')).find('string').text());
						questionObj.removeSTxt = ($($(questionList).find('#5')).find('string').text());
						questionObj.lifeLines = ($($(questionList).find('#6')).find('number').text());
					}
					getAllPanelInformationArray.push(questionObj);
				}
			}else{
				//Prepare dummy question
				var questionObjD = new Object();
				questionObjD.type = "word"
				questionObjD.num = 1;
				questionObjD.qTxt = ID_Whatisthecolorofthesky;
				questionObjD.aTxt = ID_Blue;
				questionObjD.scoreTxt = "10";
				questionObjD.removeATxt = "1";
				questionObjD.lifeLines = "5";
				questionObjD.cTxt = "";
				
				getAllPanelInformationArray.push(questionObjD);
			}
		}
		
		
	},
	doUpdate: function() {
		resizeInteraction(width, height);
	},

};
resource_use = function() {

	//Check if the browser is Safari on Mac only to toggle the YES NO Button Positions
	//SystemIsMac = ( navigator.platform.match(/(iPad|iPhone|Mac)/g) ? true : false );
	return resourceUse;
}

function resizeInteraction(thewidth, theheight) {
	var scale = 0;
    thewidth = String(thewidth).replace("px", "");
    theheight = String(theheight).replace("px", "");
    if (thewidth < theheight){
        scale = thewidth / (640);
    } else{
        scale = theheight / (480);
    }
    var margins = Math.round(25 * scale);
    margins += "px"
    scale = "scale(" + scale + ")";
    $('#gamedesc').css('-webkit-transform', scale);
    $('#gamedesc').css('-moz-transform', scale);
    $('#gamedesc').css('-o-transform', scale);
    $('#gamedesc').css('-ms-transform', scale);
    $('#gamedesc').css('-webkit-transform-origin', '0 0');
	$('#gamedesc').css('-moz-transform-origin', '0 0');
    $('#gamedesc').css('-o-transform-origin', '0 0');
    $('#gamedesc').css('-ms-transform-origin', '0 0');
	$('#gamedesc').css('-webkit-tap-highlight-color', 'rgba(0,0,0,0)');
}
var scaleDiffw;
var scaleDiffh;

function checkval() {
	clearInterval(id);
	catchTheAlphaNumsInit();
}

function catchTheAlphaNumsInit() {

	catchCanvas = document.getElementById("catchCanvas");
	catchCanvas.width = movieWidth;
	catchCanvas.height = movieHeight;
	
	//Apply text and Color features // ONLY Instructions will be set from her
	
	catchRoot = new lib.runtime();
	catchRoot.scaleX = movieWidth / 640;
	catchRoot.scaleY = movieHeight / 480;
	
	catchStage = new createjs.Stage(catchCanvas);
	catchStage.addChild(catchRoot);
	catchStage.enableMouseOver();
	
	//Enabling Touch
	createjs.Touch.enable(catchStage);

	createjs.Ticker.setFPS(lib.properties.fps);
	createjs.Ticker.addEventListener("tick", catchStage);

	scalePercentagew = movieWidth / 640;
	scalePercentageh = movieHeight / 480;

	scaleDiffw = movieWidth - 640;
	scaleDiffh = movieHeight - 480;
	
	catchRoot.runTime_mc.instScreen.visible = false;
	catchRoot.runTime_mc.startScreen.visible = false;
	catchRoot.runTime_mc.gameScreen.visible = false;
	catchRoot.runTime_mc.endScreen.visible = false;
	catchRoot.runTime_mc.bg.visible = false;
	
	//Set up Background
	setupBg();
		
	
	//Set up instructions
	setupInstructions();

	//Set up start screen
	setupStartScreen();
	
	//Set up game screen
	setupGameScreen();
	
	catchStage.update();

	//hide all html elements
	finishedarray = finished.split(":")
	if (finishedarray[2] != undefined) {
		finalScore = parseInt(finishedarray[2]);
	}
	if (m_VariableHandle != null) {
		m_VariableHandle[VarFScore] = finalScore;
	}

	var lInteractiveWidgetHandle = lcap.CPMovieHandle.getInteractiveWidgetHandle();
	if (parent.cpInQuizScope == true) {
		if (lcap.CPMovieHandle.getQuizController().m_QuizzingData.isInReviewMode == true) {
			if (finishedarray[0] == "complete") {
				setReviewMode("success");
			} else {
				setReviewMode("fail")
			}
		} else if (no_of_tries < no_of_attempts) {
			if (finishedarray[0] == "notdone") {
				setnotdonemode();
			} else if (finishedarray[0] == "complete") {
				setReviewMode("success");
			} else {
				setReviewMode("fail");
			}
		} else if (no_of_tries >= no_of_attempts) {
			if (finishedarray[0] == "notdone") {
				setnotdonemode();

			} else if (finishedarray[0] == "complete") {
				setReviewMode("success");
			} else {
				setReviewMode("fail")
			}
		}
	} else {
		if (lcap.CPMovieHandle.getQuizController().m_QuizzingData != null) {
			if (lcap.CPMovieHandle.getQuizController().m_QuizzingData.isInReviewMode == true) {
				if (finishedarray[0] == "notdone") {
					if (finishedarray[1] == "quiz") {
						setReviewMode("fail")
					} else {
						setnotdonemode();
					}
				} else if (finishedarray[0] == "complete") {
					setReviewMode("success");
				} else {
					setReviewMode("fail")
				}
			} else if (no_of_tries < no_of_attempts) {

				if (finishedarray[0] == "notdone") {
					setnotdonemode();
				} else if (finishedarray[0] == "complete") {
					setReviewMode("success");
				}

			} else if (no_of_tries >= no_of_attempts) {
				if (finishedarray[0] == "notdone") {
					setnotdonemode();
				} else if (finishedarray[0] == "complete") {
					setReviewMode("success");
				} else {
					setReviewMode("fail")
				}
			}
		} else {
			if (finishedarray[0] == "notdone") {
				if (finishedarray[1] == "quiz") {
					setReviewMode("fail")
				} else {
					setnotdonemode();
				}
			} else if (finishedarray[0] == "success") {
				setReviewMode("success");
			} else if (finishedarray[0] == "fail") {
				setReviewMode("fail")
			}
		}

	}
	
	//Checking device orientation
	if(isDevice.any()){
		if(window.DeviceMotionEvent){
			lastOrientation = {}
			window.addEventListener('devicemotion', deviceMotionTest, false);
		}
		if (window.DeviceOrientationEvent) {
			lastOrientation = {}
			window.addEventListener('deviceorientation', deviceOrientationTest, false);
		}else{
			//console.log("Not avalable")
		}
	}
}

function setupBg(){
	if(gameMainBgSel == "true"){
		catchRoot.runTime_mc.bg.visible = true;
	}else{
		catchRoot.runTime_mc.bg.visible = false;
	}
}

function setupInstructions(){
	catchRoot.runTime_mc.instScreen.instMc.instTitleMc.instTitle.text = gameInstructionTitle
	catchRoot.runTime_mc.instScreen.instMc.instTxtMcShow.instTxt.visible = false;

	catchRoot.runTime_mc.instScreen.instMc.close_btn.addEventListener("mouseover", handleMouseOver);
	catchRoot.runTime_mc.instScreen.instMc.close_btn.addEventListener("mouseout", handleMouseOut);
	catchRoot.runTime_mc.instScreen.instMc.close_btn.addEventListener("click", hideInstructions);	
	
	catchRoot.runTime_mc.instScreen.help_btn.addEventListener("mouseover", handleMouseOver);
	catchRoot.runTime_mc.instScreen.help_btn.addEventListener("mouseout", handleMouseOut);
	catchRoot.runTime_mc.instScreen.help_btn.addEventListener("click", showHideInstructions);	
	
	//Game instructions
	$('#gamedesc').attr('rows', 8)
    $('#gamedesc').attr('cols', 37)
    $('#gamedesc').css({
        zIndex: 25,
        left: (140* scalePercentagew)/2 + "px",
        top: (160*scalePercentageh) + "px",
		width: 490 + "px",
        height: 182 + "px",
        backgroundColor: 'transparent',
    	textAlign: 'Left',
		lineHeight: '160%',
		overflow: 'auto',
		"overflow-x": 'hidden',
    });
	$('#gamedesc').html(gameInstructions); 
	$('#gamedesc').disableTextSelect();
	$('#gamedesc').mouseover(function(e) {
        e.target.style.cursor = "default";
    });
	$('#gamedesc').show();
	
	catchRoot.runTime_mc.instScreen.visible = true;
	hideInstructions();
} 

function showHideInstructions(){
	if(catchRoot.runTime_mc.instScreen.instMc.visible){
		hideInstructions();
	}else{
		catchRoot.runTime_mc.startScreen.visible = false;
		catchRoot.runTime_mc.instScreen.instMc.visible = true;
		$('#gamedesc').show();
	}
}

function hideInstructions(){
	$('#gamedesc').hide();
	catchRoot.runTime_mc.instScreen.instMc.visible = false;
	catchRoot.runTime_mc.startScreen.visible = true;
}

function setupStartScreen(){
	catchRoot.runTime_mc.startScreen.visible = true;
	catchRoot.runTime_mc.startScreen.playBtn.addEventListener("mouseover", handleMouseOver);
	catchRoot.runTime_mc.startScreen.playBtn.addEventListener("mouseout", handleMouseOut);
	catchRoot.runTime_mc.startScreen.playBtn.addEventListener("click", startGameScreen);	
}

function startGameScreen(){
	catchRoot.runTime_mc.startScreen.visible = false;
	catchRoot.runTime_mc.instScreen.visible = false;
	catchRoot.runTime_mc.gameScreen.visible = true;
	
	prepareQuestion();
}

var alNumYArray;
function setupGameScreen(){
	//Score
	if(gameScoreTimeSel == "true"){
		catchRoot.runTime_mc.gameScreen.scoreMc.visible =true;
	}else{
		catchRoot.runTime_mc.gameScreen.scoreMc.visible =false;
	}
	
	//Lifelines
	for(i =1;i<=5;i++){
		//catchRoot.runTime_mc.gameScreen["heart"+i].heart.gotoAndStop(0)
		catchRoot.runTime_mc.gameScreen["heart"+i].heart.base_1.gotoAndStop(0);
		catchRoot.runTime_mc.gameScreen["heart"+i].heart.base.gotoAndStop(0);
		if(gameSelLifeline==2){
			catchRoot.runTime_mc.gameScreen["heart"+i].heart.base_1.visible=true;
			catchRoot.runTime_mc.gameScreen["heart"+i].heart.base.visible=false;
		}else{
			catchRoot.runTime_mc.gameScreen["heart"+i].heart.base_1.visible=false;
			catchRoot.runTime_mc.gameScreen["heart"+i].heart.base.visible=true;
		}
	}
	
	//Top Banner
	if(gameTopBannerSel =="true"){
		catchRoot.runTime_mc.gameScreen.topBannerMc.visible =true;
	}else{
		catchRoot.runTime_mc.gameScreen.topBannerMc.visible =false;
	}
	
	//Start Question Panel
	catchRoot.runTime_mc.gameScreen.startQuestion.visible =false;
	
	//Next Question Panel
	catchRoot.runTime_mc.gameScreen.nextQuestion.visible =false;
	catchRoot.runTime_mc.gameScreen.nextQuestion.crctmc.visible =false;
	catchRoot.runTime_mc.gameScreen.nextQuestion.wrngmc.visible =false;
	catchRoot.runTime_mc.gameScreen.nextQuestion.base.gotoAndStop(0)
	
	//Cart features
	cartMc = catchRoot.runTime_mc.gameScreen.cartMc;
	cartMc.mc.base.bordermc.gotoAndStop(gameShapeSelected-1);
	cartMc.mc.base.shapemc.gotoAndStop(gameShapeSelected-1);
	
	if(gameShapeBorderSelected == "true"){
		cartMc.mc.base.bordermc.visible=true;
	}else{
		cartMc.mc.base.bordermc.visible=false;
	}
	
	if(gameShapeBaseSelected == "true"){
		cartMc.mc.base.shapemc.visible=true;
	}else{
		cartMc.mc.base.shapemc.visible=false;
	}
	//cartMc.mc.txt.text = "M"
	cartMc.mc.alpha =0;
	
	//Shape Features
	alNumYArray = new Array();
	for(i=1;i<=7;i++){
		alNumYArray.push(catchRoot.runTime_mc.gameScreen["alnum"+i].y)
		catchRoot.runTime_mc.gameScreen["alnum"+i].base.bordermc.gotoAndStop(gameShapeSelected-1);
		catchRoot.runTime_mc.gameScreen["alnum"+i].base.shapemc.gotoAndStop(gameShapeSelected-1);
		if(gameShapeBorderSelected == "true"){
			catchRoot.runTime_mc.gameScreen["alnum"+i].base.bordermc.visible=true;
		}else{
			catchRoot.runTime_mc.gameScreen["alnum"+i].base.bordermc.visible=false;
		}
		
		if(gameShapeBaseSelected == "true"){
			catchRoot.runTime_mc.gameScreen["alnum"+i].base.shapemc.visible=true;
		}else{
			catchRoot.runTime_mc.gameScreen["alnum"+i].base.shapemc.visible=false;
		}
	}
	
	//Get the total score for this game
	totalScore = 0;
	for (var i = 0; i < getAllPanelInformationArray.length; i++) {
		totalScore = totalScore + parseInt(getAllPanelInformationArray[i].scoreTxt)
	}
	catchRoot.runTime_mc.gameScreen.scoreMc.score.text = currentScore + "/" + totalScore;
	
	
	//Button features for correct and incorrect feedback
	catchRoot.runTime_mc.gameScreen.nextQuestion.addEventListener("mouseover", handleMouseOverNextQues);
	catchRoot.runTime_mc.gameScreen.nextQuestion.addEventListener("mouseout", handleMouseOutNextQues);
	catchRoot.runTime_mc.gameScreen.nextQuestion.addEventListener("click", removeAllChars);

}

function handleMouseOverNextQues(evt) {
	catchCanvas.style.cursor = "pointer";
	catchRoot.runTime_mc.gameScreen.nextQuestion.base.gotoAndStop(1);
}

function handleMouseOutNextQues(evt) {
	catchCanvas.style.cursor = "default";
	catchRoot.runTime_mc.gameScreen.nextQuestion.base.gotoAndStop(0);
}

var gameOverCheck

function removeAllChars() {
	for (i = 0; i < charArrayToRemove.length; i++) {
		var charBox = catchRoot.runTime_mc.gameScreen.getChildByName(charArrayToRemove[i]);
		catchRoot.runTime_mc.gameScreen.removeChild(charBox);
	}
	
	//Clear all intervals
	clearInterval(moveAlphaShapeid1)
	clearInterval(moveAlphaShapeid2)
	clearInterval(moveAlphaShapeid3)
	clearInterval(moveAlphaShapeid4)
	clearInterval(moveAlphaShapeid5)
	clearInterval(moveAlphaShapeid6)
	clearInterval(moveAlphaShapeid7)
	
	//resetting Alnums
	for(i=1;i<=7;i++){
		catchRoot.runTime_mc.gameScreen["alnum"+i].y =  alNumYArray[i-1]
	}
	
	//Enable Lifelines
	enableAllLifelines();
	
	//Check next question
	checkForNextQuestion();
}

function checkForNextQuestion() {
	qNum++;
	if (qNum < totalQuestions) {
		catchRoot.runTime_mc.gameScreen.nextQuestion.visible = false;
		prepareQuestion()
	} else {
		catchRoot.runTime_mc.gameScreen.visible = false;
		catchRoot.runTime_mc.endScreen.crctFeedback.visible = false
		catchRoot.runTime_mc.endScreen.wrngFeedback.visible = false;
		finalScore = currentScore;
		if (currentScore == totalScore) {
			catchRoot.runTime_mc.endScreen.crctFeedback.visible = true;
			finished = "complete";
			setSuccess();
		} else {
			catchRoot.runTime_mc.endScreen.wrngFeedback.visible = true;
			finished = "failed";
			setFailure();
		}
		updateVariable();
		catchRoot.runTime_mc.endScreen.finalScore.finalScoreTxt.text = currentScore;
		catchRoot.runTime_mc.endScreen.visible = true;
	}
}

function updateVariable(){
	if (m_VariableHandle != null) {
		m_VariableHandle[VarFScore] = finalScore;
	}
}

var mainCharListLength;
var questionDisplayString ="";
function prepareQuestion(){
	var qType = getAllPanelInformationArray[qNum].type;
	setQuestionComplete = false;
	ansCalCounter =0;
	if(qType == "word"){
		//ShowQuestion
		if(getAllPanelInformationArray[qNum].qTxt == ""){
			catchRoot.runTime_mc.gameScreen.quesTxt.text = ID_Whatisthecolorofthesky;
		}else{
			catchRoot.runTime_mc.gameScreen.quesTxt.text = getAllPanelInformationArray[qNum].qTxt
		}
		questionDisplayString = catchRoot.runTime_mc.gameScreen.quesTxt.text;
		
		//Answer
		var ansSet;
		if(getAllPanelInformationArray[qNum].aTxt == ""){
			ansSet = createAlphabetSet(ID_Blue);
		}else{
			ansSet = createAlphabetSet(String(getAllPanelInformationArray[qNum].aTxt))
		}
		var ansWords = ansSet[0];
		var ansCharacters = ansSet[1];
		
		var alphaList = new Array();
		for (i = 0; i < ansCharacters.length; i++) {
			for (k = 0; k < ansCharacters[i].length; k++) {
				alphaList.push(ansCharacters[i][k])

			}
		}
		
		//Score for this question
		var questionScore = parseInt(getAllPanelInformationArray[qNum].scoreTxt)
		
		//Number of alphabets to remove
		var questionAlpaRemove;
		if (parseInt(getAllPanelInformationArray[qNum].removeATxt) > alphaList.length) {
			questionAlpaRemove = alphaList.length;
		} else {
			questionAlpaRemove = parseInt(getAllPanelInformationArray[qNum].removeATxt);
		}
		
		//Lifelines
		var questionLifeLine = parseInt(getAllPanelInformationArray[qNum].lifeLines);
		
		//Character set
		var charQuestionList = String(getAllPanelInformationArray[qNum].cTxt);
		var charListArray = charQuestionList.split(",");
		
		//Char set
		var TempArray = new Array();
		ranCount = 0;
		var ranArray = getRandNumInRange(0, alphaList.length, questionAlpaRemove, TempArray)
	
		var charBoxCount = 0;
		charArrayToRemove =  new Array();
		var totalWidthtoOccupy = 25 * (alphaList.length) + ((ansCharacters.length) * 10);
		
		for (j = 0; j < ansCharacters.length; j++) {
			for (m = 0; m < ansCharacters[j].length; m++) {
				var ansCharBox = new lib.ansCharBoxes();
				ansCharBox.num = charBoxCount
				ansCharBox.name = "ansCharBox" + charBoxCount;
				ansCharBox.txt.text = ansCharacters[j][m];
				ansCharBox.base.gotoAndStop(0);
				ansCharBox.y = 453;
				charArrayToRemove.push(ansCharBox.name);
				
				if (charBoxCount == 0) {
					ansCharBox.x = 320 - (totalWidthtoOccupy / 2)
				} else {
					 prevCharBox = catchRoot.runTime_mc.gameScreen.getChildByName("ansCharBox" + (charBoxCount - 1));
					if (m == 0) {
						ansCharBox.x = (prevCharBox.x + 25.6) + 10;
					} else {
						ansCharBox.x = (prevCharBox.x + 25.6) + 2;
					}
				}
				charBoxCount++;
				catchRoot.runTime_mc.gameScreen.addChild(ansCharBox)
			}
		}
		//Hide chars
		var sendThisArray = new Array();
		mainCharListLength = alphaList.length;
		for (r = 0; r < alphaList.length; r++) {
			for (u = 0; u < ranArray.length; u++) {
				if (r == ranArray[u]) {
					var tempCharBox = catchRoot.runTime_mc.gameScreen.getChildByName("ansCharBox" + r);
					tempCharBox.txt.visible = false;
					//console.log(tempCharBox.txt.text, "tempCharBox")
					sendThisArray.push(tempCharBox.txt.text);
				}
			}
		}
		setUpAnswer(qType, sendThisArray, questionLifeLine, questionScore, charListArray)
	}else{
		
		//ShowQuestion
		catchRoot.runTime_mc.gameScreen.quesTxt.text = "";
		
		//Answer
		var ansSet;
		if(getAllPanelInformationArray[qNum].aTxt == ""){
			ansSet = createEquationSet("(5+5)*3=30");
		}else{
			ansSet = createEquationSet(String(getAllPanelInformationArray[qNum].aTxt))
		}
		
		var ansNumbers = ansSet[0];
		var ansSymbols = ansSet[1];
		var ansCharacters = ansSet[2];
		
		var alphaList = new Array();
		for (i = 0; i < ansCharacters.length; i++) {
			for (k = 0; k < ansCharacters[i].length; k++) {
				alphaList.push(ansCharacters[i][k])
			}
		}
		
		//Score for this question
		var questionScore = parseInt(getAllPanelInformationArray[qNum].scoreTxt)
		
		//Number of alphabets to remove
		var questionAlpaRemove;
		if (parseInt(getAllPanelInformationArray[qNum].removeATxt) > alphaList.length) {
			questionAlpaRemove = alphaList.length;
		} else {
			questionAlpaRemove = parseInt(getAllPanelInformationArray[qNum].removeATxt);
		}
		
		//Lifelines
		var questionLifeLine = parseInt(getAllPanelInformationArray[qNum].lifeLines);
	
		var charQuestionList = String(getAllPanelInformationArray[qNum].cTxt);
		
		var removeNumber = 0;
		var removeSymbol = 0;
		
		if(getAllPanelInformationArray[qNum].removeNTxt){
			removeNumber = parseInt(getAllPanelInformationArray[qNum].removeNTxt);
		}
		if(getAllPanelInformationArray[qNum].removeSTxt){
			removeSymbol = parseInt(getAllPanelInformationArray[qNum].removeSTxt);
		}
		if(removeNumber == 0 && removeSymbol == 0){
			removeNumber = 1;
		}
		
		//console.log(getAllPanelInformationArray[qNum].removeNTxt,removeSymbol)
		var ranNumArray = new Array();
		var ranSymArray = new Array();
		
		if (removeNumber > 0) {
			ranCount = 0;
			var TempNumArray = new Array();
			ranNumArray = getRandNumInRange(0, ansNumbers.length, removeNumber, TempNumArray);
		}
	
		if (removeSymbol > 0) {
			ranCount = 0;
			var TempSymArray = new Array();
			ranSymArray = getRandNumInRange(0, ansSymbols.length, removeSymbol, TempSymArray);
		}
		mainCharListLength = alphaList.length;
	
		var charBoxCount = 0;
		var totalWidthtoOccupy = 25 * (alphaList.length);
	
		charArrayToRemove = new Array();
	
		for (var m = 0; m < alphaList.length; m++) {
			var charBox = new lib.ansCharBoxes();
			charBox.num = charBoxCount
			charBox.name = "ansCharBox" + charBoxCount;
			charBox.txt.text = alphaList[m];
			charBox.y = 443;
			charBox.base.gotoAndStop(0);
			charArrayToRemove.push(charBox.name);
	
			if (charBoxCount == 0) {
				charBox.x = 320 - (totalWidthtoOccupy / 2)
			} else {
				var prevCharBox = catchRoot.runTime_mc.gameScreen.getChildByName("ansCharBox" + (charBoxCount - 1));
				charBox.x = (prevCharBox.x + + 25.6) + 2;
			}
			charBoxCount++;
			catchRoot.runTime_mc.gameScreen.addChild(charBox);
		}
		//Hide chars
		var sendThisArray = new Array();
		for (var r = 0; r < alphaList.length; r++) {
			if (ranNumArray.length > 0) {
				for (var u = 0; u < ranNumArray.length; u++) {
					if (r == ansNumbers[ranNumArray[u]]) {
						var tempCharBox1 = catchRoot.runTime_mc.gameScreen.getChildByName("ansCharBox" + r);
						tempCharBox1.txt.visible = false;
						sendThisArray.push(tempCharBox1.txt.text);
					}
				}
			}
			if (ranSymArray.length > 0) {
				for (var v = 0; v < ranSymArray.length; v++) {
					if (r == ansSymbols[ranSymArray[v]]) {
						var tempCharBox2 = catchRoot.runTime_mc.gameScreen.getChildByName("ansCharBox" + r);
						tempCharBox2.txt.visible = false;
						sendThisArray.push(tempCharBox2.txt.text);
					}
				}
			}
		}
	
		//For display as question
		var tempQuesString = "";
		for (var s = 0; s < alphaList.length; s++) {
			var tempCharBoxDum = catchRoot.runTime_mc.gameScreen.getChildByName("ansCharBox" + s);
			if (tempCharBoxDum.txt.visible) {
				tempQuesString = tempQuesString + tempCharBoxDum.txt.text;
			} else {
				tempQuesString = tempQuesString + " _ "
			}
		}
		questionDisplayString = tempQuesString;
		
		var dummyArray = []
		setUpAnswer(qType, sendThisArray, questionLifeLine, questionScore, dummyArray)
	}
}

var moveCartid
var speed = 4;
var rightArrow;
var leftArrow;
var spaceBar;
var dropSpeed1,dropSpeed2,dropSpeed3,dropSpeed4,dropSpeed5,dropSpeed6,dropSpeed7
var yValArray;
var speedRangeVal1 = 1;
var speedRangeVal2 = 6;
var scoreForThisQuest;

var moveAlphaShapeid1,moveAlphaShapeid2,moveAlphaShapeid3,moveAlphaShapeid4,moveAlphaShapeid5,moveAlphaShapeid6,moveAlphaShapeid7

function setUpAnswer(qType, alphaList, lifLiCount, thisScore, charListArray) {
	catchRoot.runTime_mc.gameScreen.nextQuestion.visible = false;
	counter = 0;
	assurance = 0;
	charList = new Array();
	charList = alphaList;
	lifeLineCounter = lifLiCount;
	scoreForThisQuest = thisScore;
	quesType = qType;
	setScore = false;
	questionPassed = false;
	alphaMixList = new Array();
	if (charListArray.length > 1) {
		alphaMixList = charListArray;
	} else {
		alphaMixList = alphaMixListDefault;
	}
	yValArray = new Array();
	for (i = 1; i <= 7; i++) {
		yValArray.push(catchRoot.runTime_mc.gameScreen["alnum" + i].y) 
		if (quesType == "word") {
			catchRoot.runTime_mc.gameScreen["alnum" + i].txt.text = alphaMixList[randRange(0, (alphaMixList.length - 1))]
		} else {
			catchRoot.runTime_mc.gameScreen["alnum" + i].txt.text = numMixList[randRange(0, (numMixList.length - 1))]
		}
		catchRoot.runTime_mc.gameScreen["alnum" + i].alpha = 100;
	}
	
	//SetUp lifelines
	clearAllLifeLines();
	for (i = 1; i <= lifeLineCounter; i++) {
		catchRoot.runTime_mc.gameScreen["heart"+i].alpha = 1;
	}
	
	//Show Question before droping alphabets
	catchRoot.runTime_mc.gameScreen.startQuestion.qnumtxt.text = "Q: " + (qNum + 1) + " of " + totalQuestions;
	catchRoot.runTime_mc.gameScreen.startQuestion.txt1.text=questionDisplayString;
	catchRoot.runTime_mc.gameScreen.startQuestion.visible = true;
	catchRoot.runTime_mc.gameScreen.startQuestion.alpha= 1;
	
	//Show Question for 3 seconds
	clearInterval(moveCartid);//Disable jkey board focus on cart
	activateCart = false;// Disable accelerometer features on the cart 
	var startshowQuestionid = setInterval(startfadeQuestionOut, 3000);
	function startfadeQuestionOut(){
		clearInterval(startshowQuestionid);
		var quesfadeCounter = 1
		var fadeQuestionid = setInterval(fadeQuestionOut, 30)
		function fadeQuestionOut(){
			quesfadeCounter-=0.1
			catchRoot.runTime_mc.gameScreen.startQuestion.alpha = quesfadeCounter;
			if(catchRoot.runTime_mc.gameScreen.startQuestion.alpha<=0.1){
				clearInterval(fadeQuestionid);
				
				//Alphabet drop begins
				dropSpeed1 = randRange(1, 3)
				dropSpeed2 = randRange(5, 6)
				dropSpeed3 = randRange(2, 4)
				dropSpeed4 = randRange(4, 6)
				dropSpeed5 = randRange(1, 2)
				dropSpeed6 = randRange(3, 5)
				dropSpeed7 = randRange(2, 3)
				
				moveAlphaShapeid1 = setInterval(moveDown1, 20)
				moveAlphaShapeid2 = setInterval(moveDown2, 20)
				moveAlphaShapeid3 = setInterval(moveDown3, 20)
				moveAlphaShapeid4 = setInterval(moveDown4, 20)
				moveAlphaShapeid5 = setInterval(moveDown5, 20)
				moveAlphaShapeid6 = setInterval(moveDown6, 20)
				moveAlphaShapeid7 = setInterval(moveDown7, 20)
				
				if(!isDevice.any()){
					variableSpeed = 0
					window.addEventListener("keydown", keyPressed, true);
					window.addEventListener("keyup", keyReleased, true);
					moveCartid = setInterval(moveCart, 20)
				 }else{
					 activateCart = true;
					 variableSpeed = 6
				 }
			}
		}
	}
}

function clearAllLifeLines(){
	for (i = 1; i <= 5; i++) {
		catchRoot.runTime_mc.gameScreen["heart"+i].alpha = 0;
	}	
}
	
$( window ).on( "focus", function(e){
	 if(!isDevice.any()){
		clearInterval(moveCartid);
		if(catchRoot.runTime_mc.gameScreen.visible == true){
			window.addEventListener("keydown", keyPressed, true);
			window.addEventListener("keyup", keyReleased, true);
			moveCartid = setInterval(moveCart, 10)
		}
	 }
});

function keyPressed(evt){
	var KeyID = (window.event) ? event.keyCode : evt.keyCode;

	switch(KeyID){
	// left arrow key
		case 37:
		leftArrow = true;
		break;
	
	//  right arrow key
		case 39:
		rightArrow = true;
		break;
		
	//  right arrow key
		case 32:
		spaceBar = true;
		break;
	}
}

function keyReleased(evt){
	var KeyID = (window.event) ? event.keyCode : evt.keyCode;

	switch(KeyID){
	// left arrow key
		case 37:
		leftArrow = false;
		break;
	
	//  right arrow key
		case 39:
		rightArrow = false;
		break;
		
	//  right arrow key
		case 32:
		spaceBar = false;
		break;
	}
}


function moveCart() {
	if (spaceBar) {
		speed = 10;
	} else {
		speed = 4;
	}
	if (rightArrow) {
		if (cartMc.x < 596) {
			cartMc.x += speed;
		} else {
			cartMc.x = 597;
		}
	}
	if (leftArrow) {
		if (cartMc.x > 47) {
			cartMc.x -= speed;
		} else {
			cartMc.x = 46;
		}
	}
}

//Folowing code is for Accelerometer support
// Does the gyroscope or accelerometer actually work?
function deviceMotionTest(event) {
	window.removeEventListener('devicemotion', deviceMotionTest);
	window.parent.addEventListener('devicemotion', onDeviceMotionChange, false);
	animationId = setInterval(onRenderUpdate, 10); 
}
function deviceOrientationTest(event) {
	window.removeEventListener('deviceorientation', deviceOrientationTest);
	// Listen for orientation changes
	window.parent.addEventListener('deviceorientation', onDeviceOrientationChange, false);
}

function onDeviceOrientationChange(event) {
	lastOrientation.gamma = event.gamma;
	lastOrientation.beta = event.beta;
}

function onDeviceMotionChange(event){
	lastOrientation.gamma = event.accelerationIncludingGravity.x;  
    lastOrientation.beta = event.accelerationIncludingGravity.y;
}

var acceleroSpeed = 2
function onRenderUpdate(event) {
	var xDelta, yDelta;
	var moveSpeed;
	switch (window.parent.orientation) {
		case 0:
			moveSpeed = lastOrientation.gamma*acceleroSpeed
			xDelta = moveSpeed;
			break;
		case 180:
			moveSpeed = (lastOrientation.gamma * -1)*acceleroSpeed
			xDelta = moveSpeed;
			break;
		case 90:
			moveSpeed = lastOrientation.beta*acceleroSpeed
			xDelta = moveSpeed;
			break;
		case -90:
			moveSpeed = (lastOrientation.beta * -1)*acceleroSpeed
			xDelta = moveSpeed;
			break;
		default:
			moveSpeed = lastOrientation.gamma*acceleroSpeed
			xDelta = moveSpeed;
	}
	moveAcceleratCart(Number(xDelta), Number(yDelta));
}
function moveAcceleratCart(xDelta, yDelta) {
	if(xDelta && activateCart){
		cartMc.x += (xDelta);
		if(cartMc.x<47){
			cartMc.x=47
		}
		if(cartMc.x>596){
			cartMc.x=596
		}
		catchStage.update();
	}
}


var fadecartAlnumId;
var ansCalCounter = 0
var assurance =0
var setQuestionComplete =  false;

var lifelineCounterId;

function moveDown1() {
	validateAnswers(1)
}
function moveDown2() {
	validateAnswers(2)
}
function moveDown3() {
	validateAnswers(3)
}
function moveDown4() {
	validateAnswers(4)
}
function moveDown5() {
	validateAnswers(5)
}
function moveDown6() {
	validateAnswers(6)
}
function moveDown7() {
	validateAnswers(7)
}

var pauseCatch = false;
var cartFadeComplete = true;
var lifelinefadeCounter = 1;

function validateAnswers(VarId){
	var tempMovie = catchRoot.runTime_mc.gameScreen["alnum"+VarId]
	tempMovie.y += (this["dropSpeed"+VarId]+variableSpeed);
	if(!setQuestionComplete && !pauseCatch){
		if(tempMovie.x >= (cartMc.x-40) && tempMovie.x <= (cartMc.x+40)){
			if(tempMovie.y >= (cartMc.y-40) && tempMovie.y <= cartMc.y){
				var ansMatch = false;
				var caughtChar = String(tempMovie.txt.text).toLowerCase();
				this["dropSpeed"+VarId] = randRange(speedRangeVal1, speedRangeVal2)
				tempMovie.y = yValArray[0];
				ansCalCounter++;
				
				//Show cart anim
				cartMc.mc.txt.text = tempMovie.txt.text;
				cartMc.mc.alpha = 1;
				var beginfadecartAlnumId = setInterval(beginfadecartAlnum, 100)
				function beginfadecartAlnum(){
					clearInterval(beginfadecartAlnumId);
					clearInterval(fadecartAlnumId);
					fadecartAlnumId = setInterval(fadecartAlnum, 30)
				}
				
				//Validating answer
				for (k = 0; k < mainCharListLength; k++) {
					var getCharBox = catchRoot.runTime_mc.gameScreen.getChildByName("ansCharBox" + k);
					var tempCharString = String(getCharBox.txt.text).toLowerCase();
					if (caughtChar == tempCharString) {
						if (getCharBox.txt.visible == false) {
							getCharBox.txt.visible = true;
							getCharBox.base.gotoAndStop(1)
						}
					}
				}
				var ansFound = false;
				var charFound;
				for (j = 0; j < charList.length; j++) {
					var matchChar = String(charList[j]).toLowerCase();
					if (caughtChar == matchChar) {
						ansFound = true;
						charFound = j;
						break;
					}
				}
				if (ansFound) {
					//console.log("correct answer")
					resetArray(charList[charFound])
					ansMatch = true;
				}else{
					//console.log("incorrect answer")
					//liferline Checks
					pauseCatch = true;
					clearInterval(lifelineCounterId);
					lifelinefadeCounter = 1
					lifelineCounterId = setInterval(fadeLifeLine, 30)
					var templifeLineCounter = lifeLineCounter;
					function fadeLifeLine(){
						lifelinefadeCounter-=0.1
						catchRoot.runTime_mc.gameScreen["heart"+templifeLineCounter].alpha = lifelinefadeCounter;
						if(catchRoot.runTime_mc.gameScreen["heart"+templifeLineCounter].alpha<=0.1){
							pauseCatch = false;
							catchRoot.runTime_mc.gameScreen["heart"+templifeLineCounter].alpha=0.1;
							clearInterval(lifelineCounterId);
						}
					}
					lifeLineCounter--;
					if (lifeLineCounter == 0) {
						charList = [];
						setQuestionComplete =  true;
						questionPassed = false;
						showMissedChars();
						setQuestionCompleteFunc();
						clearInterval(this["moveAlphaShapeid"+VarId]);
					} else if (lifeLineCounter <= 2) {
						showDistress(lifeLineCounter);
					}
				}
				if(!setQuestionComplete){
					if (charList.length > 0) {
						if (ansCalCounter >= 2) {
							ansCalCounter = 0;
							if (assurance >= (charList.length - 1)) {
								assurance = 0
							} else {
								assurance++;
							}
							tempMovie.txt.text = charList[assurance];
						} else {
							if (quesType == "word") {
								tempMovie.txt.text = alphaMixList[randRange(0, (alphaMixList.length - 1))]
							} else {
								tempMovie.txt.text = numMixList[randRange(0, (numMixList.length - 1))]
							}
						}
					}else{
						setQuestionComplete =  true;
						questionPassed = true;
						setQuestionCompleteFunc();
						clearInterval(this["moveAlphaShapeid"+VarId])
					}
				}
			}
		}
	}
	if(tempMovie.y >=500){
		if (charList.length > 0) {
			if (ansCalCounter >= 2) {
				ansCalCounter = 0;
				if (assurance >= (charList.length - 1)) {
					assurance = 0
				} else {
					assurance++;
				}
				tempMovie.txt.text = charList[assurance];
			} else {
				if (quesType == "word") {
					tempMovie.txt.text = alphaMixList[randRange(0, (alphaMixList.length - 1))]
				} else {
					tempMovie.txt.text = numMixList[randRange(0, (numMixList.length - 1))]
				}
			}
		}else{
			if(!setQuestionComplete){
				questionPassed = false;
				setQuestionComplete =  true;
				setQuestionCompleteFunc();
			}
			clearInterval(this["moveAlphaShapeid"+VarId])
		}
		this["dropSpeed"+VarId] = randRange(speedRangeVal1, speedRangeVal2)
		tempMovie.y = yValArray[0];
		ansCalCounter++;
	}
	
}

var fadealpcounter = 1;
var myInterval
function fadeOuAlphaNums() {
	myInterval = setInterval(fadeoutnums, 30);
}
function fadeoutnums() {
	fadealpcounter -= 0.2
	if (fadealpcounter <= 0) {
		clearInterval(myInterval);
	} else {
		for (i= 1; i <= 7; i++) {
			 catchRoot.runTime_mc.gameScreen["alnum" + i].alpha = fadealpcounter;
		}
	}
}

var fadeCounter = 1
function fadecartAlnum(){
	fadeCounter-=0.2
	cartMc.mc.alpha = fadeCounter;
	if(fadeCounter<=0){
		clearInterval(fadecartAlnumId);
		fadeCounter=1
	}
}

function showMissedChars(){
	for (k = 0; k < mainCharListLength; k++) {
		var getCharBox = catchRoot.runTime_mc.gameScreen.getChildByName("ansCharBox" + k);
		if (getCharBox.txt.visible == false) {
			getCharBox.txt.visible = true;
			getCharBox.base.gotoAndStop(2)
		}
	}
}

function setQuestionCompleteFunc(){
	clearAllLifelines();
	if(catchRoot.runTime_mc.gameScreen.nextQuestion.visible ==  false){
		catchRoot.runTime_mc.gameScreen.nextQuestion.visible =true;
		gameOverCheck = questionPassed;
		if(questionPassed){
			//questionPassed = false;
			updateScore();
			catchRoot.runTime_mc.gameScreen.nextQuestion.crctmc.visible =true;
			catchRoot.runTime_mc.gameScreen.nextQuestion.wrngmc.visible =false;
		}else{
			//questionPassed = true;
			catchRoot.runTime_mc.gameScreen.nextQuestion.crctmc.visible =false;
			catchRoot.runTime_mc.gameScreen.nextQuestion.wrngmc.visible =true;
		}
	}
	fadealpcounter = 1;
	fadeOuAlphaNums();
}

function showDistress(varStat) {
	var i;
	var j;
	for (j = 1; j <= 5; j++) {
		catchRoot.runTime_mc.gameScreen["heart" + j].heart.base.gotoAndStop(0);
		catchRoot.runTime_mc.gameScreen["heart" + j].heart.base_1.gotoAndStop(0);
	}
	for (i = 1; i <= varStat; i++) {
		catchRoot.runTime_mc.gameScreen["heart" + i].heart.base.gotoAndStop(1);
		catchRoot.runTime_mc.gameScreen["heart" + i].heart.base_1.play();
	}
}

function clearAllLifelines(){
	for (j = 1; j <= 5; j++) {
		catchRoot.runTime_mc.gameScreen["heart" + j].heart.base.gotoAndStop(0);
		catchRoot.runTime_mc.gameScreen["heart" + j].heart.base_1.gotoAndStop(0);
	}
}
function enableAllLifelines(){
	for (j = 1; j <= 5; j++) {
		catchRoot.runTime_mc.gameScreen["heart" + j].heart.base.gotoAndStop(0);
		catchRoot.runTime_mc.gameScreen["heart" + j].heart.base_1.gotoAndStop(0);
		catchRoot.runTime_mc.gameScreen["heart" + j].alpha =1;
	}
}

function resetArray(varStat) {
	var i;
	var varStatToLower = String(varStat).toLowerCase();
	for (i = 0; i < charList.length; i++) {
		var tempToLower = String(charList[i]).toLowerCase();
		if (varStatToLower == tempToLower) {
			charList.splice(i, 1);
			resetArray(varStat);
			return;
		}
	}
}

function createAlphabetSet(varString) {
	var wordArray = varString.split(" ");
	var combinedArray = new Array();
	var wordCount = new Array();

	//Remove extra spaces
	function removeExtraSpaces() {
		for (var j = 0; j < wordArray.length; j++) {
			if (wordArray[j].length == 0) {
				wordArray.splice(j, 1)
				removeExtraSpaces();
			}
		}
	}
	removeExtraSpaces();

	//Extract all words
	for (var i = 0; i < wordArray.length; i++) {
		var wordAlphabetsArray = new Array();
		wordAlphabetsArray = wordArray[i].split("");
		wordCount.push(wordAlphabetsArray);
	}
	combinedArray.push(wordArray, wordCount);

	//Extract Alphabets for each word
	return combinedArray;
}

function createEquationSet(varString) {
	var equationArray = new Array();
	var numbersArray = new Array();
	var symbolArray = new Array();
	var combinedArray = new Array();
	var extractedNumber = "";
	var arr = new Array();

	//Remove all spaces from the equation
	var space = new RegExp(/\s/g);
	var string = varString.replace(space, "");
	var stringArray = string.split("");

	//Extract Numbers and symbols separately
	for (var i = 0; i < stringArray.length; i++) {
		var char = parseInt(stringArray[i]);
		if (!isNaN(char)) {
			//extractedNumber += stringArray[i];
			numbersArray.push(i);
		} else {
			symbolArray.push(i)
			//combinedArray.push(stringArray[i]);
			/*if (extractedNumber) {
				numbersArray.push(i);
				combinedArray.push(parseInt(extractedNumber));
				extractedNumber = "";
			}*/
		}
	}
	equationArray.push(numbersArray, symbolArray, stringArray)

	return equationArray;
}

function setnotdonemode() {
	//Hide EventThing
}

function startGame() {
	FastClick.attach(document.body);
}

var instClickCount = 0;


function showFeedBack(varStat) {
	catchRoot.runTime_mc.endScreen.crctFeedback.visible = false;
	catchRoot.runTime_mc.endScreen.wrngFeedback.visible = true;
	
	catchRoot.runTime_mc.endScreen.yourScore.visible = true;
	catchRoot.runTime_mc.endScreen.finalScore.visible = true;
	
	catchRoot.runTime_mc.endScreen.visible = true;
}

function setReviewMode(varStat) {

}

function updateScore() {
	currentScore = currentScore+scoreForThisQuest;
	catchRoot.runTime_mc.gameScreen.scoreMc.score.text = currentScore + "/" + totalScore;
};

function handleMouseOver(evt) {
	catchCanvas.style.cursor = "pointer";
}

function handleMouseOut(evt) {
	catchCanvas.style.cursor = "default";
}


function setSuccess() {
	var lInteractiveWidgetHandle = lcap.CPMovieHandle.getInteractiveWidgetHandle();
	lInteractiveWidgetHandle.setSuccess(true);
}

function setFailure() {
	var lInteractiveWidgetHandle = lcap.CPMovieHandle.getInteractiveWidgetHandle();
	lInteractiveWidgetHandle.setSuccess(false);
}

//Function for randomizing
var ranCardNum;
function getRandNumInRange(startNum, EndNum, MaxOut, pushToArray) {
	if (pushToArray.length == 0) {
		ranCardNum = randRange(startNum, EndNum);
		pushToArray.push(ranCardNum);
		getRandNumInRange(startNum, EndNum, MaxOut, pushToArray);
	} else {
		ranCount = 0;
		ranCardNum = randRange(startNum, EndNum);
		if (pushToArray.length < MaxOut) {
			for (i = 0; i < pushToArray.length; i++) {
				if (ranCardNum == pushToArray[i]) {
					ranCount++;
				}
			}
			if (ranCount == 0) {
				pushToArray.push(ranCardNum);
			}
			getRandNumInRange(startNum, EndNum, MaxOut, pushToArray);
		}
	}
	return pushToArray;
}


//Randomizeize within a range of numbers
function randRange(minNum, maxNum) {
	var randNum = Math.floor(Math.random() * (maxNum - minNum)) + minNum;
	return randNum;
}