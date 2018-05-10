(function (lib, img, cjs) {

var p; // shortcut to reference prototypes

// library properties:
lib.properties = {
	width: 640,
	height: 480,
	fps: 24,
	color: "#FFFFFF",
};

// stage content:
(lib.runtime = function() {
	
	this.initialize();

	// Layer 1
	this.runTime_mc = new lib.runtime_mc();
	this.runTime_mc.setTransform(405,243.6,1,1,0,0,0,405,243.6);
	
	this.border = new lib.border();

	this.addChild(this.runTime_mc,this.border);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-168.1,56.6,1308.8,665.4);


(lib.YourScreruntime = function() {
	this.initialize();

	// Layer 1
	this.yourScoreInpt = new cjs.Text(gameYourScoreTxt, "bold 30px 'Tahoma'", gameYourScoreTxtColor);
	this.yourScoreInpt.name = "yourScoreInpt";
	this.yourScoreInpt.textAlign = "center";
	this.yourScoreInpt.lineHeight = 48;
	this.yourScoreInpt.lineWidth = 589;
	this.yourScoreInpt.setTransform(294.5,0);

	this.addChild(this.yourScoreInpt);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,593,58.3);


(lib.Tween16 = function() {
	this.initialize();

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f(gameLifeLineColor).s().p("AAABsIAAgBQgogogggcIgggdIgEgDQgVgSAAgcQAAgcAVgUQAUgUAeAAQAdAAAUAUIAJALIAAABIAAgBIAAABIAAAAIAAAAIAKgMQAUgTAdAAQAeAAAUATQAVAUAAAcQAAAcgVATIgEADIggAdQggAcgpAoIAAAAg");
	this.shape.setTransform(0.4,-2);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-12.6,-12.8,26,21.7);


(lib.topbannerBase = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f(gameTopBannerColor).s().p("EhPUASEQhFhEgihTQjMB6j9AAQl3AAkKkJQkKkKABl3QgBl1EKkJQEKkKF3AAQErAADmCrQAegoAkgkQDFjEEWAAQEWAADEDEQAtAtAiAwQCKg+ClAAQEyAADZDZIACABQApg/A4g4QDUjUEqAAQEZAADMC7IAEgDQC3i4EEAAQDpAACrCTIAagbQDqjqFKAAQDGAACkBTQBjhGCBAAQCjAAB0B0QARARAPASQCHg/CgAAQERAADGC1QAyhGA/hBQEUkSGEAAQDwAADFBpQA+hkBZhYQEpkpGkAAQGkAAEpEpIAjAkQDci1EnAAQFVAADxDxQA7A7AtBCQAQgTATgTQCwiwD5AAQD7AACwCwQCwCwgBD6QABCGg0ByIANAMIARARQAzgRA7AAQCOAABkBkQBlBigBCOQABCOhlBkQhkBkiOAAQiOAAhkhkQgggggVgkQgXADgYAAQh+AAhahZIgDgFQgPBGg2A1QhIBJhmAAQgvAAgogPQgoBIg/A/QirCrjxAAQjyAAirirQgSgTgSgUQhFAhhUAAQgjAAgggGIgXAXQiSCTjPAAQiqAAiBhiQikA8i+AAQjAAAikg9QgbBbhIBIQhyByigAAQh0AAhcg8QipBIjHAAQlOAAj5jKIgTATQhRBSh0AAQhyAAhShSQgmgmgVgtQhbAahnAAQjNAAijhmIgJAJQhRBQhvAAQhYAAhFgyQjMCXkKAAQjBAAighPQgWAogiAjQhdBdiDAAQiDAAhehdQhchdABiDIAAgBIgtABQjEAAiZhoQggArgoAoQjTDTksAAQheAAhXgVQgQBrhQBQQhkBkiOAAQiOAAhkhkQglglgYgrQiNBCipAAQjTAAimhlQhdBKhzAUQgYCIhoBnQiICIi/AAQi/AAiHiIg");

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-654.4,-129.2,1308.8,258.5);


(lib.shapeBorder_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		/* stop();*/
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(5));

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s(gameShapeBorderColor).ss(2,1,1).p("Ai6krIF1AAQBxAAAABtIAAF9QAABthxAAIl1AAQhxAAAAhtIAAl9QAAhtBxAAg");
	this.shape.setTransform(30,30);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s(gameShapeBorderColor).ss(2,1,1).p("AEsAAQAAB8hYBYQhYBYh8AAQh6AAhZhYQhYhYAAh8QAAh6BYhZQBZhYB6AAQB8AABYBYQBYBZAAB6g");
	this.shape_1.setTransform(30,30);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s(gameShapeBorderColor).ss(2,1,1).p("AAAkrIEsJXIpXAAg");
	this.shape_2.setTransform(30,30);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s(gameShapeBorderColor).ss(2,1,1).p("AEsAAIiWEsIkqAAIiXksICXkrIEqAAg");
	this.shape_3.setTransform(30,30);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s(gameShapeBorderColor).ss(2,1,1).p("ADNFJIjNiTIjKCUIBGj6IjFicID4gGIBRj3IBSD2ID4AGIjFCcg");
	this.shape_4.setTransform(30,30);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,-1,62,62);


(lib.shapeBase_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		/* stop();*/
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(5));

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f(gameShapeBaseColor).s().p("Ai5EsQhyAAAAhtIAAl9QAAhsBygBIF0AAQBxABAABsIAAF9QAABthxAAg");
	this.shape.setTransform(30,30);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f(gameShapeBaseColor).s().p("AjTDUQhXhYgBh8QABh7BXhXQBZhZB6AAQB8AABYBZQBXBXABB7QgBB8hXBYQhYBXh8ABQh6gBhZhXg");
	this.shape_1.setTransform(30,30);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f(gameShapeBaseColor).s().p("AkrEsIErpXIEsJXg");
	this.shape_2.setTransform(30,30);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f(gameShapeBaseColor).s().p("AiUEsIiXksICXkrIEqAAICWErIiWEsg");
	this.shape_3.setTransform(30,30);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f(gameShapeBaseColor).s().p("AiDBQIjFibID3gHIBRj2IBRD1ID5AGIjFCcIBHD6IjMiTIjJCUg");
	this.shape_4.setTransform(30,30);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,60,60);


(lib.scoreHolderruntime = function() {
	this.initialize();

	// Layer 1
	this.finalScoreTxt = new cjs.Text("1000", "bold 28px 'Tahoma'", gamefinalScoreTxtColor);
	this.finalScoreTxt.name = "finalScoreTxt";
	this.finalScoreTxt.textAlign = "center";
	this.finalScoreTxt.lineHeight = 37;
	this.finalScoreTxt.lineWidth = 109;
	this.finalScoreTxt.setTransform(54.5,0);

	this.addChild(this.finalScoreTxt);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,113,46.3);


(lib.score_mcruntime = function() {
	this.initialize();

	// Layer 1
	this.scoreName = new cjs.Text(gameScoreTimeText, "bold 15px 'Tahoma'",gameScoreTimeColor);
	this.scoreName.name = "scoreName";
	this.scoreName.textAlign = "right";
	this.scoreName.lineHeight = 20;
	this.scoreName.lineWidth = 162;
	this.scoreName.setTransform(98,0);

	this.score = new cjs.Text("999/999", "15px 'Tahoma'",gameScoreTimeColor);
	this.score.name = "score";
	this.score.lineHeight = 20;
	this.score.lineWidth = 58;
	this.score.setTransform(104.4,0);

	this.addChild(this.score,this.scoreName);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-64,0,230.4,22.1);


(lib.playBtnBg = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f(gamePlayBtnBaseColor).s().p("AsjFxQiNAAAAiLIAAnKQAAiNCNAAIZHAAQCNAAAACNIAAHKQAACLiNAAg");
	this.shape.setTransform(94.5,37);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,189,74);


(lib.nbdummy = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.004)").s().p("EgxzAC5QgMABAAgIIAAljQAAgHAMgBMBjmAAAQAMABAAAHIAAFjQAAAIgMgBg");
	this.shape.setTransform(320,18.6);
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(3).to({_off:false},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


(lib.instTxtMcShow = function() {
	this.initialize();

	// Layer 1
	this.instTxt = new cjs.Text("asdas", "12px 'Tahoma'", "#333333");
	this.instTxt.name = "instTxt";
	this.instTxt.lineHeight = 17;
	this.instTxt.lineWidth = 451;

	this.addChild(this.instTxt);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,455,178);


(lib.instTitleRuntime = function() {
	this.initialize();

	// Layer 1
	this.instTitle = new cjs.Text("Instructions", "bold 14px 'Tahoma'", "#333333");
	this.instTitle.name = "instTitle";
	this.instTitle.lineHeight = 16;
	this.instTitle.lineWidth = 237;

	this.addChild(this.instTitle);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,241,20.9);


(lib.instmcbase = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#003333").ss(2,1,1).p("A4UMDQgGAAAAgfIAA3HQAAgfAGAAMAwpAAAQAGAAAAAfIAAXHQAAAfgGAAg");

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["rgba(255,255,255,0.8)","rgba(255,255,255,0.298)"],[0,1],0,124.4,0,-124.3).s().p("A4UMDQgFAAgBggIAA3FQABggAFAAMAwpAAAQAGAAAAAgIAAXFQAAAggGAAg");

	this.addChild(this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-157.3,-78.1,314.6,156.2);


(lib.instBase2 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("rgba(51,51,51,0.847)").ss(1,1,1).p("EgljgPvIAAfVQAAAKAKAAMBKzAAAQAKAAAAgKIAA/V");
	this.shape.setTransform(240.5,100.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("EglZAPvQgKABAAgKIAA/VMBLHAAAIAAfVQAAAKgKgBg");
	this.shape_1.setTransform(240.5,100.8);

	this.addChild(this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-1,-1,483,203.6);


(lib.instBase1 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("rgba(51,51,51,0.847)").ss(1,1,1).p("EgljACUMBLHAAAIAAkhQAAgKgKAAMhKzAAAQgKAAAAAKIAAEhIAAAE");
	this.shape.setTransform(240.5,15.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#F3F3F3").s().p("EgljACYIAAgFMBLHAAAMhLHAAAIAAkgQAAgKAKAAMBKzAAAQAKAAAAAKIAAEgIAAAFg");
	this.shape_1.setTransform(240.5,15.2);

	this.addChild(this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-1,-1,483,32.4);


(lib.IncrctFbckMcRuntime = function() {
	this.initialize();

	// Layer 1
	this.wrngFeedbackInpt = new cjs.Text(gameWrngFeedbackTxt, "bold 30px 'Tahoma'", gameWrngFeedbackTxtColor);
	this.wrngFeedbackInpt.name = "wrngFeedbackInpt";
	this.wrngFeedbackInpt.textAlign = "center";
	this.wrngFeedbackInpt.lineHeight = 48;
	this.wrngFeedbackInpt.lineWidth = 589;
	this.wrngFeedbackInpt.setTransform(294.5,0);

	this.addChild(this.wrngFeedbackInpt);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,593,58.3);


(lib.incorrectsymbol = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF0000").s().p("AkVCJICHiKIh9iCICNiSICDCHIABABIB7iGIAEAAICRCLIAAAEIiACGICACFIiNCNIiHiLIh7CNg");

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-27.8,-27.8,55.7,55.7);


(lib.hitmc = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(66,66,66,0)").s().p("Ag6IaQgYgZAAgjIAAu7QAAgjAYgZQAZgYAhAAQAiAAAZAYQAYAZAAAjIAAO7QAAAjgYAZQgZAYgiAAQghAAgZgYg");
	this.shape.setTransform(8.4,56.2);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,16.8,112.5);


(lib.Help_btn = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.text = new cjs.Text("?", "bold 28px 'Tahoma'", "#CC0000");
	this.text.textAlign = "center";
	this.text.lineHeight = 30;
	this.text.lineWidth = 16;
	this.text.setTransform(0,-20.1);

	this.timeline.addTween(cjs.Tween.get(this.text).wait(4));

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#333333").ss(1.5,1,1).p("AB/h+QA1A1AABJQAABKg1A1Qg1A1hKAAQhJAAg1g1Qg1g1AAhKQAAhJA1g1QA1g1BJAAQBKAAA1A1g");

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("Ah+B+Qg1g0AAhKQAAhJA1g1QA1g1BJAAQBKAAA0A1QA1A1ABBJQgBBKg1A0Qg0A1hKABQhJgBg1g1g");

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#DEDEDE").s().p("Ah+B+Qg1g0AAhKQAAhJA1g1QA1g1BJAAQBKAAA0A1QA1A1ABBJQgBBKg1A0Qg0A1hKABQhJgBg1g1g");

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#CCCCCC").s().p("Ah+B+Qg1g0AAhKQAAhJA1g1QA1g1BJAAQBKAAA0A1QA1A1ABBJQgBBKg1A0Qg0A1hKABQhJgBg1g1g");

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.lf(["#EEEEEE","#999999"],[0,1],0.7,-0.9,0.7,20).s().p("Ah+B+Qg1g0AAhKQAAhJA1g1QA1g1BJAAQBKAAA0A1QA1A1ABBJQgBBKg1A0Qg0A1hKABQhJgBg1g1g");
	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_2},{t:this.shape}]},1).to({state:[{t:this.shape_3},{t:this.shape}]},1).to({state:[{t:this.shape_4},{t:this.shape}]},1).wait(1));
	// Layer 4
	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("rgba(0,0,0,0.108)").s().p("Ah+B+Qg1g0AAhKQAAhJA1g1QA1g1BJAAQBKAAA0A1QA1A1ABBJQgBBKg1A0Qg0A1hKABQhJgBg1g1g");
	this.shape_5.setTransform(5,5);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("rgba(0,0,0,0.108)").s().p("Ah+B/Qg1g1AAhKQAAhJA1g1QA1g1BJAAQBKAAA1A1QA0A1AABJQAABKg0A1Qg1A0hKAAQhJAAg1g0g");
	this.shape_6.setTransform(4.5,4.5);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("rgba(0,0,0,0.108)").s().p("Ah+B+Qg1g0ABhKQgBhJA1g1QA1g1BJABQBKgBA0A1QA2A1AABJQAABKg2A0Qg0A2hKAAQhJAAg1g2g");
	this.shape_7.setTransform(4,4);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("rgba(0,0,0,0.108)").s().p("Ah+B+Qg1g0AAhKQAAhJA1g1QA1g1BJAAQBKAAA0A1QA1A1AABJQAABKg1A0Qg0A1hKAAQhJAAg1g1g");
	this.shape_8.setTransform(3.5,3.5);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("rgba(0,0,0,0.108)").s().p("Ah+B/Qg1g1ABhKQgBhJA1g1QA1g1BJABQBKgBA1A1QA1A1AABJQAABKg1A1Qg1A1hKAAQhJAAg1g1g");
	this.shape_9.setTransform(3,3);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("rgba(0,0,0,0.108)").s().p("Ah+B+Qg0g0gBhKQABhJA0g1QA1g0BJgBQBKABA0A0QA1A1AABJQAABKg1A0Qg0A1hKAAQhJAAg1g1g");
	this.shape_10.setTransform(2.5,2.5);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("rgba(0,0,0,0.108)").s().p("Ah+B/Qg0g1AAhKQAAhJA0g1QA1g0BJAAQBKAAA1A0QA1A1AABJQAABKg1A1Qg1A1hKAAQhJAAg1g1g");
	this.shape_11.setTransform(2,2);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("rgba(0,0,0,0.108)").s().p("Ah+B+Qg0g0gBhKQABhJA0g1QA1g0BJgBQBKABA0A0QA1A1AABJQAABKg1A0Qg0A1hKAAQhJAAg1g1g");
	this.shape_12.setTransform(1.5,1.5);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("rgba(0,0,0,0.108)").s().p("Ah+B/Qg0g1AAhKQAAhJA0g1QA1g0BJAAQBKAAA1A0QA1A1AABJQAABKg1A1Qg1A1hKAAQhJAAg1g1g");
	this.shape_13.setTransform(1,1);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("rgba(0,0,0,0.108)").s().p("Ah+B+Qg1g0AAhKQAAhJA1g1QA1g1BJAAQBKAAA0A1QA1A1ABBJQgBBKg1A0Qg0A1hKABQhJgBg1g1g");
	this.shape_14.setTransform(0.5,0.5);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("rgba(0,0,0,0.108)").s().p("Ah+B+Qg1g0AAhKQAAhJA1g1QA1g1BJAAQBKAAA0A1QA1A1ABBJQgBBKg1A0Qg0A1hKABQhJgBg1g1g");
	
	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5}]}).wait(4));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-19,-20.1,38,39.1);


(lib.gameNameRuntime = function() {
	this.initialize();

	// Layer 1
	this.gameNameInpt = new cjs.Text(gameMainName, "bold 30px 'Tahoma'", gameMainNameColor);
	this.gameNameInpt.name = "gameNameInpt";
	this.gameNameInpt.textAlign = "center";
	this.gameNameInpt.lineHeight = 48;
	this.gameNameInpt.lineWidth = 589;
	this.gameNameInpt.setTransform(294.5,0);

	this.addChild(this.gameNameInpt);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,593,58.3);


(lib.dumBtn = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.498)").s().p("AsjFxQiNAAAAiLIAAnKQAAiNCNAAIZHAAQCNAAAACNIAAHKQAACLiNAAg");
	this.shape.setTransform(94.5,37);
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(3).to({_off:false},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;



(lib.crctFbckMcruntime = function() {
	this.initialize();

	// Layer 1
	this.crctFeedbackInpt = new cjs.Text(gameCrctFeedbackTxt, "bold 30px 'Tahoma'", gameCrctFeedbackTxtColor);
	this.crctFeedbackInpt.name = "crctFeedbackInpt";
	this.crctFeedbackInpt.textAlign = "center";
	this.crctFeedbackInpt.lineHeight = 48;
	this.crctFeedbackInpt.lineWidth = 589;
	this.crctFeedbackInpt.setTransform(294.5,0);

	this.addChild(this.crctFeedbackInpt);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,593,58.3);


(lib.correctSymbol = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#00CC00").s().p("AlDAxIB4iYICcB3IDXksICcB0IlOHFg");

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-32.4,-28.5,64.9,57.1);


(lib.Close = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFFF").ss(4,1,1).p("Ag0g1IA0A1IA3g3AAAAAIA4A4Ag3A1IA3g1");
	this.shape.setTransform(-0.6,-0.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#CC3300").s().p("AhyBzQgwgwAAhDQAAhCAwgwQAwgwBCAAQBDAAAwAwQAwAwAABCQAABDgwAwQgwAwhDAAQhCAAgwgwgAAAgDIA3A4Ig3g4IA3g4Ig3A4gAg2AxIA2g0gAAAgDIg0g1g");
	this.shape_1.setTransform(-0.6,0.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#FFFFFF").ss(4,1,1).p("Ag0g1IA0A1IA3g3Ag3A1IA3g1IA4A4");
	this.shape_2.setTransform(-0.6,-0.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#CC3300").s().p("AhyBzQgwgwAAhDQAAhCAwgwQAwgwBCAAQBDAAAwAwQAwAwAABCQAABDgwAwQgwAwhDAAQhCAAgwgwgAA3A1Ig3g4Ig2A0IA2g0gAAAgDIA3g4Ig3A4Ig0g1IA0A1g");
	this.shape_3.setTransform(-0.6,0.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_3},{t:this.shape_2}]},1).to({state:[{t:this.shape_1},{t:this.shape}]},1).to({state:[{t:this.shape_3},{t:this.shape_2}]},1).wait(1));
	
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("rgba(0,0,0,0.108)").s().p("AhyBzQgwgwAAhDQAAhCAwgwQAwgwBCAAQBDAAAwAwQAwAwAABCQAABDgwAwQgwAwhDAAQhCAAgwgwg");
	this.shape_2.setTransform(4.4,5.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("rgba(0,0,0,0.108)").s().p("AhzBzQgvgwAAhDQAAhCAvgxQAxgvBCAAQBDAAAvAvQAxAxAABCQAABDgxAwQgvAwhDAAQhCAAgxgwg");
	this.shape_3.setTransform(3.9,4.8);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("rgba(0,0,0,0.108)").s().p("AhyByQgwgvAAhDQAAhCAwgwQAwgwBCAAQBDAAAvAwQAxAwAABCQAABDgxAvQgvAxhDAAQhCAAgwgxg");
	this.shape_4.setTransform(3.4,4.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("rgba(0,0,0,0.108)").s().p("AhzBzQgvgwAAhDQAAhCAvgxQAxgvBCAAQBDAAAwAvQAwAxAABCQAABDgwAwQgwAwhDAAQhCAAgxgwg");
	this.shape_5.setTransform(2.9,3.8);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("rgba(0,0,0,0.108)").s().p("AhyByQgwgvAAhDQAAhCAwgwQAwgwBCAAQBDAAAvAwQAxAwAABCQAABDgxAvQgvAxhDAAQhCAAgwgxg");
	this.shape_6.setTransform(2.4,3.3);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("rgba(0,0,0,0.108)").s().p("AhzBzQgvgwAAhDQAAhCAvgxQAxgvBCAAQBDAAAwAvQAwAxAABCQAABDgwAwQgwAwhDAAQhCAAgxgwg");
	this.shape_7.setTransform(1.9,2.8);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("rgba(0,0,0,0.108)").s().p("AhyByQgwgvAAhDQAAhCAwgwQAwgwBCAAQBDAAAvAwQAxAwAABCQAABDgxAvQgvAxhDAAQhCAAgwgxg");
	this.shape_8.setTransform(1.4,2.3);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("rgba(0,0,0,0.108)").s().p("AhzBzQgvgwAAhDQAAhCAvgxQAxgvBCAAQBDAAAwAvQAwAxAABCQAABDgwAwQgwAwhDAAQhCAAgxgwg");
	this.shape_9.setTransform(0.9,1.8);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("rgba(0,0,0,0.108)").s().p("AhzByQgvgvAAhDQAAhCAvgxQAxgvBCAAQBDAAAvAvQAxAxAABCQAABDgxAvQgvAxhDAAQhCAAgxgxg");
	this.shape_10.setTransform(0.4,1.3);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("rgba(0,0,0,0.108)").s().p("AhyBzQgwgwAAhDQAAhCAwgwQAwgwBCAAQBDAAAwAwQAwAwAABCQAABDgwAwQgwAwhDAAQhCAAgwgwg");
	this.shape_11.setTransform(-0.1,0.8);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("rgba(0,0,0,0.108)").s().p("AhzBzQgvgwAAhDQAAhCAvgxQAxgvBCAAQBDAAAwAvQAwAxAABCQAABDgwAwQgwAwhDAAQhCAAgxgwg");
	this.shape_12.setTransform(-0.6,0.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2}]}).wait(4));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-17,-16.1,32.7,32.7);


(lib.cartbase = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f(gameCartColor).s().p("AkfC6IickEQgvgMgBgPIAAgoQABgMAWgIQAhgPBYgMQCRgTDKAAQDMAACQATQBYAMAiAPQAVAIABAMIAAAnQAAAQguAMIidEEQiUAWiOAAQiRAAiNgWg");
	this.shape.setTransform(48.6,20);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f(gameCartColor).s().p("AhZBYQgjgjgBg1QABgyAjgmQAfgeApgFIALgCIAGAAQAzAAAmAlIADAEIABABQAgAjAAAwQABA1glAjQgmAmgzAAQgzAAgmgmg");
	this.shape_1.setTransform(22.5,56.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f(gameCartColor).s().p("AhZBYQgjgkAAg0QAAgxAigkIAAgBIABgBQAmgmAzAAIAJABIAOABQAlAIAdAcQAkAkAAAzQAAA0gkAkQglAmg0AAQgzAAgmgmg");
	this.shape_2.setTransform(74.7,56.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f(gameCartColor).s().p("AjEBYQgmgmg1AAIgHABIANgRIAVgSQAQgQARgMIAPgMQBdhDB3ABQB4gBBcBDIAKAIQAUAPATARQAJAJAKAHIAQATIgKgBQg2AAgmAmIgCACIgLgNQhLhLhqAAQhpAAhLBLIgNAOIgDgDg");
	this.shape_3.setTransform(48.9,41.2);

	this.addChild(this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-0.6,-0.9,98.4,70.1);


(lib.bgBase = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f(gameMainBgColor).s().p("Egx/AgpMAAAhBRMBj+AAAMAAABBRg");
	this.shape.setTransform(320,209);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,640,418);


(lib.basemc = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f(gameBottomBannerColor).s().p("Egx/AEUIAAonMBj/AAAIAAIng");

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-320,-27.6,640,55.4);


(lib.topBannerMc = function() {
	this.initialize();

	// Layer 1 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("EgxUAH4QgqAAgBgKIAAvbQABgKAqAAMBipAAAQAqAAAAAKIAAPbQAAAKgqAAg");
	mask.setTransform(320,50.4);

	// Layer 3
	this.base = new lib.topbannerBase();
	this.base.setTransform(166.3,-17.5);

	this.base.mask = mask;

	this.addChild(this.base);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-278,-132.6,1065.7,273.7);


(lib.shape_mc = function() {
	this.initialize();

	// borders
	this.bordermc = new lib.shapeBorder_mc();
	this.bordermc.setTransform(33,33,1,1,0,0,0,30,30);

	// shapes
	this.shapemc = new lib.shapeBase_mc();
	this.shapemc.setTransform(33,33,1,1,0,0,0,30,30);

	this.addChild(this.shapemc,this.bordermc);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-1,-1,68,68);


(lib.runtimestartQuestion = function() {
	this.initialize();

	// Layer 4
	this.qnumtxt = new cjs.Text("Q: 1 of 10", "bold 15px 'Tahoma'",gameStartQuestionTextColor);
	this.qnumtxt.name = "qnumtxt";
	this.qnumtxt.textAlign = "center";
	this.qnumtxt.lineHeight = 17;
	this.qnumtxt.lineWidth = 298;
	this.qnumtxt.setTransform(157,4.1);

	this.txt1 = new cjs.Text("Question will be displayed here?\n", "bold 15px 'Tahoma'",gameStartQuestionTextColor);
	this.txt1.name = "txt1";
	this.txt1.textAlign = "center";
	this.txt1.lineHeight = 17;
	this.txt1.lineWidth = 460;
	this.txt1.setTransform(157,33.5);

	// Layer 3
	this.base = new lib.instmcbase();
	this.base.setTransform(156.3,77.1);
	this.base.alpha = 0;

	this.addChild(this.base,this.txt1,this.qnumtxt);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-73,-1,464,156.2);


(lib.PlayNow_btnruntim = function() {
	this.initialize();

	// Layer 4
	this.btn = new lib.dumBtn();
	this.btn.setTransform(0,0,1,1,0,0,0,94.5,37);
	new cjs.ButtonHelper(this.btn, 0, 1, 2, false, new lib.dumBtn(), 3);

	// Layer 2
	this.txt = new cjs.Text(gamePlayBtnText, "25px 'Tahoma'", gamePlayBtnTextColor);
	this.txt.name = "txt";
	this.txt.textAlign = "center";
	this.txt.lineHeight = 32;
	this.txt.lineWidth = 168;
	this.txt.setTransform(-2,-20.1);

	// Layer 6
	this.bg = new lib.playBtnBg();
	this.bg.setTransform(-0.3,0,1,1,0,0,0,94.5,37);

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#003366").ss(3,0,1).p("AMllxI5JAAQiMAAAACMIAAHLQAACMCMAAIZJAAQCMAAAAiMIAAnLQAAiMiMAAg");

	// Layer 5
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(255,255,255,0.298)").s().p("AsjFxQiNAAAAiLIAAnLQAAiLCNAAIZHAAQCNAAAACLIAAHLQAACLiNAAg");

	// Layer 7
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("rgba(0,0,0,0.108)").s().p("AskFyQiLgBAAiMIAAnJQAAiMCLgBIZIAAQCMABABCMIAAHJQgBCMiMABg");
	this.shape_2.setTransform(4.7,5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("rgba(0,0,0,0.108)").s().p("AsjFyQiNAAAAiNIAAnKQAAiLCNAAIZIAAQCLAAAACLIAAHKQAACNiLAAg");
	this.shape_3.setTransform(4.2,4.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("rgba(0,0,0,0.108)").s().p("AskFxQiLAAAAiLIAAnKQAAiNCLAAIZIAAQCMAAABCNIAAHKQgBCLiMAAg");
	this.shape_4.setTransform(3.7,4);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("rgba(0,0,0,0.108)").s().p("AsjFyQiNAAAAiNIAAnKQAAiLCNAAIZHAAQCNAAgBCLIAAHKQABCNiNAAg");
	this.shape_5.setTransform(3.2,3.5);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("rgba(0,0,0,0.108)").s().p("AskFxQiLAAgBiLIAAnKQABiNCLAAIZJAAQCLAAAACNIAAHKQAACLiLAAg");
	this.shape_6.setTransform(2.7,3);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("rgba(0,0,0,0.108)").s().p("AskFyQiLAAAAiNIAAnKQAAiLCLAAIZIAAQCNAAAACLIAAHKQAACNiNAAg");
	this.shape_7.setTransform(2.2,2.5);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("rgba(0,0,0,0.108)").s().p("AsjFxQiMAAgBiLIAAnKQABiNCMAAIZIAAQCLAAAACNIAAHKQAACLiLAAg");
	this.shape_8.setTransform(1.7,2);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("rgba(0,0,0,0.108)").s().p("AskFyQiLgBAAiMIAAnKQAAiLCLgBIZIAAQCNABAACLIAAHKQAACMiNABg");
	this.shape_9.setTransform(1.2,1.5);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("rgba(0,0,0,0.108)").s().p("AsjFxQiNAAAAiLIAAnLQAAiLCNAAIZIAAQCLAAAACLIAAHLQAACLiLAAg");
	this.shape_10.setTransform(0.7,1);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("rgba(0,0,0,0.108)").s().p("AskFyQiLgBAAiMIAAnJQAAiMCLgBIZIAAQCMABABCMIAAHJQgBCMiMABg");
	this.shape_11.setTransform(0.2,0.5);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("rgba(0,0,0,0.108)").s().p("AskFyQiLgBAAiMIAAnJQAAiMCLgBIZIAAQCMABABCMIAAHJQgBCMiMABg");
	this.shape_12.setTransform(-0.3,0);

	this.addChild(this.shape_12,this.shape_11,this.shape_10,this.shape_9,this.shape_8,this.shape_7,this.shape_6,this.shape_5,this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape,this.bg,this.txt,this.btn);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-96,-38.5,192,77);


(lib.nextQuestionruntime = function() {
	this.initialize();

	// Layer 3
	this.btn = new lib.nbdummy();
	this.btn.setTransform(0,0,0.489,4.171);
	new cjs.ButtonHelper(this.btn, 0, 1, 2, false, new lib.nbdummy(), 3);

	// Layer 2
	this.crctmc = new lib.correctSymbol();
	this.crctmc.setTransform(156.3,77.1);

	this.wrngmc = new lib.incorrectsymbol();
	this.wrngmc.setTransform(156.3,77.8);

	this.txt1 = new cjs.Text(gameNextQuestionText1, "bold 15px 'Tahoma'", gameNextQuestionTextColor);
	this.txt1.name = "txt1";
	this.txt1.textAlign = "center";
	this.txt1.lineHeight = 17;
	this.txt1.lineWidth = 292;
	this.txt1.setTransform(154.6,9.1);

	this.txt2 = new cjs.Text(gameNextQuestionText2, "bold 15px 'Tahoma'", gameNextQuestionTextColor);
	this.txt2.name = "txt2";
	this.txt2.textAlign = "center";
	this.txt2.lineHeight = 17;
	this.txt2.lineWidth = 292;
	this.txt2.setTransform(155.1,117.8);

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#003333").ss(2,1,1).p("A4UMDQgGAAAAgfIAA3HQAAgfAGAAMAwpAAAQAGAAAAAfIAAXHQAAAfgGAAg");
	this.shape.setTransform(156.3,77.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["rgba(255,255,255,0.8)","rgba(255,255,255,0.298)"],[0,1],0,124.4,0,-124.3).s().p("A4TMCQgHAAAAgeIAA3HQAAgfAHAAMAwoAAAQAGAAgBAfIAAXHQABAegGAAg");
	this.shape_1.setTransform(156.3,77.1);
	
	// Layer 1
	this.base = new lib.nextBtnBase();
	this.base.setTransform(156.3,77.1);

	this.addChild(this.base,this.txt2,this.txt1,this.wrngmc,this.crctmc);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-1,-1,314.6,156.2);

(lib.nextBtnBase = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		/* stop();*/
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(2));

	// Layer 1
	this.instance = new lib.Tween22("synched",0);
	this.instance.setTransform(0,0,0.918,0.918);

	this.instance_1 = new lib.Symbol6();
	this.instance_1.setTransform(0.1,0,1,1,0,0,0,172,84.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-172.9,-85.8,345.9,171.6);

(lib.Tween22 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#003333").ss(2,1,1).p("A6QNAQgHAAAAghIAA49QAAghAHAAMA0iAAAQAGAAAAAhIAAY9QAAAhgGAAg");

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["rgba(255,255,255,0.8)","rgba(255,255,255,0.298)"],[0,1],0,134.3,0,-134.3).s().p("A6QNAQgHAAAAghIAA49QAAghAHAAMA0iAAAQAFAAABAhIAAY9QgBAhgFAAg");

	this.addChild(this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-169.8,-84.2,339.6,168.5);

(lib.Symbol6 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#003333").ss(2,1,1).p("A6vNQQgHAAAAgjIAA5ZQAAgjAHAAMA1gAAAQAGAAAAAjIAAZZQAAAjgGAAg");
	this.shape.setTransform(172,84.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["rgba(255,255,255,0.8)","rgba(255,255,255,0.298)"],[0,1],0,136.8,0,-136.8).s().p("A6vNPQgHAAAAghIAA5aQAAgjAHAAMA1gAAAQAGAAAAAjIAAZaQAAAhgGAAg");
	this.shape_1.setTransform(172,84.8);

	this.addChild(this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-1,-1,345.9,171.6);

(lib.instmcbase = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#003333").ss(2,1,1).p("A4UMDQgGAAAAgfIAA3HQAAgfAGAAMAwpAAAQAGAAAAAfIAAXHQAAAfgGAAg");

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["rgba(255,255,255,0.8)","rgba(255,255,255,0.298)"],[0,1],0,124.4,0,-124.3).s().p("A4UMDQgFAAgBggIAA3FQABggAFAAMAwpAAAQAGAAAAAgIAAXFQAAAggGAAg");

	this.addChild(this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-157.3,-78.1,314.6,156.2);

(lib.instBase = function() {
	this.initialize();

	// Layer 1
	this.base1 = new lib.instBase1();
	this.base1.setTransform(240.5,15.2,1,1,0,0,0,240.5,15.2);

	this.base2 = new lib.instBase2();
	this.base2.setTransform(240.5,130.8,1,1,0,0,0,240.5,100.8);

	this.addChild(this.base2,this.base1);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-0.5,-0.5,482,232.6);


(lib.heart2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Tween16("synched",0);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:1.44,scaleY:1.44},5).to({scaleX:1,scaleY:1},6).to({scaleX:1.44,scaleY:1.44},3).wait(16));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-17,-17.3,35.2,29.3);


(lib.EndScreenRuntime = function() {
	this.initialize();

	// correct feedback
	this.crctFeedback = new lib.crctFbckMcruntime();
	this.crctFeedback.setTransform(320,182.6,1,1,0,0,0,296.4,29.2);

	// incorrect feedback
	this.wrngFeedback = new lib.IncrctFbckMcRuntime();
	this.wrngFeedback.setTransform(320,182.6,1,1,0,0,0,296.4,29.2);

	// YourScore
	this.yourScore = new lib.YourScreruntime();
	this.yourScore.setTransform(320,252.6,1,1,0,0,0,296.4,29.2);

	// Score text
	this.finalScore = new lib.scoreHolderruntime();
	this.finalScore.setTransform(320,303.5,1,1,0,0,0,56.5,23.1);

	// Bg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.004)").s().p("Egx/AlfMAAAhK+MBj+AAAMAAABK+g");
	this.shape.setTransform(320,240);

	this.addChild(this.shape,this.finalScore,this.yourScore,this.wrngFeedback,this.crctFeedback);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,640,480);


(lib.bottomBannermc = function() {
	this.initialize();

	// Layer 1
	this.base = new lib.basemc();
	this.base.setTransform(320,35.6);

	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#962300","#CC6800"],[0,1],0,2.6,0,-1.1).s().p("Egx/AAhIAAhBMBj+AAAIAABBg");
	this.shape.setTransform(320,4.6);

	this.addChild(this.shape,this.base);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,1.2,640,62.1);


(lib.bgImage = function(applybgcolor) {
	this.initialize();
	

	// Layer 5
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["rgba(255,255,255,0)","rgba(0,51,102,0.651)"],[0,1],0,0,0,0,0,382.5).s().p("Egx+AguMAAAhBbMBj9AAAMAAABBbg");
	this.shape.setTransform(320,209.5);

	// Layer 3
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#000000").ss(1,1,1).p("Egx/AgpMAAAhBRMBj/AAAMAAABBRg");
	this.shape_1.setTransform(320,209);

	// Layer 1
	this.base = new lib.bgBase();
	this.base.setTransform(320,209,1,1,0,0,0,320,209);

	this.addChild(this.base,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-1,-1,642,420);


(lib.alphaNumsMc1 = function() {
	this.initialize();

	// hit
	this.hit = new lib.hitmc();
	this.hit.setTransform(10.1,42.5,1.788,0.104);

	// Text
	this.txt = new cjs.Text("A", "bold 24px 'Tahoma'", gameShapeTextColor);
	this.txt.name = "txt";
	this.txt.textAlign = "center";
	this.txt.lineHeight = 27;
	this.txt.lineWidth = 49;
	this.txt.setTransform(25.5,12);

	// base
	this.base = new lib.shape_mc();
	this.base.setTransform(25.7,24.5,0.909,0.909,0,0,0,31.3,29.9);

	this.addChild(this.base,this.txt,this.hit);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-6.9,-8.2,65.3,65.3);


(lib.alphaNumsMc = function() {
	this.initialize();

	// hit
	this.hit = new lib.hitmc();
	this.hit.setTransform(10.1,42.5,1.788,0.104);

	// Text
	this.txt = new cjs.Text("A", "bold 24px 'Tahoma'", gameShapeTextColor);
	this.txt.name = "txt";
	this.txt.textAlign = "center";
	this.txt.lineHeight = 27;
	this.txt.lineWidth = 49;
	this.txt.setTransform(26.5,12);

	// base
	this.base = new lib.shape_mc();
	this.base.setTransform(25.7,24.5,0.909,0.909,0,0,0,31.3,29.9);

	this.addChild(this.base,this.txt,this.hit);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-0.8,-0.8,51.6,54.9);


(lib.startScreenRuntime = function() {
	this.initialize();

	// GameName
	this.gameNameMc = new lib.gameNameRuntime();
	this.gameNameMc.setTransform(320,193,1,1,0,0,0,296.4,29.2);

	// PlayButton
	this.playBtn = new lib.PlayNow_btnruntim();
	this.playBtn.setTransform(319.8,279.3);
	//this.playBtn.shadow = new cjs.Shadow("rgba(0,0,0,1)",0,0,4);

	// Bg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.004)").s().p("Egx/AlfMAAAhK+MBj+AAAMAAABK+g");
	this.shape.setTransform(320,240);

	this.addChild(this.shape,this.playBtn,this.gameNameMc);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,640,480);


(lib.mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f(gameLifeLineColor).s().p("AAABsIAAgBQgogogggcIgggcIgEgEQgVgSAAgcQAAgcAVgUQAUgUAeAAQAdAAAUAUIAJALIAAABIAAgBIAAABIAAAAIAAAAIAKgLQAUgVAdABQAegBAUAVQAVATAAAcQAAAdgVARIgEAEIggAdQggAcgpAoIAAAAg");
	this.shape.setTransform(13,10.9);

	this.instance = new lib.heart2();
	this.instance.setTransform(12.6,12.9,0.8,0.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.instance}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,26,21.7);


(lib.instructionPaneRuntime = function() {
	this.initialize();

	// Layer 3
	this.close_btn = new lib.Close();
	this.close_btn.setTransform(226.6,-101.8,0.505,0.505);
	//this.close_btn.shadow = new cjs.Shadow("rgba(0,0,0,1)",0,0,4);
	new cjs.ButtonHelper(this.close_btn, 0, 1, 2, false, new lib.Close(), 3);

	this.instTitleMc = new lib.instTitleRuntime();
	this.instTitleMc.setTransform(-143.9,-100.5,1,1,0,0,0,90,10.5);

	// showInts
	this.instTxtMcShow = new lib.instTxtMcShow();
	this.instTxtMcShow.setTransform(-4.9,-59.5,1,1,0,0,0,229,14.5);

	// Layer 1
	this.base = new lib.instBase();
	this.base.setTransform(0.1,0,1,1,0,0,0,240.5,116);
	
	// shadow
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.108)").s().p("EglZASFQgKABAAgLMAAAgj2QAAgKAKABMBKzAAAQAKgBAAAKMAAAAj2QAAALgKgBg");
	this.shape.setTransform(8,7.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(0,0,0,0.108)").s().p("EglZASFQgKABAAgLMAAAgj1QAAgLAKABMBKzAAAQAKgBAAALMAAAAj1QAAALgKgBg");
	this.shape_1.setTransform(7,6.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("rgba(0,0,0,0.108)").s().p("EglZASFQgKABAAgKMAAAgj2QAAgKAKAAMBKzAAAQAKAAAAAKMAAAAj2QAAAKgKgBg");
	this.shape_2.setTransform(6,5.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("rgba(0,0,0,0.108)").s().p("EglZASGQgKAAAAgKMAAAgj2QAAgKAKAAMBKzAAAQAKAAAAAKMAAAAj2QAAAKgKAAg");
	this.shape_3.setTransform(5,4.8);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("rgba(0,0,0,0.108)").s().p("EglZASGQgKgBAAgJMAAAgj2QAAgLAKAAMBKzAAAQAKAAAAALMAAAAj2QAAAJgKABg");
	this.shape_4.setTransform(4,3.8);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("rgba(0,0,0,0.108)").s().p("EglZASGQgKgBAAgJMAAAgj3QAAgJAKgBMBKzAAAQAKABAAAJMAAAAj3QAAAJgKABg");
	this.shape_5.setTransform(3,2.8);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("rgba(0,0,0,0.108)").s().p("EglZASGQgKAAAAgLMAAAgj2QAAgJAKgBMBKzAAAQAKABAAAJMAAAAj2QAAALgKAAg");
	this.shape_6.setTransform(2,1.8);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("rgba(0,0,0,0.108)").s().p("EglZASFQgKAAAAgKMAAAgj2QAAgKAKAAMBKzAAAQAKAAAAAKMAAAAj2QAAAKgKAAg");
	this.shape_7.setTransform(1,0.8);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("rgba(0,0,0,0.108)").s().p("EglZASFQgKAAAAgKMAAAgj2QAAgKAKAAMBKzAAAQAKAAAAAKMAAAAj2QAAAKgKAAg");
	this.shape_8.setTransform(0,-0.2);

	this.addChild(this.shape_8,this.shape_7,this.shape_6,this.shape_5,this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape,this.base,this.instTxtMcShow,this.instTitleMc,this.close_btn);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-240.9,-116.5,482,232.6);


(lib.hearts = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.base = new lib.mc();
	this.base.setTransform(-9.9,-12.1);

	this.base_1 = new lib.man();
	this.base_1.setTransform(3.1,-2.8);

	this.addChild(this.base,this.base_1)

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-9.9,-12.1,26,21.7);

(lib.mantween = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f(gameLifeLineColor).s().p("ABNCJQgHgFAAgGIAAhoIABgDIAAgBQglA6AaA4QgHAFgIgBQgxgmgoAmQgIABgHgFQARg5gWgzIgGgHIAABtQAAAGgGAFQgGAEgJABQgJgBgHgEQgGgFAAgGIAAh2QAAgUAVgPQATgQAdAAQAsArAtgrQAcAAAUAQQAVAPAAAUIAAAZIgBAGIAABXQAAAGgGAFQgGAEgJABQgKgBgFgEgAAAgtIgFAAQgSgBgMgOQgNgNAAgTQAAgVANgOQAPgOAUAAIAAAAQATABANANQANAOAAAVQAAATgNANQgNAOgTABg");

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-11.4,-14.2,22.9,28.4);


(lib.man = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.mantween();

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:0.8,scaleY:0.8,alpha:0.102},9).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-11.4,-14.2,22.9,28.4);

(lib.cartMc = function() {
	this.initialize();

	// effects
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["rgba(255,255,255,0.698)","rgba(255,255,255,0)"],[0,1],28.5,0.2,-25.7,0.2).s().p("ACLhkIh8C5IgyAGIgvAFIg4AFQBugMCni9g");
	this.shape.setTransform(76,25.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["rgba(66,66,66,0.498)","rgba(102,102,102,0)"],[0,1],-81.4,1.6,26,1.6).s().p("AkcC0Iiaj7QgugMgBgPIAAgnQABgLAVgIQAigPBXgLQCOgTDIAAQDKAACNATQBXALAjAPQAUAIAAAMIAAAlQAAAPgtANIiaD7QiTAWiMAAQiPAAiMgWg");
	this.shape_1.setTransform(48.7,20.8);

	// Hit
	this.hit = new lib.hitmc();
	this.hit.setTransform(31.5,0.2,2.17,0.113);

	// mask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AlWECQhXgLgigPIAAAAQgVgIAAgLIAAAAQAAgLAVgIIAAAAQAfgNBKgLIAAAAIAAgTIAAAAIAAk7QAAhvBuAAIAAAAIHMAAQBvAAAABvIAAAAIAAE7IAAAPIAAAAIAUACIAAAAQBYALAiAPIAAAAQAUAIAAAMIAAAAQAAAKgUAIIAAAAQgiAPhYALIAAAAQiNASjKAAIAAAAQjIAAiOgSg");
	mask.setTransform(48.7,-14.8);

	// Layer 3
	this.mc = new lib.alphaNumsMc1();
	this.mc.setTransform(48.7,4.4,1,1,0,0,0,25,26.7);

	this.mc.mask = mask;

	// frame
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("rgba(14,14,14,0.8)").ss(2,1,1).p("AEOhWQAGAAAGABQAjAGAaAaQAiAjAAAuQAAAxgiAhQgiAjgwAAQgxAAgigjQgighAAgxQAAgsAfgiADSiQQACACACABQASAOAQARQAMALAKANQgEgBgFAAQgxAAgiAiQgBABgBACQgFgHgFgFQhFhEhgAAQhfAAhEBEQgHAHgFAGQAAAAABABQAeAhAAArQAAAxgiAhQgiAjgxAAQgwAAgjgjQghghAAgxQAAguAhgjQAcgbAmgFQAFgBAGAAQAJgNAMgLQARgRARgOQACgBACgCAkKhWQADgBADAAQAxAAAiAiQABACACAC");
	this.shape_2.setTransform(48.7,54.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("rgba(0,0,0,0.8)").s().p("ADbApQgRgRAAgYQAAgWARgSQARgRAYAAQAYAAARARQASASAAAWQAAAYgSARQgRARgYAAQgYAAgRgRgAkuApQgQgRAAgYQAAgWAQgSQARgRAZAAQAYAAARARQASASAAAWQAAAYgSARQgRARgYAAQgZAAgRgRg");
	this.shape_3.setTransform(48.8,56.9);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("rgba(51,51,51,0.6)").s().p("AizArQgigigwAAIgHABQAKgLAMgLQAQgRASgOIAEgDIGhAAIADADQASAOARARIAWAWIgKgBQgwAAgjAiIgCADIgKgMQhEhChgAAQhgAAhEBCIgMANIgDgEg");
	this.shape_4.setTransform(48.9,44.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("rgba(0,0,0,0.6)").s().p("ACyBSQgigiAAgwQAAgtAfghIABgBIACgCQAigiAxAAIAJAAIAMACQAjAGAaAaQAiAiAAAvQAAAwgiAiQgiAigwAAQgxAAgigigADbgoQgQASAAAWQAAAYAQARQARARAZAAQAYAAARgRQASgRAAgYQAAgWgSgSQgRgRgYAAQgZAAgRARgAlXBSQghgiAAgwQAAgvAhgiQAcgcAmgFIALgBIAGAAQAxAAAiAiIADADIABABQAeAhAAAsQAAAwgiAiQgiAigxAAQgwAAgjgigAktgoQgRASAAAWQAAAYARARQARARAYAAQAYAAARgRQASgRAAgYQAAgWgSgSQgRgRgYAAQgYAAgRARg");
	this.shape_5.setTransform(48.7,56.9);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("rgba(25,25,25,0.8)").ss(2,1,1).p("AG4hHQgjAJg9AIQiOATjKAAQjIAAiOgTQg+gIgigJQgugMAAgPIAAgnQAAALAVAIQAiAPBXALQCOASDIAAQDKAACOgSQBXgLAigPQAUgIABgKIAAAlQAAAPguANgAHmiIQgBgMgUgIQgigPhXgLQiOgTjKAAQjIAAiOATQhXALgiAPQgVAIAAALAkuCXQA4AIA3AFQC/ASDCgSQA3gFA3gIIgSAdQg3AIg3AFQiwARitgQQg4gGg3gIgAm2hHICIDeAEwCXICIje");
	this.shape_6.setTransform(48.7,20.4);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("rgba(51,51,51,0.8)").s().p("AiuARQg3gGg3gIIgSgbQA3AIA3AFQC/AQDCgQQA3gFA3gIIgSAbQg3AIg3AFQhaAJhXAAQhXAAhVgIg");
	this.shape_7.setTransform(48.8,38.1);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("rgba(0,0,0,0.098)").s().p("AjAByQg3gGg3gIIiIjeQAiAKA9AHQCOATDJAAQDJAACOgTQA+gIAjgJIiJDeQg3AIg3AFQhjAKhgAAQhgAAhegJg");
	this.shape_8.setTransform(48.8,25.4);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("rgba(0,0,0,0.4)").s().p("AlWAfQg+gHgigKQgugMgBgNIAAgmQABAKAVAJQAiAOBXALQCOARDIAAQDKAACNgRQBXgLAjgOQAUgJAAgKIAAAmQAAANgtAMQgjAJg+AIQiNATjKAAQjIAAiOgTg");
	this.shape_9.setTransform(48.7,11.6);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("rgba(0,0,0,0.8)").s().p("AlWAsQhXgLgigOQgVgIgBgLQABgJAVgJQAigOBXgLQCOgTDIAAQDKAACNATQBXALAjAOQAUAJAAAJQAAAKgUAJQgjAOhXALQiNATjKAAQjIAAiOgTg");
	this.shape_10.setTransform(48.7,6.5);

	// rimEffect
	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("rgba(245,245,245,0.8)").s().p("AHXAiQgogLhXgLQiOgSjKABQjHgBiPASQhWALgUAGQgUAHgJgCQgJgCABgJQACgHAVgJQAigMBWgMQCPgTDHAAQDKAACOATQBXAMAiAMQAVAIAAAMQAAAGgQAEQgBAAAAgBQAAAAAAAAQAAAAABgBQAAAAABgBg");
	this.shape_11.setTransform(48.6,3.6);

	// base
	this.cartBase = new lib.cartbase();
	this.cartBase.setTransform(48.7,33.7,1,1,0,0,0,48.6,33.1);

	this.addChild(this.cartBase,this.shape_11,this.shape_10,this.shape_9,this.shape_8,this.shape_7,this.shape_6,this.shape_5,this.shape_4,this.shape_3,this.shape_2,this.mc,this.hit,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-0.9,-30.5,99.2,100.3);


(lib.mainHeart = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});
	// timeline functions:
	this.frame_0 = function() {
		/* stop();*/
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));
	// Layer 1
	this.heart = new lib.hearts();
	this.heart.setTransform(10,12.2,1,1,0,0,0,10,12.2);

	this.timeline.addTween(cjs.Tween.get(this.heart).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-9.9,-12.1,26,21.7);


(lib.instScreenRuntime = function() {
	this.initialize();

	// Instruction
	this.instMc = new lib.instructionPaneRuntime();
	this.instMc.setTransform(321.5,235);

	this.help_btn = new lib.Help_btn();
	this.help_btn.setTransform(612,449.6);
	//this.help_btn.shadow = new cjs.Shadow("#000000",0,0,2);
	new cjs.ButtonHelper(this.help_btn, 0, 1, 2, false, new lib.Help_btn(), 3);

	this.addChild(this.help_btn,this.instMc);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(78.5,116.5,557.8,358);


(lib.gameScreenRuntime = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Score&time
	this.scoreMc = new lib.score_mcruntime();
	this.scoreMc.setTransform(521.3,28.8,1,1,0,0,0,59,15.9);

	this.timeline.addTween(cjs.Tween.get(this.scoreMc).wait(1));

	// LifeLines
	this.heart1 = new lib.mainHeart();
	this.heart1.setTransform(17.5,25.3);

	this.heart5 = new lib.mainHeart();
	this.heart5.setTransform(153.5,37.5,1,1,0,0,0,10,12.2);

	this.heart4 = new lib.mainHeart();
	this.heart4.setTransform(122,37.5,1,1,0,0,0,10,12.2);

	this.heart3 = new lib.mainHeart();
	this.heart3.setTransform(90.5,37.5,1,1,0,0,0,10,12.2);

	this.heart2 = new lib.mainHeart();
	this.heart2.setTransform(59,37.5,1,1,0,0,0,10,12.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.heart2},{t:this.heart3},{t:this.heart4},{t:this.heart5},{t:this.heart1}]}).wait(1));

	// topBanner
	this.topBannerMc = new lib.topBannerMc();
	this.topBannerMc.setTransform(320,52.8,1,1,0,0,0,320,52.8);

	this.timeline.addTween(cjs.Tween.get(this.topBannerMc).wait(1));

	// Next Question
	this.nextQuestion = new lib.nextQuestionruntime();
	this.nextQuestion.setTransform(483.5,181.6,1,1,0,0,0,320,19.1);

	this.startQuestion = new lib.runtimestartQuestion();
	this.startQuestion.setTransform(481.1,181.6,1,1,0,0,0,320,19.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.startQuestion},{t:this.nextQuestion}]}).wait(1));

	// Question text
	this.quesTxt = new cjs.Text("Q :", "15px 'Tahoma'", gameQuestionColor);
	this.quesTxt.name = "quesTxt";
	this.quesTxt.textAlign = "center";
	this.quesTxt.lineHeight = 17;
	this.quesTxt.lineWidth = 608;
	this.quesTxt.setTransform(318,412.4);

	this.timeline.addTween(cjs.Tween.get(this.quesTxt).wait(1));

	// mask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("EgxdAlfQghABgBgWMAAAhKTQABgWAhAAMBi7AAAQAhAAAAAWMAAABKTQAAAWghgBg");
	mask.setTransform(320,240);

	// Bottom
	this.cartMc = new lib.cartMc();
	this.cartMc.setTransform(320.1,372.6,0.9,0.9,0,0,0,48.7,33.6);

	this.bottomBannerMc = new lib.bottomBannermc();
	this.bottomBannerMc.setTransform(0,401.9,1,1.235);

	this.cartMc.mask = this.bottomBannerMc.mask = mask;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.bottomBannerMc},{t:this.cartMc}]}).wait(1));

	// alphanums
	this.alnum5 = new lib.alphaNumsMc();
	this.alnum5.setTransform(500.7,-152.6,1,1,0,0,0,30,30);

	this.alnum3 = new lib.alphaNumsMc();
	this.alnum3.setTransform(410.5,-117.6,1,1,0,0,0,30,30);

	this.alnum7 = new lib.alphaNumsMc();
	this.alnum7.setTransform(320.2,-145.6,1,1,0,0,0,30,30);

	this.alnum2 = new lib.alphaNumsMc();
	this.alnum2.setTransform(230,-73.6,1,1,0,0,0,30,30);

	this.alnum6 = new lib.alphaNumsMc();
	this.alnum6.setTransform(139.7,-145.6,1,1,0,0,0,30,30);

	this.alnum4 = new lib.alphaNumsMc();
	this.alnum4.setTransform(591.1,-131.6,1,1,0,0,0,30,30);

	this.alnum1 = new lib.alphaNumsMc();
	this.alnum1.setTransform(49.5,-117.6,1,1,0,0,0,30,30);

	this.alnum5.mask = this.alnum3.mask = this.alnum7.mask = this.alnum2.mask = this.alnum6.mask = this.alnum4.mask = this.alnum1.mask = mask;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.alnum1},{t:this.alnum4},{t:this.alnum6},{t:this.alnum2},{t:this.alnum7},{t:this.alnum3},{t:this.alnum5}]}).wait(1));

	// base
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.004)").s().p("Egx/AlfMAAAhK+MBj+AAAMAAABK+g");
	this.shape.setTransform(320,240);

	this.shape.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-488.1,-146.8,1308.8,626.8);


(lib.runtime_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,false,{});

	// InstScreen
	this.instScreen = new lib.instScreenRuntime();
	this.instScreen.setTransform(296.4,76.5,1,1,0,0,0,296.4,76.5);

	this.timeline.addTween(cjs.Tween.get(this.instScreen).wait(1));

	// Start Screen
	this.startScreen = new lib.startScreenRuntime();
	this.startScreen.setTransform(296.4,76.5,1,1,0,0,0,296.4,76.5);

	this.timeline.addTween(cjs.Tween.get(this.startScreen).wait(1));

	// Game Screen
	this.gameScreen = new lib.gameScreenRuntime();
	this.gameScreen.setTransform(320,240,1,1,0,0,0,320,240);

	this.timeline.addTween(cjs.Tween.get(this.gameScreen).wait(1));

	// EndScreen
	this.endScreen = new lib.EndScreenRuntime();
	this.endScreen.setTransform(296.4,76.5,1,1,0,0,0,296.4,76.5);

	this.timeline.addTween(cjs.Tween.get(this.endScreen).wait(1));

	// Bg
	this.bg = new lib.bgImage();
	this.bg.setTransform(320,241,1,1.148,0,0,0,320,209);

	this.timeline.addTween(cjs.Tween.get(this.bg).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-488.1,-183.4,1308.8,665.4);

(lib.border = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("Egx/AlgMAAAhK/MBj/AAAMAAABK/g");
	this.shape.setTransform(320,240);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(319,239,642,482.1);


// symbols:
(lib.ansBaseMC = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f(gameAnswerBaseColor).s().p("Ah0B1IAAjpIDpAAIAADpg");

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-11.7,-11.7,23.6,23.6);



(lib.charBoxBase = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 3
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#CCCCCC").ss(1,1,1).p("Ah0h0IDpAAIAADpIjpAAg");
	this.shape.setTransform(11.8,11.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(3));

	// Layer 1
	this.mc = new lib.ansBaseMC();
	this.mc.setTransform(11.8,11.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#66CC33").s().p("Ah1B1IAAjqIDqAAIAADqg");
	this.shape_1.setTransform(11.8,11.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FF3333").s().p("Ah1B1IAAjqIDqAAIAADqg");
	this.shape_2.setTransform(11.8,11.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.mc}]}).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,-1,25.6,25.6);


(lib.ansCharBoxes = function() {
	this.initialize();

	// Layer 2
	this.txt = new cjs.Text("W", "bold 18px 'Tahoma'",gameAnswerTextColor);
	this.txt.name = "txt";
	this.txt.textAlign = "center";
	this.txt.lineHeight = 20;
	this.txt.setTransform(2,-10.4,0.81,0.81);

	// Layer 1
	this.base = new lib.charBoxBase();
	this.base.setTransform(0,-1.9,1,1,0,0,0,9.8,9.8);

	this.addChild(this.base,this.txt);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-10.3,-12.2,24.6,24.6);

})(lib = lib||{}, images = images||{}, createjs = createjs||{});
var lib, images, createjs;