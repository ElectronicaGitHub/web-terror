var img_url="images/error_img.jpg",colors=["#73194E","#025638","#20948B","#5B0003","#69E29D","#FFF5A9"],makeRects=function(a,b){for(var c=0;a>c;c++)time=~~(Math.random()*b),function(a){setTimeout(function(){makeRect(a)},a+10*c)}(time)},makeRect=function(a){var b=$(window).height(),c=document.createElement("DIV");$(c).addClass("glitch-block");var d=colors[~~(Math.random()*colors.length-1)],e={};e.point=~~(31*Math.random()),e.size=~~(Math.random()*(100-e.point)+40);var f=$(c);f.text(Math.random()>.5?"error":""),f.css({background:d,width:e.size+"%",left:e.point+"%",top:~~(Math.random()*b),height:~~(Math.random()*b/3)+"px"}),Math.random()>.8&&f.css({background:"url("+img_url+")"}),$(".wrapper").append(f),setTimeout(function(){f.remove()},a)},startGlitching=function(a,b){var c=["Warning","Error","Exception","Critical Error"];for(e in c){var d=document.createElement("DIV");$(d).addClass("glitch-text").text(c[e]),$(".wrapper").append(d)}var e=0;setTimeout(function(){},100);var f=setInterval(function(){e>a&&clearInterval(f),glitchElements(b),e++},b)},glitchElements=function(a){var b=$("div.glitch-text");b.each(function(b,c){var d=$(c);d.addClass("rel");var e=d.height(),f=document.createElement("SPAN"),g=$(f);g.addClass("abs blackbg"),g.addClass(Math.random()>.5?"left":"right"),g.text(d.text());var h=~~(Math.random()*e/2),i=~~(Math.random()*e/2+e/2);g.css({clip:"rect("+h+"px, 9999px, "+i+"px, 0)"}),d.append(g),setTimeout(function(){g.remove()},a-5)})},screenOff=function(){setTimeout(function(){$(".title.center").animate({opacity:0},400),div1=document.createElement("DIV"),div2=document.createElement("DIV"),div3=document.createElement("DIV"),div4=document.createElement("DIV"),div5=document.createElement("DIV"),$(div1).addClass("top-screen-scrapper"),$(div2).addClass("bottom-screen-scrapper"),$(div3).addClass("left-screen-scrapper"),$(div4).addClass("right-screen-scrapper"),$(div5).addClass("screen-scrapper-point"),$("body").append(div1),$("body").append(div2),$("body").append(div3),$("body").append(div4),$("body").append(div5),$(div1).animate({height:"49.5%"},600),$(div2).animate({height:"49.5%"},600,function(){$(div3).animate({width:"50%"},400),$(div4).animate({width:"50%"},400),$(div5).animate({width:"15px",height:"15px"},400,function(){$(div5).animate({width:"0px",height:"0px",opacity:"0"},300,function(){setTimeout(function(){$(".main-view-wtlabel").animate({top:"-70px",opacity:"1"},1e3,function(){var a=document.createElement("DIV");$(a).text("Комплексные веб решения").addClass("cws"),$(".main-view-wtlabel").append(a),$(a).animate({top:"-20px",opacity:1},1e3)}),$(".main-view-contacts").animate({top:"-40px",opacity:"1"},1e3,function(){var a=document.createElement("DIV");$(a).text("Работы").addClass("works"),$(".main-view-contacts").append(a),$(a).animate({top:"110px",opacity:1},1e3)}),initCircles(250,function(){})},1500),$(div5).animate({width:"5px",height:"5px",opacity:"1"},300,function(){$(".main-scene").css({"z-index":4}),$(div5).css({"border-radius":0}),$(div5).animate({width:"400px"},2e3,function(){$(".wrapper").remove()})})})})})},1500)};