//Gets elements needed to toggle between colors on hover.
const dropdownButton = document.getElementById('dropdown-button');
const blueArrow = document.getElementById('blue-arrow');
const redArrow = document.getElementById('red-arrow');

//Changes the color of the arrow on hover.
dropdownButton.addEventListener('mouseover', () => {
  blueArrow.style.display = 'none';
  redArrow.style.display = 'inline-block';
});

dropdownButton.addEventListener('mouseout', () => {
  blueArrow.style.display = 'inline-block';
  redArrow.style.display = 'none';
});


const toggleButton = document.getElementsByClassName("toggle-button")[0];
const navbarLinks = document.getElementsByClassName("navbar-links")[0];
toggleButton.addEventListener("click", () => {
    navbarLinks.classList.toggle("active");
});

//When the user scrolls down 90px from the top of the document, resize the navbar's padding and the logo's font size
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 90 || document.documentElement.scrollTop > 90) {
    document.getElementById("navbar").style.height = "4rem";
    document.getElementById("logo-image").style.width = "3rem";
    document.getElementById("brand-title").style.setProperty("font-size", "3rem");
  } else {
    document.getElementById("navbar").style.height = "7rem";
    document.getElementById("logo-image").style.width = "5rem";
    document.getElementById("brand-title").style.setProperty("font-size", "4rem");
  }
} 