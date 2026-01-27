// function myFunction() {
//   document.getElementById("myDIV").style.transition = "all 2s";
// }
// Q: Why can't we just use transition style in css?

let selectButton = document.querySelector(".menu-btn");
let selectNav = document.getElementById("nav-link"); // Be careful! Element for 1; Elements for 2+ (return a list)

// menu open feature in mobile scale
selectButton.addEventListener('click', function(){
    selectButton.classList.toggle('open');
    selectNav.classList.toggle('open');})
