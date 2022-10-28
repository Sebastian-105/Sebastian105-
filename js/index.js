/*I am just leaving it blank*/ 











































//I dont know what to do here so I am leaving it blank. 
//suck it up, fool!
alert("My username is Sebastian105, don't make judge the name. Or I will whoop your a**")


function myFunctionchangelog() {
  var myWindow = window.open("/105/changelog/", "_blank", "width=1300,height=680");
}


function myFunction105() {
   var element = document.body;
   element.classList.toggle("dark-mode");
}

function myFunction123() {
  var x = event.key;

  if (x == "~" || x == "~") { 
  window.location.href = "https://asdfadfasdfeuewrqeurqieurkaljdkladjfalkjdfoiejasdkfjlaadfa.sebastian105.repl.co/";

  }
}
/* Loop through all dropdown buttons to toggle between hiding and showing its dropdown content - This allows the user to have multiple dropdowns without any conflict */
var dropdown = document.getElementsByClassName("dropdown-btn");
var i;

for (i = 0; i < dropdown.length; i++) {
  dropdown[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var dropdownContent = this.nextElementSibling;
    if (dropdownContent.style.display === "block") {
      dropdownContent.style.display = "none";
    } else {
      dropdownContent.style.display = "block";
    }
  });
}
if (document.location.href.indexOf('https://sebastian105.repl.co/105/error') === -1){ 
      window.location.replace("https://sebastian105.repl.co");
  