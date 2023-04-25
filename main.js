
addEventListener("DOMContentLoaded", () => {
    document.getElementById("radio1").checked = true;
});



//checks the next radio button evey 7sec, causes the slider to change
let counter = 1;
 const slideInterval = setInterval(function(){
     document.getElementById('radio' + counter).checked = true;
     counter++;
     if(counter > 4){
         counter = 1;
     }
 }, 7000);

// If user manually selects a radio button, reset interval
const radioButtons = document.querySelectorAll('input[type="radio"][name="radio-btn"]');
radioButtons.forEach(radioButton => {
  radioButton.addEventListener('change', () =>{
    clearInterval(slideInterval);
  });
});

// When the user scrolls down 80px from the top of the document, resize the navbar's padding and the logo's font size
// window.onscroll = function() {scrollFunction()};

// function scrollFunction() {
//   if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
//     document.getElementById("navbar").style.padding = "30px 10px";
//     document.getElementById("logo").style.fontSize = "25px";
//   } else {
//     document.getElementById("navbar").style.padding = "80px 10px";
//     document.getElementById("logo").style.fontSize = "35px";
//   }
// } 