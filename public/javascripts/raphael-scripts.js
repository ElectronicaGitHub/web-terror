function raphaelWorksMarkerAppear() {

var paper = Raphael(
	document.getElementsByClassName('main-view-works-marker')[0], 
	100, 
	50
);

var line1 = paper.path("M0 20L50 20L100 20");
line1.attr({
	"stroke-width": 5,
	"stroke-linejoin" : "round"
});

    
line1.animate({
    path: "M0 20L50 38L100 20"
}, 1600, "elastic", function() {
    
    var line2 = paper.path("M20 28L50 38L80 28");
    line2.attr({
    	"stroke-width": 3,
    	"stroke-linejoin" : "round"
    });

    line2.animate({
        path: "M20 15L50 25L80 15",
        "stroke-width" : 5
    }, 1000, "elastic")

});

}