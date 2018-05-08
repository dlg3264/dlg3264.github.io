/*
   New Perspectives on HTML5 and CSS3, 7th Edition

    Final Project Web Page
    Author: Donald L Garrison
    Date:     04/15/2018

*/

/* variables to set the images for the race */
var racer1='<img src="catBike.jpg" alt="cat on a bike">'
var racer2='<img src="dogBike.jpg" alt="dog on a bike">'
var racer3='<img src="rabbitBike.jpg" alt="rabbit on a bike">'
var racer4='<img src="manBike.jpg" alt="man on a bike">'

/* variable to manipulate the winners of the races */
var winnerRacer1 = "";
var winnerRacer2 = "";

var winnerRace1 = "";
var winnerRace2 = "";

/* variables to set the width of the track for the race */
var w = window.innerWidth - 115;
var x = window.innerWidth - 115;
var y = window.innerWidth - 115;
var z = window.innerWidth - 115;

/* Initial placement of the four racers */
document.getElementById("top").insertAdjacentHTML("afterbegin", racer1);
document.getElementById("topMiddle").insertAdjacentHTML("afterbegin", racer2);
document.getElementById("bottomMiddle").insertAdjacentHTML("afterbegin", racer3);
document.getElementById("bottom").insertAdjacentHTML("afterbegin", racer4);

/* funtion to display the winner of the first race */
 function winnerOne(posw,posx) {

	if (posw > posx) {
	document.getElementById("HEADER").innerHTML = ("<p> The winner of race one is CAT ON A BIKE </p>" + 
"<p>The CAT won by " + (posw - posx) + "px</p>" + 
"<p> Racers get Ready Set Click </p>" +	"<p><img src='raceflag.jpg' onclick='raceTwo()'></p>");
	   winnerRacer1 = "CAT ON A BIKE";
	   winnerRace1 = racer1;
	} else if (posw < posx) {
	document.getElementById("HEADER").innerHTML = ("<p> The winner of race one is DOG ON A BIKE </p>" + 
"<p>The DOG won by " + (posx - posw) + "px</p>" + 
"<p> Racers get Ready Set Click </p>" +	"<p><img src='raceflag.jpg' onclick='raceTwo()'></p>");
	   winnerRacer1 = "DOG ON A BIKE";
	   winnerRace1 = racer2;
	} else {
	document.getElementById("HEADER").innerHTML = ("<p> The winner of race one is A Tie </p>" +
"<p>A Tie is not allowed so the race will be started over</p>" + "<p><img src='raceflag.jpg' onclick='raceOne()'></p>");
	}

	return winnerRace1;
}

/* function to display the winner of the second race */
function winnerTwo(posy,posz) {

	if (posy > posz) {
	document.getElementById("HEADER").innerHTML = ("<p> The winner of race two is RABBIT ON A BIKE </p>" + 
"<p>The RABBIT won by " + (posy - posz) + "px</p><p>Are you ready for the RACE OFF</p>" +
"<p> Racers get Ready Set Click </p>" +	"<p><img src='raceflag.jpg' onclick='raceFinal()'></p>");
	   winnerRacer2 = "RABBIT ON A BIKE";
	   winnerRace2 = racer3;
	} else if (posy < posz) {
	document.getElementById("HEADER").innerHTML = ("<p> The winner of race two is MAN ON A BIKE </p>" + 
"<p>The MAN won by " + (posz - posy) + "px</p><p>Are you ready for the RACE OFF</p>" +
"<p> Racers get Ready Set Click </p>" +	"<p><img src='raceflag.jpg' onclick='raceFinal()'></p>");
	   winnerRacer2 = "MAN ON A BIKE";
	   winnerRace2 = racer4;
	} else {
	document.getElementById("HEADER").innerHTML = ("<p> Race two is A Tie </p>" +
"<p>A Tie is not allowed so the race will be started over</p>" + "<p><img src='raceflag.jpg' onclick='raceTwo()'></p>");
	}

	return winnerRace2;
}

