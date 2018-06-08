// var sections = [$("#landing"),$("#info"),$("#q1"),$("#q2"),$("#calculating"),$("#result")];

var ans = [];
var resultImgs = [
	"assets/images/results/result1.png",
	"assets/images/results/result2.png",
	"assets/images/results/result3.png",
	"assets/images/results/result4.png",
	"assets/images/results/result5.png",
	"assets/images/results/result6.png",
	"assets/images/results/result7.png",
	"assets/images/results/result8.png",
	"assets/images/results/result9.png",
]


$(".btn").on("click",function() {
	if($(this).data("to") !== undefined) {
		switchSection($(this).parents("section"),$($(this).data("to")));
	}
})

$(".ans").on("click",function() {
	ans.push($(this).data("ans"));
	switchSection($(this).parents("section"),$(this).parents("section").next());
})


function switchSection(now,next) {
	now.removeClass('active');
	setTimeout(function() {
		next.addClass('active');

		if(next.attr("id") == "landing") {
			ans = [];
			$(".logos").removeClass('active');
		} else {
			$(".logos").addClass('active');
		}

		if(next.attr("id") == "info") {
			infoAnimate(next);
		}

		if(next.hasClass('quest')) {
			questAnimate(next);
		}
		
		if(next.attr("id") == "calculating") {
			setResult();
			setTimeout(function(){
				$("#calculating").removeClass('active');
				setTimeout(function(){
					$("#calculating").addClass('active');
					setTimeout(function(){
						$("#calculating").removeClass('active');
						setTimeout(function(){
							$("#calculating").addClass('active');
							setTimeout(function(){
								switchSection($("#calculating"),$("#result"));
							},1000)
						},1000)
					},1000)
				},1000)
			},1000)
		}

		if(next.attr("id") == "result") {
			resultAnimate(next);
		}

	},1000);
}

function landingAnimate() {
	var tl = new TimelineMax({repeat:0});
	// tl.fromTo($("#landing .title"),0.7,{opacity:0, x:-50, y:-50},{opacity:1, x:0, y:0});
	tl.staggerFromTo($("#landing .sub-title img"),1,{opacity:0, x: 50},{opacity:1, x:0},0.7);
	tl.fromTo($("#landing .btn"),1,{opacity:0},{opacity:1});
}


function infoAnimate(section) {
	var tl = new TimelineMax({repeat:0});
	tl.fromTo(section,1,{top:"-100%"},{top:0});
	tl.fromTo(section.find(".title"),1,{opacity:0},{opacity:1, delay: 0.2});
	tl.staggerFromTo(section.find(".sub-title>*"),0.7,{opacity:0,x:-20},{opacity:1,x:0},0.7);
	tl.fromTo(section.find(".btn"),0.5,{opacity:0},{opacity:1});
}

function questAnimate(section) {
	var tl = new TimelineMax({repeat:0});
	tl.fromTo(section.find(".no"),0.5,{opacity:0},{opacity:1});
	tl.fromTo(section.find(".line"),0.5,{scale:0},{scale:1});
	tl.to(section.find(".no,.line"),0.5,{opacity:1});
	tl.staggerFromTo(section.find(".quest-content>*"),1,{opacity:0,x:-20},{opacity:1,x:0},0.7);
	tl.staggerFromTo(section.find(".row>*"),1,{opacity:0},{opacity:1},0.7);
	if(section[0].id == "q4") {
		setTimeout(function(){
			section.find(".quest-content").animate({
				scrollTop: 400
			}, 4000);
		},4000)
		
	}
}

//賈 花 胖 枝 和 俊 妹 福 雄
[4,2,2,2,2,0,3]
var c1 = [4,1,2,2,1,0,1];
var c2 = [2,1,2,0,0,1,0]; 
var c3 = [3,2,2,1,0,0,0];
var c4 = [2,1,1,1,1,0,1];
var c5 = [2,2,2,2,1,0,2];
var c6 = [0,2,1,2,1,0,3];
var c7 = [0,1,2,1,1,1,0];
var c8 = [2,0,1,1,2,0,0];
var c9 = [3,1,2,0,1,0,0];

var chars = [c1,c2,c3,c4,c5,c6,c7,c8,c9];

function setResult() {
	var stats = [ans[2]+ans[4]-2,ans[5]-1,ans[6]-1,ans[7]-1,ans[0]-1,ans[3]-1,ans[1]-1];
	//          EQ 樂觀/悲觀 與人連結 是否願意求助 學習能力 性別 金錢觀
	// console.log(stats);

	var diffs = [];
	chars.forEach(char => {
		var diff = 
			Math.pow(char[0]-stats[0],2) + Math.pow(char[1]-stats[1],2) + Math.pow(char[2]-stats[2],2) + 
			Math.pow(char[3]-stats[3],2) + Math.pow(char[4]-stats[4],2) + Math.pow(char[5]-stats[5],2) + Math.pow(char[6]-stats[6],2);
		diffs.push(diff);
	})
	// console.log(diffs);
	var result = diffs.indexOf(Math.min(...diffs));

	$(".result-img>img").attr("src",resultImgs[result]);
	$(".share>a").attr("href",`https://www.facebook.com/sharer/sharer.php?u=http://event.catchad.com.tw/mosquito/monga/result${result+1}.html`);
}

function resultAnimate(section) {

	var tl = new TimelineMax({repeat:0});
	tl.fromTo(section.find(".result-img"),0.5,{opacity:0,y:30},{opacity:1,y:0});
	tl.to(section.find(".result-img"),0.5,{opacity:1});
	tl.add("a");
	tl.fromTo(section.find(".left"),0.7,{opacity:0,y:30},{opacity:1,y:0},"a");
	tl.fromTo(section.find(".share"),0.7,{opacity:0,y:30},{opacity:1,y:0},"a");
}





//jf hide
$(window).on("load",function(argument) {
	var hidejf = setInterval(function(){
		if($("#justfont-badge").length){
			$("#justfont-badge").css("display","none");
			clearInterval(hidejf);
		}
	},100);
	landingAnimate()
})
