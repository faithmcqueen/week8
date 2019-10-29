/*

	Your JavaScript will go here!
	To learn more about JavaScript, please visit this link
	
	https://www.w3schools.com/js/default.asp
	
*/

window.onload = pageLoaded;

//WRAPPER FUNCTION 
function pageLoaded(){
    
    //ELEMENTS WE NEED
    var white=document.getElementById("white");
    var black=document.getElementById("black");
    var red=document.getElementById("red");
    var blue=document.getElementById("blue");
    var green=document.getElementById("green");
    var purple=document.getElementById("purple");
    
    var shirt=document.getElementById("image");
    //console.log(shirt); 
    console.log(white);
    
    //FUNCTION THAT CHANGES SHIRT
    function changetowhite(){
        shirt.src="images/tshirt-white.png";
    }
     function changetoblack(){
        shirt.src="images/tshirt-black.png";
    }
     function changetored(){
        shirt.src="images/tshirt-red.png";
    }
     function changetoblue(){
        shirt.src="images/tshirt-blue.png";
    }
     function changetogreen(){
        shirt.src="images/tshirt-green.png";
    }
     function changetopurple(){
        shirt.src="images/tshirt-purple.png";
    }
    
    //SET UP LISTENERS 
    white.onclick = changetowhite;
    black.onclick = changetoblack;
    red.onclick = changetored;
    blue.onclick = changetoblue;
    green.onclick = changetogreen;
    purple.onclick = changetopurple;
    
}




/* validation */

function check() {
  var name = document.forms["order-form"]["name"].value;
  var address = document.forms["order-form"]["address"].value;
  var alertbox = document.getElementById('alertbox')

  if (!name){
    alertbox.insertAdjacentHTML('beforeend', '<p>Please Enter your Name</p>');
  }

  if (!address){
    alertbox.insertAdjacentHTML('beforeend', '<p>Please Enter your Address</p>');
  }

  if (!name || !address){
    alertbox.style.display = 'block';
    return false;
  }
}
