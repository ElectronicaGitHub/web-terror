var paper;
$(document).ready(function() {
    paper = Raphael(0, 0, "550px", "550px");

    $(paper.canvas).css({
        'z-index' : 3,
        'position' : 'fixed',
        'margin' : 'auto',
        top : 0,
        bottom : 0,
        left : 0,
        right : 0
    })  ;
});

function initCircles(input_rad, cb) {

    function Rect(position, figure) {
        this.position = position
        this.figure = figure
    }

    var rectangles =  [];
    var centerX = $(paper.canvas).width()/2;
    var centerY = $(paper.canvas).height()/2;
    var rad = input_rad;
    var size = 5;
    var count = 2 * Math.PI;
    var step = count/50;
    var rotateSpeed = 0.003;
    var frameRate = 30;
    var randomElement = 0;
    var randomElements = [];

    for (var i = 0; i < count; i = i + step) {  
        var x = centerX + rad * Math.cos(i) - size/2,
            y = centerY + rad * Math.sin(i) - size/2;

        var fig = paper.rect(x, y, 0, 0);
        fig.attr("fill", "black");
        fig.attr("stroke", "none");
        fig.attr("opacity", 0);
        
        var rect = new Rect(i, fig);
        rectangles.push(rect);
    }

    for (i=0;i<rectangles.length;i++) {
        randomElements.push(i);
    }

    var rndGen = setInterval(function() {
        // var1
        // var ln = ~~(Math.random() * randomElements.length);
        // randomElement = randomElements[ln];
        // randomElements.splice(ln, 1);
        // if (randomElements.length == 0) {
        //     clearInterval(rndGen);
        // }
        
        // var2
        randomElement ++;
        if (randomElement == randomElements.length -1) {
            clearInterval(rndGen);
            cb();
        }
    }, 50)

    setInterval(function() {
        for (i in rectangles) {
            var pos = rectangles[i].position;
            var x = centerX + rad * Math.cos(pos) - size/2;
            var y = centerY + rad * Math.sin(pos) - size/2;
            rectangles[i].figure.attr("x", x);
            rectangles[i].figure.attr("y", y);

            // rectangles[i].figure.animate({
            //     x : x, 
            //     y : y
            // }, 1)

            rectangles[i].position = rectangles[i].position + rotateSpeed;
            if (rectangles[randomElement].figure.attr("opacity") != 1) {    
                rectangles[randomElement].figure.animate({
                    "opacity" : 1,
                    "width" : size,
                    "height" : size
                }, frameRate - 5 , 'elastic')
            }
        }    
    }, frameRate);
}
