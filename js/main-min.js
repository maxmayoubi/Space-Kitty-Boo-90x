﻿"use strict";class star{constructor(t,e,s,a){this.height=t,this.width=e,this.x=s,this.y=a}}class stars{constructor(t){this.createStars(t),this.renderStars()}createStar(){var t=Math.floor(4*Math.random()+1),e=Math.floor(Math.random()*screen.height+1),s=Math.floor(Math.random()*screen.width+1);return new star(t,t,e,s)}createStars(t){for(var e=[],s=0;s<t;s++)e.push(this.createStar());stars.allStars=e}renderStars(){for(var t=[],e=0;e<stars.allStars.length;e++){var s=document.createElement("div");s.style.height=stars.allStars[e].height+"px",s.style.width=stars.allStars[e].width+"px",s.style.top=stars.allStars[e].x+"px",s.style.left=stars.allStars[e].y+"px",s.style.position="absolute",s.className="star",s.id="star_"+e,s.style.backgroundColor="white",document.getElementById("space").appendChild(s),t[e]="star_"+e,stars.arrStarsID=t}}animateStars(){for(var t=document.getElementsByClassName("star"),e=0;e<t.length;e++){switch(t[e].offsetWidth){case 1:var s=t[e].offsetLeft-1;break;case 2:s=t[e].offsetLeft-3;break;case 3:s=t[e].offsetLeft-4;break;case 4:s=t[e].offsetLeft-5}t[e].offsetLeft<=0&&(s=screen.width),t[e].style.left=s+"px"}}}var space=new stars(130);function ololo(){window.distance=window.distance+1e-5,document.getElementsByClassName("star").innerHTML=window.distance,console.log(window.distance)}window.distance=0,setInterval(space.animateStars,100),setInterval(ololo,1e3);