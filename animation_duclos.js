
var chien_chausson;
var chien_aboie;
var chien_baton;
var chien_gadoue;
var chien_baton;
var chien_decapite;
var chien_chat;
var chien_voiture;
var chien_piege;
var hasard;
var anim;

function preload() {
	
	
/* chien_chausson = loadAnimation("frames/chien_chausson.gif");
 
 chien_aboie = loadAnimation("frames/chien_aboie.gif");
 
 chien_decapite = loadAnimation("frames/chien_decapite.gif"); */
 
  chien_chausson = loadAnimation(
  'frames/chien_chausson_01.png', 
  'frames/chien_chausson_13.png' 
  ); 
  
  chien_aboie = loadAnimation(
  'frames/chien_aboie_01.png', 
  'frames/chien_aboie_36.png' 
  ); 
  
  chien_gadoue = loadAnimation(
  'frames/chien_gadoue_01.png', 
  'frames/chien_gadoue_17.png' 
  );
  
  chien_baton = loadAnimation(
  'frames/chien_baton_01.png', 
  'frames/chien_baton_19.png' 
  );
  
 chien_decapite = loadAnimation(
  'frames/chien_decapite_01.png', 
  'frames/chien_decapite_31.png' 
  );
  
  chien_chat = loadAnimation(
  'frames/chien_chat_01.png', 
  'frames/chien_chat_16.png' 
  );
  
  chien_voiture = loadAnimation(
  'frames/chien_voiture_01.png', 
  'frames/chien_voiture_16.png' 
  );
  
 chien_piege = loadAnimation(
  'frames/chien_piege_01.png', 
  'frames/chien_piege_16.png' 
  );
  

  
}


function setup(){
  createCanvas(1682, 1189);
  background(255);
  chien_chausson.frameDelay = 8;
  chien_aboie.frameDelay = 8;
  chien_decapite.frameDelay = 8;
  chien_gadoue.frameDelay = 8;
  chien_baton.frameDelay = 8;
  chien_chat.frameDelay = 8;
  chien_voiture.frameDelay = 10;
  chien_piege.frameDelay = 10;
  
  chien_baton.looping = false;
  chien_chausson.looping = false;
  chien_aboie.looping = false;
  chien_chat.looping = false;
  chien_gadoue.looping = false;
  chien_voiture.looping = false;
  chien_decapite.looping = false;
  chien_piege.looping = false;

  var hasard = (Math.floor(Math.random()*5) +1);
		

		switch (hasard) {
		case 1: anim = 1;
		break;
		case 2: anim = 2 ;	
		break;
		case 3: anim = 3; 
		break;
		case 4: anim = 4; 
		break;
		case 5: anim = 5; 
		break;
		}
}

function draw() {

if (anim == 1) {

 animation(chien_chausson,841,594);
 
}
 else if (anim == 2) {

 animation(chien_aboie,841,594);
 }
 
 else if (anim == 3) {

 animation(chien_gadoue,841,594);
 }

 else if (anim == 4) {

 animation(chien_baton,841,594);
 }
 
 else if (anim == 5) {

 animation(chien_chat,841,594);
 }
 
else if (anim == 6) {

 animation(chien_decapite,841,594);
 }

 else if (anim == 7) {

 animation(chien_voiture,841,594);
 }
 
 else if (anim == 8) {

 animation(chien_piege,841,594);
 }

 
  console.log(anim);
}





