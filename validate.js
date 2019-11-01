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
  var size=document.getElementById("shirt-size");
  var style=document.getElementById("shirt-style");
  var color = "White";
  var size;
  var style;
  var description=document.getElementById("description");

  // ELEMENTS FOR SHIRT STYLE

  //var color=document.getElementsByName("shirt-color");


  //ELEMENT FOR JUST ONE COLOR
    var inputs=document.getElementsByTagName("input");
    //Loop through all the elements to check what is selected


    function changetoColour (){
    for (var i = 0; i < inputs.length; i++){
        //Check of it is a radiobutton
       if(inputs[i].getAttribute("class")=='shirtbtn'){
           if(inputs[i].checked){
               color = inputs[i].value;
               descriptionUpdate();
               imageUpdate();
               hiddenUpdate();
           }
       }
    }
}

// Updates product description/title

  function descriptionUpdate () {
    description.innerHTML = size.value + " " + color + " " + style.value + " T-Shirt ";
    imageUpdate();
    hiddenUpdate();
  }

  function imageUpdate () {
    image.src = "images/" + style.value + "-" + color +".png";
    console.log(image.src);
  }



//SET UP LISTENERS 
  white.onchange = changetoColour;
  black.onchange = changetoColour;
  red.onchange = changetoColour;
  blue.onchange = changetoColour;
  green.onchange = changetoColour;
  purple.onchange = changetoColour;
  size.onchange = descriptionUpdate;
  style.onchange = descriptionUpdate;

// PAGE LOAD END
}

/* validation */
document.getElementById("cancel").addEventListener("click", function(event){
  event.preventDefault();
  window.location.href = 'index.html';
});


function check() {
  var name = document.forms["confirm-form"]["name"].value;
  var telephone = document.forms["confirm-form"]["telephone"].value;
  var address = document.forms["confirm-form"]["address"].value;
  var alertbox = document.getElementById('alertbox')

  alertbox.innerHTML = '';

  if (!name){
    alertbox.insertAdjacentHTML('beforeend', '<p>Please Enter your Name</p>');
  }

  if (!telephone){
    alertbox.insertAdjacentHTML('beforeend', '<p>Please Enter your Telephone number</p>');
  }else if(!telephone.match(/^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im)){
    alertbox.insertAdjacentHTML('beforeend', '<p>Please the Telephone number in a valid format.</p>');
  }

  if (!address){
    alertbox.insertAdjacentHTML('beforeend', '<p>Please Enter your Address</p>');
  }

  if (!name || !telephone || !address){
    alertbox.style.display = 'block';
    return false;
  }

}

/* get information from index page and show them on order page */
var OrderedColor = getParam('shirt-color');
var OrderedSize = getParam('shirt_size');
var OrderedStype = getParam('tshirt_style');

function getParam(name, url) {
    if (!url) url = window.location.href;
    name = name.replace(/[\[\]]/g, "\\$&");
    var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"), results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, " "));
}

var colorSection = document.getElementById('ordered-color');
var _OrderedColor = OrderedColor.toLowerCase();
colorSection.innerHTML = "<div>Colour:</div><div class='color' id=" + _OrderedColor + "></div>";

var sizeSection = document.getElementById('ordered-size');
sizeSection.innerHTML = "Size: <span>" + OrderedSize + "</span></div>";

var styleSection = document.getElementById('ordered-style');
styleSection.innerHTML = "Style: <span>" + OrderedStype + "</span></div>";

var orderedDescription = document.getElementById("ordered-description");
orderedDescription.innerHTML = OrderedSize + " " + OrderedColor + " " +  OrderedStype + " T-Shirt ";

var orderedShirt = document.getElementById("ordered-image");
orderedShirt.src="images/" + OrderedStype + "-" + OrderedColor +".png";