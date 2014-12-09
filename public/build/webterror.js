var img_url="images/error_img.jpg",colors=["#73194E","#025638","#20948B","#5B0003","#69E29D","#FFF5A9"],makeRects=function(a,b){for(var c=0;a>c;c++)time=~~(Math.random()*b),function(a){setTimeout(function(){makeRect(a)},a+10*c)}(time)},makeRect=function(a){var b=document.createElement("DIV");$(b).addClass("glitch-block");var c=colors[~~(Math.random()*colors.length-1)],d={};d.point=~~(31*Math.random()),d.size=~~(Math.random()*(100-d.point)+40);var e=$(b);e.text(Math.random()>.5?"error":""),e.css({width:d.size+"%",height:~~(400*Math.random())+"px",background:c,left:d.point+"%",top:~~(600*Math.random())}),Math.random()>.8&&e.css({background:"url("+img_url+")"}),$(".wrapper").append(e),setTimeout(function(){e.remove()},a)},startGlitching=function(a,b){var c=["Warning","Error","Exception","Critical Error"];for(e in c){var d=document.createElement("DIV");$(d).addClass("glitch-text").text(c[e]),$(".wrapper").append(d)}var e=0;setTimeout(function(){},100);var f=setInterval(function(){e>a&&clearInterval(f),glitchElements(b),e++},b)},glitchElements=function(a){var b=$("div.glitch-text");b.each(function(b,c){var d=$(c);d.addClass("rel");var e=d.height(),f=document.createElement("SPAN"),g=$(f);g.addClass("abs blackbg"),g.addClass(Math.random()>.5?"left":"right"),g.text(d.text());var h=~~(Math.random()*e/2),i=~~(Math.random()*e/2+e/2);g.css({clip:"rect("+h+"px, 9999px, "+i+"px, 0)"}),d.append(g),setTimeout(function(){g.remove()},a-5)})},screenOff=function(){setTimeout(function(){$(".title.center").animate({opacity:0},400),div1=document.createElement("DIV"),div2=document.createElement("DIV"),div3=document.createElement("DIV"),div4=document.createElement("DIV"),div5=document.createElement("DIV"),$(div1).addClass("top-screen-scrapper"),$(div2).addClass("bottom-screen-scrapper"),$(div3).addClass("left-screen-scrapper"),$(div4).addClass("right-screen-scrapper"),$(div5).addClass("screen-scrapper-point"),$("body").append(div1),$("body").append(div2),$("body").append(div3),$("body").append(div4),$("body").append(div5),$(div1).animate({height:"49.5%"},600),$(div2).animate({height:"49.5%"},600,function(){$(div3).animate({width:"50%"},400),$(div4).animate({width:"50%"},400),$(div5).animate({width:"15px",height:"15px"},400,function(){$(div5).animate({width:"0px",height:"0px",opacity:"0"},300,function(){setTimeout(function(){$(".main-view-wtlabel").animate({top:"-70px",opacity:"1"},1e3,function(){var a=document.createElement("DIV");$(a).text("Комплексные веб решения").addClass("cws"),$(".main-view-wtlabel").append(a),$(a).animate({top:"-20px",opacity:1},1e3)}),$(".main-view-contacts").animate({top:"-40px",opacity:"1"},1e3,function(){var a=document.createElement("DIV");$(a).text("Работы").addClass("works"),$(".main-view-contacts").append(a),$(a).animate({top:"110px",opacity:1},1e3)}),initCircles(250,function(){})},1500),$(div5).animate({width:"5px",height:"5px",opacity:"1"},300,function(){$(".main-scene").css({"z-index":4}),$(div5).css({"border-radius":0}),$(div5).animate({width:"400px"},2e3)})})})})},1500)};var works=[{label:"CASTMAG",background_url:"/images/castmag_preview.jpg",url:"http://castmag.ru",size:2},{label:"TVOYKOSMOS",background_url:"/images/tk_preview.jpg",url:"http://tvoykosmos.ru",size:1},{label:"HAIR-REPAIR",background_url:"/images/hr_preview.jpg",url:"http://hair-repair.ru",size:1},{label:"IPKINO",background_url:"/images/ipk_preview.jpg",url:"http://ipkino.ru",size:1},{label:"BLOCK2BLOCK",background_url:"/images/b2b_preview.jpg",url:"https://itunes.apple.com/us/app/block2block/id939837863?ls=1&mt=8",size:1}],worksArray=[];$(document).ready(function(){var a=window.navigator.language||window.navigator.userLanguage,b=a.match("ru");b&&($("p.web").text("ВЕБ"),$("p.web").attr("data-glitch","ВЕБ"),$("p.terror").text("ТЕРРОР"),$("p.terror").attr("data-glitch","ТЕРРОР"),$(".main-view-wtlabel").text("ВЕБ ТЕРРОР"),$(".main-view-contacts .phone").text("+7 909 6952723")),$(".title").animate({opacity:1},3e3),setTimeout(function(){$("body").off("click",".title"),$(".error-screen").css({display:"block"}),makeRects(200,300),startGlitching(40,40),screenOff()},2500),$("body").on("click",".back",function(){hideWorks()}),$("body").on("click",".works",function(){var a=document.createElement("DIV"),b=[];stripesN=10;for(var c=0;stripesN>c;c++)b[c]=document.createElement("DIV"),$(b[c]).css({left:10*c+"%",width:stripesN+1+"%"}),$("body").append(b[c]),function(a){$(b[a]).addClass("bodySegue").delay(60*a).animate({height:"100%"},300)}(c);var d=document.createElement("SPAN"),e=document.createElement("P"),f=document.createElement("P");$(e).text("ВЕБ ТЕРРОР").css({opacity:0,"font-size":"30px","line-height":"30px","font-weight":900}),$(f).text("Вернуться").addClass("back").css({opacity:0,"font-size":"15px","line-height":"20px","font-weight":500,"padding-top":"5px",cursor:"pointer"}),$(d).addClass("wtLogoAndBack"),$(a).addClass("headerSegue").delay(300).animate({height:"80px"},600),setTimeout(function(){$(e).animate({opacity:1},400),$(f).animate({opacity:1},700),makeWorks()},800),$("body").append(a),$(a).append(d),$(d).append(e),$(d).append(f)}),makeWorks=function(){var a=document.createElement("DIV");$(a).addClass("worksCanvas"),$("body").append(a);for(i in works){worksArray[i]=document.createElement("DIV"),$(worksArray[i]).addClass("eachWork").css({"background-image":"url( "+works[i].background_url+" )",width:1==works[i].size?"50%":"100%",height:1==works[i].size?"350px":"500px","line-height":1==works[i].size?"350px":"500px"});var b=document.createElement("DIV");$(b).addClass("fader");var c=document.createElement("SPAN");$(c).text(works[i].label),$(worksArray[i]).append(b),$(b).append(c),$(a).append(worksArray[i]),function(a){$(worksArray[a]).delay(200*a).animate({opacity:1},400),$(worksArray[a]).bind("click",function(){window.open(works[a].url,"_blank")})}(i)}},hideWorks=function(){$(".eachWork").each(function(a,b){!function(a){$(b).animate({opacity:0},200*a,function(){$(b).remove(),$(".worksCanvas").remove()})}(a),$(".bodySegue").each(function(a,b){!function(a){$(b).delay(60*a).animate({height:0},300,function(){$(b).remove()})}(a)}),$(".headerSegue").animate({height:0},300,function(){$(".headerSegue").remove()})})}});function initCircles(a,b){function c(a,b){this.position=a,this.figure=b}for(var d=[],e=$(paper.canvas).width()/2,f=$(paper.canvas).height()/2,g=a,h=5,i=2*Math.PI,j=i/50,k=.003,l=30,m=0,n=[],o=0;i>o;o+=j){var p=e+g*Math.cos(o)-h/2,q=f+g*Math.sin(o)-h/2,r=paper.rect(p,q,0,0);r.attr("fill","black"),r.attr("stroke","none"),r.attr("opacity",0);var s=new c(o,r);d.push(s)}for(o=0;o<d.length;o++)n.push(o);var t=setInterval(function(){m++,m==n.length-1&&(clearInterval(t),b())},50);setInterval(function(){for(o in d){var a=d[o].position,b=e+g*Math.cos(a)-h/2,c=f+g*Math.sin(a)-h/2;d[o].figure.attr("x",b),d[o].figure.attr("y",c),d[o].position=d[o].position+k,1!=d[m].figure.attr("opacity")&&d[m].figure.animate({opacity:1,width:h,height:h},l-5,"elastic")}},l)}var paper;$(document).ready(function(){paper=Raphael(0,0,"100%","100%"),$(paper.canvas).css({"z-index":3})});