function mousePressed() {
  if (mouseIsPressed === true) {
	if (anim == 1){
		
		var hasard = (Math.floor(Math.random()*7) +1);
	

		switch (hasard) {
		case 1: anim = 3; 
		chien_gadoue.changeFrame(0);
		break;
		case 2: anim = 2 ;	
		chien_aboie.changeFrame(0);
		break;
		case 3: anim = 4; 
		chien_baton.changeFrame(0);
		break;
		case 4: anim = 5; 
		chien_chat.changeFrame(0);
		break;
		case 5: anim = 6 ;	
		chien_decapite.changeFrame(0);
		break;
		case 6: anim = 7; 
		chien_voiture.changeFrame(0);
		break;
		case 7: anim = 8; 
		chien_piege.changeFrame(0);
		break;
		
}
	}	
	
	
	else if (anim == 2){
		
		var hasard = (Math.floor(Math.random()*7) +1);
	

		switch (hasard) {
		case 1: anim = 3; 
		chien_gadoue.changeFrame(0);
		break;
		case 2: anim = 1 ;	
		chien_chausson.changeFrame(0);
		break;
		case 3: anim = 4; 
		chien_baton.changeFrame(0);
		break;
		case 4: anim = 5; 
		chien_chat.changeFrame(0);
		break;
		case 5: anim = 6 ;	
		chien_decapite.changeFrame(0);
		break;
		case 6: anim = 7; 
		chien_voiture.changeFrame(0);
		break;
		case 7: anim = 8; 
		chien_piege.changeFrame(0);
		break;
		
}
	}	
	
	else if (anim == 3){
		
		var hasard = (Math.floor(Math.random()*7) +1);
	

		switch (hasard) {
		case 1: anim = 3; 
		chien_gadoue.changeFrame(0);
		break;
		case 2: anim = 2 ;	
		chien_aboie.changeFrame(0);
		break;
		case 3: anim = 4; 
		chien_baton.changeFrame(0);
		break;
		case 4: anim = 5; 
		chien_chat.changeFrame(0);
		break;
		case 5: anim = 6 ;	
		chien_decapite.changeFrame(0);
		break;
		case 6: anim = 7; 
		chien_voiture.changeFrame(0);
		break;
		case 7: anim = 8; 
		chien_piege.changeFrame(0);
		break;
		
}
	}	
	
	else if (anim == 4){
		
		var hasard = (Math.floor(Math.random()*7) +1);
	

		switch (hasard) {
		case 1: anim = 3; 
		chien_gadoue.changeFrame(0);
		break;
		case 2: anim = 2 ;	
		chien_aboie.changeFrame(0);
		break;
		case 3: anim = 1 ;	
		chien_chausson.changeFrame(0);
		break;
		case 4: anim = 5; 
		chien_chat.changeFrame(0);
		break;
		case 5: anim = 6 ;	
		chien_decapite.changeFrame(0);
		break;
		case 6: anim = 7; 
		chien_voiture.changeFrame(0);
		break;
		case 7: anim = 8; 
		chien_piege.changeFrame(0);
		break;
		
}
	}	
	
	else if (anim == 5){
		
		var hasard = (Math.floor(Math.random()*7) +1);
	

		switch (hasard) {
		case 1: anim = 3; 
		chien_gadoue.changeFrame(0);
		break;
		case 2: anim = 2 ;	
		chien_aboie.changeFrame(0);
		break;
		case 3: anim = 4 ;	
		chien_gadoue.changeFrame(0);
		break;
		case 4: anim = 1 ;	
		chien_chausson.changeFrame(0);
		break;
		case 5: anim = 6 ;	
		chien_decapite.changeFrame(0);
		break;
		case 6: anim = 7; 
		chien_voiture.changeFrame(0);
		break;
		case 7: anim = 8; 
		chien_piege.changeFrame(0);
		break;
		
}
	}	
	
	else if (anim == 6){
		
		var hasard = (Math.floor(Math.random()*7) +1);
	

		switch (hasard) {
		case 1: anim = 3; 
		chien_gadoue.changeFrame(0);
		break;
		case 2: anim = 2 ;	
		chien_aboie.changeFrame(0);
		break;
		case 3: anim = 4; 
		chien_baton.changeFrame(0);
		break;
		case 4: anim = 5 ;	
		chien_chat.changeFrame(0);
		break;
		case 5: anim = 6 ;	
		chien_decapite.changeFrame(0);
		break;
		case 6: anim = 7; 
		chien_voiture.changeFrame(0);
		break;
		case 7: anim = 8; 
		chien_piege.changeFrame(0);
		break;
		
}
	}	
	
	else if (anim == 6){
		
		var hasard = (Math.floor(Math.random()*7) +1);
	

		switch (hasard) {
		case 1: anim = 3; 
		chien_gadoue.changeFrame(0);
		break;
		case 2: anim = 2 ;	
		chien_aboie.changeFrame(0);
		break;
		case 3: anim = 4; 
		chien_baton.changeFrame(0);
		break;
		case 4: anim = 5; 
		chien_chat.changeFrame(0);
		break;
		case 5: anim = 1 ;	
		chien_chausson.changeFrame(0);
		break;
		case 6: anim = 7; 
		chien_voiture.changeFrame(0);
		break;
		case 7: anim = 8; 
		chien_piege.changeFrame(0);
		break;
		
}
	}	
	
	else if (anim == 7){
		
		var hasard = (Math.floor(Math.random()*7) +1);
	

		switch (hasard) {
		case 1: anim = 3; 
		chien_gadoue.changeFrame(0);
		break;
		case 2: anim = 2 ;	
		chien_aboie.changeFrame(0);
		break;
		case 3: anim = 4; 
		chien_baton.changeFrame(0);
		break;
		case 4: anim = 5; 
		chien_chat.changeFrame(0);
		break;
		case 5: anim = 6 ;	
		chien_decapite.changeFrame(0);
		break;
		case 6: anim = 1; 
		chien_chausson.changeFrame(0);
		break;
		case 7: anim = 8; 
		chien_piege.changeFrame(0);
		break;
		
}
	}	
	
	else if (anim == 8){
		
		var hasard = (Math.floor(Math.random()*7) +1);
	

		switch (hasard) {
		case 1: anim = 3; 
		chien_gadoue.changeFrame(0);
		break;
		case 2: anim = 2 ;	
		chien_aboie.changeFrame(0);
		break;
		case 3: anim = 4; 
		chien_baton.changeFrame(0);
		break;
		case 4: anim = 5; 
		chien_chat.changeFrame(0);
		break;
		case 5: anim = 6 ;	
		chien_decapite.changeFrame(0);
		break;
		case 6: anim = 7; 
		chien_voiture.changeFrame(0);
		break;
		case 7: anim = 1; 
		chien_chausson.changeFrame(0);
		break;
		
}
	}	
	}
}