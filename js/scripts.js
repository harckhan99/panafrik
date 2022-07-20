// When the user scrolls the page, execute myFunction
window.onscroll = function() {myFunction()};

// Get the navbar
var navbar = document.getElementById("navbar");

// Get the offset position of the navbar
var sticky = navbar.offsetTop;

// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
}

// -------- Javascript for Toggle Menu -----------

var navLinks = document.getElementById("navLinks");

function showMenu(){
  navLinks.style.right = "-50px";
}

function showMenu(){
  navLinks.style.right = "-60px";
}

function showMenu(){
  navLinks.style.right = "-80px";
}

function hideMenu(){
  navLinks.style.right = "-250px";
}

function hideMenu(){
  navLinks.style.right = "-350px";
}

function hideMenu(){
  navLinks.style.right = "-710px";
}

// --------------- go to top btn --------------

const gotopbtn = document.querySelector(".gotopbtn");

window.addEventListener("scroll", () => {
  if (window.pageYOffset > 100) {
    gotopbtn.classList.add("active");
  } else {
    gotopbtn.classList.remove("active");

  }
})


// ============ TESTIMONIAL SWIPER ==================
let slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}    
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
  setTimeout(showSlides, 7000); // Change image every 2 seconds
}