/* Function to display the results of the final race */
 function winnerThree(posw,posx) {

	if (posw > posx) {
	document.getElementById("HEADER").innerHTML = ("<p> The winner of the race off is " + winnerRacer1 + " </p>" + 
"<p>The " + winnerRacer1 + " won by " + (posw - posx) + "px</p>");
	} else if (posw < posx) {
	document.getElementById("HEADER").innerHTML = ("<p> The winner of the race off is " + winnerRacer2 + " </p>" + 
"<p>The " + winnerRacer2 + " won by " + (posx - posw) + "px</p>");
	} else {
	document.getElementById("HEADER").innerHTML = ("<p> the FINAL Race is A Tie </p>" +
"<p>A Tie is not allowed so the race will be started over</p>" + "<p><img src='raceflag.jpg' onclick='raceFinal()'></p>");
	}
}

/* function to cal the random number generator */
function myMath() {
    var rand = Math.floor((Math.random() * 10) + 1);
    return rand;
}

/* function to begin race one */
function raceOne() {

document.getElementById("light1").innerHTML = ("<img src= 'greenracelight.jpg'>");
document.getElementById("light2").innerHTML = ("<img src= 'greenracelight.jpg'>");

    var elemw = document.getElementById("top");
    var elemx = document.getElementById("topMiddle");

    var posw = myMath();
    var posx = myMath();

    var id = setInterval(cat, myMath);
    function cat() {
        if (posw == w) {
            clearInterval(id);
        } else {
            posw++;
            elemw.style.left = posw + 'px';
        } /* endif */
     }/* end function frame */
 
    var id = setInterval(dog, myMath);
    function dog() {
        if (posx == x) {
            clearInterval(id);
        } else {
            posx++;
            elemx.style.left = posx + 'px';
        } /* endif */
     }/* end function race1 */
    winnerOne(posw,posx);
} /* end function raceOne */

function raceTwo() {

document.getElementById("light1").innerHTML = ("<img src= 'redracelight.jpg'>");
document.getElementById("light2").innerHTML = ("<img src= 'redracelight.jpg'>");
document.getElementById("light3").innerHTML = ("<img src= 'greenracelight.jpg'>");
document.getElementById("light4").innerHTML = ("<img src= 'greenracelight.jpg'>");

document.getElementById("top").innerHTML = ("");
document.getElementById("topMiddle").innerHTML = ("");

    var elemy = document.getElementById("bottomMiddle");
    var elemz = document.getElementById("bottom");

    var posy = myMath();
    var posz = myMath();


    var id = setInterval(rabbit, myMath);
    function rabbit() {
        if (posy == y) {
            clearInterval(id);
        } else {
            posy++;
            elemy.style.left = posy + 'px';
        } /* endif */
     }/* end function frame */

    var id = setInterval(man, myMath);
    function man() {
        if (posy == z) {
            clearInterval(id);
        } else {
	    posz++;
            elemz.style.left = posz + 'px';
        } /* endif */
     }/* end function race1 */
     winnerTwo(posy,posz);

} /* end function raceTwo */

function raceFinal() {

document.getElementById("light1").innerHTML = ("<img src= 'greenracelight.jpg'>");
document.getElementById("light2").innerHTML = ("<img src= 'greenracelight.jpg'>");
document.getElementById("light3").innerHTML = ("<img src= 'redracelight.jpg'>");
document.getElementById("light4").innerHTML = ("<img src= 'redracelight.jpg'>");

document.getElementById("top").innerHTML = (winnerRace1);
document.getElementById("topMiddle").innerHTML = (winnerRace2);
document.getElementById("bottomMiddle").innerHTML = ("");
document.getElementById("bottom").innerHTML = ("");

    var elemw = document.getElementById("top");
    var elemx = document.getElementById("topMiddle");

    var posw = myMath();
    var posx = myMath();

    var id = setInterval(cat, myMath);
    function cat() {
        if (posw == w) {
            clearInterval(id);
        } else {
            posw++;
            elemw.style.left = posw + 'px';
        } /* endif */
     }/* end function frame */
 
    var id = setInterval(dog, myMath);
    function dog() {
        if (posx == x) {
            clearInterval(id);
        } else {
            posx++;
            elemx.style.left = posx + 'px';
        } /* endif */
     }/* end function race1 */
    winnerThree(posw,posx);
} /* end function raceFinal */

