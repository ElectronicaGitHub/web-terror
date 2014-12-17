var img_url = 'images/error_img.jpg';
var colors = [
'#73194E', 
'#025638',
'#20948B',
'#5B0003',
'#69E29D',
'#FFF5A9'
];

var makeRects = function(n, maxtime) {
    for (var i = 0;i<n;i++) {
        time = ~~(Math.random() * maxtime);
        (function(t) {
            setTimeout(function(){
                makeRect(t);
            }, t + i * 10);
        })(time);
    }
};

var makeRect = function(time) {
    var height = $(window).height();
    var div = document.createElement('DIV');
    $(div).addClass('glitch-block');
    var clr = colors[~~(Math.random() * colors.length-1)];
    var left = {};
    left.point = ~~(Math.random() * 31);
    left.size = ~~(Math.random() * (100-left.point) + 40);
    var a = $(div);
    a.text(Math.random() > 0.5 ? 'error' : '');
    a.css({
        background : clr,
        width : left.size + '%',
        left : left.point + '%',
        top: ~~(Math.random() * height),
        height: ~~(Math.random() * height/3) + 'px',
    });
    if (Math.random() > 0.8) {
        a.css({
            background: 'url(' + img_url + ')'
        });
    }
    
    $('.wrapper').append(a);
    setTimeout(function(){
        a.remove();
    }, time);  
};

var startGlitching = function(n, timeTo) {
    var txts = ['Warning', 'Error', 'Exception', 'Critical Error'];
    for (i in txts) {
        var elt = document.createElement('DIV');
        $(elt).addClass('glitch-text').text(txts[i]);
        $('.wrapper').append(elt)
    }

    var i = 0;
    setTimeout(function(){
    }, 100)
    var inter = setInterval(function() {
        if (i>n) {
            clearInterval(inter);
        }
        glitchElements(timeTo);
        i++;
    }, timeTo);
}

var glitchElements = function(timeTo) {
    var els = $('div.glitch-text');
    els.each(function(n , elem) {
        var element = $(elem);
        element.addClass('rel');
        var h = element.height();
        var copy = document.createElement('SPAN');
        var cp = $(copy);
        cp.addClass('abs blackbg');
        cp.addClass(Math.random() > 0.5 ? 'left' : 'right');
        cp.text(element.text());
        var r1 = ~~(Math.random() * h/2);
        var r2 = ~~(Math.random() * h/2 + h/2);
        cp.css({
            clip : 'rect(' + r1 + 'px, 9999px, ' + r2 + 'px, 0)'
        });
        element.append(cp);
        
        setTimeout(function() {
            cp.remove();
        }, timeTo-5);
        // }, 1000);
    }); 
};

var screenOff = function() {
    setTimeout(function() {

        $('.title.center').animate({
            opacity : 0
        }, 400);

        div1 = document.createElement('DIV');
        div2 = document.createElement('DIV');
        div3 = document.createElement('DIV');
        div4 = document.createElement('DIV');
        div5 = document.createElement('DIV');
        $(div1).addClass('top-screen-scrapper');
        $(div2).addClass('bottom-screen-scrapper');
        $(div3).addClass('left-screen-scrapper');
        $(div4).addClass('right-screen-scrapper');
        $(div5).addClass('screen-scrapper-point');
        $('body').append(div1);
        $('body').append(div2);
        $('body').append(div3);
        $('body').append(div4);
        $('body').append(div5);
        
        $(div1).animate({
            height: '49.5%'
        }, 600);
        $(div2).animate({
            height: '49.5%'
        }, 600, function() {
            $(div3).animate({
                width: '50%'
            }, 400);
            $(div4).animate({
                width: '50%'
            }, 400);
            $(div5).animate({
                width: '15px',
                height: '15px'
            }, 400, function() {
                $(div5).animate({
                    width: '0px',
                    height: '0px',
                    opacity: '0'
                }, 300, function() {
                    setTimeout(function() {
                        $('.main-view-wtlabel').animate({
                            top : '-70px',
                            opacity : '1'
                        }, 1000, function() {
                            var phr = document.createElement('DIV');
                            var cws = rus ? 'Комплексные веб решения' : 'Complex Web Solutions';
                            $(phr).text(cws).addClass('cws');
                            $('.main-view-wtlabel').append(phr);
                            $(phr).animate({
                                top : '-15px',
                                opacity : 1
                            }, 1000);
                        });
                        $('.main-view-contacts').animate({
                            top: '-40px',
                            opacity : '1'
                        }, 1000, function() {
                            var works = document.createElement('DIV');
                            var wText = rus ? 'Работы' : 'Works';
                            $(works).text(wText).addClass('works');
                            $('.main-view-contacts').append(works);
                            $(works).animate({
                                top : '110px',
                                opacity : 1
                            }, 1000);
                        });
                        initCircles(250, function() {
                            // callback after circles make big circle
                        });
                    }, 1500)
                    $(div5).animate({
                        width: '5px',
                        height: '5px',
                        opacity : '1'
                    }, 300, function() {
                        $('.main-scene').css({
                            'z-index' : 4
                        });
                        $(div5).css({
                            'border-radius' : 0
                        });
                        $(div5).animate({
                            width: '400px',
                        }, 2000, function() {
                            $('.wrapper').remove();
                        });
                    });
                });
            }); 
        });
    }, 1500);
};