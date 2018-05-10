


//holder arrays
var nodeLeftProperty;
var textArray = [];
var buttonArray = [];
var imageIDArray = [];
var soundIDArray = [];
var imageArray = [];
var soundArray = [];
var buttonXArray= [];
var picAlignArray=[];
var color;
var face;
var style;
var size;
var align;
var contentStyles = new Object();
var buttonStyles = new Object();
var headerStyles = new Object();
var instStyles = new Object();
var generalStyles = new Object();
var width
var height
var handle
pyramidstackUse1 = {
	onLoad: function()
	{
		if ( ! this.captivate )
			return;
		
				handle = this.captivate.CPMovieHandle;
		if(handle.isWidgetVisible() == true)
		{

		this.movieProps = this.captivate.CPMovieHandle.getMovieProps();
		if ( ! this.movieProps )
			return;
		this.varHandle = this.movieProps.variablesHandle;
		this.eventDisp = this.movieProps.eventDispatcher;
		this.xmlStr = this.captivate.CPMovieHandle.widgetParams();
		var size = this.OpenAjax.getSize();
		width = size.width;
		height = size.height;
		this.internalImage = '';
		this.externalImage = '';
		this.instructions = '';
		this.buttonLabel = '';
		this.buttonContent = '';
		this.soundName = '';
		this.title = '';
		this.directions = '';
		this.currentTheme
		this.updateData();
		this.doUpdate(); 
		/*if (this.captivate.CPMovieHandle.pauseMovie ) {
			setTimeout("parent.cp.movie.pause(parent.cp.ReasonForPause.INTERACTIVE_ITEM)",100);
		}*/
		
		}
	},

	updateData: function()
	{
		var id = 0;
		var initresult = jQuery.parseXML( this.xmlStr );
		var initresultDoc = jQuery( initresult );
		var thexml = initresultDoc.find( 'string' ).text(); 
		
		//Few lines of code added to cater to additions made fro theme colors and to retain the old XML structure 
		var tempStringStartLoc = thexml.indexOf("<");
		var tempStringEndLoc = thexml.lastIndexOf(">")+1;
		thexml = thexml.substring(tempStringStartLoc, tempStringEndLoc) 
		
		var result = jQuery.parseXML( thexml );
		var resultDoc = jQuery( result );
		//alert(jQuery.isXMLDoc(resultDoc));
		
		var theButtons = resultDoc.find( 'buttons' ); 
		var theTextProps = resultDoc.find( 'textProperties' );
		var theContentProps = resultDoc.find( 'buttonContent' );
		var theButtonProps = resultDoc.find( 'buttonLabel' );
		var theHeaderProps = resultDoc.find( 'headerTitle' );
		var theInstProps = resultDoc.find( 'headerInst' );
		currentTheme = theTextProps.children('general').attr("themeNum");
		
		//setup styles
		contentStyles.color = theContentProps.children('color').attr("textColor");
		contentStyles.face = theContentProps.children('font').attr("face");
		contentStyles.italic = theContentProps.children('textDecoration').attr("italic");
		contentStyles.bold = theContentProps.children('textDecoration').attr("bold");
		contentStyles.size = theContentProps.children('font').attr("size");
		contentStyles.align = theContentProps.children('font').attr("align");
		
		buttonStyles.color = theButtonProps.children('color').attr("textColor");
		buttonStyles.face = theButtonProps.children('font').attr("face");
		buttonStyles.italic = theButtonProps.children('textDecoration').attr("italic");
		buttonStyles.bold = theButtonProps.children('textDecoration').attr("bold");
		buttonStyles.size = theButtonProps.children('font').attr("size");
		buttonStyles.align = theButtonProps.children('font').attr("align");		
		
		headerStyles.color = theHeaderProps.children('color').attr("textColor");
		headerStyles.face = theHeaderProps.children('font').attr("face");
		headerStyles.italic = theHeaderProps.children('textDecoration').attr("italic");
		headerStyles.bold = theHeaderProps.children('textDecoration').attr("bold");
		headerStyles.size = theHeaderProps.children('font').attr("size");
		headerStyles.align = theHeaderProps.children('font').attr("align");		
		
		instStyles.color = theInstProps.children('color').attr("textColor");
		instStyles.face = theInstProps.children('font').attr("face");
		instStyles.italic = theInstProps.children('textDecoration').attr("italic");
		instStyles.bold = theInstProps.children('textDecoration').attr("bold");
		instStyles.size = theInstProps.children('font').attr("size");
		instStyles.align = theInstProps.children('font').attr("align");				

		generalStyles.headerActive = theTextProps.children('general').attr("headerActive");
		//generalStyles.arrowColor = theTextProps.children('general').attr("arrowColor");
		generalStyles.headerColor = theTextProps.children('general').attr("headerColor");
		generalStyles.contentBodyColor = theTextProps.children('general').attr("contentBodyColor");
		generalStyles.bodyColor = theTextProps.children('general').attr("bodyColor");
		generalStyles.btnColorUp = theTextProps.children('general').attr("btnColorUp");
		generalStyles.btnColorOver = theTextProps.children('general').attr("btnColorOver");
		generalStyles.btnColorDown = theTextProps.children('general').attr("btnColorDown");
		
		var that = this;
		//headerActive, arrowColor, headerColor, contentBodyColor, bodyColor, btnColorUp, btnColorDown, btnColorOver, 
		//loop through each button node
		theButtons.children('button').each(function(index) {
			textArray.push(cleanIt(jQuery( this ).children('text').text()));	
			buttonArray.push( cleanIt(jQuery( this ).children('buttonContent').text()));	
			imageIDArray.push(that.grabAssetId(jQuery( this ).children('image')));	//grab image id
			soundIDArray.push(that.grabAssetId(jQuery( this ).children('sound')));	//grab sound id		
			buttonXArray.push(jQuery( this ).children('buttonLocX').text());	
			picAlignArray.push(jQuery( this ).children('buttonContent').attr("picAlign"));			
		});
		//access other items on the stage
		this.title = resultDoc.find( 'general' ).attr("titleText");
		this.instructions = resultDoc.find( 'general' ).attr("instructionsText");
		
		///access audio and images
		
		for (num=0; num < imageIDArray.length; num++) {
			//first check images
			id = imageIDArray[num];	
			if (id != -1) { 
				imageArray[num] = this.movieProps.ExternalResourceLoader.getResourcePath( id )
				imageArray[num] = imageArray[num].replace("index.html", "");
			} else {
				imageArray[num] = -1;
			}
			//then check sound
			id = soundIDArray[num];	
			if (id != -1) { 
				soundArray[num] = this.movieProps.ExternalResourceLoader.getResourcePath( id )
		   		soundArray[num] = soundArray[num].replace("index.html", "");
			} else {
				soundArray[num] = -1;
			}
			
		}
	},
	
	grabAssetId: function(jqueryXMLNode)
	{
		var id = jqueryXMLNode.attr("id");
		if(id == -1)
			return -1;
		var nodeValue = jqueryXMLNode.text();	
		if(nodeValue == "")
			return parseInt(id);				//For captivate
		return nodeValue;						//For presenter
	},	
	
	doUpdate: function() 
	{
		//init the default html values
		//var divHtmlHeader = "<div class='header'><a>aaaa this button to see the response in the drop down box.</a></div>";
		//var divHtmlContent = "<div class='content'>aaaa job! That was easy, wasn't it?</div>";
		
		var tabHtmlHeader = "<li style='width: percent;'><a href='#placeholder'>Button Label JQuery</a></li>";
		var tabHtmlContent = "<div id='placeholder' class='tab_content' style='display: block;'><p>Testing JQuery</p></div>";


		//init the other elements on the page		
		var elem = document.getElementById('intTitle');
		elem.innerHTML = this.title;
		elem = document.getElementById('intInstructions');
		elem.innerHTML = this.instructions;
				
				
				
		var button_elem;
		var body;
		var tabCount = textArray.length;
		var header
		//600, 14, 4
		var tabWidthPercentage
		if (tabCount == 2) {
			tabWidthPercentage = 560 / tabCount;
		} else if (tabCount == 3) {
			tabWidthPercentage = 530 / tabCount;
		} else if (tabCount == 4) {
			tabWidthPercentage = 510 / tabCount;
		}
		if (currentTheme == 3) { tabWidthPercentage = 100 } 
		//(1 / tabCount * 100) - 2;
		if (currentTheme == 2) { tabWidthPercentage -= 5 } 
		
		//	for (var i = 0; i < nodeCount; i++) {
		//$("#Timeline_Container").append("<div id='" + i + "' class='timelineNode' style='left: " + nodeLeftProperty[i] + "'>" + timelineLabel[i] + "</div>");
	
	//tabs_container
	//--> .timlineNode or id 1
	//--> id=tab1, .tab_content
	var theX;
	var theY;
	var leftPos;
	var bright;
	var bbottom;
	//var thewidth = [200, ];
	var thex = [];
	//textArray.length
		//alert(tabWidthPercentage);
		jQuery.each(textArray, function(index, value) {
			button_elem = document.getElementById('overs');
			
			theX = pwidth/textArray.length - (10 * index);
			theY = pheight/textArray.length * index + 142;
			theWidth = 190 + (index * 55);// + theX;
			//alert(theX);
			if (textArray.length == 4) {
				bright = 47;
				bbottom = 68;
				theY +=3;
				theX -= 14 - (index*10);
				theWidth = 190 + (index * 45);
			} else if (textArray.length == 5) {
				bright = 34;
				bbottom = 54;
				theY +=3;
				theX -= 5 - (index * 10);
				theWidth -= (index * 20);
				
				
			}else if (textArray.length == 6) {
				bright = 27;
				bbottom = 44;
				theY +=3;
				theX -= 0 - (index * 10);
				theWidth = 190+ (index * 30);
				
			}else if (textArray.length == 2) {
				bright = 84;
				bbottom = 138;
				theY += 3;
				theX -= 58 - (index*10);
				theWidth = 200 + (index * 85);// + theX;
			}else if (textArray.length == 3) {
				bright = 62;
				bbottom = 91;
				theY += 3;
				theX -= 29 - (index*10);
				theWidth = 185 + (index * 60);// + theX;
			}
			
			if (generalStyles.headerActive == 2) {
				//ypos -= 90;
				theY -= 90;
			}
	
	
		  		button_elem.innerHTML += "<div class='theover title' style='display:none;width:" + theWidth + "px; border-right:" + bright + "px solid transparent;border-bottom:" + bbottom + "px solid " + formatColor(generalStyles.btnColorDown)  + ";position:absolute;top:" + theY + "px;left:" + theX + "px;' id='over" + (index+1) + "'></div>"
				
				button_elem.innerHTML += "<div class='theovertext title' style='display:none;width:" + theWidth + "px; height:" + bbottom + "px; position:absolute;top:" + (theY) + "px;left:" + theX + "px;' id='overtext" + (index+1) + "'>" + textArray[index] + "</div>"
				
				
			button_elem = document.getElementById('textBox');
		
			//check if image exists
			if (imageArray[index] == "-1") { 
				button_elem.innerHTML += "<div id='tab" + index + "' class='tab_content'>" + buttonArray[index] + "</div>";				
		   } else {  
				button_elem.innerHTML += "<div id='tab" + index + "' class='tab_content' style='height: 100px; display: none;'><img width='150' align='" + picAlignArray[index] + "' height='100' src='" + imageArray[index] + "'/>" + buttonArray[index] + "</div> ";
			
		   }
 		 });
		 
		changeTheme("themes/pyramidstackTheme" + currentTheme + ".css", "themes/headerTheme" + currentTheme + ".css" );
		setupCustomStyles();
		setupStyle("#intTitle", headerStyles)
		setupStyle("#intInstructions", instStyles)
		setupStyle(".tab_content", contentStyles)
		setupStyle(".theovertext", buttonStyles)
		//setupStyle(".tab_content", contentStyles)
		
		resizeInteraction(width,height);
		addClickHandlers(); //setup the click handlers
		repositionPyramid();
		initPyramid(textArray.length);
	}
};

pyramidstack_use = function ()
{
	return pyramidstackUse1;
}

