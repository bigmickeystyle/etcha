$(document).ready(function(){
		load(20);
		change("white");
		clicked();
});


function load(size) {
	for (i = 1; i <= size * size; i++){
		
		$(".cont").append("<div class='square'></div>");
				
		if (i % size === 0 && size < 63){
			$(".cont").append("<br>");
		}
	}	
};

function clicked() {
	
	$('#clear').click(function(){
		clicker("black");
		change("white");
	});


	$('#rainbow').click(function(){
		clicker(randomColour());
		change("random");
	});
};

function change(colour) {
	
	if (colour === "random"){
		$('.square').mouseenter(function() {
			$(this).css({"background-color": randomColour()});		
		});
	}
	else {
	$('.square').mouseenter(function() {
			$(this).css({"background-color": colour});
	});
	}
};


function randomColour(){
	
	return '#'+Math.random().toString(16).substr(2,6);

}	
function clicker(colour) {
	
		size = prompt("Enter desired lenth (between 0 and 128)");
		$('.square').remove();
		$('.cont br').remove();				
		load(size);
		$(".square").css({"height":960 / size, "width":960 / size, "background-color":colour});
};	




