"use strict";
class star {	
	constructor(height, width, x, y) {
		this.height = height;
		this.width = width;
		this.x = x;
		this.y = y;    
	}
}

class stars {
	constructor(quantity){  	
		this.createStars(quantity);
		this.renderStars();
	}  

	createStar(){
		var side = Math.floor((Math.random() * 4) + 1);
		var x = Math.floor((Math.random() * screen.height) + 1);
		var y = Math.floor((Math.random() * screen.width) + 1);
		return new star(side, side, x, y);
	}
  
	createStars(quantity){
		var stackStars = [];
		for(var i=0; i < quantity; i++){    	
			stackStars.push(this.createStar());
		}
		stars.allStars = stackStars;
	}
  
	renderStars(){
		var stackStarsID = [];
		for(var i=0; i < stars.allStars.length; i++){
			var star = document.createElement('div');
			star.style.height = stars.allStars[i].height+'px';
			star.style.width = stars.allStars[i].width+'px';
			star.style.top = stars.allStars[i].x+'px';
			star.style.left = stars.allStars[i].y+'px';
			star.style.position = 'absolute';
			star.className = 'star';
			star.id = 'star_'+i;
			star.style.backgroundColor = 'white';      
			document.getElementById('space').appendChild(star);
			stackStarsID[i] = 'star_'+i;
			stars.arrStarsID = stackStarsID;
		}
	}
  
	animateStars(){
		var stars = document.getElementsByClassName("star");
		for (var i = 0; i < stars.length; i++) {
			switch (stars[i].offsetWidth) {
				case 1:
					var newLeft = stars[i].offsetLeft - 1;
					break;
				case 2:
					var newLeft = stars[i].offsetLeft - 3;
					break;
				case 3:
					var newLeft = stars[i].offsetLeft - 4;
					break;
				case 4:
					var newLeft = stars[i].offsetLeft - 5;
					break;
			}
			if(stars[i].offsetLeft <= 0){
				newLeft = screen.width;
			}      
			stars[i].style.left = newLeft+'px';
		}    
	}
}

var space = new stars(130);

window.distance = 0;

function ololo(){
	window.distance = window.distance + 0.00001;
	document.getElementsByClassName("star").innerHTML = window.distance;
	console.log(window.distance);
}

setInterval(space.animateStars, 100);
setInterval(ololo, 1000);